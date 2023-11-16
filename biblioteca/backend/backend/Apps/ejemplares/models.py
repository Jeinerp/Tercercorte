# En models.py de la app 'ejemplares'
from django.db import models

class Ejemplares(models.Model):
    libro = models.ForeignKey('libros.Libros', on_delete=models.CASCADE)
    localizacion = models.CharField(max_length=255)

    def __str__(self):
        return f"Ejemplar {self.libro}"

    class meta:
        verbose_name = "Ejemplar"
        verbose_name_plural = "Ejemplares"