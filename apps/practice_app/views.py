from django.http import JsonResponse
from django.views import View
import json
from .models import Practice 

class Practices(View):
    def get(self, request):        
        return JsonResponse({'status': 'ok', 'practices': list(Practice.objects.values().all())})
    def post(self, request):
        body = json.loads(request.body.decode())
        Practice.objects.create(title=body['title'],complete=body['complete'])
        print(body)
        return JsonResponse({'status': 'ok'})

class PracticeDetails(View):
    def get(self, request, practice_id):   
        return JsonResponse({'status': 'ok', 'practices': list(Practice.objects.values().get(id=practice_id))})
        return JsonResponse({'status': 'ok'})
    def put(self, request, practice_id):        
        return JsonResponse({'status': 'ok'})
    def delete(self, request, practice_id):        
        return JsonResponse({'status': 'ok'})