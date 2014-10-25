
/*****************************************************************************/
/* MemeItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MemeItem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MemeItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MemeItem: Lifecycle Hooks */
/*****************************************************************************/
Template.MemeItem.created = function () {
};

Template.MemeItem.rendered = function () {
};

Template.MemeItem.destroyed = function () {
};


UI.registerHelper('formatTime', function (time) {
    return moment(time).calendar();
});

UI.registerHelper('nameOfCircle', function (id) {
    var circle = Circles.findOne(id)
    return (circle ? '#' + circle.name : '');
});
