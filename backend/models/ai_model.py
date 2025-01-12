import tensorflow as tf


class ImageAnalyzer:
    def __init__(self, model_path):
        self.model = tf.keras.models.load_model(model_path)

    def analyze(self, image_path):
        # Add preprocessing for your image
        image = tf.keras.preprocessing.image.load_img(
            image_path, target_size=(224, 224)
        )
        image_array = tf.keras.preprocessing.image.img_to_array(image)
        image_array = tf.expand_dims(image_array, axis=0)  # Batch size of 1

        predictions = self.model.predict(image_array)
        return predictions
