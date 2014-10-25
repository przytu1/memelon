Template.UserLoggedIn.helpers({
  userName: function() {
    return Meteor.user() ? Meteor.user().emails[0].address : "";
  }
});

Template.UserLoggedIn.events({
  'click #logout': function(event, template) {
      Meteor.logout();
      var publicCircle = Circles.find({name: "public"}).fetch()[0];
      
      console.log(publicCircle._id);
      Router.go("circle.memes", {_id: publicCircle._id}); // TODO: Why it doesn't work?
  }
});