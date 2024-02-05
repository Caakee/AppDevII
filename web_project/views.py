from django.shortcuts import render

def js_examples(request):
    return render(request, "js examples.html")