# Vue cli plugin for weback-bundle-tracker

Options:

```
  Usage: vue-cli-service devbuild

  Options:

    --filename   specify filename option for BundleTracker plugin
    --watch      watch and rebuild on change
    --publicpath configure publicPath (e.g. /static/)
```

Standard django settings:

```
STATIC_URL = '/static/'
STATICFILES_DIRS = (PROJECT_DIR / 'dist',)
```

To develop with django:

```
django-admin runserver
vue-cli-service devbuild --watch --publicpath=/static/
```
