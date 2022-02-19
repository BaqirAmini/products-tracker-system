from rest_framework import serializers
from .models import Shop

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('id', 'name', 'logo', 'address', 'floor', 'shop_number', 'status', 'reg_at', 'open_at', 'close_at')