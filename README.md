# Vue cli plugin for weback-bundle-tracker

Example vue.config.js:

```
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  lintOnSave: false,
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
    if (process.env.NODE_ENV === "production") {
      config.output.publicPath = "/static/";
    } else {
      config.output.publicPath = "http://localhost:8080/";
      config.plugins.push(new BundleTracker());
    }
  }
};
```

Standard django settings:

```
STATIC_URL = '/static/'
STATICFILES_DIRS = (PROJECT_DIR / 'dist',)
```

To develop with django:

```
django-admin runserver
vue-cli-service start
```
