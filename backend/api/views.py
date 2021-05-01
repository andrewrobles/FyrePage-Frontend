# Django REST framework
from api.serializers import UserSerializer, GroupSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import viewsets

# Models
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, login
from .models import Profile

@api_view(['POST'])
def sign_in(request):
    
    profiles_matching_google_id = Profile.objects.filter(
        google_id=request.data['googleId']
    )

    # Create profile if user is signing in for first time
    if profiles_matching_google_id.count() == 0:

        # TODO: Make this more secure
        new_user = User.objects.create_user(
            username='username',
            password='password',
        )
        
        new_profile = Profile.objects.create(
            user=new_user,
            google_id=request.data['googleId'],
            id_token=request.data['idToken']
        )

        user = authenticate(username='username', password='password')

        if user is not None:
            login(request, user)
        

    return Response({'message': 'hello world!'})

@api_view(['GET'])
def profile(request):
    
    if request.user.is_authenticated:
        
        status_code = 200

        profile = Profile.objects.get(user=request.user)

        response_body = {
            'googleId': profile.google_id,
            'idToken': profile.id_token
        }

    else:
        status_code = 403

        response_body = {
            'detail': 'Authentication credentials were not provided.'
        }
        
    return Response(response_body, status_code)


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