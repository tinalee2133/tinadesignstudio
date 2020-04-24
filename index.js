(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.darkline = function() {
	this.initialize(img.darkline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,681,678);


(lib.lightline = function() {
	this.initialize(img.lightline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,681,678);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,208);


(lib.tearcircle = function() {
	this.initialize(img.tearcircle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,493);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtKfFQmFikkskqQksksikmDQirmRABm3QgBm2CrmRQCkmEEskqQEskrGFikQGSipG4gBQG4ABGTCpQGFCkEsErQEsEqCkGEQCqGRAAG2QAAG3iqGRQikGDksEsQksEqmFCkQmSCqm5AAQm4AAmSiqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitecircle, new cjs.Rectangle(-216.6,-215.8,433.29999999999995,431.70000000000005), null);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiANAT8Qo/g2l0icQnQjDh1lZQh+l1ECkrQC2jUGijPQCZhMDciMQF/jzBug8QEdiZD3grQG0hLHWCzQGMCWGPFBQM2KXLBhJQDdgXDYh2QCchWDWiwQFBkHAlgbQDSidC8hHQHvi9H0BYQHxBXGXFZQGrFpHrBSQGJBBGihyQErhTEYikQCNhSBQhBQBJhOCEhiQEGjDEjhhQGXiJGVBOQH6BiHaGtQHbGtINBhQGkBOGxiIQE1hiEdjDQCPhhBQhOIA2g3QBGhDBUhBQELjPErhoQGjiRGnBTQIRBnH5HJQH6HIl7FeQkwEZtTDJQphCQs2BZQkCAcj3ATIjEANMjPLAGOIhqAJQiIAKiTAFQiOAFiIAAQk9AAkggbg");
	this.shape.setTransform(0.014,0.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-977.5,-130.3,1955.1,260.6), null);


(lib.tearlinepng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.tearcircle();
	this.instance.parent = this;
	this.instance.setTransform(-250,-246.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tearlinepng, new cjs.Rectangle(-250,-246.5,500,493), null);


(lib.replay_hover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// 圖層_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsBBVIAAiCQBGgWBVgLQCpgVBHA2QBFAzCYAWQDQAdDchHQDShFCkAMQBRAGAoAUIAACCg");
	var mask_graphics_1 = new cjs.Graphics().p("ApgBaIihgRIAAiCIAAgBQAsgKA0gHIA8gIQCXgSBPAiIAOAIQAhAVAzANQA2ANBGAJIAOABQCwASC+ggQAhgGAhgJQCagkB8gKQAtgEAngCIAMADQBKALAlAZIAACDIgbADg");
	var mask_graphics_2 = new cjs.Graphics().p("ApvBgIiSgiIAAiEIAAgBQArgGA1gFIA+gHQCUgPBVAZIAPAHQAhARAzAIQA4AHBEAHIAPABQCuANDDgSQAhgDAigHQCegYB5gLQAvgGAkgFIALADQBEASAhAdIAACFIgZAGg");
	var mask_graphics_3 = new cjs.Graphics().p("Ap9BnIiEgyIAAiGIAAgBIBhgGIA/gFQCQgNBcARIAPAFQAhAOA0ADQA6ACBCAEIAPAAQCtAIDIgDQAigBAhgEQCjgMB3gNQAwgGAhgKIAKAFQA9AXAeAiIAACHIgWAIg");
	var mask_graphics_4 = new cjs.Graphics().p("AqMBvIh1hDIAAiIIAAAAQApABA5gBIA/gEQCOgLBiAIIAQAEQAhALA1gCQA7gEBBACIAPgBQCsACDMANQAiABAhgCQCnABB2gPQAxgHAegOIAJAGQA2AdAbAmIAACJIgUALg");
	var mask_graphics_5 = new cjs.Graphics().p("AqaB3IhnhUIAAiJIAAgBQAoAFA6ABIBAgCQCLgJBpAAIAQACQAhAHA2gGQA9gKA/gBIAPgBQCrgEDRAdQAiADAiAAQCrAOB0gRQAygJAbgRIAIAIQAvAiAYArIAACKIgRAOg");
	var mask_graphics_6 = new cjs.Graphics().p("AqpCJIhYhkIAAiLIAAgBQAnAJA8ADQAfABAigCQCIgHBvgJIAQABQAiAEA2gLQA/gQA9gDIAQgCQCpgKDWAsQAjAGAhADQCwAaBxgTQA0gKAZgVIAGAJQApAoAUAvIAACMIgPARg");
	var mask_graphics_7 = new cjs.Graphics().p("Aq4CcIhJh1IAAiNIAAAAQAlAMA/AFQAfACAigBQCFgGB2gQIARgBQAhAAA3gQQBBgVA7gFIAQgDQCpgQDaA8QAjAIAhAFQC0AmBwgUQA1gLAWgaIAFALQAiAuARA0IAACNIgNAUg");
	var mask_graphics_8 = new cjs.Graphics().p("ArGCvIg7iGIAAiPIAAAAQAkAQBAAHQAgADAjAAQCCgEB8gZIARgCQAigEA4gUQBCgbA5gIIAQgDQCogWDgBLQAiAKAiAIQC4AzBugWQA2gMATgeIAEAMQAbA0AOA3IAACQIgKAXg");
	var mask_graphics_9 = new cjs.Graphics().p("ArVDCIgsiXIAAiQIAAgBQAjAUBCAKQAgADAkABQB+gCCDgiIASgEQAhgHA5gZQBEggA4gLIAQgDQCmgcDlBaQAjANAhAKQC9BABrgYQA4gOAQghIADANQAVA5AKA8IAACSIgIAag");
	var mask_graphics_10 = new cjs.Graphics().p("ArjDVIgeioIAAiSIAAAAQAiAXBEAMQAgAFAkAAQB8AACJgqIASgFQAigKA5geQBGgnA2gMIAQgEQClgiDqBqQAjAPAhAMQDCBMBpgZQA5gPANgmIACAPQAOA/AHBBIAACTIgFAdg");
	var mask_graphics_11 = new cjs.Graphics().p("AryDnIgPi4IAAiUIAAAAQAhAcBFANQAhAGAkABQB5ACCQgzIATgGQAhgOA6gjQBIgsA0gPIARgFQCkgnDuB5QAkARAhAPQDFBZBogcQA6gPAKgqIABAQQAHBFAEBFIAACVIgDAfg");
	var mask_graphics_12 = new cjs.Graphics().p("AsBD6IAAleQAgAfBHAPQCNAfDFhNQAkgOBLgzQBKgyAygRQCog6D/CPQD/CPB2giQA6gRAJgtIAAFeg");
	var mask_graphics_13 = new cjs.Graphics().p("AqPDyIhygVIAAlkQAhAUBFAJQAVACAXABQCCADCogqQAdgGAwgXIAjgQQBJgjA1gLQA/gNBIAIQCGASCXA5IAEACQCCAwBqAWQBIARAzgEIAQAAQAzgHAHgfIAAFkIgMACg");
	var mask_graphics_14 = new cjs.Graphics().p("AqiDqIhfgqIAAlpQAhAJBEADIAsgBQCGgGCogTQAegBAvgPIAjgJQBJgVA2gDQBCgEBGAJQCRAYCOAbIAEABIDvAoQBJANA0ABIAOADQAqAEAGgRIAAFpIgKAEg");
	var mask_graphics_15 = new cjs.Graphics().p("Aq1DmIhMg+IAAlvIBkgGIAsgEQCJgPCpAEQAgADAtgGIAkgCQBIgHA5AEQBCAFBFALQCbAfCHgEIADABQB4gHB6AOQBKALA1AFIALAIQAiANAFgDIAAFvIgJAGg");
	var mask_graphics_16 = new cjs.Graphics().p("ArID5Ig5hTIAAl0QAjgNBBgKIArgIQCMgYCqAbQAiAIAsACIAjAFQBIAHA6AMICIAaQClAlCAgiIADAAQBygiCCAKQBLAIA3AKIAIALQAZAYAEALIAAF0IgHAIg");
	var mask_graphics_17 = new cjs.Graphics().p("ArbESIgmhoIAAl5QAjgZBAgRIAsgLQCPghCqAyQAjAMArAMIAjALICFApQBEAVBDAPQCwAsB4hBIACAAQBtg+CKAHQBMAFA4AOIAFAPQARAhADAaIAAF5IgEALg");
	var mask_graphics_18 = new cjs.Graphics().p("AruErIgTh9IAAl/QAkgjA+gXQAUgIAYgHQCSgrCrBJIBOAlIAkATQBHAjA+AbQBGAeBCARQC6AyBwhfIACgBQBohZCSACQBNACA5ATIADATQAIAsACAnIAAF/IgCANg");
	var mask_graphics_19 = new cjs.Graphics().p("AsBFEIAAoWQAxg/BcgfQC4hADXCeQCtB+CGAoQDEA5Bph9QBih3CdgBQBOgBA6AXIAAIWg");
	var mask_graphics_20 = new cjs.Graphics().p("ApqFWIiXg2IAAogIAAAAQA8gwBcgXQDDgwDbB3QCxBeCVAeQDAArB7heQA4gsBCgWQAwgEA8ATQA6ASAsAkIAAHKIgYBAg");
	var mask_graphics_21 = new cjs.Graphics().p("AqdFoIhkhsIAAoqIAAgBQBHgfBcgQQDOggDfBPQC0A/CkAUQC8AdCNg/QA/gdBGgPQAhAYAnAnQAnAlAeAxIAAHTIguAqg");
	var mask_graphics_22 = new cjs.Graphics().p("ArOF7IgziiIAAo2IAAAAQBSgQBcgIQDagQDhAoQC6AfCyAKQC3AOCggfQBHgPBJgHIAkBuQAUA4APA+IAAHcIhGAWg");
	var mask_graphics_23 = new cjs.Graphics().p("AsBGNIAAsZIYDAAIAAMZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-4.05,y:28.2689}).wait(1).to({graphics:mask_graphics_1,x:-4.05,y:27.7226}).wait(1).to({graphics:mask_graphics_2,x:-4.05,y:27.1717}).wait(1).to({graphics:mask_graphics_3,x:-4.05,y:26.4313}).wait(1).to({graphics:mask_graphics_4,x:-4.05,y:25.625}).wait(1).to({graphics:mask_graphics_5,x:-4.05,y:24.8188}).wait(1).to({graphics:mask_graphics_6,x:-4.05,y:23.0032}).wait(1).to({graphics:mask_graphics_7,x:-4.05,y:21.1279}).wait(1).to({graphics:mask_graphics_8,x:-4.05,y:19.2501}).wait(1).to({graphics:mask_graphics_9,x:-4.05,y:17.3711}).wait(1).to({graphics:mask_graphics_10,x:-4.05,y:15.4915}).wait(1).to({graphics:mask_graphics_11,x:-4.05,y:13.6115}).wait(1).to({graphics:mask_graphics_12,x:-4.05,y:11.7403}).wait(1).to({graphics:mask_graphics_13,x:-4.05,y:12.5908}).wait(1).to({graphics:mask_graphics_14,x:-4.05,y:13.3433}).wait(1).to({graphics:mask_graphics_15,x:-4.05,y:13.7388}).wait(1).to({graphics:mask_graphics_16,x:-4.05,y:11.8307}).wait(1).to({graphics:mask_graphics_17,x:-4.05,y:9.3817}).wait(1).to({graphics:mask_graphics_18,x:-4.05,y:6.9126}).wait(1).to({graphics:mask_graphics_19,x:-4.05,y:4.4398}).wait(1).to({graphics:mask_graphics_20,x:-4.05,y:2.6048}).wait(1).to({graphics:mask_graphics_21,x:-4.05,y:0.7699}).wait(1).to({graphics:mask_graphics_22,x:-4.05,y:-1.0651}).wait(1).to({graphics:mask_graphics_23,x:-4.05,y:-2.9}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBkIAAgoIAgAAIgyifIAnAAIAcBoIAchoIAlAAIg3CrQgGASgFAFQgGAFgNAAg");
	this.shape.setTransform(37.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBPQgMAAgEgDQgGgDgEgSQgDANgFAGQgGAFgMAAIgHAAQgsAAABgsIAAhFQgBgsAsAAIAJAAQARAAALASIAAgSIAqAAIAAB6IAPAAIAAAjgAgZAuIAlAAIAAhbIglAAg");
	this.shape_1.setTransform(22.75,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBsIAAjXIAqAAIAADXg");
	this.shape_2.setTransform(7.7,-2.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BiIAAiiIgLAAIAAgiIAbAAQAOAAAGAFQAHADAFAMQAJgSAPgCIAMAAQAsAAAAAsIAAApQAAAqgsAAIgQAAQgJAAgFgEQgEgEgHgJIAABWgAgPgCIApAAIAAg+IgpAAg");
	this.shape_3.setTransform(-7.375,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZBPQgsAAAAgsIAAhDQAAgWAMgMQAOgMAVAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_4.setTransform(-22.425,0.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVBsIAAhXIgoAAIAABXIgxAAIAAjXIBVAAQA0AAAAAqIAAAcQAAAPgHAIQgFAHgPAGQAPAGAFAIQAHAJAAAOIAABIgAgTgOIAnAAIAAg4IgnAAg");
	this.shape_5.setTransform(-37.5,-2.075);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},23).wait(1));

	// 圖層_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFA747").s().p("AgwBkIAAgoIAgAAIgyifIAnAAIAcBoIAchoIAlAAIg4CrQgFASgFAFQgGAFgNAAg");
	this.shape_6.setTransform(37.8,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFA747").s().p("AAiBPQgMAAgEgDQgGgDgEgSQgDANgFAGQgGAFgMAAIgHAAQgsAAABgsIAAhFQgBgsAsAAIAJAAQARAAALASIAAgSIAqAAIAAB6IAPAAIAAAjgAgZAuIAlAAIAAhbIglAAg");
	this.shape_7.setTransform(22.75,0.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFA747").s().p("AgUBsIAAjXIAqAAIAADXg");
	this.shape_8.setTransform(7.7,-2.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFA747").s().p("Ag6BiIAAijIgLAAIAAghIAbAAQAOABAGAEQAHADAFAMQAJgSAPgCIAMAAQAsABAAArIAAApQAAAqgsAAIgQAAQgJAAgFgFQgEgDgHgJIAABWgAgPgDIApAAIAAg+IgpAAg");
	this.shape_9.setTransform(-7.375,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFA747").s().p("AgZBPQgsAAAAgsIAAhDQAAgWAMgMQAOgMAVAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_10.setTransform(-22.425,0.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFA747").s().p("AAVBsIAAhXIgoAAIAABXIgxAAIAAjXIBVAAQA0AAAAAqIAAAcQAAAPgHAIQgFAHgPAGQAPAGAFAIQAHAJAAAOIAABIgAgTgOIAnAAIAAg4IgnAAg");
	this.shape_11.setTransform(-37.5,-2.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-12.8,88.9,25.700000000000003);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFA747").s().p("AgwBkIAAgoIAgAAIgyifIAnAAIAcBoIAchoIAlAAIg3CrQgGASgFAFQgGAFgNAAg");
	this.shape.setTransform(37.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFA747").s().p("AAiBPQgMAAgEgDQgGgDgEgSQgDANgFAGQgGAFgMAAIgHAAQgsAAABgsIAAhFQgBgsAsAAIAJAAQARAAALASIAAgSIAqAAIAAB6IAPAAIAAAjgAgZAuIAlAAIAAhbIglAAg");
	this.shape_1.setTransform(22.75,0.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFA747").s().p("AgUBsIAAjXIAqAAIAADXg");
	this.shape_2.setTransform(7.7,-2.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFA747").s().p("Ag6BiIAAiiIgLAAIAAgiIAbAAQAOAAAGAFQAHADAFAMQAJgSAPgCIAMAAQAsAAAAAsIAAApQAAAqgsAAIgQAAQgJAAgFgEQgEgEgHgJIAABWgAgPgCIApAAIAAg+IgpAAg");
	this.shape_3.setTransform(-7.375,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFA747").s().p("AgZBPQgsAAAAgsIAAhDQAAgWAMgMQAOgMAVAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_4.setTransform(-22.425,0.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFA747").s().p("AAVBsIAAhXIgoAAIAABXIgxAAIAAjXIBVAAQA0AAAAAqIAAAcQAAAPgHAIQgFAHgPAGQAPAGAFAIQAHAJAAAOIAABIgAgTgOIAnAAIAAg4IgnAAg");
	this.shape_5.setTransform(-37.5,-2.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.replay, new cjs.Rectangle(-44.4,-12.8,88.9,25.700000000000003), null);


(lib.orangecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EFA747").ss(3.9).p("Af+AAQAAmdihl7QiblukbkaQkckalvibQl8igmgAAQmfAAl8CgQlvCbkcEaQkbEaibFuQihF7AAGdQAAGfChF7QCbFtEbEaQEcEaFvCbQF8CgGfAAQGgAAF8igQFvibEckaQEbkaCbltQChl7AAmfg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangecircle, new cjs.Rectangle(-206.4,-205.7,412.9,411.4), null);


(lib.orangec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFA747").s().p("EhfNBfOUgncgncAAAg3yUAAAg3xAncgncUAncgncA3xAAAUA3yAAAAncAncUAncAncAAAA3xUAAAA3ygncAncUgncAncg3yAAAUg3xAAAgncgncg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangec, new cjs.Rectangle(-861.8,-861.8,1723.6,1723.6), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-154,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-154,-104,307,208), null);


(lib.lightsqaure = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C7547").s().p("EhMRAABMBMShMAMBMRBL+MhMSBMBg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightsqaure, new cjs.Rectangle(-488.2,-486.4,976.5,972.8), null);


(lib.lightsmallsquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68522A").s().p("Eg1MAAAMA1Mg0/MA1NA0/Mg1NA1Ag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightsmallsquare, new cjs.Rectangle(-340.5,-339.2,681,678.4), null);


(lib.lightline_ok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.lightline();
	this.instance.parent = this;
	this.instance.setTransform(-384,-353,1.0407,1.0407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightline_ok, new cjs.Rectangle(-384,-353,708.7,705.6), null);


(lib.grey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("EiANAT8Qo/g2l0icQnQjDh1lZQh+l1ECkrQC2jUGijPQCZhMDciMQF/jzBug8QEdiZD3grQG0hLHWCzQGMCWGPFBQM3KXLAhJQDdgXDYh2QCchWDWiwQFBkHAlgbQDSidC8hHQHvi9H0BYQHxBXGXFZQGrFpHrBSQGJBBGihyQErhTEYikQCNhSBQhBQBJhOCEhiQEGjDEjhhQGXiJGVBOQH6BiHaGtQHbGtINBhQGkBOGxiIQE1hiEdjDQCPhhBQhOIA2g3QBGhDBUhBQELjPErhoQGjiRGnBTQIRBnH5HJQH6HIl7FeQkwEZtTDJQphCQs2BZQkCAcj3ATIjEANMjPLAGOIhqAJQiIAKiTAFQiOAFiIAAQk9AAkggbg");
	this.shape.setTransform(0.014,0.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grey, new cjs.Rectangle(-977.5,-130.3,1955.1,260.6), null);


(lib.enter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFA747").s().p("AhEBPIAAidIAtAAIAAANIAGABQAIgOASAAIAYAAQAkAAAAAiIAAAvIgoAAIAAgwIg0AAIAAB8g");
	this.shape.setTransform(30.225,2.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFA747").s().p("AgZBPQgsAAAAgsIAAhDQAAgWANgMQAMgMAWAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_1.setTransform(15.175,2.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFA747").s().p("AABBsQgZAAgLgOQgIgMAAgbIAAhAIgTAAIAAgUIATAAIAAhOIAuAAIAABOIA6AAIAAAUIg6AAIAABUIA8AAIAAAhg");
	this.shape_2.setTransform(0.1,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFA747").s().p("AA4BPQgNAAgKgHQgJgJgBgOIAAhWIg4AAIAAB0IgkAAIAAidIAkAAIAAAcQAagcAVAAQAaAAALARQAJANAAAcIAAA5IAKAAIAAAqg");
	this.shape_3.setTransform(-14.95,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFA747").s().p("AhGBsIAAjXICNAAIAAAlIhaAAIAAA3IBZAAIAAAfIhZAAIAAA3IBZAAIAAAlg");
	this.shape_4.setTransform(-30.05,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.enter, new cjs.Rectangle(-37.1,-10.7,74.2,21.5), null);


(lib.citycircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D3D3").s().p("Ag1AgIAohdIBDAeIgoBdg");
	this.shape.setTransform(-94.225,213.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D3D3").s().p("AhoAOIAqhjICnBIIgqBjg");
	this.shape_1.setTransform(-100.375,227.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3D3D3").s().p("AhoANIAqhiICnBIIgqBjg");
	this.shape_2.setTransform(-106.025,239.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D3D3").s().p("AhoAOIAqhjICnBIIgqBjg");
	this.shape_3.setTransform(-111.675,252.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF2CC").s().p("Ah1hTIAgggIDLDGIgfAig");
	this.shape_4.setTransform(-224.4,210.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF2CC").s().p("Ah2hTIAhghIDMDHIghAhg");
	this.shape_5.setTransform(-196.825,182.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3D3D3").s().p("AhLABIBLhNIBNBMIhMBMg");
	this.shape_6.setTransform(-237.5,234.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3D3D3").s().p("AhMABIBMhNIBMBMIhLBMg");
	this.shape_7.setTransform(-248,224);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3D3D3").s().p("AhMABIBMhMIBMBLIhLBNg");
	this.shape_8.setTransform(-228.3,224.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3D3D3").s().p("AhMABIBMhNIBNBMIhMBMg");
	this.shape_9.setTransform(-238.825,214.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3D3D3").s().p("AhLABIBLhNIBMBMIhLBMg");
	this.shape_10.setTransform(-209.95,206.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D3D3").s().p("AhMABIBMhMIBMBLIhLBNg");
	this.shape_11.setTransform(-220.45,195.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3D3D3").s().p("AhMABIBMhNIBMBMIhLBNg");
	this.shape_12.setTransform(-200.75,196.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3D3D3").s().p("AhMABIBMhNIBNBMIhMBMg");
	this.shape_13.setTransform(-211.275,186.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D3D3").s().p("AhMABIBMhNIBMBMIhLBMg");
	this.shape_14.setTransform(-182.4,177.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3D3D3").s().p("AhMABIBMhNIBMBMIhLBMg");
	this.shape_15.setTransform(-192.9,167.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D3D3").s().p("AhMABIBMhMIBMBLIhLBNg");
	this.shape_16.setTransform(-173.2,168.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3D3D3").s().p("AhLAAIBLhLIBNBLIhMBNg");
	this.shape_17.setTransform(-183.7,158.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgUPAoKIDsoUIgsgYIiNDDIjLiRIiJC/IjuirIERl+IgagXIsYMrIj+j5IMfsyQkclSiVmaQiWmcAAm7QAAn2C+nJQC+nKFlliQFjljHLi+QHLi9H3AAQH4AAHLC9QHLC+FkFjQFkFiC/HKQC+HJAAH2QAAH1i+HJQi/HKlkFiQlkFjnLC9QnLC+n4AAQnYAAmzioIjrISgEgNSgmMQm7C7lVFUQlWFUi7G5QjDHJAAHzQAAHyDDHJQC7G5FWFUQFVFUG7C7QHKDCH0AAQH1AAHLjCQG6i7FVlUQFWlUC8m5QDCnJAAnyQAAnzjCnJQi8m5lWlUQlVlVm6i6QnLjCn1AAQn0AAnKDCg");
	this.shape_18.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.citycircle, new cjs.Rectangle(-262.2,-268.6,524.5,537.3), null);


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2E2E2").s().p("AhpBoQgsgdgKgyQgKgyAcgrQAdgrAzgLQApgIAlASQAlATATAkIAFgBQAdgGAYAQQAYAQAGAcQAFAcgQAYQgQAYgcAGQgWAFgUgKQgcAogvAJQgOADgNAAQgkAAgfgVg");
	this.shape.setTransform(0.004,-0.0317);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c3, new cjs.Rectangle(-16.2,-12.5,32.5,25), null);


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2E2E2").s().p("AhCC9QgrgIgjgdIgIAEQgmAQglgLQglgLgOggQgOggARgjQARgiAmgRIAJgCQACguAXglQAXglAogRQA9gcBBAiQAZgeAhgOQA9gaA+AYQA+AYAaA9QAaA9gYA8QgYA+g9AaQg1AYg3gRQgZApgoARQgaAMgcAAQgOAAgOgDg");
	this.shape.setTransform(-0.001,-0.0064);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(-28.5,-19.2,57.1,38.4), null);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2E2E2").s().p("Al4GIQhdgNgwhIQgzhLAchhQAdhhBbg8QBIgxBSgDQBQgEA7ApQAqhCBEguQAPgKANgIQAMgwAggsQAhguAyghQBbg9BiAGQBiAGAvBHQAZAlADAwQACAtgTAwQAmADASAaQAUAdgPApQgPAngqAcQgdAUggAFQgKBBgnA7QgpA9hAArQg7AohEAQQhBAPg9gKIgRANQgsAeg3AAQg1gBgsgeQhHAphJAAQgTAAgTgDg");
	this.shape.setTransform(-0.036,0.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c1, new cjs.Rectangle(-55.1,-39.4,110.2,78.9), null);


(lib.darksquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#515B51").s().p("EhL/AAAMBL/hLtMBMABLtMhMABLug");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.darksquare, new cjs.Rectangle(-486.3,-484.5,972.7,969.1), null);


(lib.darksmallsquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#293329").s().p("Eg1MAAAMA1Mg0/MA1NA0/Mg1NA1Ag");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.darksmallsquare, new cjs.Rectangle(-340.4,-339.2,680.9,678.4), null);


(lib.darkline_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.darkline();
	this.instance.parent = this;
	this.instance.setTransform(-340,-338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.darkline_1, new cjs.Rectangle(-340,-338,681,678), null);


(lib.blksquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("EhyghygMDlBAAAMAAADlBMjlBAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blksquare, new cjs.Rectangle(-742.8,-742.8,1485.6999999999998,1485.6999999999998), null);


(lib.blkcircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("EB8UAAAUAAAAzggkaAkaUgkaAkagzgAAAUgzfAAAgkagkaUgkagkaAAAgzgUAAAgzfAkagkaUAkagkaAzfAAAUAzgAAAAkaAkaUAkaAkaAAAAzfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blkcircle, new cjs.Rectangle(-805.6,-805.6,1611.2,1611.2), null);


(lib.dogtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AgWBAQgjgIg0gyIgsgxIAKgYIAgANQAnAPAnAKQB5AeBCgkQgKAUgQASQgfAngcgEIAJAHQALAGAJgDQgKAIgUAGQgWAGgYAAQgWAAgWgEg");
	this.shape.setTransform(0.025,-0.005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogtail, new cjs.Rectangle(-15.4,-6.8,30.9,13.7), null);


(lib.dogfrontleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AhGAhQgKgHgCgMQgCgMAHgJQAHgKAMgCIBrgSQAMgCAKAHQAKAHACAMQACAMgHAJQgHAKgMACIhrASIgGAAQgJAAgHgFg");
	this.shape.setTransform(-0.016,0.034);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogfrontleg, new cjs.Rectangle(-8.3,-3.8,16.6,7.699999999999999), null);


(lib.dogbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAlQgNgJgBgRQgCgPALgQQAKgQARgFQAQgFANAKQAMAIADASQABAPgKAQQgMAQgQAFQgFABgGAAQgJAAgJgGg");
	this.shape.setTransform(-19.05,-18.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D8D8").s().p("AAXBFQgogMgNgIQgXgNAGgbIALg3QAFgXAIgCIAkAMQAkATgCAdQgBAXADAoQAAAUgOAAQgFAAgHgDg");
	this.shape_1.setTransform(-2.0871,-18.5997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFEFD").s().p("AhrCeQhPg2gZhVQgYhUAshBQAthCBYgIQBXgIBPA2QBQA2AYBVQAZBUgtBCQgtBBhYAJIgWABQhLAAhFgwg");
	this.shape_2.setTransform(1.0469,7.3189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFEFD").s().p("Ag9BcQgigXgFgrQgFgqAagmQAagmApgLQAqgLAhAXQAhAXAFArQAFApgaAnQgaAmgqAKQgMAEgNAAQgaAAgWgPg");
	this.shape_3.setTransform(-9.8,-17.2473);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogbody, new cjs.Rectangle(-23.1,-27.9,46.2,55.8), null);


(lib.dogbackleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AgLBNQgKgHgBgMIgNhsQgBgMAIgJQAHgKAMgBQALgCAKAIQAJAHACAMIAMBsQACAMgIAKQgHAJgMACIgDAAQgJAAgJgHg");
	this.shape.setTransform(-0.0434,0.0434);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogbackleg, new cjs.Rectangle(-3.6,-8.3,7.2,16.700000000000003), null);


(lib.cattail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AB3BpQgZgDgQgVQgMgQgFgZIgBglQAAgkgOgVQgIgNgMgGQgLgHgPABIgGABIgIACIgOAFIgaATQgeAbgjAIQgmAJgigMIACgEQANADAVgBQAQgBARgGQAfgLAXgaIAdgYIARgJIAKgDIAKgCQAVgDAUAIQAUAJAMASQAWAdAFAsIACASQAAAIABAHQADAPAFAJQAGAKAKAEQALAEANgGQANgFAKgMQAKgNAEgRIAEAAQAFATgHATQgIAVgRAMQgQAMgUAAIgIgBg");
	this.shape.setTransform(0.0292,0.0116);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cattail, new cjs.Rectangle(-19.1,-10.6,38.3,21.2), null);


(lib.catfrontleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AglA9QgLAAgIgJQgIgIABgMQAAgLAJgHIBJhDQAIgHALAAQAMAAAHAJQAIAIgBALQAAALgJAIIhJBDQgHAHgLAAIgBAAg");
	this.shape.setTransform(-0.0249,-0.0001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.catfrontleg, new cjs.Rectangle(-6.4,-6.1,12.8,12.2), null);


(lib.catbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8).p("AgGgRIANAj");
	this.shape.setTransform(-16.025,-3.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.8).p("AgPgLIAeAX");
	this.shape_1.setTransform(-14.5,-5.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8).p("AgSgDIAlAH");
	this.shape_2.setTransform(-13.325,-7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFEFD").s().p("AAbDQQhLgVgtg4Qgtg4AGg/QgTADgTgCQgxgFggggQggghAEgqQADgdAWgXQAVgWAggJIAdgJQAhgMAOgPIACAcQBOgIAFgMQADgFACAHQACAIgCALQgFAigZALQAPAQAGAVQAkgRAogDQAsgEArAMQBTAXAuBBQAtBAgTBEQgTBEhIAfQgqATgtAAQghAAgkgLg");
	this.shape_3.setTransform(0.0021,0.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.catbody, new cjs.Rectangle(-28,-21.8,56,43.7), null);


(lib.catbackleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AAFBIQgJgFgEgLIghheQgEgKAFgKQAFgKAKgEQALgEAKAFQAJAFAEAKIAhBeQAEAKgFALQgEAKgLAEQgFACgEAAQgGAAgGgDg");
	this.shape.setTransform(-0.0127,0.0123);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.catbackleg, new cjs.Rectangle(-4.4,-7.4,8.8,14.9), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EiANAT8Qo/g2l0icQnQjDh1lZQh+l1ECkrQC2jUGijPQCZhMDciMQF/jzBug8QEdiZD3grQGzhLHXCzQGLCWGPFBQM4KXLAhJQDdgXDYh2QCchWDWiwQFBkHAlgbQDSidC8hHQHvi9H0BYQHxBXGXFZQGrFpHrBSQGJBBGihyQErhTEYikQCNhSBQhBIA1gzQBGhABSg9QEGjDEjhhQGXiJGVBOQH6BiHaGtQHbGtINBhQGkBOGxiIQE1hiEdjDQCPhhBQhOIA2g3QBGhDBUhBQELjPErhoQGjiRGnBTQIRBnH5HJQH6HIl7FeQkwEZtTDJQphCQs2BZQkCAcj3ATIjEANMjPLAGOQiZAQjsAIQiOAFiIAAQk9AAkggbg");
	this.shape.setTransform(0.014,0.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(-977.5,-130.3,1955.1,260.6), null);


(lib.birdwing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AhDANIgCgsIAIgCIA1ACQA4gCAWgVIgHA1QgSA1gyADIgGAAQgtAAgLgqg");
	this.shape.setTransform(0.025,-0.0155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.birdwing, new cjs.Rectangle(-6.9,-5.5,13.9,11), null);


(lib.birdtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AgWgWIAtAeIglAPg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.birdtail, new cjs.Rectangle(-2.3,-2.3,4.699999999999999,4.699999999999999), null);


(lib.birbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFD").s().p("AgGAEIAGAAIgHgOIAPAHIgHAOg");
	this.shape.setTransform(-7.375,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFEFD").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_1.setTransform(-4.25,-5.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFEFD").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape_2.setTransform(1.175,1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFEFD").s().p("AgMAIQgDgGAFgCIAPgJQAFgDAEAFQACAFgFADIgPAJIgEABQgDAAgBgDg");
	this.shape_3.setTransform(-4.5,5.6383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.birbody, new cjs.Rectangle(-8.1,-8.5,16.299999999999997,17), null);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white
	this.instance = new lib.white();
	this.instance.parent = this;
	this.instance.setTransform(20,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-92,y:49.5},47).to({x:20,y:11.5},47).wait(1));

	// black
	this.instance_1 = new lib.black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:167,y:21.5},47).to({x:84,y:-11.5},47).wait(1));

	// grey
	this.instance_2 = new lib.grey();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-84,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:13,y:-15.5},47).to({x:-84,y:11.5},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1069.5,-145.8,2214.1,325.6);


(lib.tearline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.tearlinepng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.5,-350.5,701,701.1);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.replay();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,-0.05);

	this.instance_1 = new lib.replay_hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,11.75,1,1,0,0,0,-4,11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBkIAAgoIAgAAIgyifIAnAAIAcBoIAchoIAlAAIg3CrQgGASgFAFQgGAFgNAAg");
	this.shape.setTransform(55.7011,4.2941,1.4726,1.4726);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBPQgMAAgEgDQgGgDgEgSQgDANgFAGQgGAFgMAAIgHAAQgsAAABgsIAAhFQgBgsAsAAIAJAAQARAAALASIAAgSIAqAAIAAB6IAPAAIAAAjgAgZAuIAlAAIAAhbIglAAg");
	this.shape_1.setTransform(33.5378,1.1647,1.4726,1.4726);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBsIAAjXIAqAAIAADXg");
	this.shape_2.setTransform(11.3746,-3.0323,1.4726,1.4726);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BiIAAiiIgLAAIAAgiIAbAAQAOAAAGAFQAHADAFAMQAJgSAPgCIAMAAQAsAAAAAsIAAApQAAAqgsAAIgQAAQgJAAgFgEQgEgEgHgJIAABWgAgPgCIApAAIAAg+IgpAAg");
	this.shape_3.setTransform(-10.8255,3.9996,1.4726,1.4726);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZBPQgsAAAAgsIAAhDQAAgWAMgMQAOgMAVAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_4.setTransform(-32.9887,1.1647,1.4726,1.4726);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVBsIAAhXIgoAAIAABXIgxAAIAAjXIBVAAQA0AAAAAqIAAAcQAAAPgHAIQgFAHgPAGQAPAGAFAIQAHAJAAAOIAABIgAgTgOIAnAAIAAg4IgnAAg");
	this.shape_5.setTransform(-55.1888,-3.0323,1.4726,1.4726);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#34ADAA").ss(1,1,1).p("Ar3ldIXvAAIAAK7I3vAAg");
	this.shape_6.setTransform(1,1.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ar3FeIAAq7IXvAAIAAK7g");
	this.shape_7.setTransform(1,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-34.9,159,72);


(lib.enter_hover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// 圖層_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsBBVIAAiCQBGgWBVgLQCpgVBHA2QBFAzCYAWQDQAdDchHQDShFCkAMQBRAGAoAUIAACCg");
	var mask_graphics_1 = new cjs.Graphics().p("ApgBaIihgRIAAiCIAAgBQAsgKA0gHIA8gIQCXgSBPAiIAOAIQAhAVAzANQA2ANBGAJIAOABQCwASC+ggQAhgGAhgJQCagkB8gKQAtgEAngCIAMADQBKALAlAZIAACDIgbADg");
	var mask_graphics_2 = new cjs.Graphics().p("ApvBgIiSgiIAAiEIAAgBQArgGA1gFIA+gHQCUgPBVAZIAPAHQAhARAzAIQA4AHBEAHIAPABQCuANDDgSQAhgDAigHQCegYB5gLQAvgGAkgFIALADQBEASAhAdIAACFIgZAGg");
	var mask_graphics_3 = new cjs.Graphics().p("Ap9BnIiEgyIAAiGIAAgBIBhgGIA/gFQCQgNBcARIAPAFQAhAOA0ADQA6ACBCAEIAPAAQCtAIDIgDQAigBAhgEQCjgMB3gNQAwgGAhgKIAKAFQA9AXAeAiIAACHIgWAIg");
	var mask_graphics_4 = new cjs.Graphics().p("AqMBvIh1hDIAAiIIAAAAQApABA5gBIA/gEQCOgLBiAIIAQAEQAhALA1gCQA7gEBBACIAPgBQCsACDMANQAiABAhgCQCnABB2gPQAxgHAegOIAJAGQA2AdAbAmIAACJIgUALg");
	var mask_graphics_5 = new cjs.Graphics().p("AqaB3IhnhUIAAiJIAAgBQAoAFA6ABIBAgCQCLgJBpAAIAQACQAhAHA2gGQA9gKA/gBIAPgBQCrgEDRAdQAiADAiAAQCrAOB0gRQAygJAbgRIAIAIQAvAiAYArIAACKIgRAOg");
	var mask_graphics_6 = new cjs.Graphics().p("AqpCJIhYhkIAAiLIAAgBQAnAJA8ADQAfABAigCQCIgHBvgJIAQABQAiAEA2gLQA/gQA9gDIAQgCQCpgKDWAsQAjAGAhADQCwAaBxgTQA0gKAZgVIAGAJQApAoAUAvIAACMIgPARg");
	var mask_graphics_7 = new cjs.Graphics().p("Aq4CcIhJh1IAAiNIAAAAQAlAMA/AFQAfACAigBQCFgGB2gQIARgBQAhAAA3gQQBBgVA7gFIAQgDQCpgQDaA8QAjAIAhAFQC0AmBwgUQA1gLAWgaIAFALQAiAuARA0IAACNIgNAUg");
	var mask_graphics_8 = new cjs.Graphics().p("ArGCvIg7iGIAAiPIAAAAQAkAQBAAHQAgADAjAAQCCgEB8gZIARgCQAigEA4gUQBCgbA5gIIAQgDQCogWDgBLQAiAKAiAIQC4AzBugWQA2gMATgeIAEAMQAbA0AOA3IAACQIgKAXg");
	var mask_graphics_9 = new cjs.Graphics().p("ArVDCIgsiXIAAiQIAAgBQAjAUBCAKQAgADAkABQB+gCCDgiIASgEQAhgHA5gZQBEggA4gLIAQgDQCmgcDlBaQAjANAhAKQC9BABrgYQA4gOAQghIADANQAVA5AKA8IAACSIgIAag");
	var mask_graphics_10 = new cjs.Graphics().p("ArjDVIgeioIAAiSIAAAAQAiAXBEAMQAgAFAkAAQB8AACJgqIASgFQAigKA5geQBGgnA2gMIAQgEQClgiDqBqQAjAPAhAMQDCBMBpgZQA5gPANgmIACAPQAOA/AHBBIAACTIgFAdg");
	var mask_graphics_11 = new cjs.Graphics().p("AryDnIgPi4IAAiUIAAAAQAhAcBFANQAhAGAkABQB5ACCQgzIATgGQAhgOA6gjQBIgsA0gPIARgFQCkgnDuB5QAkARAhAPQDFBZBogcQA6gPAKgqIABAQQAHBFAEBFIAACVIgDAfg");
	var mask_graphics_12 = new cjs.Graphics().p("AsBD6IAAleQAgAfBHAPQCNAfDFhNQAkgOBLgzQBKgyAygRQCog6D/CPQD/CPB2giQA6gRAJgtIAAFeg");
	var mask_graphics_13 = new cjs.Graphics().p("AqPDyIhygVIAAlkQAhAUBFAJQAVACAXABQCCADCogqQAdgGAwgXIAjgQQBJgjA1gLQA/gNBIAIQCGASCXA5IAEACQCCAwBqAWQBIARAzgEIAQAAQAzgHAHgfIAAFkIgMACg");
	var mask_graphics_14 = new cjs.Graphics().p("AqiDqIhfgqIAAlpQAhAJBEADIAsgBQCGgGCogTQAegBAvgPIAjgJQBJgVA2gDQBCgEBGAJQCRAYCOAbIAEABIDvAoQBJANA0ABIAOADQAqAEAGgRIAAFpIgKAEg");
	var mask_graphics_15 = new cjs.Graphics().p("Aq1DmIhMg+IAAlvIBkgGIAsgEQCJgPCpAEQAgADAtgGIAkgCQBIgHA5AEQBCAFBFALQCbAfCHgEIADABQB4gHB6AOQBKALA1AFIALAIQAiANAFgDIAAFvIgJAGg");
	var mask_graphics_16 = new cjs.Graphics().p("ArID5Ig5hTIAAl0QAjgNBBgKIArgIQCMgYCqAbQAiAIAsACIAjAFQBIAHA6AMICIAaQClAlCAgiIADAAQBygiCCAKQBLAIA3AKIAIALQAZAYAEALIAAF0IgHAIg");
	var mask_graphics_17 = new cjs.Graphics().p("ArbESIgmhoIAAl5QAjgZBAgRIAsgLQCPghCqAyQAjAMArAMIAjALICFApQBEAVBDAPQCwAsB4hBIACAAQBtg+CKAHQBMAFA4AOIAFAPQARAhADAaIAAF5IgEALg");
	var mask_graphics_18 = new cjs.Graphics().p("AruErIgTh9IAAl/QAkgjA+gXQAUgIAYgHQCSgrCrBJIBOAlIAkATQBHAjA+AbQBGAeBCARQC6AyBwhfIACgBQBohZCSACQBNACA5ATIADATQAIAsACAnIAAF/IgCANg");
	var mask_graphics_19 = new cjs.Graphics().p("AsBFEIAAoWQAxg/BcgfQC4hADXCeQCtB+CGAoQDEA5Bph9QBih3CdgBQBOgBA6AXIAAIWg");
	var mask_graphics_20 = new cjs.Graphics().p("ApqFWIiXg2IAAogIAAAAQA8gwBcgXQDDgwDbB3QCxBeCVAeQDAArB7heQA4gsBCgWQAwgEA8ATQA6ASAsAkIAAHKIgYBAg");
	var mask_graphics_21 = new cjs.Graphics().p("AqdFoIhkhsIAAoqIAAgBQBHgfBcgQQDOggDfBPQC0A/CkAUQC8AdCNg/QA/gdBGgPQAhAYAnAnQAnAlAeAxIAAHTIguAqg");
	var mask_graphics_22 = new cjs.Graphics().p("ArOF7IgziiIAAo2IAAAAQBSgQBcgIQDagQDhAoQC6AfCyAKQC3AOCggfQBHgPBJgHIAkBuQAUA4APA+IAAHcIhGAWg");
	var mask_graphics_23 = new cjs.Graphics().p("AsBGNIAAsZIYDAAIAAMZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-4.05,y:28.2689}).wait(1).to({graphics:mask_graphics_1,x:-4.05,y:27.7226}).wait(1).to({graphics:mask_graphics_2,x:-4.05,y:27.1717}).wait(1).to({graphics:mask_graphics_3,x:-4.05,y:26.4313}).wait(1).to({graphics:mask_graphics_4,x:-4.05,y:25.625}).wait(1).to({graphics:mask_graphics_5,x:-4.05,y:24.8188}).wait(1).to({graphics:mask_graphics_6,x:-4.05,y:23.0032}).wait(1).to({graphics:mask_graphics_7,x:-4.05,y:21.1279}).wait(1).to({graphics:mask_graphics_8,x:-4.05,y:19.2501}).wait(1).to({graphics:mask_graphics_9,x:-4.05,y:17.3711}).wait(1).to({graphics:mask_graphics_10,x:-4.05,y:15.4915}).wait(1).to({graphics:mask_graphics_11,x:-4.05,y:13.6115}).wait(1).to({graphics:mask_graphics_12,x:-4.05,y:11.7403}).wait(1).to({graphics:mask_graphics_13,x:-4.05,y:12.5908}).wait(1).to({graphics:mask_graphics_14,x:-4.05,y:13.3433}).wait(1).to({graphics:mask_graphics_15,x:-4.05,y:13.7388}).wait(1).to({graphics:mask_graphics_16,x:-4.05,y:11.8307}).wait(1).to({graphics:mask_graphics_17,x:-4.05,y:9.3817}).wait(1).to({graphics:mask_graphics_18,x:-4.05,y:6.9126}).wait(1).to({graphics:mask_graphics_19,x:-4.05,y:4.4398}).wait(1).to({graphics:mask_graphics_20,x:-4.05,y:2.6048}).wait(1).to({graphics:mask_graphics_21,x:-4.05,y:0.7699}).wait(1).to({graphics:mask_graphics_22,x:-4.05,y:-1.0651}).wait(1).to({graphics:mask_graphics_23,x:-4.05,y:-2.9}).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEBPIAAidIAtAAIAAANIAGABQAIgOASAAIAYAAQAkAAAAAiIAAAvIgoAAIAAgwIg0AAIAAB8g");
	this.shape.setTransform(30.225,2.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBPQgsAAAAgsIAAhDQAAgWANgMQAMgMAWAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_1.setTransform(15.175,2.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABBsQgZAAgKgOQgJgMAAgbIAAhAIgSAAIAAgUIASAAIAAhOIAuAAIAABOIA6AAIAAAUIg6AAIAABUIA8AAIAAAhg");
	this.shape_2.setTransform(0.1,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA5BPQgOAAgKgIQgJgIgBgNIAAhXIg4AAIAAB0IgkAAIAAidIAkAAIAAAcQAagcAVAAQAaAAALAQQAJAOAAAcIAAA5IAKAAIAAAqg");
	this.shape_3.setTransform(-14.95,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGBsIAAjXICNAAIAAAlIhaAAIAAA3IBZAAIAAAfIhZAAIAAA3IBZAAIAAAlg");
	this.shape_4.setTransform(-30.05,0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},23).wait(1));

	// 圖層_1
	this.instance = new lib.enter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-10.7,74.2,21.5);


(lib.enter_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.enter();
	this.instance.parent = this;

	this.instance_1 = new lib.enter_hover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,11.75,1,1,0,0,0,-4,11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEBPIAAidIAtAAIAAANIAGABQAIgOASAAIAYAAQAkAAAAAiIAAAvIgoAAIAAgwIg0AAIAAB8g");
	this.shape.setTransform(45.5666,4.7035,1.5012,1.5012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBPQgsAAAAgsIAAhDQAAgWANgMQAMgMAWAAIA2AAQAmAAAAAuIAAAlIhgAAIAAAsIBAAAIAAAegAgagHIA6AAIAAgpIg6AAg");
	this.shape_1.setTransform(22.9739,4.7035,1.5012,1.5012);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABBsQgZAAgKgOQgJgMAAgbIAAhAIgSAAIAAgUIASAAIAAhOIAuAAIAABOIA6AAIAAAUIg6AAIAABUIA8AAIAAAhg");
	this.shape_2.setTransform(0.3437,0.4252,1.5012,1.5012);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA5BPQgOAAgKgIQgJgIgBgNIAAhXIg4AAIAAB0IgkAAIAAidIAkAAIAAAcQAagcAVAAQAaAAALAQQAJAOAAAcIAAA5IAKAAIAAAqg");
	this.shape_3.setTransform(-22.249,4.741,1.5012,1.5012);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGBsIAAjXICNAAIAAAlIhaAAIAAA3IBZAAIAAAfIhZAAIAAA3IBZAAIAAAlg");
	this.shape_4.setTransform(-44.9167,0.4252,1.5012,1.5012);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ApnD1IAAnoITPAAIAAHog");
	this.shape_5.setTransform(1.825,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-23.3,153.9,60);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// c3
	this.instance = new lib.c3();
	this.instance.parent = this;
	this.instance.setTransform(78.95,-28.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:63.15,y:-14.65},40).to({x:78.95,y:-28.65},49).wait(1));

	// c2
	this.instance_1 = new lib.c2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.85,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:39.7},40).to({y:12.7},49).wait(1));

	// c1
	this.instance_2 = new lib.c1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40.1,1.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-23.25},40).to({y:1.75},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-62.7,190.4,121.6);


(lib.dog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dogbody
	this.instance = new lib.dogbody();
	this.instance.parent = this;
	this.instance.setTransform(-9.95,-3.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// dogtail
	this.instance_1 = new lib.dogtail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.75,6.7,1,1,0,0,0,-15.4,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-6.8,rotation:-44.9994,y:6.75},4).to({regY:-6.9,rotation:0,y:6.7},5).to({regX:-15.3,rotation:48.9795,x:7.8,y:6.75},5).to({regX:-15.4,rotation:0,x:7.75,y:6.7},5).wait(1));

	// dogbackleg
	this.instance_2 = new lib.dogbackleg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.3,14.95,1,1,0,0,0,-0.1,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:44.9994,x:-3.35},9).to({rotation:0,x:-3.3},10).wait(1));

	// dogfrontleg
	this.instance_3 = new lib.dogfrontleg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21.25,2.3,1,1,0,0,0,9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-59.9996,y:2.25},9).to({rotation:0,y:2.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-31.6,77.80000000000001,70.6);


(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// catbody
	this.instance = new lib.catbody();
	this.instance.parent = this;
	this.instance.setTransform(-13,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// tail
	this.instance_1 = new lib.cattail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.6,4,1,1,0,0,0,-17.2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-17.1,regY:-1.6,rotation:-21.6985,x:4.65,y:3.95},4).to({regX:-17.2,regY:-1.5,rotation:0,x:4.6,y:4},5).to({regX:-17.1,regY:-1.6,rotation:29.9992,x:4.75,y:3.95},5).to({regX:-17.2,regY:-1.5,rotation:0,x:4.6,y:4},5).wait(1));

	// backleg
	this.instance_2 = new lib.catbackleg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.7,9.65,1,1,0,0,0,-4.4,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:59.9996,x:-1.65,y:9.7},9).to({rotation:0,x:-1.7,y:9.65},10).wait(1));

	// fraontleg
	this.instance_3 = new lib.catfrontleg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.65,4.1,1,1,0,0,0,6.4,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-6.2,rotation:-29.9992,y:4.05},9).to({regY:-6.1,rotation:0,y:4.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-24.6,83.9,57.300000000000004);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// birbody
	this.instance = new lib.birbody();
	this.instance.parent = this;
	this.instance.setTransform(-3.05,-0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// birdtail
	this.instance_1 = new lib.birdtail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.2,4.65,1,1,0,0,0,-2.3,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-2.4,rotation:-29.9992,x:1.1,y:4.7},9).to({regX:-2.3,rotation:0,x:1.2,y:4.65},10).wait(1));

	// birdwing
	this.instance_2 = new lib.birdwing();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,0.15,1,1,0,0,0,-4.4,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-26.4747,x:-0.25,y:0.2},4).to({rotation:0,x:-0.2,y:0.15},5).to({regX:-4.3,rotation:-18.7087,x:-0.1,y:0.2},4).to({regX:-4.4,rotation:0,x:-0.2,y:0.15},1).to({regX:-4.3,rotation:-18.9738,x:-0.1,y:0.2},1).to({regX:-4.4,rotation:0,x:-0.2,y:0.15},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-12.1,22.7,21.4);


(lib._2bigsquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.lightsqaure();
	this.instance.parent = this;
	this.instance.setTransform(596.4,0);

	this.instance_1 = new lib.darksquare();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-598.25,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._2bigsquare, new cjs.Rectangle(-1084.6,-486.4,2169.3,972.8), null);


(lib.cityline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.dog();
	this.instance.parent = this;
	this.instance.setTransform(203.85,-205.2);

	this.instance_1 = new lib.bird();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.4,-253.8);

	this.instance_2 = new lib.cat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.25,-263.2);

	this.instance_3 = new lib.citycircle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cityline, new cjs.Rectangle(-262.2,-287.8,524.5,575.7), null);


(lib.citycirclewithanimal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.cityline();
	this.instance.parent = this;
	this.instance.setTransform(-0.95,0.3,1,1,0,0,0,10.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.9,-364.6,729.8,729.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
		
		/* 滑鼠按鍵事件
		您可將函數增加至您自訂的程式碼，按一下特定元件實體，就會執行該函數。
		
		指示:
		1. 在下方含有「// 啟動您的自訂程式碼」的程式碼之後，將自訂的程式碼加入新行。
		按下元件實體時，就會執行程式碼。
		*/
		
		this.replay_btn.addEventListener("click", replay.bind(this));
		
		function replay()
		{
			this.gotoAndPlay(0);
		}
		
		/* 滑鼠按鍵事件
		您可將函數增加至您自訂的程式碼，按一下特定元件實體，就會執行該函數。
		
		指示:
		1. 在下方含有「// 啟動您的自訂程式碼」的程式碼之後，將自訂的程式碼加入新行。
		按下元件實體時，就會執行程式碼。
		*/
		
		this.enter_btn.addEventListener("click", enter.bind(this));
		
		function enter()
		{
			this.gotoAndPlay(119);
		}
	}
	this.frame_171 = function() {
		this.addEventListener("tick",autoOpen);
		
		function autoOpen(){
			window.open("rwd/rwd.html", "_top");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(72).call(this.frame_171).wait(1));

	// blkcircle
	this.instance = new lib.blkcircle();
	this.instance.parent = this;
	this.instance.setTransform(600,400);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({scaleX:0.0085,scaleY:0.0085,y:406.35},15).to({scaleX:0.3716,scaleY:0.3716,y:414.7},20).to({regX:0.1,scaleX:0.9367,scaleY:0.9367,x:600.05,y:408.55},12).to({_off:true},1).wait(5));

	// oragec
	this.instance_1 = new lib.orangec();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,400);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).to({_off:false},0).to({scaleX:0.0169,scaleY:0.0169},16).to({_off:true},1).wait(1));

	// enter
	this.instance_2 = new lib.enter();
	this.instance_2.parent = this;
	this.instance_2.setTransform(676,547,14.9016,14.9016);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.enter_btn = new lib.enter_btn();
	this.enter_btn.name = "enter_btn";
	this.enter_btn.parent = this;
	this.enter_btn.setTransform(676,544.45);
	new cjs.ButtonHelper(this.enter_btn, 0, 1, 2, false, new lib.enter_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},89).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.enter_btn}]},1).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_2}]},5).to({state:[]},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({scaleX:1,scaleY:1,y:544.4,alpha:1},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:10.7479,scaleY:10.7479,x:1431.95,y:523.95,alpha:0},5).to({_off:true},1).wait(47));

	// replay
	this.instance_3 = new lib.replay();
	this.instance_3.parent = this;
	this.instance_3.setTransform(528.9,546.5,5.2825,5.2825,0,0,0,0.2,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(528.25,546.55);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.replay_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},89).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.replay_btn}]},1).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).to({state:[]},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:528.2,alpha:1},9).to({_off:true,x:528.25,y:546.55},1).wait(20).to({_off:false,x:528.2,y:546.5},0).wait(5).to({scaleX:10.7479,scaleY:10.7479,x:-156.5,alpha:0},5).to({_off:true},1).wait(42));

	// logo
	this.instance_4 = new lib.logo_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(599.45,393.3,6.7756,6.7756);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(-1)).to({regX:0.1,scaleX:0.6188,scaleY:0.6188,x:599.5},5,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:599.45},5,cjs.Ease.get(-1)).wait(30).to({scaleX:7.1606,scaleY:7.1606,alpha:0},20).to({_off:true},1).wait(32));

	// orangecircle
	this.instance_5 = new lib.orangecircle();
	this.instance_5.parent = this;
	this.instance_5.setTransform(600.2,411.9,3.8076,3.8076,0,0,0,0.2,0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({regX:0,regY:0,scaleX:0.2586,scaleY:0.2586,x:599.45,y:411.15},10).to({scaleX:1,scaleY:1},10).wait(60).to({scaleX:0.1815,scaleY:0.1815},10).to({regY:0.1,scaleX:2.0901,scaleY:2.0901,y:411.25},5).to({scaleX:4.0612,scaleY:4.0612,y:411.3},5).to({_off:true},1).wait(32));

	// whitecircle
	this.instance_6 = new lib.whitecircle();
	this.instance_6.parent = this;
	this.instance_6.setTransform(599.45,411.15,0.0512,0.0512);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({scaleX:1.8112,scaleY:1.8112},15).to({scaleX:1,scaleY:1,x:600.35,y:410.3},15).wait(60).to({regY:0.1,scaleX:1.9153,scaleY:1.9153,y:410.4},10).to({regY:0,scaleX:0.3804,scaleY:0.3804,y:410.5},10).to({scaleX:3.7077,scaleY:3.7077,y:410.3},15).wait(18));

	// blksquare
	this.instance_7 = new lib.blksquare();
	this.instance_7.parent = this;
	this.instance_7.setTransform(600,400,0.0134,0.0134);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360},11).to({scaleX:0.0134,scaleY:0.0134,rotation:0},34).to({_off:true},1).wait(7));

	// tearline
	this.instance_8 = new lib.tearline();
	this.instance_8.parent = this;
	this.instance_8.setTransform(600.65,428.8,0.2271,0.2271,0,0,0,0.2,18.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(49).to({_off:false},0).to({regX:0.3,regY:17.9,scaleX:1,scaleY:1,x:598.65,y:427.7,alpha:1},10).wait(60).to({regX:0.4,scaleX:2.0263,scaleY:2.0263,x:598.85,y:427.65},5).to({regX:0.5,scaleX:0.1065,scaleY:0.1065,x:598.7,y:427.75},10).to({_off:true},1).wait(37));

	// water
	this.instance_9 = new lib.water();
	this.instance_9.parent = this;
	this.instance_9.setTransform(561.05,950.25);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({y:821.15},10,cjs.Ease.get(-1)).to({y:853.35},5,cjs.Ease.get(1)).to({y:821.15},5,cjs.Ease.get(-1)).wait(60).to({regX:0.1,scaleX:1.8983,scaleY:1.8983,x:561.25,y:755.15},20).to({scaleX:0.4498,scaleY:0.4498,y:906.75},10).to({_off:true},1).wait(22));

	// darkline
	this.instance_10 = new lib.darkline_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.8,424.8,1.041,1.041);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).wait(50).to({x:-105.95,alpha:0},10).to({_off:true},1).wait(42));

	// lightline_ok
	this.instance_11 = new lib.lightline_ok();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1230.75,403.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(69).to({_off:false},0).wait(50).to({x:1333.45,alpha:0},10).to({_off:true},1).wait(42));

	// darksmallsquare
	this.instance_12 = new lib.darksmallsquare();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-349.5,424.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({x:0.65},20).wait(40).to({rotation:-360,x:-373.5},20).to({_off:true},1).wait(32));

	// lightsmallsquare
	this.instance_13 = new lib.lightsmallsquare();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1558.85,403.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).to({x:1200.85},20).wait(40).to({rotation:360,x:1557.9},20).to({_off:true},1).wait(32));

	// cloud
	this.instance_14 = new lib.cloud();
	this.instance_14.parent = this;
	this.instance_14.setTransform(441,99.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({_off:false},0).wait(85).to({_off:true},1).wait(42));

	// _bigsquare
	this.instance_15 = new lib._2bigsquare();
	this.instance_15.parent = this;
	this.instance_15.setTransform(600,400,0.0946,0.0946);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(49).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360},20).to({scaleX:0.8224,scaleY:0.8224},5).to({scaleX:1,scaleY:1},5).wait(40).to({scaleX:0.0531,scaleY:0.0531},15).to({regX:0.1,regY:0.1,scaleX:1.6702,scaleY:1.6702,rotation:0,x:600.15,y:400.15},20).to({_off:true},1).wait(17));

	// citycirclewithanimal
	this.instance_16 = new lib.citycirclewithanimal();
	this.instance_16.parent = this;
	this.instance_16.setTransform(598.95,410.05);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(44).to({_off:false},0).wait(75).to({scaleX:3.3132,scaleY:3.3132},20).to({_off:true},1).wait(32));

	// cover (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EBOJCgXUgl1gD4gdigRFUgdigRFgpMgD4Ugg+gDHgm4AFcQ7xD479HxQt+D4obDHMAAAks4MGjzAAAMAAAEs4QnFDGr9D5Q36Hx4ZD4Q1vDd0KAAQriAArBhIg");
	var mask_graphics_1 = new cjs.Graphics().p("EBO6CawQrVhEqoiHQ4ak30fqaQyRpR2VkMQtpigvPg5UgcogBhghIAD6QkjAiknApQ7gDy7yG1QlOBTkfBMQnSB+lRBqQhX2AhV2RQgio6geo6QgPjZgIjVMAAAjizMGgCAAAMADxA3/MAAADiyQgIDMgQDIIgQEOQldCAoKCcIlMBfQ3oGi4IDMQjwAgjtAaQwxB3v0AAQsMAArnhHg");
	var mask_graphics_2 = new cjs.Graphics().p("EBPrCVJQrPg9qih2Q4LkO0Zo5QyLn71yi4QtXhpu5gUUgcQgATggrAD8QkgAjklAoQ7NDr7pF6QlKBIkeBAQnLBtlTBaQiu0xiq1TQhFohg7ojQgejSgQjLMAAAjgvMGcRAAAMAHiAzrMAAADgvQgRC2ggCuIggDwQlcBnn/CBIlIBNQ3XFU32ChQjtAZjrAUQvgBWusAAQtKAAsghFg");
	var mask_graphics_3 = new cjs.Graphics().p("EBQcCPiQrIg4qdhjQ39jn0SnYQyFmk1PhjQtFgyukAQUgb3AA7ggOAD+QkdAkkiAmQ68Dl7fE+IpkBzQnCBclWBJQkFzij/0WQhnoIhZoLQgtjLgYjBMAAAjesMGYgAAAMALTAvYMAAADerQgZCggwCWIgxDQQlbBPn0BnIlEA7Q3GEF3kB2QjrASjoAPQtuA3tFAAQupAAt4hFg");
	var mask_graphics_4 = new cjs.Graphics().p("EjMcBmPQiKnwh3nzQg8jFggi2MAAAjcpMGUvAAAMAPEArEMAAADcoQgiCLg/B7IhCCyItECCIk+ArQ21C13TBLQjoALjmAJQ8xBF6BhyQrBgwqZhSQ3ui+0Ll4Qx/lO0sgOQs0AFuNA0Q7fCK/xEAIo6BJQ6qDe7UEDQlCAzkeApQm7BMlYA4QlcyTlTzXg");
	var mask_graphics_5 = new cjs.Graphics().p("EjLFBlzQisnXiVncQhLi+goisMAAAjalMGQ+AAAMAS1AmwMAAADalQgrB1hPBiIhSCTQlaAcneAzQiYALiiAOQ2kBm3BAgInKAHQ8dAX5yhiQq6gqqUhBQ3giV0EkYQx5j30JBHQsiA7t4BZQ7HDY/TECIo0BJQ6ZDX7KDIQk+AnkeAfQmzA7laAnQmzxEmoyZg");
	var mask_graphics_6 = new cjs.Graphics().p("EjJuBlYQjOnAiznCQhai5gwihMAAAjYiMGNNAAAMAWmAidMAAADYhQgzBfhfBIQgwA6gyA6QlaAFnTAYQiXACifAFQ2TAX2vgLInFgFQ8JgY5khSQq0gkqOguQ3Rhuz9i3Qx1ihzlCcI5yDwQ6vEm+2EEQkVAlkaAjQ6HDR7ACMQk5AdkeATQmsAqlcAWQoKv1n9xag");
	var mask_graphics_7 = new cjs.Graphics().p("EjIWBk8QjxmnjRmrQhpixg4iYMAAAjWeMGJcAAAIaXeJMAAADWeQg8BJhuAvIhzBVQlZgUnJgCQiUgHidgEQ2Bg32eg3InAgSQ72hG5VhDI02g5Q3DhGz2hWQxvhLzCDxQr/CptLCiQ6XF1+YEFQkTAmkXAiQ51DK62BRQk2ASkeAIQmkAZldAFQpiumpRwcg");
	var mask_graphics_8 = new cjs.Graphics().p("EixgCBSQq5tXqmvfQkTmNjvmUQh4iqhAiOMAAAjUbMGFrAAAIeIZ2MAAADUbQhEAyh/AXIiDA1QlZgsm9gdQiTgPiagNQ1wiG2NhiIm7gfQ7ih05Gg0QqmgWqFgLQ20gezvAMQxpALyfFFQrtDgs2DHQ5+HD97EHQkQAmkUAhQ5kDE6sAWQkyAHkegEQirAEigAAQjiAAjOgHg");
	var mask_graphics_9 = new cjs.Graphics().p("EiYcB/FQktgDkegPQmVgJlhgdQsQsHr7uhQk2l1kMl8QiHikhIiDMAAAjSXMGB6AAAMAh5AViMAAADSXQhNAdiOgDIiTAXQlZhFmyg4QiSgYiXgVQ1fjV17iNIm2gsQ7Oij44gjQqfgQqAAHQ2mAKzoBsQxjBix8GaQrbEWsgDsQ5mIR9eEKQkOAmkRAgQ1GCd1+AAQkXAAkZgGg");
	var mask_graphics_10 = new cjs.Graphics().p("EiUjB8qQkpgOkegaQmNgaljgtQtnq5tQtiQlYldkqlkQiWidhQh5MAAAjQUMF+JAAAMAlqAROMAAADQUQhVAHifgcIijgIQlYhemohSQiPghiVgeQ1Okk1pi4QjZgdjYgbQ67jR4pgVQqYgJp7AZQ2YAyzhDNQxdC4xZHvQrKFNsKEQQ5OJg9AELQkLAnkOAfQwVB3w7AAQo/AApKgig");
	var mask_graphics_11 = new cjs.Graphics().p("EiQpB6JQkmgZkdgmQmGgqllg+Qu+pqukskQl7lElIlMQikiXhZhvMAAAjOQMF6YAAAMApbAM6MAAADORQhegOiug3Ii0gmQlYh3mchsQiOgqiSgmQ08l01YjjQjWgkjWghQ6nkA4bgEQqSgCp2AqQ2IBbzbEtQxXEOw1JEQq5GEr0E1Q42Kt8jEOQkIAnkMAeQtGBdtgAAQsBAAsVhKg");
	var mask_graphics_12 = new cjs.Graphics().p("EiMwB3lQkhgkkegxQl9g7lohQQwVoav5rmQmdkslmk0QiziQhhhkMAAAjMOMF2nAAAMAtMAInMAAADMOQhngli9hPIjFhGQlXiPmSiHQiMgyiPgvQ0rnD1GkOQjUgrjUgmQ6Tkv4MALQqLAEpxA8Q16CDzUGOQxRFlwSKZQqoG6reFaQ4dL78GEQQkFAokJAcQqxBLrEAAQuGAAumh5g");
	var mask_graphics_13 = new cjs.Graphics().p("EiI3B0+Qkdgvkdg8Ql2hMlqhgQxsnMxOqoQm/kTmEkcQjCiKhphaMAAAjKKMFy2AAAMAw9AEUMAAADKKIk9ikQhogyhtgyQlWiomHihQiLg7iMg4Q0aoR00k6QjRgyjSgsQ5/ld3+AbQqEALpsBNQ1sCszMHuQxMG7vvLuQqWHxrIF+Q4FNK7pESQkCAokHAbQo/A9pOAAQvmAAwSitg");
	var mask_graphics_14 = new cjs.Graphics().p("EiN0BwUQ47mR4FsjQnhj6mikFQjRiDhxhQMAAAjIGMGjzAAAMAAADIGQh4hQjdiCQm7kFn8j7Q5asi6CmSUgkegIxggiAFBUgoqAGRggKAblUggLAbmgnkAGRQrgB0r9AAQ04AA2Ollg");
	var mask_graphics_15 = new cjs.Graphics().p("EiPIBsVQ4rlm3hrMQnWjfmXjpQjLh0hthIMAAAjCyMGjzAAAMAAADCyQh0hHjXh0QmtjpnvjgQ4xrM5tlmUgj/gH1ggvAEfUgo8AFlgheAYnUghfAYngn6AFmQrmBor8AAQ07AA1/k/g");
	var mask_graphics_16 = new cjs.Graphics().p("EiQdBoWQ4ak729p1QnLjEmLjNQjFhmhqg/MAAAi9eMGjzAAAMAAAC9eQhwg/jQhmQmgjMnijFQ4Hp15Yk7UgjhgG4gg9AD7UgpMAE7gizAVoUgi0AVogoOAE7QruBcr+AAQ08AA1vkZg");
	var mask_graphics_17 = new cjs.Graphics().p("EiRxBkXQ4JkP2aofQnAipmAixQi/hYhmg2MAAAi4JMGjzAAAMAAAC4JQhrg2jKhYQmTiwnViqQ3eof5CkPUgjDgF8ghKADZUgpdAEPgkIASqUgkIASqgokAEPQrzBPr+AAQ0+AA1hjyg");
	var mask_graphics_18 = new cjs.Graphics().p("EiTGBgZQ34jk12nIQm2iPlziUQi6hKhiguMAAAiy1MGjzAAAMAAACy1QhngtjDhKQmGiUnJiPQ20nI4sjkUgilgE/ghYAC2UgpuADkglbAPrUgldAPsgo6ADjQr6BDsAAAQ0/AA1RjLg");
	var mask_graphics_19 = new cjs.Graphics().p("EiUaBcaQ3oi51TlxQmqh0lnh4Qi0g8hfglMAAAitgMGjzAAAMAAACtgQhjgki9g8Ql4h4m8h0Q2Llx4Xi5UgiGgEDghlACUUgp/AC5gmwAMsUgmxAMtgpQAC5Qr/A1r/AAQ1CAA1Dikg");
	var mask_graphics_20 = new cjs.Graphics().p("EiVvBYbQ3WiN0wkbQmfhYlchcQiuguhbgcMAAAioNMGjzAAAMAAACoNQhfgdi2guQlrhbmvhZQ1ikb4BiNUghogDGghzABxUgqPACNgoFAJvUgoFAJugplACNQsIApsDAAQ1AAA0zh+g");
	var mask_graphics_21 = new cjs.Graphics().p("EiXDBUcQ3Ghi0MjEQmUg+lQg/QiogghYgUMAAAii4MGjzAAAMAAACi4QhbgTivggQlehAmig9Q05jE3rhjUghKgCJgiAABPUgqhABigpZAGvUgpZAGwgp7ABiQsMAdsCAAQ1EAA0lhYg");
	var mask_graphics_22 = new cjs.Graphics().p("EiYYBQdQ21g3zohtQmJgilFgkQiigShUgLMAAAidjMGjzAAAMAAACdjQhXgLiogRQlRgkmVgiQ0Qhu3Wg2UggsgBNgiNAAsUgqxAA2gqtADxUgqvADxgqQAA3QsVAQsHAAQ1CAA0Tgxg");
	var mask_graphics_23 = new cjs.Graphics().p("EiZsBMeQ2lgLzEgXIq3gPIjtgGMAAAiYPMGjzAAAMAAACYPIj1gFIrLgPQzngX3AgLUggOgARgibAAKUgrCAALgsBAAyUgsDAAzgqmAALQsQAEr9AAQ1PAA0OgLg");
	var mask_graphics_24 = new cjs.Graphics().p("EBXfBKvUgrTgAggtWgCMUgtXgCMgq7gAgUgiWgAZgfPAAsQ2TAgyhBAQlzAUkuAUIjjARMAAAiS7MGjzAAAMAAACS7IjqARQk2AVl7ATQy9BA2rAgQ0MAd1WAAQsPAAsngKg");
	var mask_graphics_25 = new cjs.Graphics().p("EBZTBJ0UgrjgBMgurgFKUgurgFLgrRgBLUgingA8ge3ABpQ2DBLx+CWQlnAvkiAxQiRAZhJAPMAAAiNnMGjzAAAMAAACNnQhLAPiUAYQkpAxluAvQyUCW2WBMQz5BD1WAAQsNAAsrgWg");
	var mask_graphics_26 = new cjs.Graphics().p("EBbIBI4Ugr1gB2gv+gIKUgwAgIJgrngB3Ugi4gBegegACmQ1yB2xaDtQlcBKkWBNQiLAnhGAXMAAAiISMGjzAAAMAAACISQhHAYiNAnQkcBNlhBKQxrDt2AB2QzmBq1VAAQsMAAsvgjg");
	var mask_graphics_27 = new cjs.Graphics().p("EBc8BH9UgsFgCigxTgLIUgxUgLIgr9gCiUgjJgCBgeIADiQ1hCiw3FEQlRBlkLBpQiFA1hCAgMAAAiC+MGjzAAAMAAACC+QhCAgiIA1QkOBplUBlQxCFE1qCiQzUCQ1TAAQsLAAs0gvg");
	var mask_graphics_28 = new cjs.Graphics().p("EBexBHBUgsWgDNgyogOGUgypgOHgsRgDNUgjbgCkgdxAEfQ1QDNwTGbQlGCAj/CFQiABDg+ApMAAAh9qMGjzAAAMAAAB9qQg+AoiBBDQkBCGlHCAQwZGa1UDNQzAC31SAAQsKAAs5g8g");
	var mask_graphics_29 = new cjs.Graphics().p("EBglBGGUgsngD5gz9gRFUgz8gRFgsngD4UgjsgDHgdZAFcQ1AD4vvHxQk7Cbj0CiQh5BRg7AxMAAAh4VMGjzAAAMAAAB4VQg6Ayh6BRQj0Chk6CbQvwHx0/D5QytDd1QAAQsJAAs+hIg");
	var mask_graphics_30 = new cjs.Graphics().p("EBheBDoQpLgwpfhQUgkegE2go7gMdQoyirooiUUgpwgLRgk6gC7UgjUgC1gdXAFDQu4ClsXEbQk5BwkeCDQk6CQj2CVQh4BLg+AuQgvrGgrrGQgqn8gVn7MAAAhPRMGhAAAAMACzArjMAAABJLQg2A1hyBSQhCAxhIAxQi6BnjhBlQjQBfjiBVQtTFDwhC0QmEBCmVAsQs/BbuGAAQsLAAtAhEg");
	var mask_graphics_31 = new cjs.Graphics().p("EBiXBBLQpIgspbhKUgkWgEcgoogLXQoxicomiFUgpbgKPgk0gCoUgi8gCjgdVAEpQuvCZsXEEQk5BnkfB5Qk4CEj5CKQh3BFhAAqQheqWhWqYQhTncgrnaMAAAhOvMGeNAAAMAFmAocMAAABIsQgyA4hqBTQg9AzhDAzQi5BejjBbQjPBXjiBNQtSElwbCkQmBA8mSAnQs0BRt2AAQsOAAtCg/g");
	var mask_graphics_32 = new cjs.Graphics().p("EBjPA+uQpEgppXhDUgkOgEDgoWgKRQouiMolh4UgpHgJLgksgCVUgilgCSgdSAERQumCLsZDuQk4BekfBvQk3B5j7B9Qh2BAhDAmQiOpniApqQh8m7hBm6MAAAhONMGbaAAAMAIZAlVMAAABINQgvA7hhBVQg5A1g9A0Qi3BVjmBSQjOBOjjBFQtQEJwUCSQl/A2mQAjQslBItjAAQsUAAtIg7g");
	var mask_graphics_33 = new cjs.Graphics().p("EBkIA8QQpBglpTg9UgkFgDpgoFgJKQorh+okhpUgoygIJgkmgCCUgiNgB/gdQAD3QudB/saDXQk2BVkgBkQk2Buj+ByIi6BcQi9o3iro8QimmchWmZMAAAhNqMGYnAAAMALMAiNMAAABHuQgrA+hZBWQg0A3g4A3Qi2BLjoBJQjNBFjkA9QtODswOCBQl8AwmOAfQsUA+tNAAQscAAtQg3g");
	var mask_graphics_34 = new cjs.Graphics().p("EBlBA5zQo9ghpPg2Ugj+gDQgnzgIEQoohuojhcUgoegHGgkfgBvUgh1gBugdNADeQuVBzsbDAQk1BNkgBZQk0BjkBBlQhzA0hJAfQjsoIjWoNQjPl8hsl4MAAAhNIMGV0AAAIN/fGMAAABHOQgnBChRBXQgvA5gzA5Qi1BCjqA/QjLA9jmA1QtMDOwHBxQl6ApmMAbQsAA0s2AAQsmAAtagyg");
	var mask_graphics_35 = new cjs.Graphics().p("EBl5A3WQo5gepLgvUgj2gC2gnhgG/QolhfohhNUgoKgGEgkYgBbUghfgBcgdKADEQuLBmsdCqQk0BEkgBPQkzBXkEBaQhyAuhLAbQkbnZkBneQj4lciClXMAAAhMnMGTAAAAIQzcAMAAABGuQgjBFhJBYQgqA8gvA6QiyA5jtA2QjKA1jnAtQtLCwwABhQl4AjmJAWQrmArsXAAQs3AAtsgug");
	var mask_graphics_36 = new cjs.Graphics().p("EBmyA04Qo2gapHgpUgjugCcgnOgF4QokhQofhAUgn2gFAgkRgBJUghHgBKgdIACrQuCBZseCUQkzA7khBEQkxBMkGBOQhxAphOAXQlKmpksmxQkik8iXk2MAAAhMEMGQNAAAITmY4MAAABGPQgfBJhBBZQgmA9gpA9QixAvjvAsQjJAtjoAlQtJCTv5BQQl2AdmHASQrEAhrvAAQtQAAuGgqg");
	var mask_graphics_37 = new cjs.Graphics().p("EBnrAybQoygWpEgiUgjmgCDgm8gEyQohhBoegyUgnhgD9gkLgA2UggvgA4gdFACSQt5BMsfB9QkzAykhA7QkwBAkJBCQhvAihSAUQl4l6lXmCQlLkbitkWMAAAhLjMGNaAAAIWZVyMAAABFwQgbBLg5BbQghA/gkA/QiwAmjxAjQjIAkjoAdQtIB2vzA/QlzAWmEAOQqYAYq7AAQtzAAutgmg");
	var mask_graphics_38 = new cjs.Graphics().p("EBojAv9QougSo/gcUgjfgBpgmqgDsQoegyodgkUgnNgC6gkEgAjUggXgAngdDAB6QtwA/sgBnQkyApkhAwQkvA1kMA2QhtAdhVAPQmnlKmClUQl0j7jDj1MAAAhLBMGKnAAAIZMSrMAAABFQQgXBPgxBcQgcBBgfBBQivAdjzAZQjGAbjqAWQtGBZvtAtQlwARmCAKQpPAPprAAQuxAAvygjg");
	var mask_graphics_39 = new cjs.Graphics().p("EBpcAtfQorgPo7gVUgjXgBPgmYgCmQocgjobgVUgm4gB4gj9gAQUggAgAVgdBABgQtmAzsiBQQkxAgkhAmQkuApkOArQhtAXhXAMQnWkbmtkmQmejbjYjUMAAAhKfMGH0AAAIb/PkMAAABExQgTBSgpBdQgXBDgaBDQitATj2AQQjFATjrAOQtEA7vmAdQluALmAAFQnJAHnaAAQwoAAx7ggg");
	var mask_graphics_40 = new cjs.Graphics().p("EjHEAkFQnHi8juizMAAAhJ9MGFBAAAIeyMdMAAABERQgPBWghBeIgnCLQisAJj4AGQjEAMjsAFQtCAevgANQlrADl+ABQ3GAF5pgjQongLo4gOUgjPgA1gmGgBgQoZgUoagIUgmkgA1gj2AADQ/ogD8+BHQteAmsjA5QkwAYkhAbQksAfkSAeQhrARhaAIQoFjrnYj3g");
	var mask_graphics_41 = new cjs.Graphics().p("EjGEAkDQnxickEiTMAAAhJaMGCOAAAMAhlAJVMAAABDyQgLBZgZBfIgdCPQirABj6gEQjDACjtgCQtAABvZgEIrlgGQ2/gM5agXIxXgPUgjHgAcglzgAaQoXgFoaAHUgmOAANgjwAAXQ/QAP88AtQtVAaskAiQkvAPkiARIo+AlQhqAMhdAEQo0i8oCjIg");
	var mask_graphics_42 = new cjs.Graphics().p("EjFFAkAQobh8kZhyMAAAhI4MF/bAAAMAkYAGOMAAABDTQgIBcgQBgIgTCTImmgVQjBgGjvgKQs+gdvTgVQlmgJl6gHQ24gd5KgMQoggEovgBUgjAgACglhAAsQoUALoZAUUgl6ABQgjoAAqQ+5Ag85AVI5yAZIpQAMIpAAOQhoAGhgABQpkiNosiag");
	var mask_graphics_43 = new cjs.Graphics().p("EiBYAnVQtDAAsmgKIpQgHQkogEkZgGQhoAAhigDQqThdpXhsQpEhbkvhRMAAAhIWMF8nAAAMAnMADHMAAABCzQgEBfgIBiIgKCXQingSj/gWImvghQs+g6vLgmQllgOl2gMQ2ygu46AAQodAAorAFUgi4AAXglPABzQoRAaoXAiUglmACTgjiAA8Q8CAu6oAAIkuAAg");
	var mask_graphics_44 = new cjs.Graphics().p("EiYmAluQ3Hg7zah4Qptg7lFgwMAAAhH0MGjzAAAMAAABH0Qkggwo2g8Qxsh31rg8UgeWgBTgiAAAvUgqfAA8gtyAEHUg7dAFVg2uAAAQ15AA1Ig3g");
	var mask_graphics_99 = new cjs.Graphics().p("EiYmAluQ3Hg7zah4Qptg7lFgwMAAAhH0MGjzAAAMAAABH0Qkggwo2g8Qxsh31rg8UgeWgBTgiAAAvUgqfAA8gtyAEHUg7dAFVg2uAAAQ15AA1Ig3g");
	var mask_graphics_119 = new cjs.Graphics().p("EiYmAluQ3Hg7zah4Qptg7lFgwMAAAhH0MGjzAAAMAAABH0Qkggwo2g8Qxsh31rg8UgeWgBTgiAAAvUgqfAA8gtyAEHUg7dAFVg2uAAAQ15AA1Ig3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:643.475,y:468.0698}).wait(1).to({graphics:mask_graphics_1,x:643.475,y:432.0028}).wait(1).to({graphics:mask_graphics_2,x:643.475,y:395.9617}).wait(1).to({graphics:mask_graphics_3,x:643.475,y:360.01}).wait(1).to({graphics:mask_graphics_4,x:643.475,y:329.825}).wait(1).to({graphics:mask_graphics_5,x:643.475,y:312.95}).wait(1).to({graphics:mask_graphics_6,x:643.475,y:296.05}).wait(1).to({graphics:mask_graphics_7,x:643.475,y:279.175}).wait(1).to({graphics:mask_graphics_8,x:643.475,y:262.6262}).wait(1).to({graphics:mask_graphics_9,x:643.475,y:248.4854}).wait(1).to({graphics:mask_graphics_10,x:643.475,y:235.7582}).wait(1).to({graphics:mask_graphics_11,x:643.475,y:223.658}).wait(1).to({graphics:mask_graphics_12,x:643.475,y:211.9264}).wait(1).to({graphics:mask_graphics_13,x:643.475,y:200.4295}).wait(1).to({graphics:mask_graphics_14,x:643.475,y:189.088}).wait(1).to({graphics:mask_graphics_15,x:643.475,y:159.7467}).wait(1).to({graphics:mask_graphics_16,x:643.475,y:130.4101}).wait(1).to({graphics:mask_graphics_17,x:643.475,y:101.0688}).wait(1).to({graphics:mask_graphics_18,x:643.475,y:71.7207}).wait(1).to({graphics:mask_graphics_19,x:643.475,y:42.3793}).wait(1).to({graphics:mask_graphics_20,x:643.475,y:13.0428}).wait(1).to({graphics:mask_graphics_21,x:643.475,y:-16.2986}).wait(1).to({graphics:mask_graphics_22,x:643.475,y:-45.6467}).wait(1).to({graphics:mask_graphics_23,x:643.475,y:-74.988}).wait(1).to({graphics:mask_graphics_24,x:643.475,y:-86.1855}).wait(1).to({graphics:mask_graphics_25,x:643.475,y:-90.8841}).wait(1).to({graphics:mask_graphics_26,x:643.475,y:-95.5826}).wait(1).to({graphics:mask_graphics_27,x:643.475,y:-100.2812}).wait(1).to({graphics:mask_graphics_28,x:643.475,y:-104.9682}).wait(1).to({graphics:mask_graphics_29,x:643.475,y:-109.6667}).wait(1).to({graphics:mask_graphics_30,x:643.475,y:-124.2791}).wait(1).to({graphics:mask_graphics_31,x:643.475,y:-138.9109}).wait(1).to({graphics:mask_graphics_32,x:643.475,y:-153.5238}).wait(1).to({graphics:mask_graphics_33,x:643.475,y:-168.1474}).wait(1).to({graphics:mask_graphics_34,x:643.475,y:-182.7623}).wait(1).to({graphics:mask_graphics_35,x:643.475,y:-197.3804}).wait(1).to({graphics:mask_graphics_36,x:643.475,y:-211.9807}).wait(1).to({graphics:mask_graphics_37,x:643.475,y:-226.6173}).wait(1).to({graphics:mask_graphics_38,x:643.475,y:-241.1929}).wait(1).to({graphics:mask_graphics_39,x:643.475,y:-255.7423}).wait(1).to({graphics:mask_graphics_40,x:643.475,y:-269.3}).wait(1).to({graphics:mask_graphics_41,x:643.475,y:-277.4}).wait(1).to({graphics:mask_graphics_42,x:643.475,y:-285.475}).wait(1).to({graphics:mask_graphics_43,x:643.475,y:-292.0566}).wait(1).to({graphics:mask_graphics_44,x:643.475,y:-295.3464}).wait(55).to({graphics:mask_graphics_99,x:643.475,y:-295.3464}).wait(20).to({graphics:mask_graphics_119,x:643.475,y:-295.3464}).wait(53));

	// black_water
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhhqBCZMAAAiExMDDVAAAMAAACExg");
	this.shape.setTransform(603.75,403.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(119).to({_off:true},1).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-854,-587,3430.2,2374.9);
// library properties:
lib.properties = {
	id: '4EB0A4875885434DA9F407929E3EB250',
	width: 1200,
	height: 800,
	fps: 24,
	color: "#EFA747",
	opacity: 1.00,
	manifest: [
		{src:"images/darkline.png", id:"darkline"},
		{src:"images/lightline.png", id:"lightline"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/tearcircle.png", id:"tearcircle"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4EB0A4875885434DA9F407929E3EB250'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;