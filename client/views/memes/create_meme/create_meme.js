
/*****************************************************************************/
/* CreateMeme: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateMeme.events({
  'keyup input': function (event, template) {
      var topText = template.find('#top-line').value.toUpperCase();
      var bottomText = template.find('#bottom-line').value.toUpperCase();
      var saveCanvas = template.find('#save-canvas');
      Meme(Session.get("newPicture"), saveCanvas, topText, bottomText);
      setTimeout(function() {
          var previewImg = template.find('#preview-img');
          previewImg.src = saveCanvas.toDataURL("image/jpeg");
      });
  },
  'click .circle-button': function(event, template) {
    Session.set("addToCircleId", $(event.target).attr("value"));
  },
  'click #save-meme': function(event, template) {
      var topText = template.find('#top-line').value;
      var bottomText = template.find('#bottom-line').value;
      var imageBase64 = template.find("#save-canvas").toDataURL("image/jpeg");
      var circleId = Session.get("addToCircleId");
      Memes.insert({
        picture: imageBase64,
        topText: topText,
        bottomText: bottomText,
        createdAt: new Date,
        circle: circleId
      });
      Router.go("circle.memes", {_id: circleId});
  }
});

Template.CreateMeme.helpers({
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
/* CreateMeme: Lifecycle Hooks */

/*****************************************************************************/
Template.CreateMeme.created = function () {
};

Template.CreateMeme.rendered = function () {
  Meme(Session.get("newPicture"), 'save-canvas');

  setTimeout(function() {
      var previewImg = document.getElementById('preview-img');
      var saveCanvas = document.getElementById('save-canvas');
      previewImg.src = saveCanvas.toDataURL("image/jpeg");
  });
};

Template.CreateMeme.destroyed = function () {
};


