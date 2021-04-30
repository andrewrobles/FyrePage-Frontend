from django.test import TestCase

from rest_framework.test import APITestCase
from django.urls import reverse

class TeapotTestCase(APITestCase):

    def test_teapot(self):
        url = reverse('teapot')

        expected_response = {'message': "I'm a teapot bro!"}
        actual_response = self.client.get(url).data

        self.assertEqual(expected_response, actual_response)