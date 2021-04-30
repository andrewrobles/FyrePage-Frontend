from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    google_id = models.CharField(max_length=100)
    id_token = models.TextField()
    