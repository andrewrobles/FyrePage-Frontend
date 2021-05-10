from django.test import TestCase

from rest_framework.test import APITestCase

class AuthTestCase(APITestCase):

    def test_sign_up(self):
        expected_username = 'fyre'

        response = self.client.post(
            'http://localhost:8000/core/users/'
            , {
                'username': expected_username,
                'password': '4321'
            }
        )

        actual_username = response.data['username']

        self.assertEqual(expected_username, actual_username)