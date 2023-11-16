from django.contrib import admin
from .models import Ejemplares

class EjemplaresAdmin(admin.ModelAdmin):
    pass

admin.site.register(Ejemplares, EjemplaresAdmin)
