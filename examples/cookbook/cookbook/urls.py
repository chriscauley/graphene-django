from django.conf.urls import url
from django.contrib import admin

import views as cookbook_views

from graphene_django.views import GraphQLView

urlpatterns = [
  url(r'^admin/', admin.site.urls),
  url(r'^graphql', GraphQLView.as_view(graphiql=True)),
  url(r'^$', cookbook_views.index),
]
