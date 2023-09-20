from django.shortcuts import render

# Create your views here.


# Create your views here.
def home(request):
    return render(request,'components/Main_page.html')
def about_us(request):
    return render(request,'components/about_us.html')
def services(request):
    return render(request,'components/services.html')

def solutions(request):
    return render(request,'components/solutions.html')
def training(request):
    return render(request,'components/training.html')
def project(request):
    return render(request,'components/project.html')
def contact(request):
    return render(request,'components/contact.html')
def banking(request):
    return render(request,'solutions/Banking.html')
def healthcare(request):
    return render(request,'solutions/Construction.html')
def retail(request):
    return render(request,'solutions/Healthcare.html')
def insurance(request):
    return render(request,'solutions/Insurance.html')
def construction(request):
    return render(request,'solutions/Retail.html')
def hrmanagement(request):
    return render(request,'solutions/Hr_management.html')