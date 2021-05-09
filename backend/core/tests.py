from django.test import TestCase

from rest_framework.test import APITestCase

class AuthTestCase(APITestCase):

    def test_sign_up(self):
        expected_username = 'fyre'

        response = self.sign_up(expected_username, '4321')

        actual_username = response.data['username']

        self.assertEqual(expected_username, actual_username)

    def sign_up(self, username, password):
        url = 'http://localhost:8000/core/users/'
        data = {'username': username, 'password': password}

        return self.client.post(url, data, format='json')