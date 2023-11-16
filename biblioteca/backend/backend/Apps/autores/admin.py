from django.contrib import admin
from .models import Autor, Escribir

class EscribirInline(admin.TabularInline):
    model = Escribir
    extra = 1

class AutorAdmin(admin.ModelAdmin):
    inlines = [EscribirInline]

admin.site.register(Autor, AutorAdmin)
