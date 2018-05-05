import logging
import os
from setproctitle import setproctitle

import flask
from flask import Flask
from flask_cors import CORS
from jinja2 import Environment, PackageLoader, select_autoescape
from werkzeug.utils import secure_filename

from api.db import initdb

logger = logging.getLogger('dindi.api.server')

try:
    import bjoern
except ImportError:
    bjoern = None


def get_app(production=True):
    setproctitle('api webserver [DINDI]')
    app = Flask(__name__,
                # static_url_path="",
                static_folder='build',
                template_folder='build')
    CORS(app)

    app.debug = not production
    db = initdb(app)

    UPLOAD_FOLDER = 'uploads'

    @app.route("/404/")
    def not_found():
        jinja_env = Environment(
            loader=PackageLoader('templates'),
            autoescape=select_autoescape(['html', 'xml'])
        )

        template = jinja_env.get_template('404.html')
        return template.render(), 404

    @app.route("/", defaults={"url": ""})
    @app.route('/<path:url>')
    def catch_all(url):
        """ Handle the page-not-found - apply some backward-compatibility redirect """
        # if url.startswith('home'):
        #     return flask.redirect('something with home')
        ext = os.path.splitext(url)[-1]
        if ext in {'.jpg', '.ico', '.png', '.map', '.js', '.svg', '.json', '.css'}:
            return flask.send_from_directory('dist', url)
        return flask.render_template("index.html")

    @app.route("/upload/mini$/", methods=['POST'])
    def upload_mini():
        if 'file' not in flask.request.files:
            return flask.jsonify({"error": "No file provided"}), 400
        file = flask.request.files['file']
        filename = secure_filename(file.filename)
        full_path = os.path.join(UPLOAD_FOLDER, filename)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        file.save(full_path)
        logger.info(f"Uploaded {filename}")
        return flask.jsonify(
            dict(
                message="Ok we received the mini$ file",
                file=filename
            )
        )

    return app


def run_api(host='127.0.0.1', port=3001, production=True):
    app = get_app(production)
    if production:
        print(f"Running production server as "
              f"{'bjoern' if bjoern else 'Flask'}"
              f" on http://{host}:{port}")
        if bjoern:
            # apt-get install libev-dev
            # apt-get install python3-dev
            print("Running as bjoern")
            bjoern.run(app, host, port)
        else:
            print("Using Flask threaded")
            app.run(host=host, port=port, threaded=True, debug=False, use_reloader=False)
    else:
        print("Running in Flask debug mode")
        app.run(host=host, port=port)


if __name__ == '__main__':
    run_api(production=False)
