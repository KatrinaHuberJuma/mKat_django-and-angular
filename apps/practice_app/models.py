from django.db import models

# Create your models here.
class Practice(models.Model):
    title = models.CharField(max_length=255)
    complete = models.BooleanField(default=False)