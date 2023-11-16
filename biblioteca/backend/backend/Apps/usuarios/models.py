# En models.py de la app 'usuarios'
from django.db import models

class Usuarios(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"
    
    class meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

class Prestamo(models.Model):
    usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    ejemplar = models.ForeignKey('ejemplares.Ejemplares', on_delete=models.CASCADE)
    fecha_devolucion = models.DateField()
    fecha_prestamo = models.DateField()

    def __str__(self):
        return f"Prestamo de {self.usuario} - Ejemplar: {self.ejemplar}"
    
    class meta:
        verbose_name = "Prestamo"
        verbose_name_plural = "Prestamos"