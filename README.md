I love Tumult Hype, and I've been incorporating its output into a larger application.  This is a Backbone view which manages many Hype documents for me, unceremoniously ripped from a larger piece of code.

This backbone view helps incorporate Tumult Hype animations in the following ways:

* It automatically generates the div/script tags and inserts them into the DOM for an arbitrary number of separate Hype documents.
* The animations in a hype document cannot be played until the HYPE object is available, so this view helps you out by managing a callback to be run when the HYPE object is ready.
* Want to templatize your Tumult Hype documents?  Put underscore templates in the alt tags of your Hype elements.  If you pass a data dictionary to the showSceneNamed() method of this view, it'll evaluate underscore templates in your alt tags.  The data dictionary is available to any Javascript in your Hype document, so you can use it to programmatically run timelines &c.
* Want to know when your programmatically started Hype animation has completed?  Pass a callback to this view's showSceneNamed() function.

To use this, you'll want to include the HypeView object.  It'll put itself into window.HypeView.

You'll have to create some javascript callbacks in your Hype document:

Create a dummy first scene, with the following onSceneLoad.  This is how we know when the document is loaded (and the HYPE object is ready).

    try {
      HypeView.documentLoaded(hypeDocument);
    } catch(e) {
      console.log("error in documentLoaded", e);
    }

In each subsequent scene, you should have the following onSceneLoad.  This function is what performs the templating and other support functions.  This functionality can, of course, be part of a larger function.

    try {
      HypeView.animationSceneLoad(hypeDocument);
    } catch(e) {
      console.log("error in animationSceneLoad", e);
    }

Finally, each scene should have an onAnimationComplete (or a "continue" button that does the same thing)

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

    myView.showSceneNamed(sceneName, templateDictionary, mySceneIsDoneCallback)

There's a working example of this in action in the `test` directory.  If you want to change the hype document, regenerate it to `public/test_Resources`.  The test app was generated using Brunch; look in `lib/router.coffee` or `lib/router.js` for how the Hype document is initialized and run.
