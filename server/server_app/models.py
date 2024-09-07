from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

# Create your models here.

class User(AbstractUser):
    pass



Risk_choices = {
    1: "Very Low",
    2: "Low",
    3: "Somewhat Low",
    4: "Below Average",
    5: "Average",
    6: "Above Average",
    7: "Somewhat High",
    8: "High",
    9: "Very High",
    10: "Extremely High"
}
class Location(models.Model):
    region = models.CharField(max_length=100)
    latitude = models.FloatField(default=0.0)
    longitude = models.FloatField(default=0.0)
    risk_factor = models.IntegerField(choices=Risk_choices)
    description = models.CharField(max_length = 1000, blank=True)

    def __str__(self):
        return f"Location : {self.region}, risk_factor : {self.risk_factor}, description : {self.description}"




class Incident(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name="incidents_related")
    descripion = models.CharField(max_length= 1000)
    n_women = models.IntegerField(default=0)
    n_men = models.IntegerField(default=0)
    sex_ratio = models.FloatField(default=0.0)
    date = models.DateField(default = timezone.now)

    def __str__(self):
        return f"\nDate : {self.date}\nLocation : {self.location}\nDescription : {self.descripion}"
