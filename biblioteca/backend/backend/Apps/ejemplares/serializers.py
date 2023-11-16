from rest_framework import serializers
from .models import Ejemplares

class EjemplaresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ejemplares
        fields = '__all__'