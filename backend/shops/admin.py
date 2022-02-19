from django.contrib import admin
from .models import Shop

# Register your models here.
class ShopsAdmin(admin.ModelAdmin):
    list_display = ('name','logo', 'address', 'floor', 'shop_number', 'status', 'reg_at', 'open_at', 'close_at')
    
admin.site.register(Shop, ShopsAdmin)
    

