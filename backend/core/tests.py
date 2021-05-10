from django.test import TestCase

from rest_framework.test import APITestCase

class AuthTestCase(APITestCase):

    def setUp(self):
        self.username = 'fyre'
        self.password = '4321'

        self.sign_up_response = self.client.post(
            'http://localhost:8000/core/users/', 
            {
                'username': self.username,
                'password': self.password
            }
        )

        self.token = self.sign_up_response.data['token']

    def test_sign_up(self):
        self.assertEqual(self.sign_up_response.status_code, 201)
        self.assertEqual(self.sign_up_response.data['username'], self.username)
        self.assertTrue('token' in self.sign_up_response.data)


    def test_sign_in(self):
        self.client.credentials(HTTP_AUTHORIZATION='JWT {}'.format(self.token))
        response = self.client.get('http://localhost:8000/core/current_user/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['username'], self.username)