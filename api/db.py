import logging

from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base

logger = logging.getLogger(__name__)

Base = declarative_base()


class ModelClass(Base):
    __abstract__ = True

    query_class = None
    query = None


def initdb(app):
    db_filename = 'dindi.sqlite'
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{db_filename}"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db = SQLAlchemy(app, model_class=ModelClass)
    migrate = Migrate(app, db)

    return db
