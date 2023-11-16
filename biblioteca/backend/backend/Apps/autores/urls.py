from django.urls import path, include
from rest_framework import routers
from .views import AutorViewSet
from .views import EscribirViewSet


router= routers.DefaultRouter()
router.register(r'autor',AutorViewSet)
router.register(r'escribir', EscribirViewSet)

urlpatterns =[

    path('', include(router.urls))
]