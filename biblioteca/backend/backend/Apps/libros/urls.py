from django.urls import path, include
from rest_framework import routers
from .views import LibrosViewSet

router= routers.DefaultRouter()
router.register(r'',LibrosViewSet)

urlpatterns =[

    path('', include(router.urls))
]