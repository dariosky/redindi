from collections import defaultdict

from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required, jwt_optional
from werkzeug.security import generate_password_hash

from security import User

api_blueprint = Blueprint('api', __name__,
                          template_folder='templates',
                          url_prefix='api')


def jwt_current_user():
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(username=current_user_email).first()
    return user


def serialize_user(user):
    return dict(
        username=user.username,
        access_token=create_access_token(identity=user.username)
    )


@api_blueprint.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    # access_token = create_access_token(identity=username)
    return jsonify(dict(msg="Logged in",
                        user=serialize_user(user))), 200


@api_blueprint.route('/register', methods=['POST'])
def register():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    errors = defaultdict(list)
    if not username:
        errors['username'].append("Missing username parameter")
    else:
        if len(username) < 5:
            errors['username'].append("Username too short")
    if not password:
        errors['username'].append("Missing password parameter")
    else:
        if len(password) < 5:
            errors['password'].append("Password too short")

    if errors:
        return jsonify({"errors": errors}), 400

    user = User.query.filter_by(username=username).first()
    if user:
        errors['username'].append("User already exists")
        return jsonify({"errors": errors}), 409

    user = User(
        username=username,
        password=generate_password_hash(password)
    )
    user.save()
    return jsonify(dict(msg="User created",
                        user=serialize_user(user))), 200


@api_blueprint.route('/check', methods=['GET'])
@jwt_optional
def check():
    """ Given a token return the current user details """
    user = jwt_current_user()
    if user:
        return jsonify(
            dict(user=serialize_user(user))
        ), 200
    else:
        return jsonify(dict(msg="Unauthenticated")), 401


@api_blueprint.route('/protected', methods=['GET'])
@jwt_required
def protected():
    # Access the identity of the c  urrent user with get_jwt_identity
    user = jwt_current_user()
    return jsonify(logged_in_as=serialize_user(user)), 200


def init_api(app):
    app.register_blueprint(api_blueprint, url_prefix='/api')
    jwt = JWTManager(app)
