(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"application": function(exports, require, module) {
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
  
}});

window.require.define({"initialize": function(exports, require, module) {
  (function() {
    var application;

    application = require('application');

    $(function() {
      application.initialize();
      return Backbone.history.start();
    });

  }).call(this);
  
}});

window.require.define({"lib/router": function(exports, require, module) {
  (function() {
    var HypeView, MyHypeView, Router, application,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    application = require('application');

    HypeView = require('views/hype_view');

    MyHypeView = (function(_super) {

      __extends(MyHypeView, _super);

      function MyHypeView() {
        MyHypeView.__super__.constructor.apply(this, arguments);
      }

      MyHypeView.prototype.initialize = function() {
        return MyHypeView.__super__.initialize.call(this);
      };

      return MyHypeView;

    })(HypeView);

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
        this.hypeView = new MyHypeView({
          el: d,
          basename: "test",
          width: 2048,
          height: 1336
        });
        return this.hypeView.load(function() {
          var x;
          x = $("<div>this is a test</div>");
          return _this.hypeView.showSceneNamed("testout", {
            widget: x
          });
        });
      };

      return Router;

    })(Backbone.Router);

  }).call(this);
  
}});

window.require.define({"lib/view_helper": function(exports, require, module) {
  (function() {



  }).call(this);
  
}});

window.require.define({"models/collection": function(exports, require, module) {
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
  
}});

window.require.define({"models/model": function(exports, require, module) {
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
  
}});

window.require.define({"views/home_view": function(exports, require, module) {
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
  
}});

window.require.define({"views/hype_view": function(exports, require, module) {
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
        this._mouseClick = __bind(this._mouseClick, this);
        this._transitionToSceneNamed = __bind(this._transitionToSceneNamed, this);
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
        var new_el;
        new_el = $("<div id='" + this.basename + "_hype_container' class='hype-container' style='position:relative;overflow:hidden;width:" + this.options['width'] + "px;height:" + this.options['height'] + "px;background-color:transparent;'>\n  <script type='text/javascript' charset='utf-8' src='" + this.basename + "_Resources/" + this.basename + "_hype_generated_script.js?71143'></script>\n</div>");
        this.$el.replaceWith(new_el);
        this.setElement(new_el);
        return this;
      };

      HypeView.prototype.showSceneNamed = function(scene_name, data, animationCompleteCallback) {
        this.animationCompleteCallback = animationCompleteCallback;
        this.hypeDocument.templateData = data;
        return this.hypeDocument.showSceneNamed(scene_name);
      };

      HypeView.prototype._transitionToSceneNamed = function(scene_name, timeline_name, data, animationCompleteCallback) {
        var _this = this;
        this.animationCompleteCallback = animationCompleteCallback;
        this.hypeDocument.templateData = data;
        this.bind("animation:complete_for_transition", function() {
          _this.unbind("animation:complete_for_transition");
          return _this.showSceneNamed(scene_name, data, _this.animationCompleteCallback);
        });
        return this.hypeDocument.playTimelineNamed(timeline_name);
      };

      HypeView.byDocumentName = function(document_name) {
        return this._views[document_name];
      };

      HypeView.prototype._mouseClick = function(element, event) {
        console.log("click", element.id);
        return this.trigger("click:" + element.id);
      };

      HypeView.prototype._animationSceneLoad = function() {
        var alts, override_function_name,
          _this = this;
        alts = this.$el.find("[alt]");
        alts.each(function(i, el) {
          var d;
          d = _.clone(_this.hypeDocument.templateData);
          d['el'] = el;
          return $(el).html(_.template($(el).attr("alt"), d));
        });
        override_function_name = this.hypeDocument.currentSceneName() + "_animationSceneLoad";
        if (this[override_function_name] != null) {
          return this[override_function_name]();
        }
      };

      HypeView.prototype._animationComplete = function() {
        console.log("animation complete");
        this.trigger("animation:complete_for_transition");
        if (this.animationCompleteCallback != null) {
          return this.animationCompleteCallback();
        }
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

      HypeView.mouseClick = function(hypeDocument, element, event) {
        return this._views[hypeDocument.documentName()]._mouseClick(element, event);
      };

      HypeView.transitionToSceneNamed = function(hypeDocument, scene_name, timeline_name, data, animationCompleteCallback) {
        return this._views[hypeDocument.documentName()]._transitionToSceneNamed(scene_name, timeline_name, data, animationCompleteCallback);
      };

      return HypeView;

    })(Backbone.View);

    module.exports = window.HypeView;

  }).call(this);
  
}});

window.require.define({"views/templates/home": function(exports, require, module) {
  module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
    helpers = helpers || Handlebars.helpers;
    var foundHelper, self=this;


    return "<div id=\"content\">\n  <h1>brunch</h1>\n  <h2>Welcome!</h2>\n  <ul>\n    <li><a href=\"http://brunch.readthedocs.org/\">Documentation</a></li>\n    <li><a href=\"https://github.com/brunch/brunch/issues\">Github Issues</a></li>\n    <li><a href=\"https://github.com/brunch/twitter\">Twitter Example App</a></li>\n    <li><a href=\"https://github.com/brunch/todos\">Todos Example App</a></li>\n  </ul>\n</div>\n";});
}});

window.require.define({"views/view": function(exports, require, module) {
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
  
}});

