/*****************************************************************************/
/* MemesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('memes_index', function (circleId) {
  var selector = circleId ? {circle: circleId} : {}

  var cursor = Memes.find(
    selector, {
    sort: { createdAt: -1 },
  });
  return cursor;
});
