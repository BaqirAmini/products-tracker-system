from django.db import models
from django.utils import timezone

# Create your models here.
class Shop(models.Model):
    name = models.CharField(max_length=64)
    logo = models.CharField(max_length=64, blank=True, null=True)
    address = models.CharField(max_length=156)
    floor = models.CharField(max_length=32, blank=True, null=True)
    shop_number = models.IntegerField(blank=False, null=False)
    status = models.BooleanField(default=False)
    reg_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    open_at = models.TimeField(blank=True, null=True)
    close_at = models.TimeField(blank=True, null=True)


    def __str__(self):
        return self.name

    
