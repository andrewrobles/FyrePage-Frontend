from django.test import TestCase

from rest_framework.test import APITestCase
from django.urls import reverse

from api.models import Profile
from django.contrib import auth

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
        self.assertEqual(1, len(Profile.objects.filter(google_id=self._google_id)))

        # Verify new user contains correct id token
        new_user = Profile.objects.get(google_id=self._google_id)
        self.assertEqual(self._id_token, new_user.id_token)

    def test_existing_profile(self):
        """
        A new profile should not be created if a user has previously signed in
        """

        # Sign in user twice 
        self._sign_in_user()
        self._sign_in_user()

        # Verify there is only one profile created
        self.assertEqual(1, len(Profile.objects.all()))

    def test_get_profile_before_sign_in(self):

        response = self.client.get(reverse('profile'), format='json')

        self.assertTrue({'detail': 'Authentication credentials were not provided.'}, response.data)

    # Utility functions below this line ---------------------------------------

    def _sign_in_user(self):
        # Create API call to sign in a user
        self.client.post(self.url, self.request_body, format='json')

    @property
    def _google_id(self):
        return self.request_body['googleId']

    @property
    def _id_token(self):
        return self.request_body['idToken']






