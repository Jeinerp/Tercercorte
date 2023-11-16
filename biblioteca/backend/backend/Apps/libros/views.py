from rest_framework import viewsets
from .models import Libros
from .serializers import LibrosSerializer


class LibrosViewSet (viewsets.ModelViewSet):
    queryset = Libros.objects.all()
    serializer_class = LibrosSerializer