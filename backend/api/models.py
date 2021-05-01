from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_token = models.TextField()

    @property
    def google_id(self):
        return self.user.username

    @google_id.setter
    def google_id(self, value):
        self.user.username = value