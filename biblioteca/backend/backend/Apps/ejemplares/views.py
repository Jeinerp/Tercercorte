from rest_framework import viewsets
from .models import Ejemplares
from .serializers import EjemplaresSerializer


class EjemplaresViewSet (viewsets.ModelViewSet):
    queryset = Ejemplares.objects.all()
    serializer_class = EjemplaresSerializer