//	HYPE.documents["test"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "test_Resources";
	var documentName = "test";
	var documentLoaderFilename = "test_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_108 == "undefined") {
		if(typeof window.HYPE_108_DocumentsToLoad == "undefined") {
			window.HYPE_108_DocumentsToLoad = new Array();
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=108';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_108();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",f:"d",N:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",aL:"i",Y:"i",A:"c",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{onSceneLoadAction:{type:4,javascriptOid:"112"},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"110",initialValues:{},backgroundColor:"#FFFFFF",name:"dummy"},{onSceneLoadAction:{type:4,javascriptOid:"111"},initialValues:{"537":{G:"#000000",aU:8,c:492,aV:8,r:"inline",d:92,s:"",t:48,aG:"<%= something %>",Z:"break-word",w:"New Text",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:963,b:424},"536":{o:"content-box",h:"monkey.png",x:"visible",a:128,q:"100% 100%",b:46,j:"absolute",r:"inline",c:442,z:"1",k:"div",d:389}},timelines:{"538":{framesPerSecond:30,animations:[{f:"5",t:0,d:3.0333333,i:"b",e:576.872,r:1,s:210.872,o:"536"}],identifier:"538",name:"conditional",duration:3.0333333},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"1",t:0,d:3.1333334,i:"a",e:1510,r:1,s:128,o:"536"},{f:"1",t:0,d:3.1333334,i:"b",e:726,r:1,s:424,o:"537"},{f:"1",t:0,d:3.1333334,i:"a",e:265,r:1,s:963,o:"537"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:3.1333334}},sceneIndex:1,perspective:"600px",oid:"81",onSceneAnimationCompleteAction:{type:4,javascriptOid:"45"},backgroundColor:"#212222",name:"monkeys"},{onSceneLoadAction:{type:4,javascriptOid:"111"},onSceneUnloadAction:{type:0},initialValues:{"540":{o:"content-box",h:"monkey.png",x:"visible",a:-451,q:"100% 100%",b:442,j:"absolute",r:"inline",aA:{type:4,javascriptOid:"543"},c:442,z:"1",d:389,k:"div",aP:"pointer"},"545":{o:"content-box",h:"monkey.png",x:"visible",a:187,q:"100% 100%",b:37,j:"absolute",r:"inline",aA:{type:4,javascriptOid:"543"},z:"2",c:442,d:389,k:"div",aP:"pointer",aG:"<% $(el).css(\"border\", \"solid 1px red\") %>"}},timelines:{"541":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"a",e:2089,r:1,s:857,o:"540"},{f:"2",t:0,d:1,i:"b",e:430,r:1,s:426,o:"540"}],identifier:"541",name:"out",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.96666664,i:"a",e:857,r:1,s:-451,o:"540"},{f:"2",t:0,d:0.96666664,i:"b",e:426,r:1,s:442,o:"540"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0.96666664}},sceneIndex:2,perspective:"600px",oid:"539",onSceneAnimationCompleteAction:{type:4,javascriptOid:"45"},backgroundColor:"#FFFFFF",name:"testout"}];


	
	var javascripts = [{name:"animationComplete",source:"function(hypeDocument, element, event) {\n\tHypeView.animationComplete(hypeDocument);\n}",identifier:"45"},{name:"animationSceneLoad",source:"function(hypeDocument, element, event) {\n\t\tHypeView.animationSceneLoad(hypeDocument);\n}",identifier:"111"},{name:"documentLoaded",source:"function(hypeDocument, element, event) {\n\tHypeView.documentLoaded(hypeDocument);\n}",identifier:"112"},{name:"mouseClick",source:"function(hypeDocument, element, event) {\n\tHypeView.mouseClick(hypeDocument, element, event);\n}",identifier:"542"},{name:"untitledFunction",source:"function(hypeDocument, element, event) {\n\tHypeView.transitionToSceneNamed(hypeDocument, \"monkeys\", \"out\", {something: \"working!\"});\n}",identifier:"543"}];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("test_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

