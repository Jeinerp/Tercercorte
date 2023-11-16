# En models.py de la app 'autores'
from django.db import models

class Escribir(models.Model):
    dia_mes_ano = models.DateField()
    autor = models.ForeignKey('autores.Autor', on_delete=models.CASCADE)
    libro = models.ForeignKey('libros.Libros', on_delete=models.CASCADE)

    def __str__(self):
        return f"Autor {self.autor} escribió en {self.libro}"

class Autor(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

    class meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"