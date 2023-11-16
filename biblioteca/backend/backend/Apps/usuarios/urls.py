from django.urls import path, include
from rest_framework import routers
from .views import UsuariosViewSet
from .views import PrestamoViewSet

router= routers.DefaultRouter()
router.register(r'usuario',UsuariosViewSet)
router.register(r'Prestamo', PrestamoViewSet)

urlpatterns =[

    path('', include(router.urls))
    
]

