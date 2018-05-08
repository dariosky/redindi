import logging

from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy, BaseQuery
from sqlalchemy.ext.declarative import declarative_base

logger = logging.getLogger(__name__)


class ModelBase(object):
    """Baseclass for custom user models."""

    #: the query class used. The `query` attribute is an instance
    #: of this class. By default a `BaseQuery` is used.
    query_class = BaseQuery

    #: an instance of `query_class`. Can be used to query the
    #: database for instances of this model.
    query = None


Model = declarative_base(cls=ModelBase)


def initdb(app):
    db_filename = 'dindi.sqlite'
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{db_filename}"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db = SQLAlchemy(app, model_class=Model)
    migrate = Migrate(app, db)

    return db
