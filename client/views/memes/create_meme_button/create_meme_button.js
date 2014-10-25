
/*****************************************************************************/
/* CreateMemeButton: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateMemeButton.events({
  'click #make-meme': function(event, template) {
      MeteorCamera.getPicture(config.picture.requirements, function (error, data) {
        if (! error) {
          Session.set("newPicture", data);
          Router.go('create.meme');
          // Memes.insert({ picture:data });
        } else {
          console.log("Error!");
          console.log(error);
        }
      })
  }
});

Template.CreateMemeButton.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateMemeButton: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateMemeButton.created = function () {
};

Template.CreateMemeButton.rendered = function () {
};

Template.CreateMemeButton.destroyed = function () {
};


