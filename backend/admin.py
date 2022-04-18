from django.contrib import admin
from .models import API

# Register your models here.


class APIadmin(admin.ModelAdmin):
    list_display = ('name', 'format', 'email',
                    'scheduler', 'date', 'weekday', 'time')
    list_display_links = ('name', 'name', 'format', 'email',
                          'scheduler', 'date', 'weekday', 'time')
    search_fields = ('name', 'email')
    # list_editable = ('done',)
    # list_filter = ('done', )


admin.site.register(API, APIadmin)
