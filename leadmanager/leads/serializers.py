from rest_framework import serializers
from .models import Lead

#Lead Searlizer
class LeadSerialzer(serializers.ModelSerializer):
    
    class Meta:
        model = Lead
        fields = '__all__'

