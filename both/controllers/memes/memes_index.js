MemesIndexController = RouteController.extend({
  layoutTemplate: 'MasterLayout',
  template: 'MemesIndex',
 
  waitOn: function () {
    var circleId = this.params._id;
    console.log("circleId" + circleId);
    var circles = Meteor.subscribe('circles_index');
    var memes = Meteor.subscribe('memes_index', circleId);
//    NProgress.start();
    return [circles, memes];
  },

  data: function () {
    if (this.ready()) {
      var circleId = this.params._id;
      var currentCircleName = "All newest";
      if (circleId) {
        currentCircleName = '#' + Circles.findOne({_id: circleId}).name;
        Session.set("addToCircleId", circleId);
      }

      return {
        currentCircleName: currentCircleName,
        circles: Circles.find({}, { sort: { name: 1 } }),
        items: function () {
          return Memes.find({}, { sort: { createdAt: -1 } });
        }
      }
    }
  },

  action: function () {
      this.render();
  }
});
