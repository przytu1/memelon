Template.UserLoggedIn.helpers({
  userName: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.UserLoggedIn.events({
  'click #logout': function(event, template) {
      Meteor.logout()
  }
});