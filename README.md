Vue cli plugin for weback-bundle-tracker


Standard django settings:

```
STATIC_URL = '/static/'
STATICFILES_DIRS = (PROJECT_DIR / 'dist',)
```

Standard vue.config.js:

```
module.exports = {
  configureWebpack: {
    output: {
      publicPath: '/static/',
    }
  }
}
```

To develop with django:

```
django-admin runserver
vue-cli-service runbuild
```
