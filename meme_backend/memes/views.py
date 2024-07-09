from rest_framework import generics
from .models import Meme
from .serializers import MemeSerializer

class MemeListCreate(generics.ListCreateAPIView):
    queryset = Meme.objects.all()
    serializer_class = MemeSerializer
