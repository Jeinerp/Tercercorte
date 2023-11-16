from django.db import models

class Libros(models.Model):
    titulo = models.CharField(max_length=255)
    numero_pagina = models.IntegerField()
    editorial = models.CharField(max_length=255)
    ISBN = models.CharField(max_length=13, unique=True)

    def __str__(self):
        return self.titulo
    
    class meta:
        verbose_name = "Libro"
        verbose_name_plural = "Libros"
