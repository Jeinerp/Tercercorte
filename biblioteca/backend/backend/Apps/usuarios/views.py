from rest_framework import viewsets
from .models import Usuarios
from .serializers import UsuariosSerializer
from .models import Prestamo
from .serializers import PrestamoSerializer


class UsuariosViewSet (viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer

class PrestamoViewSet (viewsets.ModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer