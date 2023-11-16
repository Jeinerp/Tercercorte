from django.contrib import admin
from .models import Usuarios, Prestamo

class PrestamoInline(admin.TabularInline):
    model = Prestamo
    extra = 1

class UsuariosAdmin(admin.ModelAdmin):
    inlines = [PrestamoInline]

admin.site.register(Usuarios, UsuariosAdmin)
