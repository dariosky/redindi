from flask import current_app
from flask_login import UserMixin
from flask_security import RoleMixin, SQLAlchemyUserDatastore, Security
from sqlalchemy import (Column, Integer, DateTime, func, String, Boolean,
                        Table, ForeignKey)
from sqlalchemy.orm import relationship, backref

from db import ModelClass


class ModelBase(ModelClass):
    __abstract__ = True

    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, default=func.current_timestamp())
    modified_at = Column(DateTime, default=func.current_timestamp(),
                         onupdate=func.current_timestamp())

    def save(self):
        db = current_app.db
        db.session.add(self)
        db.session.commit()


roles_users = Table('roles_users',
                    ModelClass.metadata,
                    Column('user_id', Integer(), ForeignKey('user.id')),
                    Column('role_id', Integer(), ForeignKey('role.id')))


class Role(ModelBase, RoleMixin):
    __tablename__ = 'role'
    name = Column(String(80), unique=True)
    description = Column(String(255))


class User(ModelBase, UserMixin):
    __tablename__ = 'user'
    username = Column(String(255), unique=True)
    password = Column(String(255), nullable=False)

    active = Column(Boolean())

    confirmed_at = Column(DateTime())
    roles = relationship('Role', secondary=roles_users,
                         backref=backref('users', lazy='dynamic'))

    # additional user fields
    first_name = Column(String(255))
    last_name = Column(String(255))
    last_login_at = Column(DateTime())
    current_login_at = Column(DateTime())
    last_login_ip = Column(String(45))
    current_login_ip = Column(String(45))
    login_count = Column(Integer)

    def __repr__(self):
        return '<User %r>' % self.username


def init_security(app):
    db = app.db

    # Setup Flask-Security
    user_datastore = SQLAlchemyUserDatastore(db, User, Role)
    app.config['SECURITY_TRACKABLE'] = True
    security = Security(app, user_datastore)
    return security
