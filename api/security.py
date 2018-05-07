from flask_login import UserMixin
from flask_security import RoleMixin, SQLAlchemyUserDatastore, Security


def init_security(app, db):
    roles_users = db.Table('roles_users',
                           db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
                           db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))

    class ModelBase:
        id = db.Column(db.Integer, primary_key=True)
        created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
        modified_at = db.Column(db.DateTime, default=db.func.current_timestamp(),
                                onupdate=db.func.current_timestamp())

    class Role(db.Model, ModelBase, RoleMixin):
        __tablename__ = 'role'
        name = db.Column(db.String(80), unique=True)
        description = db.Column(db.String(255))

    class User(db.Model, ModelBase, UserMixin):
        __tablename__ = 'user'
        email = db.Column(db.String(255), unique=True)
        password = db.Column(db.String(255), nullable=False)

        active = db.Column(db.Boolean())

        confirmed_at = db.Column(db.DateTime())
        roles = db.relationship('Role', secondary=roles_users,
                                backref=db.backref('users', lazy='dynamic'))

        # additional user fields
        first_name = db.Column(db.String(255))
        last_name = db.Column(db.String(255))
        last_login_at = db.Column(db.DateTime())
        current_login_at = db.Column(db.DateTime())
        last_login_ip = db.Column(db.String(45))
        current_login_ip = db.Column(db.String(45))
        login_count = db.Column(db.Integer)

        def __repr__(self):
            return '<User %r>' % self.email

    # Setup Flask-Security
    user_datastore = SQLAlchemyUserDatastore(db, User, Role)
    app.config['SECURITY_TRACKABLE'] = True
    security = Security(app, user_datastore)
    return security
