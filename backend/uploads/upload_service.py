import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = os.path.join(os.getcwd(), "backend/uploads")

# Ensure the upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def save_uploaded_file(file):
    """Save the uploaded file to the uploads directory."""
    filename = secure_filename(file.filename)  # Sanitize filename
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)
    return file_path
