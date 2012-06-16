I love Tumult Hype, and I've been incorporating its output into a larger application.

I've developed a Backbone.js view that helps incorporate Tumult Hype animations in the following ways:

* It automatically generates the div/script tags and inserts them into the DOM
* A callback is run when the HYPE object is ready, and the first scene is playing
* Want to templatize your Tumult Hype documents?  Put underscore templates in the alt tags of your Hype elements and they'll automatically be evaluated by this view.
* Programmatically run a callback when an animation is finished

To use this, you'll want to include the HypeView object.  It'll put itself into window.HypeView.

You'll have to create some javascript callbacks in your Hype document:
* create a dummy first scene, with the following onSceneLoad:
   try {
     HypeView.documentLoaded(hypeDocument);
   } catch(e) {
     console.log("error in documentLoaded", e);
   }
* in each additional scene, you should have the following onSceneLoad
   try {
     HypeView.animationSceneLoad(hypeDocument);
   } catch(e) {
     console.log("error in animationSceneLoad", e);
   }
* finally, each scene should have an onAnimationComplete (or a "continue" button that does the same thing)
   try {
     HypeView.animationComplete(hypeDocument);
   } catch(e) {
     console.log("error in animationComplete", e);
   }

To load a hype document:
    d = $("<div></div>").appendTo($("body"))
    myView = new HypeView({
      el: d
      basename: "my_document_name" # will look in my_document_name_Resources
      width: 1024
      height: 768
    });
    myView.load(myOnLoadCallback);

To play a scene:
    myView(sceneName, templateDictionary, mySceneIsDoneCallback)
