from django.db import models
from django.contrib.auth.models import User
length = 100
# Create your models here.


class Lead(models.Model):
    name = models.CharField(max_length=length)
    email = models.EmailField(max_length=length, unique=True)
    message = models.CharField(max_length=length*500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'{self.name}'
