
from rest_framework import viewsets
from .models import Autor
from .serializers import AutoresSerializer
from .serializers import escribirSerializer
from.models import Escribir


class AutorViewSet (viewsets.ModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutoresSerializer


class EscribirViewSet (viewsets.ModelViewSet):
    queryset = Escribir.objects.all()
    serializer_class = escribirSerializer