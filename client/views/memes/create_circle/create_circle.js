
/*****************************************************************************/
/* CreateCircle: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateCircle.events({

});

Template.CreateCircle.helpers({
   circles: function () {
     return Circles.find({}, { sort: { createdAt: -1 } });
   },
   selectedCircle: function () {
     var circleId = Session.get("addToCircleId");
     var circle = null;
     if(!circleId){
       circle = Circles.findOne();
       circleId = circle._id;
       Session.set("addToCircleId", circleId);
     } else {
       circle = Circles.findOne({_id: circleId});
     }
     return circle;
   }
});

/*****************************************************************************/
/* CreateCircle: Lifecycle Hooks */

/*****************************************************************************/
Template.CreateCircle.created = function () {
};

Template.CreateCircle.rendered = function () {
};

Template.CreateCircle.destroyed = function () {
};


