CirclesIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('circles_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
