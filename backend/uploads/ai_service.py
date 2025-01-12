import tensorflow as tf
from PIL import Image
import numpy as np


class AIAnalyzer:
    def __init__(self, model_path):
        self.model = tf.keras.models.load_model(model_path)

    def preprocess_image(self, image_path):
        image = Image.open(image_path).resize((224, 224))
        image_array = np.array(image) / 255.0  # Normalize
        return np.expand_dims(image_array, axis=0)  # Add batch dimension

    def analyze(self, image_path):
        preprocessed_image = self.preprocess_image(image_path)
        predictions = self.model.predict(preprocessed_image)
        return predictions.tolist()
