(function(/*! Brunch !*/) {
  'use strict';

  if (!this.require) {
    var modules = {};
    var cache = {};
    var __hasProp = ({}).hasOwnProperty;

    var expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var getFullPath = function(path, fromCache) {
      var store = fromCache ? cache : modules;
      var dirIndex;
      if (__hasProp.call(store, path)) return path;
      dirIndex = expand(path, './index');
      if (__hasProp.call(store, dirIndex)) return dirIndex;
    };
    
    var cacheModule = function(name, path, contentFn) {
      var module = {id: path, exports: {}};
      try {
        cache[path] = module.exports;
        contentFn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        cache[path] = module.exports;
      } catch (err) {
        delete cache[path];
        throw err;
      }
      return cache[path];
    };

    var require = function(name, root) {
      var path = expand(root, name);
      var fullPath;

      if (fullPath = getFullPath(path, true)) {
        return cache[fullPath];
      } else if (fullPath = getFullPath(path, false)) {
        return cacheModule(name, fullPath, modules[fullPath]);
      } else {
        throw new Error("Cannot find module '" + name + "'");
      }
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    this.require = function(name) {
      return require(name, '');
    };

    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle) {
        if (__hasProp.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    };
  }
}).call(this);
(this.require.define({
  "application": function(exports, require, module) {
    (function() {
  var Application;

  Application = {
    initialize: function() {
      var Router;
      Router = require('lib/router');
      this.router = new Router();
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    }
  };

  module.exports = Application;

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var application;

  application = require('application');

  $(function() {
    application.initialize();
    return Backbone.history.start();
  });

}).call(this);

  }
}));
(this.require.define({
  "lib/router": function(exports, require, module) {
    (function() {
  var HypeView, Router, application,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  application = require('application');

  HypeView = require('views/hype_view');

  module.exports = Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'home'
    };

    Router.prototype.home = function() {
      var d,
        _this = this;
      d = $("<div></div>").appendTo($("body"));
      this.hypeView = new HypeView({
        el: d,
        basename: "test",
        width: 2048,
        height: 1336
      });
      return this.hypeView.load(function() {
        return _this.hypeView.showSceneNamed("monkeys", {
          something: "awesome"
        }, function() {
          console.log("played");
          return _this.hypeView.showSceneNamed("monkeys", {
            something: "terrible"
          }, function() {
            return console.log("played");
          });
        });
      });
    };

    return Router;

  })(Backbone.Router);

}).call(this);

  }
}));
(this.require.define({
  "lib/view_helper": function(exports, require, module) {
    (function() {



}).call(this);

  }
}));
(this.require.define({
  "models/collection": function(exports, require, module) {
    (function() {
  var Collection,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  module.exports = Collection = (function(_super) {

    __extends(Collection, _super);

    function Collection() {
      Collection.__super__.constructor.apply(this, arguments);
    }

    return Collection;

  })(Backbone.Collection);

}).call(this);

  }
}));
(this.require.define({
  "models/model": function(exports, require, module) {
    (function() {
  var Model,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  module.exports = Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      Model.__super__.constructor.apply(this, arguments);
    }

    return Model;

  })(Backbone.Model);

}).call(this);

  }
}));
(this.require.define({
  "views/home_view": function(exports, require, module) {
    (function() {
  var HomeView, View, template,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  View = require('./view');

  template = require('./templates/home');

  module.exports = HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.id = 'home-view';

    HomeView.prototype.template = template;

    return HomeView;

  })(View);

}).call(this);

  }
}));
(this.require.define({
  "views/hype_view": function(exports, require, module) {
    (function() {
  var HypeView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.HypeView = HypeView = (function(_super) {

    __extends(HypeView, _super);

    function HypeView() {
      this._animationComplete = __bind(this._animationComplete, this);
      this._animationSceneLoad = __bind(this._animationSceneLoad, this);
      this.showSceneNamed = __bind(this.showSceneNamed, this);
      this.render = __bind(this.render, this);
      this._documentLoaded = __bind(this._documentLoaded, this);
      this.load = __bind(this.load, this);
      HypeView.__super__.constructor.apply(this, arguments);
    }

    HypeView._views = {};

    HypeView.prototype.initialize = function() {
      this.basename = this.options['basename'];
      this.width = this.options['width'];
      this.height = this.options['height'];
      this.sounds = {};
      return HypeView._views[this.basename] = this;
    };

    HypeView.prototype.load = function(documentLoadedCallback) {
      this.documentLoadedCallback = documentLoadedCallback;
      return this.render();
    };

    HypeView.prototype._documentLoaded = function() {
      console.log("hype view loaded", this.basename);
      return this.documentLoadedCallback();
    };

    HypeView.prototype.render = function() {
      this.$el.html("<div id='" + this.basename + "_hype_container' class='hype-container' style='position:relative;overflow:hidden;width:" + this.options['width'] + "px;height:" + this.options['height'] + "px;background-color:transparent;'>\n  <script type='text/javascript' charset='utf-8' src='" + this.basename + "_Resources/" + this.basename + "_hype_generated_script.js?71143'></script>\n</div>");
      return this;
    };

    HypeView.prototype.showSceneNamed = function(scene_name, data, animationCompleteCallback) {
      this.animationCompleteCallback = animationCompleteCallback;
      this.hypeDocument.templateData = data;
      return this.hypeDocument.showSceneNamed(scene_name);
    };

    HypeView.prototype._animationSceneLoad = function() {
      var alts,
        _this = this;
      alts = this.$el.find("[alt]");
      return alts.each(function(i, el) {
        return $(el).html(_.template($(el).attr("alt"), _this.hypeDocument.templateData));
      });
    };

    HypeView.prototype._animationComplete = function() {
      return this.animationCompleteCallback();
    };

    HypeView.documentLoaded = function(hypeDocument) {
      this._views[hypeDocument.documentName()].hypeDocument = hypeDocument;
      return this._views[hypeDocument.documentName()]._documentLoaded();
    };

    HypeView.animationSceneLoad = function(hypeDocument) {
      return this._views[hypeDocument.documentName()]._animationSceneLoad();
    };

    HypeView.animationComplete = function(hypeDocument) {
      return this._views[hypeDocument.documentName()]._animationComplete();
    };

    return HypeView;

  })(Backbone.View);

  module.exports = window.HypeView;

}).call(this);

  }
}));
(this.require.define({
  "views/templates/home": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div id=\"content\">\n  <h1>brunch</h1>\n  <h2>Welcome!</h2>\n  <ul>\n    <li><a href=\"http://brunch.readthedocs.org/\">Documentation</a></li>\n    <li><a href=\"https://github.com/brunch/brunch/issues\">Github Issues</a></li>\n    <li><a href=\"https://github.com/brunch/twitter\">Twitter Example App</a></li>\n    <li><a href=\"https://github.com/brunch/todos\">Todos Example App</a></li>\n  </ul>\n</div>\n";});
  }
}));
(this.require.define({
  "views/view": function(exports, require, module) {
    (function() {
  var View,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  require('lib/view_helper');

  module.exports = View = (function(_super) {

    __extends(View, _super);

    function View() {
      this.render = __bind(this.render, this);
      View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = function() {};

    View.prototype.getRenderData = function() {};

    View.prototype.render = function() {
      this.$el.html(this.template(this.getRenderData()));
      this.afterRender();
      return this;
    };

    View.prototype.afterRender = function() {};

    return View;

  })(Backbone.View);

}).call(this);

  }
}));
