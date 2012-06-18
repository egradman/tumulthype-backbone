window.HypeView = class HypeView extends Backbone.View
  @_views = {} # a mapping from documentNames to created views

  initialize:()->
    @basename = @options['basename']
    @width = @options['width']
    @height = @options['height']
    @sounds = {}

    HypeView._views[@basename] = this

  load:(@documentLoadedCallback)=>
    # when this is called, the @el must be set, so the rendered content can
    # go in the DOM.  callback will be called as soon as the doc is loaded
    @render()

  _documentLoaded:()=>
    console.log("hype view loaded", @basename)
    @documentLoadedCallback()
    
    #for scene_name in hypeDocument.sceneNames()
    #  @sounds[scene_name] = new Sound("#{@basename}_Resources/#{scene_name}.mp3");

  render:()=>
    new_el = $("""
      <div id='#{@basename}_hype_container' class='hype-container' style='position:relative;overflow:hidden;width:#{@options['width']}px;height:#{@options['height']}px;background-color:transparent;'>
        <script type='text/javascript' charset='utf-8' src='#{@basename}_Resources/#{@basename}_hype_generated_script.js?71143'></script>
      </div>
    """)
    @$el.replaceWith(new_el)
    @setElement(new_el)
    @

  showSceneNamed:(scene_name, data, @animationCompleteCallback)=>
    @hypeDocument.templateData = data
    @hypeDocument.showSceneNamed(scene_name)

  @byDocumentName:(document_name)->
    return @_views[document_name]

  _animationSceneLoad:()=>
    # apply the underscore templates in the alt tags
    alts = @$el.find("[alt]")
    alts.each (i, el)=>
      $(el).html(_.template($(el).attr("alt"), @hypeDocument.templateData))
    #@sounds[@hypeDocument.currentSceneName()]?.play()

  _animationComplete:()=>
    @animationCompleteCallback()

  # these are the static methods that can be called from your Hype javascript
  @documentLoaded:(hypeDocument)->
    # must be called in onSceneLoad of first scene
    @_views[hypeDocument.documentName()].hypeDocument = hypeDocument
    @_views[hypeDocument.documentName()]._documentLoaded()

  @animationSceneLoad:(hypeDocument)->
    @_views[hypeDocument.documentName()]._animationSceneLoad()

  @animationComplete:(hypeDocument)->
    @_views[hypeDocument.documentName()]._animationComplete()

module.exports = window.HypeView
