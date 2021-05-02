from django.test import TestCase

from rest_framework.test import APITestCase
from django.urls import reverse

from django.contrib.auth.models import User
from api.models import Profile
from django.contrib import auth

class SignInTestCase(APITestCase):

    def setUp(self):
        self._sign_in_url = reverse('sign-in')
        self._sign_out_url = reverse('sign-out')
        self._request_body = {'googleId': 'my-google-id', 'idToken': 'my-id-token'}

    def test_new_profile_after_first_sign_in(self):
        """
        A new profile should be created if a user signs in for the first time
        """

        # Sign in user for the first time 
        self._sign_in_user()

        # Verify profile exists in database with correct google id  
        self.assertEqual(1, len(Profile.objects.all()))
        self.assertEqual(Profile.objects.all().first().google_id, self._google_id)

        # Verify new user contains correct id token
        new_user = User.objects.get(username=self._google_id)
        new_profile = Profile.objects.get(user=new_user)
        self.assertEqual(self._id_token, new_profile.id_token)

    def test_existing_profile_after_second_sign_in(self):
        """
        A new profile should not be created if a user has previously signed in
        """

        # Sign in user twice 
        self._sign_in_user()
        self._sign_in_user()

        # Verify there is only one profile created
        self.assertEqual(1, len(Profile.objects.all()))

    def test_no_profile_access_if_not_signed_in(self):

        response = self._get_profile_data()

        self._assert_forbidden_response(response)

    def test_profile_access_if_signed_in(self):

        self._sign_in_user()

        response = self._get_profile_data()

        self._assert_valid_response(response)

    def test_sign_out_user(self):

        self._sign_in_user()
        self._sign_out_user()

        response = self._get_profile_data()

        self._assert_forbidden_response(response)


    # Utility functions below this line ---------------------------------------

    def _sign_in_user(self):
        return self.client.post(self._sign_in_url, self._request_body, format='json')

    def _sign_out_user(self):
        return self.client.post(self._sign_out_url, self._request_body, format='json')

    def _get_profile_data(self):
        return self.client.get(reverse('profile'), format='json')

    def _assert_forbidden_response(self, response):
        self.assertEqual(response.status_code, 403)
        self.assertEqual({'detail': 'Authentication credentials were not provided.'}, response.data)

    def _assert_valid_response(self, response):
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, self._request_body)


    @property
    def _google_id(self):
        return self._request_body['googleId']

    @property
    def _id_token(self):
        return self._request_body['idToken']






