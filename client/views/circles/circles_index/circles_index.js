
/*****************************************************************************/
/* CirclesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CirclesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CirclesIndex.helpers({
  items: function () {
     return Circles.find({}, { sort: { createdAt: -1 } });
  }
});

/*****************************************************************************/
/* CirclesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.CirclesIndex.created = function () {
};

Template.CirclesIndex.rendered = function () {
};

Template.CirclesIndex.destroyed = function () {
};


