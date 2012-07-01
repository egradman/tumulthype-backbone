application = require 'application'
HypeView = require 'views/hype_view'

module.exports = class Router extends Backbone.Router
  routes:
    '': 'home'

  home: ->
    d = $("<div></div>").appendTo($("body"))
    @hypeView = new HypeView({
      el: d
      basename: "test"
      width: 2048
      height: 1336
    })
    @hypeView.load ()=>
      @hypeView.showSceneNamed "testout"
