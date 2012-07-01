application = require 'application'
HypeView = require 'views/hype_view'

class MyHypeView extends HypeView
  initialize:()->
    super()


  
module.exports = class Router extends Backbone.Router
  routes:
    '': 'home'

  home: ->
    d = $("<div></div>").appendTo($("body"))
    @hypeView = new MyHypeView({
      el: d
      basename: "test"
      width: 2048
      height: 1336
    })
    @hypeView.load ()=>
      x = $("<div>this is a test</div>")
      @hypeView.showSceneNamed "testout", {widget: x}
