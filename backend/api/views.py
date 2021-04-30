# Django REST framework
from api.serializers import UserSerializer, GroupSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import viewsets

# Models
from django.contrib.auth.models import User, Group
from .models import Profile

@api_view(['GET'])
def teapot(request):
    return Response({'message': "I'm a teapot bro!"})

@api_view(['POST'])
def sign_in(request):
    new_profile = Profile.objects.create(
        google_id=request.data['googleId'],
        id_token=request.data['idToken']
    )

    return Response({'message': 'hello world!'})

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]