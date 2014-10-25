/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
config = {
  picture: {
    requirements: {
      width: 600,
      height: 450,
      quality: 80,
      correctOrientation: true
    }
  }
};

_.extend(App, {
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
