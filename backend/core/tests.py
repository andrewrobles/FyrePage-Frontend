from django.test import TestCase

from rest_framework.test import APITestCase

class AuthTestCase(APITestCase):

    def test_sign_up(self):
        username = 'fyre'
        password = '4321'

        response = self.client.post(
            'http://localhost:8000/core/users/', 
            {
                'username': username,
                'password': password
            }
        )

        self.assertEqual(response.data['username'], username)

        self.client.credentials(HTTP_AUTHORIZATION='JWT {}'.format(response.data['token']))

        response = self.client.get(
            'http://localhost:8000/core/current_user/',
            headers = {
                'Authorization': 'JWT {}'.format(response.data['token'])
            }
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['username'], username)