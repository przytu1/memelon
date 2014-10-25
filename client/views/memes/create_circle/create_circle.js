
/*****************************************************************************/
/* CreateCircle: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateCircle.events({
  'click #add-friend': function(event, template) {
      var friendEmail = template.find('#friend-email').value;
      var circleEmails = 
        Session.get("friends-in-circle") == undefined ? [] : Session.get("friends-in-circle");
      circleEmails.push(friendEmail)
      Session.set("friends-in-circle", circleEmails)
      template.find('#friend-email').value = "";
  }
});

Template.CreateCircle.helpers({
   circles: function () {
     return Circles.find({}, { sort: { createdAt: -1 } });
   },
   friendsInCircle: function () {
     var circleEmails = 
       Session.get("friends-in-circle") == undefined ? [] : Session.get("friends-in-circle");
     return circleEmails;
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


