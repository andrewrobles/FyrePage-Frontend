from django.contrib.auth.backends import BaseBackend

from django.contrib.auth.models import User
from .models import Profile

class GoogleAuthBackend(BaseBackend):
    def authenticate(self, request, google_id=None, id_token=None):

        users_matching_google_id = User.objects.filter(
            username=google_id
        ) 

        # Create profile if user is signing in for the first time
        if users_matching_google_id.count() == 0:

            # TODO: Make this more secure
            new_user = User.objects.create_user(
                username=google_id,
                password='password'
            )

            new_profile = Profile.objects.create(
                user=new_user,
                id_token=id_token
            )

            return new_user 

        else:
            return users_matching_google_id.first()

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


