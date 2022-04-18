from django.db import models

# Create your models here.


class API(models.Model):
    name = models.CharField(max_length=150, blank=True)
    format = models.CharField(max_length=150, blank=True)
    email = models.CharField(max_length=150, blank=True)
    scheduler = models.CharField(max_length=150, blank=True)
    date = models.CharField(max_length=150, blank=True)
    weekday = models.CharField(max_length=150, blank=True)
    time = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.reportName
