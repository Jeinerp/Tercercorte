from rest_framework import serializers
from .models import Autor
from .models import Escribir

class AutoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = '__all__'

class escribirSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escribir
        fields = '__all__'        