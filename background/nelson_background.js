(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AACWzIimgFQjTAEhqgBQi6AAiAgaQi9gnighnQhTg0gjg2Qgkg3gChIQgDhFAdg/QAbg8AzgyQAvguA/ghQBjg0CfgbQgmgPgYgoQgWgkgGgvQgNhgAuhcQAuhbBUgvQA7ghBTgNQA0gJBjgEQgEgYAMgaQAKgXAVgTQAagYBAgaQCehCBhgXQCQgjB1AYQBQARBIAtQBHAtAxBBQAuA8gCA1QCwgDCmA/QBcAkAnAyQAWAcAQAxIAcBSQAKAbAZAzQAUAvADAiQAEAzgYA0QgWAvgqApQAuAEAiAmQAhAlAEAwQAFAtgUAuQgSAqgiAlQgcAegrAeQgaATg1AfQhaA2gwAZQhOAphDAXQhFAWh6AVQiqAdhjAFQgnACgyAAIhOgBgEBGvAGDQhogIilgTQiegRhQgQQiDgahfguQhkgwgXhCQgOgnANgtQAMgrAhgcIAagWQAPgNAHgLQAHgMAEgVIAHgkQAVhgB/hKQB+hKCUgVQCUgVCOAkIAeAHQARADAOgDQATgEAVgSQANgKAXgWQAogkA6gOQA1gOA7AGQAyAFA8ATQAoANBBAbQBdAmAzAeQBNAtAtA3QA0BAAIBSQAIBXgyA5IgZAaQgRARgIALQgNATgNAkQgQAsgHAOQggA9hdAuQh7A9ijAQQg6AFhEAAQhQAAhggHgEhKHAExQh7gEhzgLQhNgIgxgKQhEgPgzgaQg8gegogwQgsg0gJg8QgHgsAQghQAPgeAvgfQBLgxBQggQhNgHg9gzQg+g2gJhJQgFgqARhMQAOhDALghQASg3AcgjQAdgkAsgYQAogXAxgLQBKgQBzANQgDhBAEgkQAGg4AagkQApg7BogbQCNglC3AVQCLAQBrAuQB9A1BLBbQgDgZANgYQAMgXAWgQQAhgXA/gLQDegpCiBIQAmARAsAbQAaARAzAjQA5AoAXAcQAgApAJBBQAHAqgCBMQBggIA0AFQBSAHA3AjQAfAUAeAhQAUAXAeApQAdAoANAXQAVAkAIAhQALAsgHBOQgIBGgSAlQgdA3hIAkQgzAZhWATQknBCltAhQkEAYmYAPQhLACgoAIQgeAHg4AUQg6AVgdAHQgkAIgtACIgkABIgugBgEAl8gKMQhqgDhNgLQhjgOhPgeQh9gvgehUQgVg5AZhYQARg+AcghQAlgsBGgTQAvgNBTgEQgcgtAUg4QASg3AvgdQBPgyCBAcQAdAGAKABQAWACAQgIQANgGAOgQIAXgcQAsgtBZADQBaAEBRAtQBRAuAyBLQBTg6BuAOQBtAOBDBMQAiAnAKAwQALA0gZAmQAagKAdALQAdALAQAZQAdArgHBFQgEAwgUApQgUAsgiAdQgiAcgyARQglANg6AJQiCAVijAIQhlAFjCADIiVAAQhPAAgtgBg");
	this.shape.setTransform(538.2052,145.9926);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1076.4,292), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCCC69").s().p("AsRMRQhMhMg6hUQi+kRgBlgQABnLFElGQFGlEHLgBQHMABFFFEQEXEYAoF5QAGA/ABBBQgBHMlFFFQlFFFnMABQnLgBlGlFg");
	this.shape.setTransform(111.05,111.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,222.1,222.1), null);


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("AhYDmIAYgxIG3ouIjyI5IgRAdQgDAFACAGIADAGIAABwIAAACIAAAWQAAAFACADIABARgAF2FZIgEgBIgFgEIhfg0IgFgCIgEgDIgFgDIgCgBIgEgCIhig2IAHgSIABgBIACgFID3pFIgBALQAAAGAEAFQADAEAEABIAfLmgAnBC6IBehCQAEgDACgEQAFAAAFgDIAdgVIACgCQAEgDABgFIAAgCIACAAQAGABAFgEIKDnYIm4IwIgDAFIAAAAIgBABIgYAyg");
	this.shape.setTransform(-158.175,-88.3875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACPHQIgBAAQgGABgFgEIjri9IldghQgGgBgEgFQgCgDgBgDQgFADgFgBQgGgBgEgFQgDgGABgGQABgGAFgDIB2hTQAFgDAFAAQABgFAEgDIAfgVQAFgEAGABIABABIAAgCQABgGAFgDILboZQADgDAEAAIADAAIABAAIABAAIABAAQAFABADAEIABACIACADIAAAGIgCAXIAkNjQABAEgBADIgEAFIgCACIgDACIgEABQgJAEgUgXIhPgrIgFgEIgEgBIhagyIAAACQABAHgFAEIhlBuQgEAEgGABIAAAAQgGAAgFgEgAg4DNIgYAxIDSCoIgCgQQgCgEAAgEIAAgXIAAgCIAAhwIgDgFQgCgGADgGIARgdIDyo5gACqDeIgCAFIAAABIgIASIBiA2IAEADIADABIAEACIAEADIAFACIBgA0IAEAEIAEABIBMAqIgfrmQgEgBgDgEQgEgFAAgGIABgLgAlbCPIheBCIFOAhIAYgzIABgBIAAAAIADgEIG4oxIqDHZQgFADgGgBIgCAAIAAACQgBAFgEAEIgCABIgdAVQgEADgGAAQgBAEgFADg");
	this.shape_1.setTransform(-158.9952,-90.7004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003399").s().p("AiDEMQgCgDgDgBQgDgCgEAAQABgCgHgGIAAgBIB9iuIB2iTIi/E3IgCAFQgBADAAADIAAA6gAg/D0IEznzIAug4IgmBJIAAACIiyIPgAkhDpIHQnBIjeEUIgBABIh8Csg");
	this.shape_2.setTransform(-151.3,-91.8875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhzGhIgDAAQgFgBgDgEIgDgEIg3hOIgTgQIgBAAIAAgBQgEgDgBgFIiTAAIgDAAQgEgBgDgEQgDgDgBgEIgBgDIAAAAIABgDQABgEADgEILIqzQADgCADgCIAEAAIABAAIADAAQAEABADAEQADADABAEIAAADIAAAAIAAADQgBAEgDAEIgbAdIhaCyIi2IcIAAAAQgCAGgGADIgFACIgBAAIgFgBIgBgBIAAAAIhKgZIgJAIIgBABIgoAlIgCABIgbAZQgDADgEABIgDAAgAg2B5Ih9CuIAAABQAHAGgBACQAEAAADACQADABACADIAfAsIAAg6QAAgDABgDIACgFIC/k3gADWjVIkzHzICJAwICyoQIAAgCIAmhJgAhkFCIACgDIACgCIgEgBgAk/ETIB1AAIB8isIABgBIDekUg");
	this.shape_3.setTransform(-148.3,-96.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003399").s().p("AhUDwQADgDAAgFIAAgHIB8iuIE6mGIglBJIgBACIimHvIgDgBQgCgDgDgCIgEgCQgGgCgGACQgGABgDAGIgBAGIgBABIAAAEIAAAVQAAAGAEAEQAFAFAGAAIAEgBIAAABIAAABIgBAEIgCAAQgGAAgEAFQgEAEAAAFIAAAAIgBACQgBADAAADIAAA0IAAACIAAAXQAAAEACAEIABAQgAF2FgIgEgCQgCgCgCgBIhgg1IgFgCIgEgDIgEgCIgDgBIgEgDIhGgmICnnyIA+h6IgBALQAAAGAEAFQADADAEABIAfLmgAnBDBIBehCQAEgDACgEQAFAAAFgDIAdgVIADgEQADgDABgEIAAgBIACAAQAGAAAFgDIKUnlIlfG0IAAABIiACyQgCAEAAAFIAAAFg");
	this.shape_4.setTransform(-158.0625,-89.0875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACQHRIgCAAQgHABgEgDIjri9IldgiQgGAAgEgFQgCgDgBgDQgEACgGgBQgHgBgDgFQgEgFACgGQABgHAFgDIB2hSQAFgDAFAAQABgGAEgCIAfgWQAFgEAGACIABAAIAAgBQABgGAFgEILboZIABAAQAEgDAGAAQAEAAADADIABAAIACgBQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAGgEAEIgTAUIAjNhIAAABQABAFgEAFIgBABQgDADgEABIgCAAQgJAFgUgYIhPgqIgFgEIgEgBIhagyIAAACQAAAGgEAFIhlBtQgEAFgGAAQgGAAgEgEgACCGnIgCgQQgCgEAAgEIAAgXIAAgCIAAg0QAAgDACgDIAAgCIAAAAQAAgFAEgEQAEgEAGgBIACAAIABgEIAAgBIAAgBIgEABQgGAAgFgEQgEgFAAgGIAAgVIAAgDIABgCIABgGQADgFAGgCQAGgCAGACIAEADQADACACACIADABICnnvIAAgCIAlhJIk6GGIh8CuIAAAHQAAAFgCADIDNClgAFkjrIioHyIBGAnIAEACIADABIAEADIAEACIAFACIBgA1QACABACACIAEACIBMApIgfrlQgEgCgDgDQgEgFAAgGIABgLgAlbCRIheBCIFSAhIAAgGQAAgFADgEIB/iyIABgBIFfm0IqVHlQgFADgGAAIgBAAIgBABQgBAFgCADIgEADIgdAVQgEADgGAAQgBAEgFADg");
	this.shape_5.setTransform(-158.8944,-90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},11).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_5},{t:this.shape_4}]},4).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.9,-137.8,98,93.9);


