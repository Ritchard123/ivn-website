from django.shortcuts import render

# Create your views here.


# Create your views here.
def home(request):
    return render(request,'components/Main_page.html')
def who_we_are(request):
    return render(request,'components/who_we_are.html')
def about_us(request):
    return render(request,'components/about_us.html')
def ocv(request):
    return render(request,'components/our_core_values.html')
def Mission_vision(request):
    return render(request,'components/Mission_vision.html')
def Testimonials(request):
    return render(request, 'components/testimonials.html')  
def HR_career(request):
    return render(request,'our_services/HR_career.html')
def Education(request):
    return render(request,'our_services/Education.html')
def software(request):
    return render(request,'our_services/software.html')
def operations(request):
    return render(request,'our_services/operations.html')
def BTD(request):
    return render(request,'our_services/BTD.html')