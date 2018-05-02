import logging

from sqlalchemy import create_engine, Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

logger = logging.getLogger(__name__)

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    password = Column(String, nullable=False)


def initdb():
    db_filename = 'dindi.sqlite'
    engine = create_engine(f"sqlite:///{db_filename}",
                           # echo=True  # show the queries
                           )
    Base.metadata.create_all(engine)
    # noinspection PyPep8Naming
    Session = sessionmaker(bind=engine)
    session = Session()
    return session