(lib.mountain2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61A5C3").s().p("AVKMGQqRgrqJACQjdAAhCgCQiigFh8gTQgjgGhFgNQhFgNgjgGQhYgOjwgVQjPgSh3gbQAGgFALgBIgCgKQgOABgLgIQBdi1CVi+QByiQC1i+QAugvAbgZQApgmAogYQAqgZBTggQBagiAkgTQAWgMAkgXIA6gjQAkgVA1gXIBcgoQC+hXCiiCQAZgTARAAIgGADQgFgBgHAEQgLAFgLAJIgEADIgJAIIgFAEIgDAFQgDAEgCAFQgLALgKASQgFALgJAXIgoBqQgaBGgKAqQgTBVAMBsQAHBDAcB9QAOA7ALAfQASAxAbAfQAfAlAzAWQAtASA4AGQAqADA9gDIBmgHQCAgFBKAkIAWALQAMAGAKACIAIACQAsA2AyBSIA/BrQAlA7AnAlQAuArBIAmQBNApBUAZQAOAFAMgDIAHgCQAYATAeALQgDAMgOAEQgJACgKAAIgIAAgAImgbQh1hdg7iKQgSgrgRg9QAyBpBOBkQBRBlBzBoQhFgogsgjgAEEroIABgCIABADIgCgBgAEBr0IAAgBIABABIABADIgCgDgADxsFIADABIgCABIgBgCg");
	this.shape.setTransform(0,0.0475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CBFD3").s().p("AJjLtQhUgZhNgpQhIgmgugrQgnglgmg7Ig/hrQgxhSgsg2IgIgCQgKgCgNgGIgVgLQhKgkh/AFIhnAHQg8ADgqgDQg4gGgtgSQgzgWggglQgbgfgRgxQgMgfgNg7Qgch9gHhDQgMhsAThVQAKgqAahGIAohqQAIgXAGgLQAJgSAMgLQACgFACgEIAEgFIAFgEIAIgIIAFgDQALgJAKgFQAIgEAFABIAFgDIABAAIAEgBIABABIABACIACgBIAFACIADAAQACABADADIAKAIIADAIIABAWQAAAGgCACIgBADIAAAEIgDAGIgBAPIgBACIABAEIABAOIAAADQAFAJADANQAMApAhCcQAKAwALAoQARA9ASArQA7CKB0BdQAsAjBGAoIAvAaQCQBMAaAQQA/AnB0BbQBYBFAtAtQBDBFAfBIQAIAUAVBAQAQAyAQAdIAAAAIABACIgCADQgCAEgFADIgHACIgJABQgIAAgJgDgAm3rRIABABIAAgDIgBACgAm6rdIACADIgBgDIgBgBg");
	this.shape_1.setTransform(70.0427,-2.2637);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mountain2, new cjs.Rectangle(-139.7,-77.4,279.5,154.9), null);


(lib.mountain1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CBFD3").s().p("AUHTvQi+gCjghAQiegskkh1Iknh1QiIg3hHggQhyg0hVg2QjZiKhYi5QgjhKgahuIgojAQgzjqhmhoQgzg1h/hKQiAhKgzg0Qg8g8gjhXQgghPgLhdQgJhPAFhiQADg8AMh1IAgABIgXgdIgBgBQAKAAALADIAGACQAVAHAVASQAOAMAUAXIAUAaQB6CgB9BMQAiAUBFAhQBHAiAhATQBLAtBhBZICjCVQAmAfBTA9QBRA7AnAhQByBgCWC9QC8DqA+BBQAqArBUBVQBHBMAmBBQAZAsAuB4QAqBqAlA1QA1BMB2BSQCsB3AVARIA8A1QAkAdAeAOIAVAKQAWAKAIAGQANAJAHALQADAHABAHIAQABIATABIgQABIgSAAIAAAEIgSgEg");
	this.shape.setTransform(79.2607,-31.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#61A5C3").s().p("AX9Y/Qv7gJstglQktgNi6gUQi7gTnLhLQmbhEjsgQQihgLkpgCIuFgHIgXgIIAAABIgLAeIAJgfQCNnWEDk5IBkhyQA+hGAjguQAcglA1hOQA0hNAdgmQA8hNBYhUQA3g0BuhfQCAhvBFg2QBwhYBig7QA2ggBog1QBtg3AxgdQCThVC2iYQBohXDMizQCUh8B/hWQB5hSB1g7IgOgKQAGgBAHABIAWAdIgfgCQgNB1gDA8QgFBjAJBOQALBeAgBOQAkBXA7A9QAzA0CABKQCABKAzA0QBkBpAzDrIAoDAQAaBtAjBJQBZC6DYCKQBVA2ByAzQBHAhCJA2IEoB2QEjB0CeAtQDgA/C/ACIARAFIAAgFIASAAQEJC+EoCNID0BxQCJBFBZBIIAAA4ICUAAQAkAAAVgFQAYgGAPgNQgNATgLAUItbACQpZAAl1gEgEA1TAX3QAIgTAEgIQAIgNAPgHQAPgGAMAIQgoAbgeAkIAIgSgEAgxAOuQgBgHgEgGIAVAPIgQgCgAfmNyQgegOgkgdIg8g0QgVgSish3Qh2hRg1hMQgmg1gphqQgvh5gZgrQglhBhHhMQhVhUgpgsQg+hBi8jrQiYi9hxhfQgogihRg7QhTg8gmggIiiiUQhihahLgsQgggUhGghQhGghgigVQh9hMh5igIgVgaQBrBcCSBhQBaA7DKB6QDBB0BjBCQCeBrBxBoQA9A4BHBNQAqAvBSBeIDJDnQA0A8AcAiQAqA2AcAwQASAgAgBFQAfBEAUAiQAeAzA1BCIBcBvQAdAjBRBzQBEBeAuA0QBcBoCaB0IgVgKgAn04tIAsgVIgmAXIgGgCg");
	this.shape_1.setTransform(0.025,0.0181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mountain1, new cjs.Rectangle(-347.2,-160.2,694.5,320.5), null);


(lib.middlehills = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4DAB4D").s().p("Egj2AIFQhDgEhHgNQhhgRh9gmIgBgLIBwgMQB4gNCBgUQD9goEhhDQD5g6IRiPQH6iHEQg9QCwgnFshHIQHjIQEpg5CZgSQD7geDKAVQBeAJBxAYQBBAOBfAXIAAACQAHACAEADQgDAIgPAAQgWABhhgEQhJgDgtAMIgwAOQgsANhcALIgvAGQg6AHgdgDIgMgBQk0BGk0BuIhuAoQg/AWgxANQg6AQhrAUQh1AWgxAMQhSAUiQAyQicA2hFATQhrAeixAeQjiAmiZANIidAMQhcAIhBALQhSAOhrAfIh5AiQhGATg1AJQg4AKhUAHQhfAHgvAEQhZAJjDAgInTBNQiKAXhNADIggABQgbAAgcgCg");
	this.shape.setTransform(-129.325,-59.3671);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A862A").s().p("EAsPAQpQh2gFiwgOIkngXQn1gjsFgHQxpgKiTgEQnEgLoqgiQl0gWp5gvQlygbjDgSQk5gdj7glIiMgVIh6gTQiagXhtgLQhfgJl+gRQklgOi0ghQhngThEgdQhZglg0g+Qg7hGgRhuQgNhVAMh3QAVjRA/jHQAKgHANAGIARgkQgfgPgbgGQA5gMBFApQApAXBNA4QBJAvBmAYQBMASByAKQFEAcFtggIABAMQB8AlBhASQBIANBCAEQAtACArgBQBMgDCKgYIHThNQDEggBZgIQAvgFBegGQBUgHA5gKQA0gJBGgTIB5gjQBrgfBTgOQBAgLBcgIICegMQCZgNDigmQCygdBqgeQBFgTCdg3QCQgyBSgVQAxgMB0gWQBrgUA7gQQAwgNA/gWIBugoQE0huEzhGIAMACQAeACA6gHIAugFQBcgLAtgNIAwgPQAsgLBKADQBhAEAWgCQAOAAADgIQgEgDgHgCIAAgBIAtALQINCJF5CYQBoApDHBYQDLBZBkAoQGxCvLBCyQDAAwGDBfQFUBUDsBHQAYAHAMAFQATAIALAMQASARAHAeQAFATADAkIATEQQAHBngHA6QgLBZgtA3QgoAxhJAcQgzAUhXAQQjjApkhAWQisANlcAOQl8AQi/AEQhpAChjAAQjFAAipgIg");
	this.shape_1.setTransform(0.0176,3.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.middlehills, new cjs.Rectangle(-531.8,-111.2,1063.6999999999998,222.5), null);


(lib.fronthill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898F4C").s().p("Aq6KSIgXgCQAVgZAUgkIABgCIAkhEIAqhWQAVgrAKgaIAHgSIAKglIAIgmIAVhNQAIgeAFghQAEhOgEhMQgCgvgNh4IgJhBIgFgYIgIgWQgCgHgCgOIgOgiIgQglIgVhIQgHgbgIgTIg3hLQgEgGAAgEIgMgKIgFgDQgUgQgYgNQAFgFAGgDIAJgCQALgCAMADQARAFAXASQAyAnAUAjQAIANAHATIACAEQAgAuANAoIAFARIAGAgQAHAJAHAPIAHAPIAPAiQALAcAFAXQAFAcAAA6IAADQQAABJgHAkIgCAJQgEAygHAyQgYCmg6CcIgFAMQgUAygdgCQgLgBgDgHQgDgGAFgMIALgaQAYg9ATg+QgMAYgYA0QgMAbgLAVQgMAWgLAQQgOATgLAEQgHADgMAAIgDAAgALMJaQgNgBgHgKQgFgGgCgIIgDABQgEAJgNACQgMABgIgIQgMgLgFgeIgLg+QgHgtgJgbQgHgVgUgpQg+h/gziGIgFgHQgNgTgag3QgUgmgdg1Qgjg/gbguQgigpgogyIgVgbIgdgcQgOgPgzhBQgogxgfgZQgRgNgcgQIgugbQgmgYhPg8IgDgDQgFgEAAgCQAAgEAFgDQAPgIAUAJIAGADQANgBARAIIAJAEQAtAYBFAwQAwAgAWATQALALANAOQARABAVAaIAvA8IAzBCIAhArIAbAnQARASAPATQAdAjAYAmQAxA3ANASQAdAlAxBPIA4BdQAZApANAdQAIAUALAmIAlCBQAQA6AHAeQAMAwAFAoQACASgFAHIgDAEQgFAEgGAAIgFgBg");
	this.shape.setTransform(175.6536,40.9649);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9B259").s().p("AF6KGQhXgKiwgcIiNgXQiWgYhMgFQibgLimAZQA7icAXimQAHgyAEgyIACgJQAIgkAAhJIAAjQQAAg6gGgcQgEgXgLgcIgPgiIgEgKQgIgWgQgnIgFgRQgNgogfguIgDgEQgHgTgHgNQgUgjgygnQgYgSgQgFQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAOAAAJAFIABABQC0AGCIgBQBngBBegEQBOA8AnAYIAvAbQAaAQASANQAfAZAnAxQAzBBAOAPIAdAcIAVAbQAoAyAiApQAcAuAiA/QAdA1AUAnQAaA2ANATIAFAHQAzCGA+B/QAUApAIAVQAIAbAIAtIALA+QAFAeALALQAIAIANgBQAMgCAFgJIADgBQACAIAEAGQAHAKANABQAKACAGgFIAAACQACASgGAPQgGARgNAKQgQALgjABIgwABQhjAAh1gNgArJJEIgDgIQAJgCAGgLIAKgTIAuhJIAKgQQAEgKACgJIgGgEIAGgJIgCgHIAHAAIAMgRIAbgoQgKAagVArIgrBWIgjBEIgBACIgSAAgApsITQAXg0AMgYQgSA+gYA9IgKABIgHAAQAMgVAMgbgAE0kOIgcgnIgggrQAjAkAUAbQARAWASAgIABACQgPgTgQgSg");
	this.shape_1.setTransform(177.2161,42.465);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61BB61").s().p("AxmKUQjcgdiUgoQhKgUhZggQg4gThpgoIkihvQiwhChdgsQhLgjijhaQkBiPiKhQQjah+ishsQilhogqgZQh3hFhignQh9gyiHgUQiGgTiHAMQCGgiCaAUIAUADIAJg3QFKgDGLB2QD6BLG+C6QMCFCFnB8QJ/DgISBMQDpAiE8ASIAAAFQAFACAEAEQgCAfgZAZQgXAXghALQgZAIgnADIhBAGQg0AIhUAhQhmApghAJQg3APhFAGQgwADhNAAQkrgBlQgrgAdNFQIgCgLQBMgXA7gZQAvgTBagrQBbgrAugTQA6gXBogiQB0gmAvgSQBHgbBrgwICxhSQBigrB+guQBIgaCcg1QE1hqCegsQEGhKDZgaIhPAVIANAGQAUgJATAJQAEANABANQACAcgPAhQgQAjglArQhJBWg7ApQg2AmhdAjQhoAlgyAWQgYAKhQAoQhAAfgqAOQgsAQhKARQheAWgaAHQgRAFjaBRQiNA0hiADIhNAAQgtABgfAKQgRAFgcANQggAPgNAFQgnAOg4AEIhiADQg+ACjyAmQh3AShaAAQgzAAgqgGg");
	this.shape_2.setTransform(61.725,-71.0037);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3AA53A").s().p("EBAdAWBQlqgYnWg6QiIgRq2hfQn6hFlEghQkygfkQgMQiEgHh8gCQhkgBhAACQhaAEhKAMQhJAMhnAdQh0Ajg6APQiXApjtAlImIA/IjhAtQiHAbhcALQhrAOiCAEQhgADiOgCQl+gEnqgeQjfgOqIgwQxhhSpuAHQhJstiSsqIgBgBQAJgEAJACIAAgXQgVABgVgBQBfgHBtguQBEgdB7hEQDriCBxhGQC9h3CGh1QCFh9BEg9QB4hpBmgxQAngTAtgOQCKgtC6gBIgJA2IgUgDQiagUiGAiQCHgMCGAUQCHATB9AyQBiAnB3BGQAqAYClBoQCsBsDaB+QCKBQEBCQQCjBbBLAjQBdAsCwBCIEiBuQBpAoA4AUQBZAfBKAUQCUApDcAcQFQArEqACQBNAAAwgEQBFgFA3gPQAhgJBmgpQBUghA1gIIBBgGQAngEAZgIQAhgKAXgXQAZgaACgfQgEgEgFgBIAAgGQBWAFBeAEQgHACgFAFQAZAOAUAPIAFAEIALAJQABAFAEAFIA3BLQAHAUAIAaIAVBIIAPAlIAOAhQACAPACAGIAJAWIAFAYIAIBBQANB4ADAvQAEBOgEBNQgGAhgHAeIgVBOIgJAlIgKAmIgGASIgbAnIgMARIgHABIACAHIgGAJIAGADQgCAJgEAKIgKARIguBIIgKAUQgGAKgJACIADAJIASAAQgVAjgVAZIAXACQAOABAIgEQALgEAOgTQALgPAMgWIAHgBIAKgBIgLAaQgFANACAFQAEAIALABQAdACATgyIAFgNQCmgZCbALQBMAGCWAYICOAXQCwAbBXAKQCSAQB2gEQAjgBAQgLQANgJAGgRQAGgQgCgRIAAgCIAEgEQAFgIgCgRQgFgogMgxQgHgdgRg6IgliBQgKgngJgUQgMgcgagqIg4hcQgxhQgcgmQgOgRgxg4QgYglgdgkIgBgCQgSgfgRgXQgUgbgjgkIg0hCIgvg6QgUgagRgBQgNgPgMgKQgVgUgwggQhGgvgugYIgIgEIBIgGQDrgXEmhCQB5gcBggdIACALQB0AQC6gdQDyglA+gDIBigDQA4gDAngPQANgEAggPQAcgOARgFQAfgJAtgBIBNAAQBigECNg0QDahQARgFQAagIBegVQBKgRAsgQQAqgPBAggQBQgnAYgLQAygWBoglQBdgjA2gmQA7gpBJhWQAlgrAQgjQAPgggCgdQAgAVAeAaQA6A0ApBBQAsBHAcBiQAUBGASBvQAWCEAVCmQAMBkAVDHQANB0AEA/QAGBlgFBQQgSEDiRD5QiFDljaC4QhXBJhPAuQheA3hcAWQhHARhZACIgRAAQg5AAhZgFgATqA8QgIgQgGgJIgHgfQAQAmAIAXIAEAJIgHgOg");
	this.shape_3.setTransform(0.001,0.0317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fronthill, new cjs.Rectangle(-531.6,-141.4,1063.3000000000002,282.9), null);


(lib.backhills = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#419841").s().p("EghdAKRIh0hlQhFg8g2geQgpgXg4gUQgegLhHgWIpui4QiYgthNgTQhQgThkgSIi2gdQhqgRg3gHQhKgJg9gEIAIhcQDdAPE/AaIFMAaQBMAGAoAGQA/AKAxASQAhALAwAZIBPAnQA4AaCnAzQCPArBLAtQBZA2B5CJQCJCaBAAxIgnA/QhNgwg6gugAdYFYIgEgBQAyhMBphVQCJiRBThMQB3hvByhRIAhgXQAugfAsgbIBTguIAugZIAlgWQAQgJDCiAQB+hTBcglQBsgsCPgTQBagMCrgIQCCgGBFABQBOACBCAJIAAAAQALgGAJADQAGACADAGIADAIQABANgIAJQgLAMgdAGQgnAIiZAZQh3AThIATIhsAeQhAASgtAHQgXADhFAFQg6AEgiAIQhZATiKBcQiVBkhJAYQgZAIg+AOQg4ANgfALQhjAlh3B7IhhBkQg5A5gvAjIhzBMQhFAtgiAsIgXAgQgOATgMALQgQAPgSAGQgLAEgLAAIgMgBg");
	this.shape.setTransform(25.8059,-22.165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AZoHSQgRgBgTgLQhjg2gxgeIgEgDIAng/QBaBHARAQQATAUAOAVIAnAVQgHALgMACIgHAAIgEAAgAqQlaQgxgDjJgCQiagBhfgOQh5gWg9gKQgfgFgegDQgmgDgiABQgaAAgWADIhGAMQgpAGgdgHIAOgGIgYg7QBfgEBngCIBNAAQDygBEVAOQBfAECBAJIAdACIgIBdIgbgCg");
	this.shape_1.setTransform(-320.05,16.23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#207720").s().p("EBK2APFQhegFiggKIj9gQQn7gcp4AHQmDADrxAaImmAOQAojXBtilQAjg1A0g8QAfgkBBhHIDgjyQAQADASgFQASgHAQgPQAMgKAOgUIAXggQAigrBFgtIBzhMQAvgiA5g6IBhhlQB3h6BjgmQAfgLA4gNQA+gOAZgIQBJgYCVhkQCKhbBZgUQAigHA6gFQBFgFAXgDQAtgGBAgSIBsgfQBIgTB3gTQCZgZAngHQAdgHALgMQAIgJgBgNIgDgIIAZAFQBoAUBUAvQBdAzA5BNQArA5AdBTQAVA3AXBhQBWFoAaErQAfFkgxE1QgFAkgJAVQgNAfgXANQgPAJgWADIgQAAIgXAAgEgszANMQhtgEjPgPImJgdQjqgRiEgRQk4gwicgWQipgZiJgGIgogBIg0gBIgPgCIg6ACIAhgEIgNgCIgqgIIgPgCQgPgBgMABQgCgGAGgCQAGgCAGABIAKABQgKhpAPhlIAHguQACgYAAgwIAAonIAuAAQAdAHApgFIBGgNQAXgCAagBQAhgBAnADQAdADAfAFQA9AKB5AXQBfANCaABQDJACAyADIAbACQA9AEBKAKQA3AHBqAQIC2AeQBkARBQAUQBNASCYAtIJuC3QBHAWAeALQA4AUApAXQA2AeBFA9IB0BlQA6AuBNAvIAEADQAyAeBiA2QATALARABQAGABAFgBIgDAHQAEAPAAAPIgQgQQgRAMgfAGIm4BeQipAkhQAPQiLAZhvAKQhcAHhsAAQg4AAg8gCg");
	this.shape_2.setTransform(0.0106,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AgdAgIAAgsIAAAAIAAgBIAAgDQAAgFACgDQADgFADABIAAAEQAJgGASgBIAYA6IgNAFg");
	this.shape_3.setTransform(-487.625,-26.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backhills, new cjs.Rectangle(-494.6,-97.3,989.3,194.6), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0.3,0.3,1,1,0,0,0,120.5,136.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111,regY:111,x:-14.95,y:-27.5},0).wait(1).to({x:-20.45,y:-30.45},0).wait(1).to({x:-25.75,y:-33.6},0).wait(1).to({x:-30.8,y:-37},0).wait(1).to({x:-35.6,y:-40.6},0).wait(1).to({x:-40.2,y:-44.4},0).wait(1).to({x:-44.6,y:-48.45},0).wait(1).to({x:-48.7,y:-52.7},0).wait(1).to({x:-52.6,y:-57.2},0).wait(1).to({x:-56.3,y:-61.85},0).wait(1).to({x:-59.75,y:-66.8},0).wait(1).to({x:-62.95,y:-71.9},0).wait(1).to({x:-65.95,y:-77.25},0).wait(1).to({x:-68.7,y:-82.8},0).wait(1).to({x:-71.25,y:-88.6},0).wait(1).to({x:-73.5,y:-94.6},0).wait(1).to({x:-75.6,y:-100.85},0).wait(1).to({x:-77.45,y:-107.25},0).wait(1).to({x:-79.05,y:-113.95},0).wait(1).to({x:-80.4,y:-120.8},0).wait(1).to({x:-81.55,y:-127.9},0).wait(1).to({x:-82.5,y:-135.25},0).wait(1).to({x:-83.2,y:-142.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.2,-253.8,296.1,340.1);


(lib.paperPlane_flying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paperPlane();
	this.instance.setTransform(-50.9,17.05,1,1,37.7278,0,0,-153.9,-87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-158.9,regY:-90.9,rotation:40.2278,x:-9.5,y:-10.7},0).wait(1).to({rotation:42.7277,x:33.7,y:-30.8},0).wait(1).to({rotation:45.2276,x:76.5,y:-48.9},0).wait(1).to({rotation:47.7276,x:118.95,y:-65.05},0).wait(1).to({rotation:50.2276,x:161.15,y:-79.1},0).wait(1).to({rotation:52.7275,x:203.1,y:-91.15},0).wait(1).to({rotation:55.2275,x:244.7,y:-101.15},0).wait(1).to({rotation:57.7274,x:286,y:-109.15},0).wait(1).to({rotation:60.2274,x:327,y:-115.15},0).wait(1).to({rotation:62.7273,x:367.7,y:-119.15},0).wait(1).to({rotation:65.2273,x:408.1,y:-121.15},0).wait(1).to({rotation:67.7272,x:448.15,y:-121.05},0).wait(1).to({rotation:70.7272,x:488.05,y:-119},0).wait(1).to({rotation:73.7271,x:527.6,y:-114.9},0).wait(1).to({rotation:76.7271,x:566.8,y:-108.8},0).wait(1).to({rotation:79.727,x:605.8,y:-100.7},0).wait(1).to({rotation:82.727,x:644.45,y:-90.55},0).wait(1).to({x:682.5,y:-78.5},0).wait(1).to({x:720.3,y:-64.5},0).wait(1).to({x:757.8,y:-48.45},0).wait(1).to({x:795,y:-30.4},0).wait(1).to({x:831.9,y:-10.4},0).wait(1).to({x:868.5,y:11.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.4,-158.4,1040.7,236.9);


(lib.clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-0.1,0,1,1,0,0,0,538.2,146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:4.05,y:1},0).wait(1).to({x:8,y:2},0).wait(1).to({x:11.85,y:3},0).wait(1).to({x:15.6,y:4},0).wait(1).to({x:19.2,y:5},0).wait(1).to({x:22.7,y:6},0).wait(1).to({x:26.1,y:7},0).wait(1).to({x:29.35,y:8},0).wait(1).to({x:28.25,y:9},0).wait(1).to({x:25.05,y:10},0).wait(1).to({x:21.95,y:11},0).wait(1).to({x:19},0).wait(1).to({x:16.2},0).wait(1).to({x:13.5},0).wait(1).to({x:10.95},0).wait(1).to({x:8.5},0).wait(1).to({x:6.2},0).wait(1).to({x:4},0).wait(1).to({x:1.95},0).wait(1).to({x:0.05},0).wait(1).to({x:-1.75},0).wait(1).to({x:-3.45},0).wait(1).to({x:-5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.2,-146,1110.7,303);


// stage content:
(lib.nelson_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paperplane_flying
	this.instance = new lib.paperPlane_flying();
	this.instance.setTransform(389.9,310.9,1,1,0,0,0,336,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// front_hill
	this.instance_1 = new lib.fronthill();
	this.instance_1.setTransform(485.85,556.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// middle_hills
	this.instance_2 = new lib.middlehills();
	this.instance_2.setTransform(492.3,448.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back_hills
	this.instance_3 = new lib.backhills();
	this.instance_3.setTransform(484.9,368.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// mountain_2
	this.instance_4 = new lib.mountain2();
	this.instance_4.setTransform(140.6,308.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// mountain_1
	this.instance_5 = new lib.mountain1();
	this.instance_5.setTransform(739.95,278.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// clouds
	this.instance_6 = new lib.clouds();
	this.instance_6.setTransform(527.45,131.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// sun
	this.instance_7 = new lib.sun();
	this.instance_7.setTransform(372.25,380,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(1,1,1).p("EhMXg0PMCYvAAAMAAABofMiYvAAAg");
	this.shape.setTransform(478.05,319.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#99E8F3","#678EFF"],[0.02,1],3.7,5,3.7,-299.6).s().p("EhMXA0QMAAAhofMCYvAAAMAAABofg");
	this.shape_1.setTransform(478.05,319.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(413.5,304.3,673.8,393.90000000000003);
// library properties:
lib.properties = {
	id: '148451BC331F44F68D5275CEDEC1CC19',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['148451BC331F44F68D5275CEDEC1CC19'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;