import json
import secrets


def private_config_get_or_create(app, config_name='.app_secrets.json'):
    try:
        with open(config_name) as f:
            private_config = json.load(f)
    except FileNotFoundError:
        print(f"Private configuration file missing [{config_name}]."
              f"\nGenerating one")
        private_config = dict(
            SECRET_KEY=secrets.token_hex(64),
            SECURITY_PASSWORD_SALT=secrets.token_hex(64),
            JWS_SECRET_KEY=secrets.token_hex(64),
        )
        with open(config_name, 'w') as f:
            json.dump(private_config, f)
    app.config.update(private_config)
