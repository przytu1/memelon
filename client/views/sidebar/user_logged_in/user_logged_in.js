Template.UserLoggedIn.helpers({
  userName: function() {
    return Meteor.user().emails[0].address;
  }
});