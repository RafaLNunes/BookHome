from django.http import HttpResponse
from django.shortcuts import render
from core import settings
from bs4 import BeautifulSoup
import os

def check_cad_type_h1():
    print('nada')

def cadastro(request):
    print(settings.BASE_DIR)

    print(request.method)
    return render(request, 'cadastro.html')


def login(request):
    return HttpResponse("teste")