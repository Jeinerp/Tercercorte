from django.urls import path, include
from rest_framework import routers
from .views import EjemplaresViewSet

router= routers.DefaultRouter()
router.register(r'',EjemplaresViewSet)

urlpatterns =[

    path('', include(router.urls))
]