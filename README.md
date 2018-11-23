# DEPRECATED!

Since at least vue-cli version 3.0.5 and webpack-bundle-tracker version 0.4.2-beta
you don't need extra plugins to have nice development environment, use
example below to start:

Example vue.config.js:

```
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? '/static/' : "http://localhost:8080/",
  devServer: {
    publicPath: "http://localhost:8080/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
      "Access-Control-Allow-Credentials": "true"
    }
  },
  configureWebpack: config => {
    if (!process.env.NODE_ENV === "production") {
      config.plugins.push(new BundleTracker());
    }
  }
};
```

Example django settings:

```
STATIC_URL = '/static/'
STATICFILES_DIRS = (PROJECT_DIR / 'dist',)
```

To develop with django:

```
django-admin runserver
vue-cli-service serve


Your app will be available at django port eg.: http://localhost:8000/.
