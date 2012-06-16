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

var scenes = [{onSceneLoadAction:{type:4,javascriptOid:"112"},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"110",initialValues:{},backgroundColor:"#FFFFFF",name:"dummy"},{onSceneLoadAction:{type:4,javascriptOid:"111"},initialValues:{"536":{o:"content-box",h:"monkey.png",x:"visible",a:128,q:"100% 100%",b:46,j:"absolute",r:"inline",c:442,z:"1",k:"div",d:389},"537":{G:"#000000",aU:8,c:492,aV:8,r:"inline",d:92,s:"",t:16,aG:"<%= something %>",Z:"break-word",w:"New Text",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:963,b:424}},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"1",t:0,d:3.1333334,i:"a",e:1510,r:1,s:128,o:"536"},{f:"1",t:0,d:3.1333334,i:"b",e:424,r:1,s:46,o:"536"},{f:"1",t:0,d:3.1333334,i:"b",e:726,r:1,s:424,o:"537"},{f:"1",t:0,d:3.1333334,i:"a",e:265,r:1,s:963,o:"537"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:3.1333334}},sceneIndex:1,perspective:"600px",oid:"81",onSceneAnimationCompleteAction:{type:4,javascriptOid:"45"},backgroundColor:"#212222",name:"monkeys"}];


	
	var javascripts = [{name:"animationComplete",source:"function(hypeDocument, element, event) {\n\ttry {\n\t\tHypeView.animationComplete(hypeDocument);\n\t} catch(e) {\n\t\tconsole.log(\"error in animationComplete\", e);\n\t}\n}",identifier:"45"},{name:"animationSceneLoad",source:"function(hypeDocument, element, event) {\n\ttry {\n\t\tHypeView.animationSceneLoad(hypeDocument);\n\t} catch(e) {\n\t\tconsole.log(\"error in animationSceneLoad\", e);\n\t}\n}",identifier:"111"},{name:"documentLoaded",source:"function(hypeDocument, element, event) {\n\ttry {\n\t\tHypeView.documentLoaded(hypeDocument);\n\t} catch(e) {\n\t\tconsole.log(\"error in documentLoaded\", e);\n\t}\n}",identifier:"112"}];


	
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

