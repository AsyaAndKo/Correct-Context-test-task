from yaml import serialize
from .models import API
from rest_framework import viewsets, permissions
from .serializer import APISerializer


class APIViewSet(viewsets.ModelViewSet):
    queryset = API.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = APISerializer
