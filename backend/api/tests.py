from django.test import TestCase

from rest_framework.test import APITestCase
from django.urls import reverse

from api.models import Profile

class SignInTestCase(APITestCase):

    def test_new_profile(self):
        url = reverse('sign-in')

        request_body = {'googleId': 'my-google-id', 'idToken': 'my-id-token'}

        # Create API call to sign in a user that does not exist yet
        self.client.post(url, request_body, format='json')

        # Verify user exists in database with correct google id  
        self.assertEqual(1, len(Profile.objects.filter(google_id=request_body['googleId'])))

        # Get user with google id matching request body data
        new_user = Profile.objects.get(google_id=request_body['googleId'])

        # Verify new user contains correct id token
        self.assertEqual(request_body['idToken'], new_user.id_token)




