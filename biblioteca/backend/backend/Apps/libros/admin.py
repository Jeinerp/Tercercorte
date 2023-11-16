from django.contrib import admin
from .models import Libros

class LibrosAdmin(admin.ModelAdmin):
    pass

admin.site.register(Libros, LibrosAdmin)
