Meteor.startup( function () {
  if(Circles.find().count() > 0) return;

  var circles = ["public", "hackzurich", "work", "college", "buddies"]

  for(var circleName in circles){
    Circles.insert({
      name: circles[circleName],
      createdAt: new Date
    });
  }
});
