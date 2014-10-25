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
  this.route('memes.index', {path: '/'});
  this.route('circle.memes', {path: '/circle/:_id', controller: 'MemesIndexController'});
  this.route('create.meme', {path: '/create_meme'});
  this.route('circles.index', {path: '/circles'});
  this.route('create.circle', {path: '/create_circle'});
});
