from django.test import TestCase

from rest_framework.test import APITestCase

class AuthTestCase(APITestCase):

    def test_sign_up(self):
        url = 'http://localhost:8000/core/users/'
        data = {'username': 'fyre', 'password': '4321'}

        response = self.client.post(url, data, format='json')

        expected_username = data['username']
        actual_username = response.data['username']

        self.assertEqual(expected_username, actual_username)
