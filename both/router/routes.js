/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('memes.index', {path: '/'});
  this.route('circle.memes', {path: '/circle/:_id', controller: 'MemesIndexController'});
  this.route('create.meme', {path: '/create_meme'});
  this.route('circles.index', {path: '/circles'});
});
