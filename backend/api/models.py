from django.db import models

class Profile(models.Model):
    google_id = models.CharField(max_length=100)
    id_token = models.TextField()
    