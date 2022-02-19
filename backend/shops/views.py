from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ShopSerializer
from .models import Shop

# Create your views here.
class ShopView(viewsets.ModelViewSet):
    serializer_class = ShopSerializer
    queryset = Shop.objects.all()
