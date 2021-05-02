from django.contrib.auth.backends import BaseBackend

from django.contrib.auth.models import User

class GoogleAuthBackend(BaseBackend):
    def authenticate(self, request, token=None):
        user_queryset = User.objects.all()

        if user_queryset.count() >= 1:
            return user_queryset.first()

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


