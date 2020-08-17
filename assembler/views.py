from django.shortcuts import render
from django.http import JsonResponse
from assembler.templates.assembler.resumeSections import resumeSections


def assembler(request):
    return render(request, 'assembler/main.html')

def getSections(request):
    return JsonResponse(resumeSections)

def homepage(request):
    return render(request, 'home/home.html')