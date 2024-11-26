from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from routes.upload import upload_bp  # Corrected import
from models import db  # Ensure 'models' is in the same directory
import os

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
    "DATABASE_URL", "sqlite:///default.db"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)

# Register Blueprints
app.register_blueprint(upload_bp)


@app.route("/")
def home():
    return "Welcome to the AI-Powered Assistant Backend!"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
