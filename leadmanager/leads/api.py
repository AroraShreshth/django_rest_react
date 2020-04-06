from .models import Lead
from rest_framework import viewsets , permissions
from .serializers import LeadSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset =Lead.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serialzer_class = LeadSerializer