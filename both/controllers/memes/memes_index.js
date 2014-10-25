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
      var userEmail = Meteor.user() ? Meteor.user().emails[0].address : "";
      if (circleId) {
        currentCircleName = '#' + Circles.findOne({_id: circleId}).name;
        Session.set("addToCircleId", circleId);
      }

      return {
        currentCircleName: currentCircleName,
        circles: Circles.find({ $or: [{users: { $in: [userEmail]  }}, {name: "public"}]}, { sort: { name: 1 } }),
        ownedCircles: Circles.find({owner: Meteor.userId()}, { sort: { name: 1 } }),
        items: function () {
          return Memes.find({}, { sort: { createdAt: -1 } });
        },
        emptyCircle: Memes.find({}).count() == 0
      }
    }
  },

  action: function () {
      this.render();
  }
});
