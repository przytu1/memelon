var assert = require('assert');

suite('Memes', function() {
  test('on the server', function(done, server) {
    server.eval(function() {
      Memes.insert({picture: 'data'});
      var memes = Memes.find().fetch();
      emit('memes', memes);
    });

    server.once('memes', function(memes) {
      assert.equal(memes.length, 1);
      done();
    });
  });
});
