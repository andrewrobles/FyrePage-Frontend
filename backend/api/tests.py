from django.test import TestCase

from rest_framework.test import APITestCase
from django.urls import reverse

from api.models import Profile

class SignInTestCase(APITestCase):

    def setUp(self):
        self.url = reverse('sign-in')
        self.request_body = {'googleId': 'my-google-id', 'idToken': 'my-id-token'}

    def test_new_profile(self):
        """
        A new profile should be created if a user signs in for the first time
        """

        # Sign in user for the first time 
        self._sign_in_user()

        # Verify profile exists in database with correct google id  
        self.assertEqual(1, len(Profile.objects.filter(google_id=self.request_body['googleId'])))

        # Get user with google id matching request body data
        new_user = Profile.objects.get(google_id=self.request_body['googleId'])

        # Verify new user contains correct id token
        self.assertEqual(self.request_body['idToken'], new_user.id_token)

    def test_existing_profile(self):
        """
        A new profile should not be created if a user has previously signed in
        """

        # Sign in user twice 
        self._sign_in_user()
        self._sign_in_user()

        # Verify there is only one profile created
        self.assertEqual(1, len(Profile.objects.all()))

    def _sign_in_user(self):
        # Create API call to sign in a user
        self.client.post(self.url, self.request_body, format='json')




