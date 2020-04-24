(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



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


(lib.words = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// 圖層_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ARQg7QghgRglgPIRAAAIAABYQhpA+i0AYQhIAJhJAAQkhAAkriXgA+5BGQhygZgegwIAAhYISnAAQjwAsiaAsQkuBXjLAAQhSAAhCgOg");
	var mask_graphics_1 = new cjs.Graphics().p("AYHBlQgzgCgugGIgfgBQhpgDhvgWQhYgRhHgbQgzgWgzgQQgggKghgJIg7gRIgNgDQgYgXgagWIgEgCIVZAAIAGAVIAAAyIgJAZIgDAHQgtAUg1AQQhQAWhXAQIhXAOIgNACQhLAKhOAAIgxgBgA63BcQhnAAhIgQIgkgKIhIgTQgmgLgdgKQgegNgQgNIgGgPIAAgBIAAhUIAAgBIW3AAIAFACIgPAIIglAWIgjAGIh5AVQhiARhQASQgtAJgmAKIgKACQhyAdhtAOQg2AHgvADIghAGQh1AThrAAIgGAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AWABtQg/gEg1gHIglAAQh/ADiHgWQhzgShOghQg9gbg/gRQgngKgogGIhIgLIgRAAQgVgigYgfIgDgCIZ4AAIAGAbIAAA8IgTAXIgGAHQg3AUhCAQQhlAXhlARIhpAQIgPABQhSALhVAAQgnAAgogCgA5iBlQh/gDhQgWIgrgOQgtgNgpgJIhRgSQgkgKgXgLIgLgJIAAgBIAAhkIAAgBIbMAAIAFADIgNAOIgiAiIgoAIIiSAWQh2ATheARQg2AKgtALIgMACQiFAfiHAIQhCAFg2AAIgnAHQh7AUh4AAIggAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AT6B1QhLgFg9gKIgsACQiUAJiggXQiNgThWglQhHgihKgQQgugLgvgDQgvgEgmAAIgUABQgTgrgVgqIgDgCIeWAAIAHAhIAABGIgcAXIgJAHQhBAThPAQQh7AXhzASIh7ASIgSACQhYAMheAAQg0AAg2gEgA4NBuQiYgGhWgcQgZgJgZgIQg0gRgxgJQgzgLgsgFQgrgHgcgGIgRgGIAAgBIAAh0IAAgBIfhAAIAFAFIgLAUIgeAvIgvAIIiqAYQiJAThuATQg/AKg0ALIgNADQiZAgigAEQhNACg+gDIgtAIQiEAWiEAAIg4gBg");
	var mask_graphics_4 = new cjs.Graphics().p("ARzB9QhXgGhFgNIgyAEQipAOi5gXQimgThegrQhRgohWgQQgjgHgkgDIAHgBIA2gJIAag9IAIgZIgEgGIeXAAIAHAnIAABQIglAWIgMAGQhMAThbAQQiRAYiBASIiNAUIgVADQhgAMhmAAQhBAAhEgFgA24B3QiwgIhegjQgcgMgdgJQg6gUg4gJQg6gLg0gCIhTgHIgXgCIAAgBIAAiEIAAAAMAj1AAAIkdAAIADABQASA0ARA1IAWgDQArgEA2ABIAlACIi5AYQieAUh8ATQhJAMg6ALIgPADQisAii5gCQhZAAhGgGIg0AIQiMAYiRAAQgnAAgogBg");
	var mask_graphics_5 = new cjs.Graphics().p("APtCFQhjgIhNgPIg5AGQi+AUjSgYQjAgUhlgvQgWgMgXgKIBxgOIDZgZIA9gLIAWhKIAGgfIgEgHIaBAAIAIAtIAABbIguAVIgPAGQhXAShnAQIk2ArQhYALhHALIgYADQhnAOhwAAQhNAAhRgHgA1iB/QjJgKhlgoQgggPgggLQhBgXhAgKQhAgKg8ABQg5gCgnABIgcACIAAgBIAAiTIAAgBMAoKAAAItRAAIADABQAPA+APBAIAZgGQAwgIA/gBQA+gCA9ALQBJAMBFAdQhuAOhdAOQhRAMhBAMIgRADQjAAjjSgGQhlgDhNgJIg6AJQiWAaidAAQgyAAgzgDg");
	var mask_graphics_6 = new cjs.Graphics().p("ANmCNQhvgJhUgSIhAAIQjSAajrgZQiOgNhegbQA2gJA/gJQCagVDGgWIDxgbIBEgLIAThXIADglIgDgIIVrAAIAIAyIAABkIg3AWIgSAFQhiAShzAQIlaAsQhjAMhOAMIgaAEQhwAOh5AAQhaAAhegIgA0NCIQjigNhsguQgjgRgkgNQhIgahHgKQhHgKhDADQhAABgsAGQgSACgQADIAAgBIAAijIAAAAMAsgAAAI2FAAIABAAQAOBJALBJIAcgIQA2gMBHgDQBFgFBEALQBsAQBmA1QAmASA0APIgrAHIgSADQjUAmjsgMQhwgFhVgNIhAALQihAcipAAQg9AAg+gEg");
	var mask_graphics_7 = new cjs.Graphics().p("ALfCVQh7gLhbgUIhHAJQjnAgkDgYIg1gGQBTgHBOgNIAUgDQBOgNBjgNQCogWDagXIEJgdIBKgLIAQhlIABgqIgDgKIRWAAIAIA5IAABuIhBAUIgVAFQhsASh/AQIl+AuQhuANhVAMIgdAEQh4AQiCAAQhmAAhsgKgAy4CRQj6gQh0g0QgmgUgngOQhPgdhOgKQhOgJhLAFQhGADgzAKQgVAEgSAGIAAgBIAAi0IAAAAMAw1AAAI+5AAIABABIAUCkIAfgJQA6gPBPgHQBNgGBLAKQB4AQBwA8QBnAyDMAXQifAOirgLQh9gIhcgQIhHALQirAei2AAQhHAAhJgEg");
	var mask_graphics_8 = new cjs.Graphics().p("AJZCdQiHgMhkgXIhNALQj8AmkcgZIgTgCQEcAWD6gpIAWgEQBUgNBsgNQC3gXDvgYIEggeIBRgOIAMhwIgCgwIgCgMINAAAIAJA/IAAB5IhKATIgYAFQh3ARiLAQQjqAZi4AWQh5AOhcANIggAFQiBARiKAAQhyAAh5gMgAxjCZQkSgSh7g6QgqgWgrgQQhVgghWgJQhUgLhTAJQhNAGg4ANQgYAGgVAIIAAgBIAAjDIAAgBMA1KAAAMgntAAAIABABIAPC5IAhgNQBAgSBXgJQBUgJBSAKQCDAQB7BCQB2A8EAAXIgCAAQiIgKhkgTIhNAMQi1AgjEAAQhRAAhUgGg");
	var mask_graphics_9 = new cjs.Graphics().p("AHSClQg0gFgwgGQA0gGAygIIAYgDQBagOB2gOQDFgXEDgZIE4gfIBYgPIAIh+IgEg1IgCgNIIrAAIAJBEIAACEIhTASIgbAEQiCAQiXAQQkAAajGAXQiEAPhjAPIgjAEQiJASiUAAQh+AAiGgNgAwOCiQkrgUiChBQgtgYgugSQhcgjhdgJQhcgLhaAMQhUAIg9ARQgcAIgXALIAAgCIAAjTIAAAAMA5fAAAMgwhAAAIABAAIAKDNQARgIATgHQBEgWBfgLQBcgMBaAKQCOAQCFBIQBuA5DlAaQiXAUifAAQhcAAhfgHgAg8ChQBggHBcgPIBUgMQBFAPBVAMQh3ANh/AAQhZAAhbgGgAnGCdIhXgIQAtgGAsgIIBVgOQBrAXCUAMIA0AFQhUAFhWAAQhtAAhzgJg");
	var mask_graphics_10 = new cjs.Graphics().p("AGdC0QCEgFB7gTIAagEQBhgOB+gOQDUgYEXgaIFRghIBegQIAEiLIgGg6IgCgPIEVAAIAKBLIAACNIhcASIgeAEQiNAPikAQQkVAbjUAXQiPAQhqAQIglAFQiSATieAAQhjAAhogIgAAqCpQhGgHg+gIIA7gJIBZgOQByAbCgAPIBRAHQgxACgyAAQiEAAiMgNgAu4CrQlEgXiKhHQgwgagygUQhLgdhOgMIA0gIQBjgPBhAKQCZAQCQBPQCJBIFDAYIBNAFQhQAFhSAAQhmAAhpgHgApHCtQCGgIB/gWIBbgPQA/APBOALQimAXizAAQhJAAhLgEgEghJAApIAAjkIAAAAMA90AAAMg5VAAAIAAAAIAECnQgmACgnAGQhbALhDAVQgeAKgaAMIAAgBgA8mgUQA8gDA7AHIAuAGQhGALg2AUQgVAIgTAJIgBg6g");
	var mask_graphics_11 = new cjs.Graphics().p("ADFC1QirgRh5gdIhhAPQk8A4lngbQlcgZiRhNQiahVilgQQhogKhqARQiPAUhZAtIAAgBIAAj0MBCJAAAIAKBRIAACYIhlARIlpAiQkrAbjiAYQiaARhxARQisAai9AAQiWAAiggRg");
	var mask_graphics_12 = new cjs.Graphics().p("AC9DDQiogNh/gZIhhAMQhhAOhmAGQjvANjtgYQhpgMhTgSQjAgnhvgzQichNingIQgZgBgZAAQhRABhPAPQheAQhHAdQgeAEgYAHIAAgCIAAj1MBA6AAAIBQARIAJBRIAACKIgDAMIhlAPIlrAgIiLAMQjXATiuASQiZAQhyAQQjEAcjHACIgtABQhxAAh2gJg");
	var mask_graphics_13 = new cjs.Graphics().p("AC1DPQikgIiFgVIhiAKQhiAJhnADQj5AFjhgeQhqgQhQgXQi3gyh4gwQiehFipAAQgaAAgZABQhRAEhNASQheAUhGAgIgrgGIAAgCIAAj1MBBMAAAIBAAgIAHBSIAACLIgFAKIhmANIlsAdIiOAMQjWASivARQiYAPh1AQQjKAai/AHQhDADhEAAQhGAAhIgDg");
	var mask_graphics_14 = new cjs.Graphics().p("ACtDaQiggDiMgRIhiAGQhjAGhnAAQkDgDjWgkQhrgVhNgcIkuhpQihg9isAHQgZABgaADQhRAIhMAUQhcAWhGAkIgggWIAAgCIAAj3MBBeAAAIAwAyIAFBRIAACMIgHAIIhnALIluAbIiPALQjWARiwAQQiXAPh3APQjSAai3ALQhuAJhzAAIg0gBg");
	var mask_graphics_15 = new cjs.Graphics().p("AiKDZIhiADQhkAChogDQkNgMjKgqQhtgZhJghQikhIiKgoQijg1iuAOIgzAGQhSAMhKAWQhbAahFAnIgWgnIAAgBIAAj4MBBvAAAIAgBBIAEBTIAACMIgKAGIhnAIQirALjFAOIiQAKQjVAQiyAQQiWAOh6AOQjYAZivARQiGAOiPACIgYAAQiQAAiIgLg");
	var mask_graphics_16 = new cjs.Graphics().p("AiUDqIhjAAQhkgBhpgHQkYgTi+gxQhugdhGgmQibhTiTglQikgtixAWIg0AJQhSAOhIAZQhaAdhFArIgLg3IAAgCIAAj5MBCBAAAIAQBSIACBTIAACNIgMADIhoAHQisAJjGANIiRAKQjVAPi0APQiVANh7AOQjgAYimAVQiHATiPAGQhAACg/AAQhZAAhagFg");
	var mask_graphics_17 = new cjs.Graphics().p("AnRDoQnXgtivhyQlEjPl3BTQi8Aqh7BSIAAlDMBCTAAAIAAFDQkcAMlhAXQrDAuldA5QjxAokLAAQi6AAjIgTg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai5D0QiMgBiUgIQjOgOiYgYQi6gihmg6Qi3hsjLgaQibgUiiAfQgpAHgmAKQiAAdhcA2IAAlFIAAAAMA8lAAAIFuAWIAADHIgHB6Ig4ADImyAaIiVAKQoMAhlCATQhzAJhcAKQkWAik+AAIgMAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AngDsQjMgHiZgPQi4gahpg0Qi5hkjNgcQidgUiiAYQgpAGglAIQh5AUhXAsIAAlHIAAAAMA85AAAIFaAtIAADHQgGA7gIA7Ig4AEImzAeIiXAKQoPAhk+gCQhwAChcAGQkaAWlIAHIhwABQhWAAhZgCg");
	var mask_graphics_20 = new cjs.Graphics().p("AtMDkQi0gShuguQi5hcjRgdQiegWihAUQgpAFglAFQhyALhSAhIAAlJIAAAAMA9OAAAIFFBDIAADIQgJA5gMA5Ig5AFQjNASjnAQIiXAKQoSAgk7gWQhugFhbACQkYAJlMAPQiLAFiUADQjJgCibgFg");
	var mask_graphics_21 = new cjs.Graphics().p("Ax1C6Qi7hTjTgeQiggXigAOIhPAHQhrAChMAVIAAlKIAAAAMA9iAAAIExBZIAADJQgMA3gQA3Ig5AGQjQAVjmARIiXAKQoWAgk2gsQhsgLhbgCQkXgElOAXIkgAQIliAJQiygKhxgpg");
	var mask_graphics_22 = new cjs.Graphics().p("AJTDJQhpgRhbgGQkWgRlRAfQiLAKiVAOQjDALieAOQivgCh0gkQi9hKjVggQiigYifAJIhPAEQhkgIhHALIAAlMIAAgBMA92AAAIEdBwIAADKQgPA1gVA1Ig4AGQjSAZjmARIiXALQiuAKiVAAQk5AAjQgsg");
	var mask_graphics_23 = new cjs.Graphics().p("AJLDAQhngXhbgKQkUgelVAnQiKANiVAUQjBARifAXQisAHh5gfQi9hBjZgiQijgZieAEIhPAAQhdgRhCgBIAAlNIAAgBMA+LAAAIEICGIAADMQgSAygZAzIg4AHQjUAdjlARQhMAGhMAFQiNAIh9AAQliAAjfhAg");
	var mask_graphics_24 = new cjs.Graphics().p("AJCC3QhlgdhagPQkTgqlYAvQiKAPiVAaQi+AXigAhQiqAPh8gZQi/g5jbgjQilgaidgCIhPgDQhWgbg9gLIAAlQIAAAAMA+fAAAID0CcIAADNQgVAwgdAxIg5AIQjWAgjkASQhMAGhNAEQh2AHhqAAQmBAAjphUg");
	var mask_graphics_25 = new cjs.Graphics().p("AI5CuQhigjhagTQkSg3lbA2QiJATiWAfQi7AeiiAqQimAWiBgTQi/gwjfglQimgbicgHIhPgGQhPglg4gWIAAlRIAAAAMA+zAAAIDgCyIAADOQgXAugiAvIg5AJQjYAjjkASQhNAHhMAEQhlAFhdAAQmYAAjwhog");
	var mask_graphics_26 = new cjs.Graphics().p("AIxClQhggqhagXQkQhElfA/QiJAViWAlQi4AkijAzQikAfiEgOQjBgnjhgnQiogcibgMIhQgJIh6hQIAAlTIAAAAMA/IAAAIDLDJIAADPQgaAsgmAtIg5AJQjaAmjkAUQhNAGhMAEQhYAFhSAAQmsAAjzh9g");
	var mask_graphics_27 = new cjs.Graphics().p("AIoCcQhegwhZgcQkPhQliBGQiIAYiWArQi1AqilA9QihAniJgJQjBgfjlgoQipgcibgTIhPgMQhAg4gugsIAAlUIAAgBMA/cAAAIC3DgIAADPQgdAqgqArIg6ALQjcApjjAUQhNAHhMAEQhOAEhJAAQm8AAj2iSg");
	var mask_graphics_28 = new cjs.Graphics().p("AIgCTQhcg3hZggQkNhclmBNQiIAbiWAxQiyAwinBGQieAviMgDQjDgWjngpQirgeiagYIhPgPQg5hCgpg3IAAlWIAAAAMA/wAAAICjD1IAADRQggAoguApIg6ALQjeAtjiAUQhOAHhMAEQhGADhBAAQnLAAj2img");
	var mask_graphics_29 = new cjs.Graphics().p("AIXCJQhZg8hZgkQkMhqlpBWQiHAdiXA3QivA2ioBQQibA3iRACQjDgOjrgqQisgfiZgdQgpgJgmgKQgyhLgkhCIAAlYIAAAAMBAFAAAICOEMIAADRQgjAmgyAnIg6AMQjgAwjiAVQhPAIhLADQg/ADg7AAQnXAAj3i8g");
	var mask_graphics_30 = new cjs.Graphics().p("AIOCAQhXhDhYgoQkLh2lsBeQiHAfiXA8QisA8iqBaQiYA/iUAIQjFgFjtgsQiuggiYgjQgpgKgmgLQgrhVgfhNIAAlZIAAgBMBAZAAAIB6EiIAADTQgmAjg2AlIg7ANQjiA0jhAVQhPAIhMAEQg4ACg2AAQniAAj3jRg");
	var mask_graphics_31 = new cjs.Graphics().p("AIGB3QhVhKhYgsQkJiDlwBmQiGAiiXBCQiqBCirBjQiVBIiZAMQjFAFjxguQivghiXgoQgpgMgngNQgjhegahYIAAlbIAAgBMBAtAAAIBmE5IAADUQgpAhg6AjIg7AOQjkA2jhAWQhPAIhMAEQgzACgxAAQntAAj1jmg");
	var mask_graphics_32 = new cjs.Graphics().p("AH9BtQhShPhZgwQkHiRlzBuQiGAmiXBHQinBIisBtQiTBPicASQjHANjzgvQixgiiWguQgqgNgmgOQgchpgVhhIAAleIAAgBMBBBAAAIBSFPIAADVQgsAfg+AhIg7APQjmA6jhAWQhPAIhMAEQgvACgtAAQn2AAj0j8g");
	var mask_graphics_33 = new cjs.Graphics().p("AH1BkQhQhWhZg0QkGidl1B1QiGApiYBMQikBPiuB2QiQBXifAYQjJAVj1gwQizgjiVgzQgqgPgmgQQgWhygPhtIAAlfIAAgBMBBWAAAIA9FmIAADWQgvAchCAfIg7AQQjpA9jfAXQhRAJhLADQgrACgqAAQn+AAjykRg");
	var mask_graphics_34 = new cjs.Graphics().p("AHsBaQhOhbhYg5QkEiql5B+QiGAriYBSQihBVivB/QiNBgikAdQjJAej5gyQi0gkiUg5QgqgQgmgSQgPh7gKh4IAAlhIAAgBMBBqAAAIApF8IAADXQgxAbhHAdIg8AQQjqBBjfAXQhRAJhLADQgoACgmAAQoHAAjwkng");
	var mask_graphics_35 = new cjs.Graphics().p("AHjBRQhLhhhYg+QkDi3l8CGQiFAtiYBZQifBbiwCJQiLBninAjQjLAmj7gzQi2gliUg+QgpgSgngTQgHiFgFiDIAAljIAAgBMBB+AAAIAVGRIAADZQg0AZhLAbIg8ARQjsBEjfAYQhRAJhMADIhIACQoOAAjuk8g");
	var mask_graphics_36 = new cjs.Graphics().p("AHbBHQkhmdoBC+QkMBilfEgQkoDznVhhQjqgxiwhhIAAqCMBCTAAAIAAKCQhLAeh3AjQjvBHjeAZQh2AOhqAAQoVAAjrlSg");
	var mask_graphics_37 = new cjs.Graphics().p("A4UGWQhRgGhWgPQgqgIgogIQgwgLgsgNQh6gthmhAIAAqDIAAAAMA/LAAAIDIALIAAKEIgqASQguAPg8APIgrAMQh+Agh6AWQhtAUhpALQo3A/kxjfQhGg1g4hIQibjDjRgwQipgmjOA2QghAJgjALQhjAghvA3QhtAxhzBPQhZA6hgBIQjaCikwAAQgnAAgogCg");
	var mask_graphics_38 = new cjs.Graphics().p("A4gGWQhSgEhWgNIhRgNQgxgJgsgLQhzgzhghDIAAqFIAAAAMA/WAAAIC9AXIAAKFIgoAUQgtAMg8ANIgrAKQh9Abh8ATQhtAShpALQovA7k8jBQhIgvg4hBQigixjRgrQisgijLAvIhEARQhjAbhuAsQhvAohxBJQhbA0hgBDQjiCWk0AAQgjAAgjgCg");
	var mask_graphics_39 = new cjs.Graphics().p("A4tGXQhRgDhWgLIhSgKQgxgHgrgJQhtg4hahHIAAqHIAAAAMA/hAAAICyAjIAAKGIglAXQgtAJg9AKIgqAHQh9AXh8ARQhtAPhrALQonA4lGijQhJgqg6g6QiligjQgmQivgdjJAnIhDANQhiAWhvAlQhxAehuBDQhcAuhhA8QjqCLk6AAIg8gBg");
	var mask_graphics_40 = new cjs.Graphics().p("A45GYQhSgChVgJIhSgIQgygEgqgIQhmg8hVhMIAAqIIAAgBMA/sAAAICnAvIAAKJIgjAYQgsAGg9AHIgqAGQh8ASh+AOQhtANhrAKQogA2lRiGQhJgkg7g0QiriNjQgiQixgajHAgIhDALQhhARhuAdQhzAUhsA8QhdAohiA3Qj0B/lBABIgugBg");
	var mask_graphics_41 = new cjs.Graphics().p("A5FGYQhTAAhVgGIhSgGQgygCgqgGQhfhChPhPIAAqKIAAgBMA/3AAAICcA7IAAKKIghAZQgrAFg9AEIgrAEIj5AYIjZAVQoYAylchoQhKgeg9guQiwh6jPgeQizgVjGAYIhCAIQhgANhvAUQh0AJhqA2QheAihjAxQj/B1lLAAIgcgBg");
	var mask_graphics_42 = new cjs.Graphics().p("A75GWIhSgDQg0gBgogEQhZhGhJhUIAAqMIAAAAMBACAAAICRBGIAAKMIgeAbIhpADIgqADIj6AQIjaASQoQAwlmhLQhLgYg+gnQi2hpjOgZQi2gRjDARIhDAFQhfAIhuALQh2gBhnAwQhgAdhkArQkPBqlagBIgXAAQhIAAhJgDg");
	var mask_graphics_43 = new cjs.Graphics().p("A8GGZIhSAAQg0ABgogCQhRhLhEhYIAAqOIAAAAMBANAAAICGBSIAAKOIgcAdIhogDIgqABQh6ACiAAHQhuAGhtAJQoIAtlygtQhLgShAghQi7hWjNgVQi5gNjBAJIhCACIjMAGQh5gLhkAqQhiAWhkAmQkUBalZAEIhYABIhQgBg");
	var mask_graphics_44 = new cjs.Graphics().p("A/AGeQhLhQg+hbIAAqQIAAAAMBAZAAAIB6BdIAAKQIgaAeIhngIIgqgBQh6gCiBADQhuAFhtAIQoBAql8gQQhNgMhAgaQjBhEjNgQQi6gJjAACIhBgBQhegChugFQh6gWhiAkQhjAQhmAgQkYBLlXAIQhUADhUABIhSACQgyADgmAAIgEAAg");
	var mask_graphics_45 = new cjs.Graphics().p("EghJADvIAAqRIAAgBMBAkAAAIBvBpIAAKSIgXAgIhogOIgpgCQh5gIiCABQhuADhvAIQn5AnmGANQhOgGhCgUQjGgxjMgMIl7gLQgfgBgigDQhdgGhtgOQh8gghgAeQhkAKhnAaQkdA8lVANIioAHIhTAFQg1AFgnACQhDhWg5hfg");
	var mask_graphics_46 = new cjs.Graphics().p("AG3GgQjKgfjMgHQjAgBi8gNQgfgCghgFQhdgLhsgWQh/grhdAYQhlAEhoAVQkiArlUASIioALIhTAHQg1AIgmADQg9hagzhkIAAqTIAAAAMBAvAAAIBkB1IAAKTIgVAhQgogIg/gKIgpgFQh5gMiDgCQhuABhvAHQnxAkmSArQhOAAhEgOg");
	var mask_graphics_47 = new cjs.Graphics().p("AG0G3QjQgMjLgDQjDAEi5gVQgfgEgigGQhbgQhtgfQiAg0hbARQhmgBhpAOQknAclSAXIioAOIhTAKIhbAOQg3hfgthnIAAqVIAAgBMBA6AAAIBZCBIAAKVIgTAjQgngLg/gNIgpgGQh4gSiEgEQhugChwAHQnqAhmcBJQghADggAAQgrAAgogFg");
	var mask_graphics_48 = new cjs.Graphics().p("AlsG6QgfgFghgIQhbgUhsgoQiCg+hZALQhngIhqAJQksANlQAbQhWAHhSAKQgrAGgpAHIhbASQgvhkgohrIAAqXIAAAAMBBFAAAIBOCMIAAKWIgQAmQgngOhAgQIgogIQh4gXiFgGQhugEhxAGQniAemmBnQhQAMhHgCQjVAGjLACQgoABgqAAQiZAAiRgWg");
	var mask_graphics_49 = new cjs.Graphics().p("Al1HUQgegGghgKQhagZhtgwQiEhJhWAFQhpgOhqADQkxgClPAfQhVAJhTAMQgqAHgpAJIhbAWQgphqgihvIAAqYIAAgBMBBQAAAIBDCYIAAKYIgOAnQgmgQhAgTIgogKQh3gbiGgJQhvgGhxAFQnaAcmyCEQhQARhIAFQjbAZjKAGQgwADgxAAQiTAAiJgbg");
	var mask_graphics_50 = new cjs.Graphics().p("Al+HuQgegIghgLQhZgehsg5QiGhThTgBQhrgThrgDQk2gTlNAkQhWALhSAOQgrAIgpAKIhbAaQgihugchzIAAqbIAAAAMBBbAAAIA4CjIAAKaIgMApQglgShAgXIgogLQh3ghiHgLQhugJhyAGQnTAYm8CiQhRAXhKAMQjgAqjJALQg2AEg0AAQiQAAiEgfg");
	var mask_graphics_51 = new cjs.Graphics().p("AmHIHQgegIgggOQhZgihrhBQiIhehRgHQhsgZhsgJQk6gilMApQhXALhSARQgqAKgpALQg5ARgiAMQgbhzgXh3IAAqcIAAgBMBBmAAAIAtCvIAAKcIgKArQgkgVhAgaIgogNQh3gliHgOQhvgLhyAFQnLAVnHDAQhTAdhKASQjmA9jHAPQg6AGg4AAQiOAAiAglg");
	var mask_graphics_52 = new cjs.Graphics().p("AmPIhQgegKghgPQhXgnhshKQiJhohPgNQhtgfhtgPQk/gxlKAtQhYANhRATQgrALgpAMQg5ATghAPQgVh5gRh7IAAqdIAAgBMBBxAAAIAiC7IAAKdIgHAsQgkgXhBgcIgngPQh2griJgQQhvgNhzAEQnDATnSDdQhTAjhMAYQjrBPjHAUQg8AHg7AAQiMAAh8gpg");
	var mask_graphics_53 = new cjs.Graphics().p("AmYI7QgegLgggRQhXgshrhTQiMhxhMgUQhuglhvgVQlDhAlJAyQhXANhRAWQgrAMgpAOQg6AVghAQQgNh9gMh/IAAqgIAAgBMBB9AAAIAWDHIAAKfIgFAuQgjgahBgfIgngRQh2gviJgTQhvgQh0AEQm8AQncD7QhUAphNAeQjxBijGAYQg/AJg8AAQiLAAh6gug");
	var mask_graphics_54 = new cjs.Graphics().p("AmhJVQgdgNgggSQhXgxhqhbQiOh8hKgaQhwgrhvgaQlIhQlHA2QhYAPhRAYQgrANgpAPQg6AXggASIgNkFIAAqhIAAgBMBCIAAAIALDSIAAKhIgDAwQgigdhBgiIgngSQh1g1iLgWQhvgRh0AEQm0AMnnEYQhVAwhPAkQj1B0jGAdQhBAKg+AAQiKAAh4gyg");
	var mask_graphics_55 = new cjs.Graphics().p("AmqJuQhqgyiTiJQiPiGhIggQnBjFmyBPQiIAZh1AxQg7AZggATIAAuyMBCTAAAIAAOyQgigfhCglQiDhJijgdQoJhbp6GKQlhDckEAsQhDAMg/AAQiKAAh2g4g");
	var mask_graphics_56 = new cjs.Graphics().p("Am6JqQhqgpiVh2QiXhvhPgaQm0i4mjBGQiGATh0AnQg6AUgfAQIAAu/MBCTAAAIAAO/QgjgchDghQiGhCikgbQoNhUpvFYQlnCzkQA4QhRAPhLAAQh6AAhrgog");
	var mask_graphics_57 = new cjs.Graphics().p("AnKJlQhrggiXhjQidhXhYgVQmmirmUA9QiFAOhyAdQg5APgeAMIAAvMMBCTAAAIAAPMQgkgZhEgdQiJg7ilgYQoRhPplEoQlrCJkdBEQhiAUhaAAQhoAAhcgag");
	var mask_graphics_58 = new cjs.Graphics().p("AnbJfQhrgXiZhPQijhBhhgPQmYidmFAzQiDAJhwATQg4AKgeAIIAAvZMBCTAAAIAAPZQglgVhGgaQiLg0ingWQoUhIpbD2QlwBgkpBRQh4AahuAAQhQAAhKgOg");
	var mask_graphics_59 = new cjs.Graphics().p("AnrJYQhrgOibg8QirgphpgLQmJiPl3ApQiCAFhuAJIhUAJIAAvnMBCTAAAIAAPnQgmgShHgXQiOgsiogUQoYhBpRDEQl1A3k1BdQiXAkiIAAQgxAAgvgFg");
	var mask_graphics_60 = new cjs.Graphics().p("An7JPQhsgFidgqQixgRhxgFQl8iDloAhIjsgCIhTAAIAAv0MBCTAAAIAAP0QgngPhIgSQiRglipgSQocg7pGCTQl7ANlABpQjEAzitAAIgOAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AsXIwQi3AGh6AAQluh1lZAXQh/gFhqgLQg1gFgcgEIAAwBMBCTAAAIAAQBQgogMhJgPQiTgdirgQQohg1o7BiQmAgclMB1QjKA4i0ANIgjABQhjAAiGgTg");
	var mask_graphics_62 = new cjs.Graphics().p("A8UHzQh9gKhpgVQg0gKgbgJIAAwNMBCTAAAIAAQNQgpgIhLgLQiVgWisgOQolguoxAwQmFhFlYCBQjIA7i2AdQhsAOiigEQi9AdiDAGQlghnlKANg");
	var mask_graphics_63 = new cjs.Graphics().p("A8ZIIQh8gQhmgeQg0gPgagNIAAwbMBCTAAAIAAQbIh2gMQiYgPitgMQopgoongBQmJhullCNQjGA+i3AtQhtAWijAQQjFA1iKALQlThak7AEg");
	var mask_graphics_64 = new cjs.Graphics().p("A8eIcQh6gUhlgpQgygUgagQIAAwoMBCTAAAIAAQoIh4gGQibgHiugKQotghocgzQmPiXlxCZIl8B+QhtAfimAjQjLBMiTAQQlEhNktgFg");
	var mask_graphics_65 = new cjs.Graphics().p("A8jIxQh5gahjgyQgxgZgZgVIAAw1MBCTAAAIAAQ1QgsAChPAAQidAAivgIQoxgboShkQmUjBl9CmQjBBEi6BMQhuApioA2QjRBjicAWQk2hAkegOg");
	var mask_graphics_66 = new cjs.Graphics().p("A8oJFQh4gehgg9QgwgegZgYIAAxCMBCTAAAIAARCQgtAFhQADQigAIiwgHQo1gUoIiWQmZjpmJCyQi+BHi9BcQhuAxipBKQjZB6ikAbQkogykPgYg");
	var mask_graphics_67 = new cjs.Graphics().p("A8tJaQh2gkhfhGQgvgjgYgdIAAxPMBCTAAAIAARPQguAIhRAIQijAPiygFQo4gNn+jIQmekRmUC8Qi9BLi+BsIkaCWQjfCSisAhIobhGg");
	var mask_graphics_68 = new cjs.Graphics().p("A8yJvQh1gphchRQgvgogXggIAAxdMBCTAAAIAARdQgvALhTAMQilAVizgCQo8gHnzj5Qmkk6mgDIQi7BPi/B7QhvBDiuBvQjlCqi1AmQkNgYjxgqg");
	var mask_graphics_69 = new cjs.Graphics().p("A83KDQhzgthbhbQgtgtgXglIAAxpMBCTAAAIAARpQgwAPhUAPQinAdi1AAQpBgBnokqQmplkmsDVQi4BSjBCKQhwBNivCCQjtDBi9ArQj+gKjjg0g");
	var mask_graphics_70 = new cjs.Graphics().p("A87KYQhzgzhZhlQgsgygWgoIAAx3MBCTAAAIAAR3QgxAShVATQiqAki2ACQpFAGnelcQmtmNm5DiQi2BUjDCaQhvBViyCWQjzDYjFAxIgYAAQjjAAjJg6g");
	var mask_graphics_71 = new cjs.Graphics().p("A9AKrQhxg4hXhvQgsg3gVgsIAAyEMBCTAAAIAASEQgyAVhWAXQitAsi3ADQpJANnUmOQmym2nFDuQi0BXjECqQhwBfi0CoQj5DwjOA2QgrADgqAAQizAAifg5g");
	var mask_graphics_72 = new cjs.Graphics().p("A9FK9Qhwg9hVh4Qgqg8gVgxIAAyRMBCTAAAIAASRQgzAZhYAaQivAzi4AGQpNASnJm+Qm4nfnRD6QixBbjGC4QhwBoi2C8QkBEGjWA8Qg6AIg3AAQiVAAiEg6g");
	var mask_graphics_73 = new cjs.Graphics().p("A9KLOQhuhBhUiDQgphBgUg0IAAyeMBCTAAAIAASeQg0AbhZAeQiyA7i5AIQpRAZm/nwQm9oJncEGQiwBfjHDIQhxBwi4DPQkHEfjfBAQhAAOg+AAQh/AAhwg8g");
	var mask_graphics_74 = new cjs.Graphics().p("A9PLfQhthGhRiNQgphGgTg4IAAyrMBCTAAAIAASrQg1AfhaAhQi1BCi6AKQpVAgm1oiQnCoxnoESQiuBhjJDYQhxB6i6DiQkNE1jnBGQhEAVg/AAQhuAAhgg/g");
	var mask_graphics_75 = new cjs.Graphics().p("A9OLkIgGgEQhCglg2g9Qgkgvggg6QgnhGgSg6IAAysIAAAAMBA8AAAIBXAFIAASsQgzAhhVAkIgRAHQhAAUhBAMQhsAVhuAEQgjABgjAAQitgEiegsQjdg/i/iRQhvhUhnh3QkIkvkegvQjBgejKBlQiuBXjKDFIgUATQhwBritDCQj2EIjbBSQgWAIgVAHQhHAVhBAAQhoAAhbg0g");
	var mask_graphics_76 = new cjs.Graphics().p("A9TLkIgHgDQhCgig3g4Qgigvgeg7QglhGgRg6IAAyuIAAAAMBBBAAAIBSAJIAASuQgwAkhRAmIgQAIQg+AQhBAJQhsARhuABIhGAAQitgGiegmQjbg3i8h7QhthIhohrQkHkUklg0QjBggjJBaQiwBMjKCxIgVARQhzBfiuC0Qj4D3jiBSQgWAIgVAGQhKAWhFAAQhjAAhZgug");
	var mask_graphics_77 = new cjs.Graphics().p("A9ZLlIgGgDQhEgeg2gzQghgxgcg7QgjhGgQg7IAAyvIAAAAMBBFAAAIBOAOIAASvQgtAmhNAoIgPAJQg9ANhBAHQhsALhsgBIhHgBQitgJieggQjZgui5hlQhrg7hohhQkGj5kug5Qi/ghjKBOQixBAjLCgIgUAPQh3BRiwCoQj5DljpBRIgrAOQhNAXhJAAQhfAAhXgng");
	var mask_graphics_78 = new cjs.Graphics().p("A9eLlIgGgDQhFgag3guQgegxgbg7QghhHgPg8IAAywIAAAAMBBKAAAIBJASIAASxQgrAohIArIgOAJQg8ALhBADQhrAGhsgCIhGgDQiugLiegaQjYgmi2hPQhogvhphWQkFjek1g9Qi/gkjKBCQixA3jMCMIgVANQh5BEizCbQj6DUjvBQIgrAOQhTAYhMAAQhbAAhTghg");
	var mask_graphics_79 = new cjs.Graphics().p("A9jLlIgGgCQhHgWg3gqQgcgygZg7QgfhHgOg9IAAyxIAAAAMBBOAAAIBFAXIAASxQgoAshDAtIgOAKQg6AHhCAAQhqAChsgFIhGgEQivgNidgUQjWgfizg5QhngihohKQkFjEk8hDQi+gljKA3QizAsjNB5IgVALQh8A4i1COQj8DCj1BQIgrANQhYAZhRAAQhVAAhPgbg");
	var mask_graphics_80 = new cjs.Graphics().p("A9oLlIgGgCQhIgSg3glQgbgzgXg7QgchHgOg+IAAyyIAAgBMBBTAAAIBAAcIAASzQglAug/AvIgNALQg5AEhCgDQhqgDhqgHIhGgGIlNgdQjUgWiwgjQhlgVhohAQkEiplFhIQi9gmjKArQizAijOBlIgVAJQiAAri3CBQj9Cxj8BPIgrANQhdAbhYAAQhOAAhKgWg");
	var mask_graphics_81 = new cjs.Graphics().p("A9tLlIgGgBQhKgPg3ggQgYg0gWg7QgahHgNg/IAAy0IAAAAMBBYAAAIA7AgIAAS1QgjAvg6AyIgMALQg4ABhCgGQhpgHhqgJIhGgHQiwgSidgIIl/gaQhjgJhpg1QkDiOlMhNQi8gojKAgQi1AXjOBSIgWAGQiCAfi6B0Qj+CgkCBOIgsANQhlAcheAAQhHAAhDgQg");
	var mask_graphics_82 = new cjs.Graphics().p("A9yLlIgGgBQhLgLg3gbQgXg1gUg8QgYhHgMg/IAAy1IAAgBMBBcAAAIA3AlIAAS2QggAyg2A0IgLAMQg3gChCgJIjSgYIhGgIQiwgUicgBQjSgHipAKQhhAEhpgqQkDhzlThSQi8gqjKAUQi2ANjPA+IgWAFQiFASi7BnQkACPkJBNIgsANQhuAehmAAQg+AAg7gLg");
	var mask_graphics_83 = new cjs.Graphics().p("A93LkIgGgBQhNgGg3gXQgVg1gSg8QgWhIgLhAIAAy2IAAgBMBBhAAAIAyAqIAAS3QgdA1gyA2IgKANQg2gGhBgMQhpgRhogNIhGgJQixgXicAEQjQACinAgQhfAQhpgfQkChXlbhYQi6grjKAIQi3ADjQArIgWACQiJAFi9BbQkBB9kQBMIgrANQh6AhhxAAQgzAAgwgHg");
	var mask_graphics_84 = new cjs.Graphics().p("A99LjIgGAAQhNgDg3gSQgTg2gRg8QgUhIgKhBIAAy4IAAAAMBBlAAAIAuAuIAAS4QgbA4gtA4IgJAOQg0gJhCgPQhogWhogPIhGgLQixgZicALQjPAJijA2QhdAdhpgTQkBg9ljhdQi6gsjKgEQi4gIjQAYIgXAAQiMgHi/BNQkCBskXBMIgrAMQiJAkh/AAQgkAAgjgDg");
	var mask_graphics_85 = new cjs.Graphics().p("A+CLiIgGAAQhPABg3gNQgRg3gPg9QgShIgJhBIAAy6IAAAAMBBqAAAIApAzIAAS5QgYA6gpA7IgIAOQgzgLhCgTQhngahogSIhFgMQizgbibARQjNARigBMQhbAqhqgJQkAghlqhjQi6gujKgOQi4gUjSAFIgXgCQiOgUjCBBQkEBakcBLIgsAMQieApiRAAIggAAg");
	var mask_graphics_86 = new cjs.Graphics().p("ACXJ1Qi4gwjKgaQi6gejSgPIgXgEQiSghjEA0QkFBJkjBKIgsAMQiuAtihADIgGAAQhQAFg3gIQgQg4gNg9QgQhIgIhCIAAy7IAAAAMBBuAAAIAlA3IAAS7QgVA8gkA9IgIAPQgygOhCgWQhngfhmgUIhGgNQizgeibAXQjLAaidBiQhaA2hpACQkAgGlyhng");
	var mask_graphics_87 = new cjs.Graphics().p("AChKkQi4gxjKgmQi7gojSgiIgYgGQiVgujFAnQkHA3kqBKIgsALQitAsiiALIgGABQhSAJg3gEQgNg4gMg+QgOhIgHhDIAAy8IAAAAMBBzAAAIAgA8IAAS8QgTA/gfA/IgHAQIhzgrQhmgjhmgXQgjgHgjgHQizggibAdQjKAiiZB4QhYBDhqANQgoADgsAAQjnAAk9hbg");
	var mask_graphics_88 = new cjs.Graphics().p("ACrLQQi3gzjKgxQi8gzjUg2IgYgIQiXg6jIAaQkIAmkwBJIgsALQitArijATIgGABQhTANg3ABQgMg5gKg+QgMhIgGhEIAAy9IAAgBMBB3AAAIAcBBIAAS9QgQBBgbBCIgGAQIhygwQhlgohmgZQgjgIgigHQi0gjibAjQjIAqiXCOQhVBQhqAYQhLAOhXAAQjOAAkPhQg");
	var mask_graphics_89 = new cjs.Graphics().p("AC0L6Qi2g0jKg+Qi9g9jUhJIgYgKQibhHjKANQkJAVk3BIIgsALQisAqikAbIgGABQhVARg3AGQgJg7gJg9QgKhJgFhEIAAy/IAAgBMBB8AAAIAXBGIAAS/QgOBDgWBEIgFARQgugYhCgfQhmgthkgaQgjgJgjgIQi0glibApQjGAyiUClQhTBchrAjQhhAdh3AAQi9AAjxhJg");
	var mask_graphics_90 = new cjs.Graphics().p("AC+MiQi2g1jJhJQi+hJjVhbIgZgNQiehUjMABQkLADk9BHIgsALQisApikAjIgGACQhWAVg4AKIgOh5QgIhIgEhGIAAzAIAAAAMBCBAAAIASBKIAATAQgLBGgSBGIgDASQgugbhCgiQhlgyhkgdQgjgKgigHQi2goiaAvQjFA6iQC7QhSBohqAuQhyAuiQAAQivAAjchEg");
	var mask_graphics_91 = new cjs.Graphics().p("ADINKQi2g3jJhVQi/hSjWhvIgZgPQighgjPgNQkMgOlDBHIgtAKQirAoilArIgGACIiPAoIgLh6QgGhIgDhHIAAzBIAAgBMBCFAAAIAOBPIAATBQgIBIgOBJIgCASQgsgdhDglQhkg3hkgfQgigLgjgIQi2gqiaA2QjDBBiNDRQhQB1hqA6Qh+BAilAAQilAAjMhBg");
	var mask_graphics_92 = new cjs.Graphics().p("ADRNyQi0g5jKhgQjAhejWiCIgZgRQikhtjRgaQkNgflKBGIgtAKQiqAnimA0IgGACQhZAdg4AUIgHh8QgEhIgChIIAAzCIAAgBMBCKAAAIAJBUIAATCQgGBLgJBLIgBATQgrghhDgoQhkg7higiQgjgLgjgJQi2gsiZA8QjDBJiJDnQhOCChrBEQiHBUi2AAQidAAjBg+g");
	var mask_graphics_93 = new cjs.Graphics().p("ADbOZQi0g7jJhrQjBhojXiWIgagTQinh6jSgmQkPgxlRBFIgsAKQiqAmioA8IgGADQhaAgg3AZIgEh8IgDiSIAAzDIAAgBMBCOAAAIAFBYIAATEQgDBNgEBNIgBAUQgqgkhDgrQhjhAhigjQgjgNgigJQi3gviZBCQjBBSiHD9QhLCOhrBPQiOBojGAAQiXAAi3g8g");
	var mask_graphics_94 = new cjs.Graphics().p("ADlPAQlph6nIlqQmBkypkB6QjAAmi/BNQhfAmg6AfIAA3WMBCTAAAIAAXWQgpgnhDgvQiFhdiEgjQi3gyiZBIQi/BaiEETQiwFylsAAQiSAAivg7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.175,y:-69.368}).wait(1).to({graphics:mask_graphics_1,x:2.175,y:-68.443}).wait(1).to({graphics:mask_graphics_2,x:2.175,y:-67.496}).wait(1).to({graphics:mask_graphics_3,x:2.175,y:-66.541}).wait(1).to({graphics:mask_graphics_4,x:2.175,y:-65.5821}).wait(1).to({graphics:mask_graphics_5,x:2.175,y:-64.6208}).wait(1).to({graphics:mask_graphics_6,x:2.175,y:-63.6582}).wait(1).to({graphics:mask_graphics_7,x:2.175,y:-62.6945}).wait(1).to({graphics:mask_graphics_8,x:2.175,y:-61.7302}).wait(1).to({graphics:mask_graphics_9,x:2.175,y:-60.7654}).wait(1).to({graphics:mask_graphics_10,x:2.175,y:-59.8002}).wait(1).to({graphics:mask_graphics_11,x:2.175,y:-58.8302}).wait(1).to({graphics:mask_graphics_12,x:2.175,y:-58.2493}).wait(1).to({graphics:mask_graphics_13,x:2.175,y:-57.5562}).wait(1).to({graphics:mask_graphics_14,x:2.175,y:-56.7297}).wait(1).to({graphics:mask_graphics_15,x:2.175,y:-55.7795}).wait(1).to({graphics:mask_graphics_16,x:2.175,y:-54.7032}).wait(1).to({graphics:mask_graphics_17,x:2.175,y:-53.4854}).wait(1).to({graphics:mask_graphics_18,x:2.175,y:-54.1982}).wait(1).to({graphics:mask_graphics_19,x:2.175,y:-54.808}).wait(1).to({graphics:mask_graphics_20,x:2.175,y:-55.1211}).wait(1).to({graphics:mask_graphics_21,x:2.175,y:-54.8934}).wait(1).to({graphics:mask_graphics_22,x:2.175,y:-54.1524}).wait(1).to({graphics:mask_graphics_23,x:2.175,y:-53.0562}).wait(1).to({graphics:mask_graphics_24,x:2.175,y:-51.9288}).wait(1).to({graphics:mask_graphics_25,x:2.175,y:-50.7823}).wait(1).to({graphics:mask_graphics_26,x:2.175,y:-49.6233}).wait(1).to({graphics:mask_graphics_27,x:2.175,y:-48.4556}).wait(1).to({graphics:mask_graphics_28,x:2.175,y:-47.2817}).wait(1).to({graphics:mask_graphics_29,x:2.175,y:-46.1032}).wait(1).to({graphics:mask_graphics_30,x:2.175,y:-44.9212}).wait(1).to({graphics:mask_graphics_31,x:2.175,y:-43.7363}).wait(1).to({graphics:mask_graphics_32,x:2.175,y:-42.5493}).wait(1).to({graphics:mask_graphics_33,x:2.175,y:-41.3605}).wait(1).to({graphics:mask_graphics_34,x:2.175,y:-40.1703}).wait(1).to({graphics:mask_graphics_35,x:2.175,y:-38.9788}).wait(1).to({graphics:mask_graphics_36,x:2.175,y:-37.7819}).wait(1).to({graphics:mask_graphics_37,x:2.175,y:-37.825}).wait(1).to({graphics:mask_graphics_38,x:2.175,y:-37.8206}).wait(1).to({graphics:mask_graphics_39,x:2.175,y:-37.8125}).wait(1).to({graphics:mask_graphics_40,x:2.175,y:-37.7995}).wait(1).to({graphics:mask_graphics_41,x:2.175,y:-37.7791}).wait(1).to({graphics:mask_graphics_42,x:2.175,y:-37.7433}).wait(1).to({graphics:mask_graphics_43,x:2.175,y:-37.6581}).wait(1).to({graphics:mask_graphics_44,x:2.175,y:-37.2048}).wait(1).to({graphics:mask_graphics_45,x:2.175,y:-36.6684}).wait(1).to({graphics:mask_graphics_46,x:2.175,y:-35.6158}).wait(1).to({graphics:mask_graphics_47,x:2.175,y:-34.2788}).wait(1).to({graphics:mask_graphics_48,x:2.175,y:-32.2039}).wait(1).to({graphics:mask_graphics_49,x:2.175,y:-29.1631}).wait(1).to({graphics:mask_graphics_50,x:2.175,y:-26.1188}).wait(1).to({graphics:mask_graphics_51,x:2.175,y:-23.0726}).wait(1).to({graphics:mask_graphics_52,x:2.175,y:-20.0254}).wait(1).to({graphics:mask_graphics_53,x:2.175,y:-16.9776}).wait(1).to({graphics:mask_graphics_54,x:2.175,y:-13.9293}).wait(1).to({graphics:mask_graphics_55,x:2.175,y:-10.8807}).wait(1).to({graphics:mask_graphics_56,x:2.175,y:-12.8301}).wait(1).to({graphics:mask_graphics_57,x:2.175,y:-14.7184}).wait(1).to({graphics:mask_graphics_58,x:2.175,y:-16.5168}).wait(1).to({graphics:mask_graphics_59,x:2.175,y:-18.1756}).wait(1).to({graphics:mask_graphics_60,x:2.175,y:-19.5995}).wait(1).to({graphics:mask_graphics_61,x:2.175,y:-20.7621}).wait(1).to({graphics:mask_graphics_62,x:2.175,y:-19.7408}).wait(1).to({graphics:mask_graphics_63,x:2.175,y:-18.0895}).wait(1).to({graphics:mask_graphics_64,x:2.175,y:-16.4382}).wait(1).to({graphics:mask_graphics_65,x:2.175,y:-14.7868}).wait(1).to({graphics:mask_graphics_66,x:2.175,y:-13.1355}).wait(1).to({graphics:mask_graphics_67,x:2.175,y:-11.4842}).wait(1).to({graphics:mask_graphics_68,x:2.175,y:-9.8329}).wait(1).to({graphics:mask_graphics_69,x:2.175,y:-8.1816}).wait(1).to({graphics:mask_graphics_70,x:2.175,y:-6.5226}).wait(1).to({graphics:mask_graphics_71,x:2.175,y:-4.7229}).wait(1).to({graphics:mask_graphics_72,x:2.175,y:-2.8222}).wait(1).to({graphics:mask_graphics_73,x:2.175,y:-0.8725}).wait(1).to({graphics:mask_graphics_74,x:2.175,y:1.1048}).wait(1).to({graphics:mask_graphics_75,x:2.175,y:0.4993}).wait(1).to({graphics:mask_graphics_76,x:2.175,y:-0.1052}).wait(1).to({graphics:mask_graphics_77,x:2.175,y:-0.7038}).wait(1).to({graphics:mask_graphics_78,x:2.175,y:-1.2952}).wait(1).to({graphics:mask_graphics_79,x:2.175,y:-1.8775}).wait(1).to({graphics:mask_graphics_80,x:2.175,y:-2.4481}).wait(1).to({graphics:mask_graphics_81,x:2.175,y:-3.0034}).wait(1).to({graphics:mask_graphics_82,x:2.175,y:-3.538}).wait(1).to({graphics:mask_graphics_83,x:2.175,y:-4.0438}).wait(1).to({graphics:mask_graphics_84,x:2.175,y:-4.508}).wait(1).to({graphics:mask_graphics_85,x:2.175,y:-4.9083}).wait(1).to({graphics:mask_graphics_86,x:2.175,y:-4.89}).wait(1).to({graphics:mask_graphics_87,x:2.175,y:-2.0011}).wait(1).to({graphics:mask_graphics_88,x:2.175,y:1.2628}).wait(1).to({graphics:mask_graphics_89,x:2.175,y:4.7251}).wait(1).to({graphics:mask_graphics_90,x:2.175,y:8.3008}).wait(1).to({graphics:mask_graphics_91,x:2.175,y:11.9475}).wait(1).to({graphics:mask_graphics_92,x:2.175,y:15.6415}).wait(1).to({graphics:mask_graphics_93,x:2.175,y:19.3687}).wait(1).to({graphics:mask_graphics_94,x:2.175,y:23.1219}).wait(1));

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFIgCgFIACgEQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAIgEgCg");
	this.shape.setTransform(55.675,34.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAbIAAgCQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgjQAAgEgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgHAAgGALQgGAJAAANQAAAIACABQACADAFAAIAAACIgaAAIAAgCQAEAAACgCQADgCAAgFIAAgdQAAgGgEAAIgFACIAAgDIAPgGIACAAIAAATQAIgLAFgFQAFgDAGAAQAJAAAAAMIAAAeQAAAFADACQACACAEAAIAAACg");
	this.shape_1.setTransform(50.925,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAVQgHgGAAgMQAAgMAJgJQAKgKAKABQAKgBAHAIQAHAGAAAMQAAANgJAIQgJAKgLgBQgKABgHgIgAgOgRQgEAFAAAJQAAAKAHAIQAGAIAIAAQAHAAAEgGQAFgEAAgKQAAgHgEgGQgDgGgFgEQgFgDgDAAQgIAAgFAGg");
	this.shape_2.setTransform(44.625,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAoIAAgDQAEAAADgCQADgCgBgFIAAgfQABgEgFAAIgFACIAAgDIAPgGIACAAIAAAqQAAAFACACQAEACADAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(40.15,31.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgCAAgFIAAgJIAMgFIAAADQgEABAAAIIABAHQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAFABIAFAAIAAACIgOAAIAAAmIABACIACABQADAAAFgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_4.setTransform(36.725,31.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAHAXIAAgJQgIAJgEACQgFAEgEgBQgFABgDgEQgDgEAAgEQAAgNAggOIAAgHIgCgFQgCgCgDAAQgGAAgEAGQgEAFgBAIIgEAAIAAgNQANgKALABQAGgBACADQADADgBAFIAAAkQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQACABAGgGIAAADQgJAKgFgBQgFABAAgGgAgJABQgHAGAAAFQAAAEACACQACACAEAAQAHAAADgGQAFgIAAgLQgJACgHAEg");
	this.shape_5.setTransform(32.275,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKAbIAAgCQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgjQAAgEgBgBQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgHAAgGALQgHAJABANQAAAHACACQACADAFAAIAAACIgaAAIAAgCQADAAADgCQADgCAAgFIAAgdQAAgGgFAAIgEACIAAgDIAPgGIADAAIAAATQAIgLAEgFQAFgDAFAAQAKAAAAAMIAAAeQABAFACACQACACAEAAIAAACg");
	this.shape_6.setTransform(26.05,32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAoIAAgDQAEAAADgCQADgCgBgFIAAgfQAAgEgEAAIgFACIAAgDIAPgGIACAAIAAAqQAAAFACACQAEACADAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBgBAAQABgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_7.setTransform(21.15,31.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAlQgGgDgBgGQABgGAHgFQAJgFAMgCIgDgDIgBgEIABgDIAGgGIgCAAIgFABQgJAAgDgEQgFgDAAgHQAAgIAIgHQAHgGAJAAIAFAAIANAGIAKAAIAAADIgMAAIACAFQAAAFgCADQgCADgHAHQgIAFABADQAAAAAAAAQAAAAAAABQAAAAABABQAAAAABAAIAJAEQAJADAEADQAEADAAAFQAAAIgLAHQgLAGgNAAQgLAAgHgEgAgPASQgGAEAAAFQAAAEAFADQAFADAJAAQALAAAGgEQAHgDAAgGQAAgEgCgCQgHgDgEgBIgHgDQgKADgHAEgAgJggQgEAEAAAGQAAAFAEAFQADAEAFAAQAEAAAEgEQADgFABgGQgBgFgDgFQgEgDgDAAQgHgBgCAFg");
	this.shape_8.setTransform(16.3,33.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGAXIAAgJQgGAIgFADQgFAEgFgBQgEABgDgEQgDgEAAgEQAAgNAfgOIAAgHIgBgFQgCgCgDAAQgGAAgEAGQgEAEgCAJIgDAAIAAgNQANgKALABQAGgBACADQACACAAAGIAAAkQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQACABAGgGIAAADQgJAKgFgBQgGABAAgGgAgKABQgGAGAAAFQAAAFACABQACACAEAAQAHAAADgGQAFgIAAgLQgKADgHADg");
	this.shape_9.setTransform(11.375,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZAbIAAgCQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAggQAAgFgCgCQgCgDgCAAQgHAAgGAKQgGAKABAMQAAAHACADQADADAFAAIAAACIgUAAIAAgCQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIAAgjQAAgDgCgBQgCgDgDAAQgGAAgGAKQgFAKgBAMQABAHACADQABADAGAAIAAACIgbAAIAAgCQAEAAAEgCQABgDAAgEIAAgeQAAgFgDAAIgGACIAAgDIAQgGIACAAIAAASQAJgNAFgDQAEgCAFAAQAEAAACADQADADAAAHIAAAEQAIgLAFgEQAEgCAFAAQADgBAEADQADACgBAGIAAAgQABAFACACQADACADAAIAAACg");
	this.shape_10.setTransform(3.65,32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNAlIAAgCQAFAAACgCQACgCAAgGIAAgxQAAgGgCgCQgDgCgEAAIAAgCIAbAAIAAACQgEAAgDACQgCADAAAFIAAAxQAAAJAJABIAAACg");
	this.shape_11.setTransform(-2.975,31.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAZIAAgRIAEAAQABAIADAEQAEAFAFAAQAFgBADgCQACgEAAgDQAAgEgCgDIgQgKQgDgCgDgEIgBgFQAAgFAGgFQAFgEAHAAQAGgBAGADIAAAPIgFAAQABgFgEgFQgEgEgDAAQgEAAgCACQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQABADACADQABACAGAEIAOAJQACADAAAEQAAAIgHAFQgGAGgHgBQgIABgHgEg");
	this.shape_12.setTransform(-9.95,32.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAQQAHgEACgGQAEgFgBgEQAAgCgCgEIgBADIgDABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQADgDAEAAQAEAAADAEQADACAAAGQAAAGgGAIQgEAHgJAGg");
	this.shape_13.setTransform(-13.3,29.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMAqIAAgTQgMAOgCACQgFADgEAAQgIAAgFgHQgEgGAAgKQAAgMAJgKQAJgLAKAAIAFABIAHACIAAgPQAAgFgEAAIgFABIAAgDIAUgIIAAACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABIAABBQAAAFAEAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAAADIgPAGgAgPgCQgFAHAAAKQAAAHAEAHQAEAFAGAAQAHAAAGgKQAFgLAAgKIAAgGIgIgFIgHgCQgIAAgEAIg");
	this.shape_14.setTransform(-17.975,31.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNApIAAgCQAFAAACgCQACgCAAgFIAAg3QABgGgFAAIgFABIAAgCIAUgIIAAACQgDABAAADIAABAQAAAEADADQACACAEAAIAAACg");
	this.shape_15.setTransform(-22.75,31.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAbIAAgCQAEAAADgCQACgCAAgFIAAgeQAAgFgDAAIgGACIAAgDIAQgGIACAAIAAATQAFgLAFgEQAFgEAFAAIAFAAIAAATIgFAAQAAgLgGAAQgGAAgFAKQgDAJAAAMQAAAHACACQADADAHAAIAAACg");
	this.shape_16.setTransform(-26.725,32.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAVQgHgGAAgMQAAgMAJgJQAJgKAKABQALgBAHAIQAHAGAAAMQAAANgJAIQgKAKgKgBQgLABgGgIgAgOgRQgEAEAAAKQAAAKAHAIQAGAIAIAAQAHAAAEgGQAFgEAAgKQAAgHgEgGQgDgHgFgDQgFgDgEAAQgHAAgFAGg");
	this.shape_17.setTransform(-32.125,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AARAnIgRgxIgVAxIgDAAIgTg6IgEgHQgCgGgCgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAgDIAVAAIAAADQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABIAAABIATA2IAKgYQADgLAAgJQAAgNgJAAIAAgDIATAAIAAADQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAABIATA2IAMgdQAFgPAAgFQAAgFgBgBQgCgCgGAAIAAgDIAbAAIAAADQgEAAgDAEIgGAMIgYA6g");
	this.shape_18.setTransform(-39.95,31.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKApIAAgCQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgiQAAgDgBgCQgCgCgDAAQgGAAgGAKQgGAKgBANQAAAMAIAAIACAAIAAACIgbAAIAAgCQAEAAADgCQACgCAAgFIAAg5QAAgBAAgBQAAAAgBgBQAAAAgBgBQgBAAAAAAIgGABIAAgCIAUgIIAAACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIAAAoQAIgKAEgEQAHgFAFAAQAEAAADADQACAEABAGIAAAeQgBAFACACQADACAEAAIAAACg");
	this.shape_19.setTransform(-52.2,31.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgCAAgFIAAgJIALgFIAAADQgDAAAAAJIABAHQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAFABIAFAAIAAACIgOAAIAAAmIABACIACABQACAAAGgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_20.setTransform(-57.275,31.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMAoIAAgDQADAAADgCQACgCABgFIAAgfQgBgEgEAAIgDABIgBABIAAgDIANgGIAEAAIAAAqQAAAFABACQADACAFAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIACAEQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAABIgEABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_21.setTransform(-60.6,31.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAnIgQgxIgUAxIgEAAIgUg6IgDgHQgCgGgDgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgDIAVAAIAAADQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAABIASA2IAKgYQAFgJAAgLQAAgNgKAAIAAgDIAUAAIAAADQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABABIASA2IAMgdQAGgNAAgHQAAgFgDgBQgBgCgGAAIAAgDIAbAAIAAADQgEAAgDAEIgHAMIgXA6g");
	this.shape_22.setTransform(-67.8,31.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAVQgHgHAAgLQAAgLAIgKQAIgJAKAAQAJgBAEAHQAGAHAAAHIglAAIAAAEQAAAJAFAIQAGAGAHAAQAKAAALgMIAAAEQgOAQgLAAQgIAAgHgHgAgJgTQgEADgBAHIAaAAQAAgHgEgEQgEgEgEAAQgFAAgEAFg");
	this.shape_23.setTransform(35.275,18.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAcIAAgDQAEAAADgCQACgCAAgFIAAgeQAAgFgDAAIgGACIAAgDIAQgGIACAAIAAASQAFgKAFgEQAFgEAFAAIAFAAIAAASIgFAAQAAgKgGAAQgGAAgFAKQgDAJAAAMQAAAHACACQADADAHAAIAAADg");
	this.shape_24.setTransform(30.175,18.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAMAcIAAgTQgJANgFADQgFAEgFgBQgJABAAgOIAAggQAAgEgGAAIgDAAIAAgDIAUgDIAAACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAAjQAAAEABACQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAGAAAGgLQAHgJAAgNQAAgFgCgDQgBgCgEAAIgDAAIAAgDIAUgDIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAlQAAAFAEAAIAGgCIAAADIgQAGg");
	this.shape_25.setTransform(24.375,18.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgCAAgFIAAgJIALgFIAAADQgDAAAAAJQAAAFABACQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAFABIAFAAIAAACIgOAAIAAAmIAAACIADABQACAAAGgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_26.setTransform(19.375,17.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAMAcIAAgTQgJANgEADQgGAEgEgBQgKABAAgOIAAggQAAgEgFAAIgEAAIAAgDIAUgDIAAACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIAAAjQABADACADQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAQAHAAAGgLQAHgJgBgNQAAgFgBgDQgBgCgDAAIgEAAIAAgDIAVgDIAAACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAAlQAAAFAEAAIAGgCIAAADIgQAGg");
	this.shape_27.setTransform(14.25,18.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAnIAAgDQAFAAACgCQACgCAAgFIAAgyQAAgFgCgCQgDgCgEAAIAAgDIArAAIABgBIABgCIACAAIAAAXIgEAAQAAgJgFgEQgFgEgKAAIgEAAIAAALQAAALAEAFQACAFAKAAIAFAAIAAADIgVABIAAAXQAAAJAIAAIAAADg");
	this.shape_28.setTransform(8.625,17.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQAVQgHgHAAgLQAAgLAIgKQAIgJAKAAQAJgBAFAHQAEAGABAIIglAAIAAAEQAAAJAGAIQAFAGAHAAQAKAAALgMIAAAEQgNAQgMAAQgIAAgHgHgAgJgTQgFAEAAAGIAaAAQgBgIgDgDQgEgEgEAAQgFAAgEAFg");
	this.shape_29.setTransform(0.225,18.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAKApIAAgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgiQAAgDgCgCQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgGAAgGAKQgGALAAAMQAAAMAHAAIACAAIAAACIgaAAIAAgCQAEAAACgCQACgDABgEIAAg5QAAgEgFAAIgEABIAAgCIAUgIIAAACQgBAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAAoQAGgIAFgGQAHgFAFAAQAFAAACADQADAEAAAGIAAAeQAAAFACACQACACAFAAIAAACg");
	this.shape_30.setTransform(-5.7,16.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgDAAgEIAAgJIAMgFIAAADQgFABAAAIIABAHQABAAAAAAQAAABAAAAQABABAAAAQABABABAAIAFABIAFAAIAAACIgPAAIAAAmIABACIADABQADAAAFgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_31.setTransform(-10.75,17.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAlQgGgDgBgGQABgGAHgFQAJgFANgCIgEgDIgBgEIABgDIAGgGIgCAAIgGABQgHAAgEgEQgFgDAAgHQAAgIAIgHQAIgGAIAAIAFAAIAOAGIAJAAIAAADIgLAAIABAFQgBAFgBADQgCAEgHAGQgHAFAAADQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAJAEQAJADAFADQADADAAAFQABAIgLAHQgMAGgNAAQgLAAgHgEgAgPASQgGAEAAAFQAAAEAFADQAEADALAAQAKAAAHgEQAGgEAAgFQAAgEgCgCQgFgCgGgCIgHgDQgLADgGAEgAgJggQgEAEAAAGQAAAFAEAFQADAEAGAAQADAAAEgEQADgEAAgHQAAgGgDgEQgDgDgEAAQgFgBgEAFg");
	this.shape_32.setTransform(-18.7,19.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKAcIAAgDQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgjQAAgEgCgBQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgHAAgGALQgHAJABANQAAAHACACQACADAFAAIAAADIgaAAIAAgDQADAAADgCQADgDAAgEIAAgdQAAgGgFAAIgEACIAAgDIAOgGIADAAIAAASQAJgLAEgEQAFgDAFAAQAKAAAAAMIAAAeQABAFACACQACACAEAAIAAADg");
	this.shape_33.setTransform(-24.35,18.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAoIAAgDQAEAAADgCQADgCgBgFIAAgfQAAgEgEAAIgDABIgCABIAAgDIAPgGIACAAIAAAqQAAAFACACQAEACADAAIAAADgAgDgdQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIABAEQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABIgEABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_34.setTransform(-29.25,16.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAcIAAgDQADAAAEgCQACgDAAgEIAAgeQAAgFgFAAIgEACIAAgDIAPgGIADAAIAAASQAFgLAEgDQAFgEAFAAIAFAAIAAASIgFAAQAAgKgGAAQgGAAgFAKQgDAKAAALQAAAHACACQADADAHAAIAAADg");
	this.shape_35.setTransform(-33.25,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAVQgHgHAAgLQAAgLAIgKQAIgJAKAAQAJgBAFAHQAEAGABAIIglAAIAAAEQAAAJAGAIQAFAGAHAAQAKAAALgMIAAAEQgNAQgMAAQgIAAgHgHgAgJgTQgFAEAAAGIAaAAQgBgIgDgDQgEgEgEAAQgFAAgEAFg");
	this.shape_36.setTransform(-38.325,18.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCAcIgQgpQgDgLgHAAIAAgDIATAAIAAADQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIABADIALAiIAHgSQAEgIAAgGQAAgEgCgCQgCgBgEAAIAAgDIAYAAIAAADQgGABgGANIgQAmg");
	this.shape_37.setTransform(-43.6,18.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAVQgGgHAAgLQAAgMAJgJQAJgKAKABQALgBAHAIQAHAHAAALQAAANgKAIQgJAKgKgBQgLABgHgIgAgOgRQgEAFAAAJQAAAKAHAIQAGAIAIAAQAHAAAEgGQAFgEAAgKQAAgHgEgGQgDgFgFgFQgFgDgEAAQgIAAgEAGg");
	this.shape_38.setTransform(-49.325,18.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAWQgIgGAAgNQABgLAIgKQAJgJALAAQAIAAAIADIAAAPIgEAAQgBgGgEgFQgEgEgHAAQgHAAgEAHQgFAGAAAKQAAAHAFAIQAFAHAHgBQAEAAAFgCIAMgKIAAAEQgNARgLgBQgIAAgHgGg");
	this.shape_39.setTransform(-55.05,18.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAZIAAgRIAEAAQAAAIAFAEQADAFAFAAQAFgBACgCQADgDAAgEQAAgEgCgDIgQgKQgEgCgCgEIgBgFQAAgFAFgFQAFgEAIAAQAGgBAFADIAAAPIgDAAQAAgFgFgFQgDgEgDAAQgEAAgCACQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABQAAACABADIAIAGIANAJQADADAAAEQAAAIgHAFQgHAGgHgBQgGABgIgEg");
	this.shape_40.setTransform(-59.75,18.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAoIAAgDQADAAADgCQACgCAAgFIAAgfQAAgEgEAAIgDABIgBABIAAgDIAOgGIACAAIAAAqQAAAFADACQADACADAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_41.setTransform(-63.575,16.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AglAlIAAgCQAEAAACgCQACgCABgGIAAgxQgBgGgCgCQgCgCgEAAIAAgCIAtAAQAPAAAIAHQAHAHAAAPQAAASgMANQgNANgUAAgAgRgdIAAA5QAJAGAIAAQAMAAAIgKQAHgJABgPQAAgOgIgKQgFgKgPAAQgLAAgGAFg");
	this.shape_42.setTransform(-69.55,17.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgzBbQg0AAAAg0IAAhLQAAgZAPgPQAPgOAZAAIBsAAQAsAAAAA2IAAAsIibAAIAAAuIB3AAIAAAlgAgzgJIBtAAIAAgrIhtAAg");
	this.shape_43.setTransform(48.875,-22.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgzBbQg0AAAAg0IAAhLQAAgZAPgPQAPgOAZAAIBsAAQAsAAAAA2IAAAsIibAAIAAAuIB3AAIAAAlgAgzgJIBsAAIAAgrIhsAAg");
	this.shape_44.setTransform(27.225,-22.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhoB8IAAj3IA/AAIAADKICSAAIAAAtg");
	this.shape_45.setTransform(5.7,-25.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABHBbQgQAAgEgDQgGgFgEgMQgDAUgbAAIhIAAQgxAAgBgzIAAhOQABg0AxAAIBKAAQAWAAAJAQIAAgQIAzAAIAACKIAQAAIAAArgAg7AyIBnAAIAAhjIhnAAg");
	this.shape_46.setTransform(-28.7,-22.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABYBbQgRAAgMgJQgMgKAAgSIAAhnIhtAAIAACMIg0AAIAAi1IA0AAIAAATQAJgTATAAIBEAAQAkAAAOAQQAPAPAAAlIAABIIAQAAIAAApg");
	this.shape_47.setTransform(-52.8,-22.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbB8IAAi0IA3AAIAAC0gAgbhVIAAgmIA3AAIAAAmg");
	this.shape_48.setTransform(-69.65,-25.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcB8IAAjKIhbAAIAAgtIDvAAIAAAtIhXAAIAADKg");
	this.shape_49.setTransform(-85.75,-25.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgSAgQgHAAgGgGQgEgGgBgIIAAgYQAAgJAGgFQAEgFAIAAIAjAAQAJAAAFAFQAGAFgBAJIAAAYQABAJgGAGQgFAFgKAAgAgSARIAkAAIAAghIgkAAg");
	this.shape_50.setTransform(94.1,-3.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJArIAAg+IATAAIAAA+gAgJgdIAAgNIATAAIAAANg");
	this.shape_51.setTransform(88.825,-4.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYArIgFgBQgDgBgCgFQgCAEgCACQgBABgEAAIgZAAQgSAAAAgRIAAgbQAAgSASAAIAYAAQAHAAAEAFIAAgcIASAAIAABHIAGAAIAAAOgAgUAdIAjAAIAAgiIgjAAg");
	this.shape_52.setTransform(83.225,-4.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAWAgIAAgHQgDAHgLAAIgZAAQgPAAAAgSIAAgeIgHAAIAAgPIAKAAQAPAAAAAPIAAAhIAkAAIAAgwIASAAIAAA/g");
	this.shape_53.setTransform(74.85,-3.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgCArQgLAAgEgGQgEgDABgNIAAgXIgIAAIAAgJIAIAAIAAgfIATAAIAAAfIAdAAIAAAJIgdAAIAAAfIAeAAIAAAOg");
	this.shape_54.setTransform(67.55,-4.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgpArIAAgQIBAAAIAAgUIgpAAQgNAAgFgDQgFgCAAgKIAAgSQAAgKAHgEQAFgCALAAIA3AAIAAAQIg6AAIAAAUIAsAAQAUAAgBAPIAAATQAAAIgFADQgFAEgJAAg");
	this.shape_55.setTransform(60.2,-4.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAfAgQgHAAgEgEQgEgDAAgGIAAgjIglAAIAAAwIgSAAIAAg/IASAAIAAAHQAEgHAGAAIAXAAQAMAAAFAGQAGAGAAAMIAAAYIAFAAIAAAPg");
	this.shape_56.setTransform(47.525,-3.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLAnIAAgMIAeAAIAAgUIgDAAQgCAFgHAAIgZAAQgSAAAAgRIAAgPQAAgTASABIAZAAQAHgBAFAGIAAgFIASAAIAAA7QAAAKgFAEQgEAEgKAAgAgRgBIAkAAIAAgYIgkAAg");
	this.shape_57.setTransform(39.325,-2.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgJArIAAg+IATAAIAAA+gAgJgdIAAgNIATAAIAAANg");
	this.shape_58.setTransform(34.025,-4.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgjAgIAAgPIA2AAIAAgOIgqAAQgMAAAAgLIAAgIQAAgPAOAAIAxAAIAAAPIguAAIAAAOIAoAAQAOAAAAAOIAAAGQAAAOgPAAg");
	this.shape_59.setTransform(29,-3.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgRAgQgSAAAAgSIAAgaQAAgJAFgFQAGgFAIAAIAkAAQAQAAAAATIAAAPIg1AAIAAAQIApAAIAAANgAgRgDIAlAAIAAgOIglAAg");
	this.shape_60.setTransform(21.55,-3.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgrArIAAhVIBCAAQALAAAFAGQAFAGAAALIAAAmQAAAYgWAAgAgXAbIAuAAIAAg1IguAAg");
	this.shape_61.setTransform(13.125,-4.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},94).wait(1));

	// flash0_ai
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EFA747").s().p("AgEAFIgCgFIACgEQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAIgEgCg");
	this.shape_62.setTransform(55.675,34.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EFA747").s().p("AAKAbIAAgCQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgjQAAgEgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgHAAgGALQgGAJAAANQAAAIACABQACADAFAAIAAACIgaAAIAAgCQAEAAACgCQADgCAAgFIAAgdQAAgGgEAAIgFACIAAgDIAPgGIACAAIAAATQAIgLAFgFQAFgDAGAAQAJAAAAAMIAAAeQAAAFADACQACACAEAAIAAACg");
	this.shape_63.setTransform(50.925,32.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EFA747").s().p("AgTAVQgHgGAAgMQAAgMAJgJQAKgKAKABQAKgBAHAIQAHAGAAAMQAAANgJAIQgJAKgLgBQgKABgHgIgAgOgRQgEAFAAAJQAAAKAHAIQAGAIAIAAQAHAAAEgGQAFgEAAgKQAAgHgEgGQgDgGgFgEQgFgDgDAAQgIAAgFAGg");
	this.shape_64.setTransform(44.625,32.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EFA747").s().p("AgNAoIAAgDQAEAAADgCQADgCgBgFIAAgfQABgEgFAAIgFACIAAgDIAPgGIACAAIAAAqQAAAFACACQAEACADAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_65.setTransform(40.15,31.325);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EFA747").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgCAAgFIAAgJIAMgFIAAADQgEABAAAIIABAHQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAFABIAFAAIAAACIgOAAIAAAmIABACIACABQADAAAFgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_66.setTransform(36.725,31.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EFA747").s().p("AAHAXIAAgJQgIAJgEACQgFAEgEgBQgFABgDgEQgDgEAAgEQAAgNAggOIAAgHIgCgFQgCgCgDAAQgGAAgEAGQgEAFgBAIIgEAAIAAgNQANgKALABQAGgBACADQADADgBAFIAAAkQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQACABAGgGIAAADQgJAKgFgBQgFABAAgGgAgJABQgHAGAAAFQAAAEACACQACACAEAAQAHAAADgGQAFgIAAgLQgJACgHAEg");
	this.shape_67.setTransform(32.275,32.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EFA747").s().p("AAKAbIAAgCQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgjQAAgEgBgBQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgHAAgGALQgHAJABANQAAAHACACQACADAFAAIAAACIgaAAIAAgCQADAAADgCQADgCAAgFIAAgdQAAgGgFAAIgEACIAAgDIAPgGIADAAIAAATQAIgLAEgFQAFgDAFAAQAKAAAAAMIAAAeQABAFACACQACACAEAAIAAACg");
	this.shape_68.setTransform(26.05,32.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EFA747").s().p("AgNAoIAAgDQAEAAADgCQADgCgBgFIAAgfQAAgEgEAAIgFACIAAgDIAPgGIACAAIAAAqQAAAFACACQAEACADAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBgBAAQABgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_69.setTransform(21.15,31.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EFA747").s().p("AgXAlQgGgDgBgGQABgGAHgFQAJgFAMgCIgDgDIgBgEIABgDIAGgGIgCAAIgFABQgJAAgDgEQgFgDAAgHQAAgIAIgHQAHgGAJAAIAFAAIANAGIAKAAIAAADIgMAAIACAFQAAAFgCADQgCADgHAHQgIAFABADQAAAAAAAAQAAAAAAABQAAAAABABQAAAAABAAIAJAEQAJADAEADQAEADAAAFQAAAIgLAHQgLAGgNAAQgLAAgHgEgAgPASQgGAEAAAFQAAAEAFADQAFADAJAAQALAAAGgEQAHgDAAgGQAAgEgCgCQgHgDgEgBIgHgDQgKADgHAEgAgJggQgEAEAAAGQAAAFAEAFQADAEAFAAQAEAAAEgEQADgFABgGQgBgFgDgFQgEgDgDAAQgHgBgCAFg");
	this.shape_70.setTransform(16.3,33.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EFA747").s().p("AAGAXIAAgJQgGAIgFADQgFAEgFgBQgEABgDgEQgDgEAAgEQAAgNAfgOIAAgHIgBgFQgCgCgDAAQgGAAgEAGQgEAEgCAJIgDAAIAAgNQANgKALABQAGgBACADQACACAAAGIAAAkQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQACABAGgGIAAADQgJAKgFgBQgGABAAgGgAgKABQgGAGAAAFQAAAFACABQACACAEAAQAHAAADgGQAFgIAAgLQgKADgHADg");
	this.shape_71.setTransform(11.375,32.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EFA747").s().p("AAZAbIAAgCQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAggQAAgFgCgCQgCgDgCAAQgHAAgGAKQgGAKABAMQAAAHACADQADADAFAAIAAACIgUAAIAAgCQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIAAgjQAAgDgCgBQgCgDgDAAQgGAAgGAKQgFAKgBAMQABAHACADQABADAGAAIAAACIgbAAIAAgCQAEAAAEgCQABgDAAgEIAAgeQAAgFgDAAIgGACIAAgDIAQgGIACAAIAAASQAJgNAFgDQAEgCAFAAQAEAAACADQADADAAAHIAAAEQAIgLAFgEQAEgCAFAAQADgBAEADQADACgBAGIAAAgQABAFACACQADACADAAIAAACg");
	this.shape_72.setTransform(3.65,32.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EFA747").s().p("AgNAlIAAgCQAFAAACgCQACgCAAgGIAAgxQAAgGgCgCQgDgCgEAAIAAgCIAbAAIAAACQgEAAgDACQgCADAAAFIAAAxQAAAJAJABIAAACg");
	this.shape_73.setTransform(-2.975,31.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EFA747").s().p("AgRAZIAAgRIAEAAQABAIADAEQAEAFAFAAQAFgBADgCQACgEAAgDQAAgEgCgDIgQgKQgDgCgDgEIgBgFQAAgFAGgFQAFgEAHAAQAGgBAGADIAAAPIgFAAQABgFgEgFQgEgEgDAAQgEAAgCACQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQABADACADQABACAGAEIAOAJQACADAAAEQAAAIgHAFQgGAGgHgBQgIABgHgEg");
	this.shape_74.setTransform(-9.95,32.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EFA747").s().p("AgJAQQAHgEACgGQAEgFgBgEQAAgCgCgEIgBADIgDABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQADgDAEAAQAEAAADAEQADACAAAGQAAAGgGAIQgEAHgJAGg");
	this.shape_75.setTransform(-13.3,29);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EFA747").s().p("AAMAqIAAgTQgMAOgCACQgFADgEAAQgIAAgFgHQgEgGAAgKQAAgMAJgKQAJgLAKAAIAFABIAHACIAAgPQAAgFgEAAIgFABIAAgDIAUgIIAAACQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABIAABBQAAAFAEAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAAADIgPAGgAgPgCQgFAHAAAKQAAAHAEAHQAEAFAGAAQAHAAAGgKQAFgLAAgKIAAgGIgIgFIgHgCQgIAAgEAIg");
	this.shape_76.setTransform(-17.975,31.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EFA747").s().p("AgNApIAAgCQAFAAACgCQACgCAAgFIAAg3QABgGgFAAIgFABIAAgCIAUgIIAAACQgDABAAADIAABAQAAAEADADQACACAEAAIAAACg");
	this.shape_77.setTransform(-22.75,31.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EFA747").s().p("AgVAbIAAgCQAEAAADgCQACgCAAgFIAAgeQAAgFgDAAIgGACIAAgDIAQgGIACAAIAAATQAFgLAFgEQAFgEAFAAIAFAAIAAATIgFAAQAAgLgGAAQgGAAgFAKQgDAJAAAMQAAAHACACQADADAHAAIAAACg");
	this.shape_78.setTransform(-26.725,32.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EFA747").s().p("AgTAVQgHgGAAgMQAAgMAJgJQAJgKAKABQALgBAHAIQAHAGAAAMQAAANgJAIQgKAKgKgBQgLABgGgIgAgOgRQgEAEAAAKQAAAKAHAIQAGAIAIAAQAHAAAEgGQAFgEAAgKQAAgHgEgGQgDgHgFgDQgFgDgEAAQgHAAgFAGg");
	this.shape_79.setTransform(-32.125,32.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EFA747").s().p("AARAnIgRgxIgVAxIgDAAIgTg6IgEgHQgCgGgCgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAgDIAVAAIAAADQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABIAAABIATA2IAKgYQADgLAAgJQAAgNgJAAIAAgDIATAAIAAADQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAABIATA2IAMgdQAFgPAAgFQAAgFgBgBQgCgCgGAAIAAgDIAbAAIAAADQgEAAgDAEIgGAMIgYA6g");
	this.shape_80.setTransform(-39.95,31.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EFA747").s().p("AAKApIAAgCQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgiQAAgDgBgCQgCgCgDAAQgGAAgGAKQgGAKgBANQAAAMAIAAIACAAIAAACIgbAAIAAgCQAEAAADgCQACgCAAgFIAAg5QAAgBAAgBQAAAAgBgBQAAAAgBgBQgBAAAAAAIgGABIAAgCIAUgIIAAACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIAAAoQAIgKAEgEQAHgFAFAAQAEAAADADQACAEABAGIAAAeQgBAFACACQADACAEAAIAAACg");
	this.shape_81.setTransform(-52.2,31.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EFA747").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgCAAgFIAAgJIALgFIAAADQgDAAAAAJIABAHQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAFABIAFAAIAAACIgOAAIAAAmIABACIACABQACAAAGgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_82.setTransform(-57.275,31.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EFA747").s().p("AgMAoIAAgDQADAAADgCQACgCABgFIAAgfQgBgEgEAAIgDABIgBABIAAgDIANgGIAEAAIAAAqQAAAFABACQADACAFAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABIACAEQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAABIgEABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_83.setTransform(-60.6,31.325);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EFA747").s().p("AAQAnIgQgxIgUAxIgEAAIgUg6IgDgHQgCgGgDgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgDIAVAAIAAADQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIAAABIASA2IAKgYQAFgJAAgLQAAgNgKAAIAAgDIAUAAIAAADQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABABIASA2IAMgdQAGgNAAgHQAAgFgDgBQgBgCgGAAIAAgDIAbAAIAAADQgEAAgDAEIgHAMIgXA6g");
	this.shape_84.setTransform(-67.8,31.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EFA747").s().p("AgQAVQgHgHAAgLQAAgLAIgKQAIgJAKAAQAJgBAEAHQAGAHAAAHIglAAIAAAEQAAAJAFAIQAGAGAHAAQAKAAALgMIAAAEQgOAQgLAAQgIAAgHgHgAgJgTQgEADgBAHIAaAAQAAgHgEgEQgEgEgEAAQgFAAgEAFg");
	this.shape_85.setTransform(35.275,18.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EFA747").s().p("AgVAcIAAgDQAEAAADgCQACgCAAgFIAAgeQAAgFgDAAIgGACIAAgDIAQgGIACAAIAAASQAFgKAFgEQAFgEAFAAIAFAAIAAASIgFAAQAAgKgGAAQgGAAgFAKQgDAJAAAMQAAAHACACQADADAHAAIAAADg");
	this.shape_86.setTransform(30.175,18.15);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EFA747").s().p("AAMAcIAAgTQgJANgFADQgFAEgFgBQgJABAAgOIAAggQAAgEgGAAIgDAAIAAgDIAUgDIAAACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAAjQAAAEABACQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQAGAAAGgLQAHgJAAgNQAAgFgCgDQgBgCgEAAIgDAAIAAgDIAUgDIAAACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAlQAAAFAEAAIAGgCIAAADIgQAGg");
	this.shape_87.setTransform(24.375,18.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EFA747").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgCAAgFIAAgJIALgFIAAADQgDAAAAAJQAAAFABACQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAFABIAFAAIAAACIgOAAIAAAmIAAACIADABQACAAAGgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_88.setTransform(19.375,17.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EFA747").s().p("AAMAcIAAgTQgJANgEADQgGAEgEgBQgKABAAgOIAAggQAAgEgFAAIgEAAIAAgDIAUgDIAAACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIAAAjQABADACADQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAQAHAAAGgLQAHgJgBgNQAAgFgBgDQgBgCgDAAIgEAAIAAgDIAVgDIAAACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAAlQAAAFAEAAIAGgCIAAADIgQAGg");
	this.shape_89.setTransform(14.25,18.25);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EFA747").s().p("AgXAnIAAgDQAFAAACgCQACgCAAgFIAAgyQAAgFgCgCQgDgCgEAAIAAgDIArAAIABgBIABgCIACAAIAAAXIgEAAQAAgJgFgEQgFgEgKAAIgEAAIAAALQAAALAEAFQACAFAKAAIAFAAIAAADIgVABIAAAXQAAAJAIAAIAAADg");
	this.shape_90.setTransform(8.625,17.025);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EFA747").s().p("AgQAVQgHgHAAgLQAAgLAIgKQAIgJAKAAQAJgBAFAHQAEAGABAIIglAAIAAAEQAAAJAGAIQAFAGAHAAQAKAAALgMIAAAEQgNAQgMAAQgIAAgHgHgAgJgTQgFAEAAAGIAaAAQgBgIgDgDQgEgEgEAAQgFAAgEAFg");
	this.shape_91.setTransform(0.225,18.25);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EFA747").s().p("AAKApIAAgCQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIAAgiQAAgDgCgCQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgGAAgGAKQgGALAAAMQAAAMAHAAIACAAIAAACIgaAAIAAgCQAEAAACgCQACgDABgEIAAg5QAAgEgFAAIgEABIAAgCIAUgIIAAACQgBAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAAoQAGgIAFgGQAHgFAFAAQAFAAACADQADAEAAAGIAAAeQAAAFACACQACACAFAAIAAACg");
	this.shape_92.setTransform(-5.7,16.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EFA747").s().p("AgFAjQgBgCAAgEIAAgoIgJAAIAAgCQAFAAACgCQACgDAAgEIAAgJIAMgFIAAADQgFABAAAIIABAHQABAAAAAAQAAABAAAAQABABAAAAQABABABAAIAFABIAFAAIAAACIgPAAIAAAmIABACIADABQADAAAFgFIABgBIAAAEQgJAJgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_93.setTransform(-10.75,17.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EFA747").s().p("AgXAlQgGgDgBgGQABgGAHgFQAJgFANgCIgEgDIgBgEIABgDIAGgGIgCAAIgGABQgHAAgEgEQgFgDAAgHQAAgIAIgHQAIgGAIAAIAFAAIAOAGIAJAAIAAADIgLAAIABAFQgBAFgBADQgCAEgHAGQgHAFAAADQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAJAEQAJADAFADQADADAAAFQABAIgLAHQgMAGgNAAQgLAAgHgEgAgPASQgGAEAAAFQAAAEAFADQAEADALAAQAKAAAHgEQAGgEAAgFQAAgEgCgCQgFgCgGgCIgHgDQgLADgGAEgAgJggQgEAEAAAGQAAAFAEAFQADAEAGAAQADAAAEgEQADgEAAgHQAAgGgDgEQgDgDgEAAQgFgBgEAFg");
	this.shape_94.setTransform(-18.7,19.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EFA747").s().p("AAKAcIAAgDQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgjQAAgEgCgBQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgHAAgGALQgHAJABANQAAAHACACQACADAFAAIAAADIgaAAIAAgDQADAAADgCQADgDAAgEIAAgdQAAgGgFAAIgEACIAAgDIAOgGIADAAIAAASQAJgLAEgEQAFgDAFAAQAKAAAAAMIAAAeQABAFACACQACACAEAAIAAADg");
	this.shape_95.setTransform(-24.35,18.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EFA747").s().p("AgNAoIAAgDQAEAAADgCQADgCgBgFIAAgfQAAgEgEAAIgDABIgCABIAAgDIAPgGIACAAIAAAqQAAAFACACQAEACADAAIAAADgAgDgdQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIABAEQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABIgEABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_96.setTransform(-29.25,16.925);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EFA747").s().p("AgUAcIAAgDQADAAAEgCQACgDAAgEIAAgeQAAgFgFAAIgEACIAAgDIAPgGIADAAIAAASQAFgLAEgDQAFgEAFAAIAFAAIAAASIgFAAQAAgKgGAAQgGAAgFAKQgDAKAAALQAAAHACACQADADAHAAIAAADg");
	this.shape_97.setTransform(-33.25,18.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EFA747").s().p("AgQAVQgHgHAAgLQAAgLAIgKQAIgJAKAAQAJgBAFAHQAEAGABAIIglAAIAAAEQAAAJAGAIQAFAGAHAAQAKAAALgMIAAAEQgNAQgMAAQgIAAgHgHgAgJgTQgFAEAAAGIAaAAQgBgIgDgDQgEgEgEAAQgFAAgEAFg");
	this.shape_98.setTransform(-38.325,18.25);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EFA747").s().p("AgCAcIgQgpQgDgLgHAAIAAgDIATAAIAAADQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIABADIALAiIAHgSQAEgIAAgGQAAgEgCgCQgCgBgEAAIAAgDIAYAAIAAADQgGABgGANIgQAmg");
	this.shape_99.setTransform(-43.6,18.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EFA747").s().p("AgUAVQgGgHAAgLQAAgMAJgJQAJgKAKABQALgBAHAIQAHAHAAALQAAANgKAIQgJAKgKgBQgLABgHgIgAgOgRQgEAFAAAJQAAAKAHAIQAGAIAIAAQAHAAAEgGQAFgEAAgKQAAgHgEgGQgDgFgFgFQgFgDgEAAQgIAAgEAGg");
	this.shape_100.setTransform(-49.325,18.25);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EFA747").s().p("AgPAWQgIgGAAgNQABgLAIgKQAJgJALAAQAIAAAIADIAAAPIgEAAQgBgGgEgFQgEgEgHAAQgHAAgEAHQgFAGAAAKQAAAHAFAIQAFAHAHgBQAEAAAFgCIAMgKIAAAEQgNARgLgBQgIAAgHgGg");
	this.shape_101.setTransform(-55.05,18.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EFA747").s().p("AgRAZIAAgRIAEAAQAAAIAFAEQADAFAFAAQAFgBACgCQADgDAAgEQAAgEgCgDIgQgKQgEgCgCgEIgBgFQAAgFAFgFQAFgEAIAAQAGgBAFADIAAAPIgDAAQAAgFgFgFQgDgEgDAAQgEAAgCACQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABQAAACABADIAIAGIANAJQADADAAAEQAAAIgHAFQgHAGgHgBQgGABgIgEg");
	this.shape_102.setTransform(-59.75,18.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EFA747").s().p("AgMAoIAAgDQADAAADgCQACgCAAgFIAAgfQAAgEgEAAIgDABIgBABIAAgDIAOgGIACAAIAAAqQAAAFADACQADACADAAIAAADgAgDgdQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_103.setTransform(-63.575,16.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EFA747").s().p("AglAlIAAgCQAEAAACgCQACgCABgGIAAgxQgBgGgCgCQgCgCgEAAIAAgCIAtAAQAPAAAIAHQAHAHAAAPQAAASgMANQgNANgUAAgAgRgdIAAA5QAJAGAIAAQAMAAAIgKQAHgJABgPQAAgOgIgKQgFgKgPAAQgLAAgGAFg");
	this.shape_104.setTransform(-69.55,17.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EFA747").s().p("AgzBbQg0AAAAg0IAAhLQAAgZAPgPQAPgOAZAAIBsAAQAsAAAAA2IAAAsIibAAIAAAuIB3AAIAAAlgAgzgJIBtAAIAAgrIhtAAg");
	this.shape_105.setTransform(48.875,-22.35);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EFA747").s().p("AgzBbQg0AAAAg0IAAhLQAAgZAPgPQAPgOAZAAIBsAAQAsAAAAA2IAAAsIibAAIAAAuIB3AAIAAAlgAgzgJIBsAAIAAgrIhsAAg");
	this.shape_106.setTransform(27.225,-22.35);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EFA747").s().p("AhoB8IAAj3IA/AAIAADKICSAAIAAAtg");
	this.shape_107.setTransform(5.7,-25.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EFA747").s().p("ABHBbQgQAAgEgDQgGgFgEgMQgDAUgbAAIhIAAQgxAAgBgzIAAhOQABg0AxAAIBKAAQAWAAAJAQIAAgQIAzAAIAACKIAQAAIAAArgAg7AyIBnAAIAAhjIhnAAg");
	this.shape_108.setTransform(-28.7,-22.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EFA747").s().p("ABYBbQgRAAgMgJQgMgKAAgSIAAhnIhtAAIAACMIg0AAIAAi1IA0AAIAAATQAJgTATAAIBEAAQAkAAAOAQQAPAPAAAlIAABIIAQAAIAAApg");
	this.shape_109.setTransform(-52.8,-22.35);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EFA747").s().p("AgbB8IAAi0IA3AAIAAC0gAgbhVIAAgmIA3AAIAAAmg");
	this.shape_110.setTransform(-69.65,-25.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EFA747").s().p("AgcB8IAAjKIhbAAIAAgtIDvAAIAAAtIhXAAIAADKg");
	this.shape_111.setTransform(-85.75,-25.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EFA747").s().p("AgSAgQgHAAgGgGQgEgGgBgIIAAgYQAAgJAGgFQAEgFAIAAIAjAAQAJAAAFAFQAGAFgBAJIAAAYQABAJgGAGQgFAFgKAAgAgSARIAkAAIAAghIgkAAg");
	this.shape_112.setTransform(94.1,-3.225);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EFA747").s().p("AgJArIAAg+IATAAIAAA+gAgJgdIAAgNIATAAIAAANg");
	this.shape_113.setTransform(88.825,-4.35);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EFA747").s().p("AAYArIgFgBQgDgBgCgFQgCAEgCACQgBABgEAAIgZAAQgSAAAAgRIAAgbQAAgSASAAIAYAAQAHAAAEAFIAAgcIASAAIAABHIAGAAIAAAOgAgUAdIAjAAIAAgiIgjAAg");
	this.shape_114.setTransform(83.225,-4.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EFA747").s().p("AAWAgIAAgHQgDAHgLAAIgZAAQgPAAAAgSIAAgeIgHAAIAAgPIAKAAQAPAAAAAPIAAAhIAkAAIAAgwIASAAIAAA/g");
	this.shape_115.setTransform(74.85,-3.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EFA747").s().p("AgCArQgLAAgEgGQgEgDABgNIAAgXIgIAAIAAgJIAIAAIAAgfIATAAIAAAfIAdAAIAAAJIgdAAIAAAfIAeAAIAAAOg");
	this.shape_116.setTransform(67.55,-4.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EFA747").s().p("AgpArIAAgQIBAAAIAAgUIgpAAQgNAAgFgDQgFgCAAgKIAAgSQAAgKAHgEQAFgCALAAIA3AAIAAAQIg6AAIAAAUIAsAAQAUAAgBAPIAAATQAAAIgFADQgFAEgJAAg");
	this.shape_117.setTransform(60.2,-4.35);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EFA747").s().p("AAfAgQgHAAgEgEQgEgDAAgGIAAgjIglAAIAAAwIgSAAIAAg/IASAAIAAAHQAEgHAGAAIAXAAQAMAAAFAGQAGAGAAAMIAAAYIAFAAIAAAPg");
	this.shape_118.setTransform(47.525,-3.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EFA747").s().p("AgLAnIAAgMIAeAAIAAgUIgDAAQgCAFgHAAIgZAAQgSAAAAgRIAAgPQAAgTASABIAZAAQAHgBAFAGIAAgFIASAAIAAA7QAAAKgFAEQgEAEgKAAgAgRgBIAkAAIAAgYIgkAAg");
	this.shape_119.setTransform(39.325,-2.45);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EFA747").s().p("AgJArIAAg+IATAAIAAA+gAgJgdIAAgNIATAAIAAANg");
	this.shape_120.setTransform(34.025,-4.35);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EFA747").s().p("AgjAgIAAgPIA2AAIAAgOIgqAAQgMAAAAgLIAAgIQAAgPAOAAIAxAAIAAAPIguAAIAAAOIAoAAQAOAAAAAOIAAAGQAAAOgPAAg");
	this.shape_121.setTransform(29,-3.225);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EFA747").s().p("AgRAgQgSAAAAgSIAAgaQAAgJAFgFQAGgFAIAAIAkAAQAQAAAAATIAAAPIg1AAIAAAQIApAAIAAANgAgRgDIAlAAIAAgOIglAAg");
	this.shape_122.setTransform(21.55,-3.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EFA747").s().p("AgrArIAAhVIBCAAQALAAAFAGQAFAGAAALIAAAmQAAAYgWAAgAgXAbIAuAAIAAg1IguAAg");
	this.shape_123.setTransform(13.125,-4.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},94).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-38,195.5,76.1);


(lib.whitecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtKfFQmFikkskqQksksikmDQirmRABm3QgBm2CrmRQCkmEEskqQEskrGFikQGSipG4gBQG4ABGTCpQGFCkEsErQEsEqCkGEQCqGRAAG2QAAG3iqGRQikGDksEsQksEqmFCkQmSCqm5AAQm4AAmSiqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitecircle, new cjs.Rectangle(-216.6,-215.8,433.29999999999995,431.70000000000005), null);


(lib.tearlinepng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.tearcircle();
	this.instance.parent = this;
	this.instance.setTransform(-250,-246.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tearlinepng, new cjs.Rectangle(-250,-246.5,500,493), null);


(lib.orangecircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EFA747").ss(3.9).p("Af+AAQAAmdihl7QiblukbkaQkckalvibQl8igmgAAQmfAAl8CgQlvCbkcEaQkbEaibFuQihF7AAGdQAAGfChF7QCbFtEbEaQEcEaFvCbQF8CgGfAAQGgAAF8igQFvibEckaQEbkaCbltQChl7AAmfg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.orangecircle, new cjs.Rectangle(-206.4,-205.7,412.9,411.4), null);


(lib.oclose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhRCLQgkAAgVgbQgVgYAAglIAAhtQAAgjAVgXQAVgVAigBICdAAQAnAAAXAUQAYAVAAAnIAABtQAAApgZAYQgYAWgrABgAAaAJQgDADAAAEQAAAFADACQADADAEAAIBKAAQAEAAADgDQADgCAAgFQAAgKgKAAIhKAAQgEAAgDADgAh0AQQAAAFADACQADADAEAAIBJAAQAEAAADgDQADgCAAgFQAAgEgDgDQgDgDgEAAIhJAAQgKAAAAAKg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.oclose, new cjs.Rectangle(-15.9,-13.8,31.9,27.700000000000003), null);


(lib.o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhRCLQgkAAgVgbQgVgYAAglIAAhtQAAgjAVgXQAVgVAigBICdAAQAnAAAXAUQAYAVAAAnIAABtQAAApgZAYQgYAWgrABgAAngSQgNANAAASQAAARANANQAMANATAAQASAAANgNQANgNAAgRQAAgSgNgNQgNgNgSABQgTgBgMANgAhkgSQgNANAAASQAAARANANQANANASAAQASAAANgNQANgNAAgRQAAgSgNgNQgNgNgSABQgSgBgNANg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.o, new cjs.Rectangle(-15.9,-13.8,31.9,27.700000000000003), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo, null, new cjs.Matrix2D(1,0,0,1,-153.5,-104)).s().p("AN+QQIgBgRIrPAEIADgCIgtAPIigAAIgFgDIg8gCQhwgEhvAFIgMgYIAAAAIgCgEIACAEIhiAcIiOAAIgBgBQgXgDgWAAQlagGlZgDIgOANIjXAAIAAhKIADgqQABgRAEgRIAnidIgvgKIAA7iMAv9AAAIAAS0QhMAeg7A/QhgBkgLCSQgFBCgjAxQgUAfgMAmIgEARIAEgOQgZCHALCGQAEAuATAig");
	this.shape.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-154,-104,307,208), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdBXQhehEAAhAQAAgmAYgaQAXgYAigFQAigGAdAQQAgASALAnQAMgoAggSQAcgQAjAGQAiAFAXAZQAYAaAAAmQAABAheBEQgvAigvAVQgugVgvgig");
	this.shape.setTransform(0.0091,-0.0114,2.5715,2.5715);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhdBXQhehEAAhAQAAgmAYgaQAXgYAigFQAigGAdAQQAgASALAnQAMgoAggSQAcgQAjAGQAiAFAXAZQAYAaAAAmQAABAheBEQgvAigvAVQgugVgvgig");
	this.shape_1.setTransform(0.0091,-0.0114,2.5715,2.5715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},19).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-36.4,96.8,72.9);


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


(lib.blksquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// 圖層_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_36 = new cjs.Graphics().p("AhRBSIAAijICjAAIAACjg");
	var mask_graphics_37 = new cjs.Graphics().p("AhRCiIAAlDICjAAIAAFDg");
	var mask_graphics_38 = new cjs.Graphics().p("AhRDzIAAnlICjAAIAAHlg");
	var mask_graphics_39 = new cjs.Graphics().p("AhRFDIAAqFICjAAIAAKFg");
	var mask_graphics_40 = new cjs.Graphics().p("AhRGUIAAsnICjAAIAAMng");
	var mask_graphics_41 = new cjs.Graphics().p("AhRHlIAAvJICjAAIAAPJg");
	var mask_graphics_42 = new cjs.Graphics().p("AhRI1IAAxpICjAAIAARpg");
	var mask_graphics_43 = new cjs.Graphics().p("AhRKGIAA0LICjAAIAAULg");
	var mask_graphics_44 = new cjs.Graphics().p("AhRLWIAA2rICjAAIAAWrg");
	var mask_graphics_45 = new cjs.Graphics().p("AhRMnIAA5NICjAAIAAZNg");
	var mask_graphics_46 = new cjs.Graphics().p("AhRN3IAA7tICjAAIAAbtg");
	var mask_graphics_47 = new cjs.Graphics().p("AhRPIIAA+PICjAAIAAePg");
	var mask_graphics_48 = new cjs.Graphics().p("AhRQYMAAAggvICjAAMAAAAgvg");
	var mask_graphics_49 = new cjs.Graphics().p("AhRRpMAAAgjRICjAAMAAAAjRg");
	var mask_graphics_50 = new cjs.Graphics().p("AhRS6MAAAglzICjAAMAAAAlzg");
	var mask_graphics_51 = new cjs.Graphics().p("AhRUKMAAAgoTICjAAMAAAAoTg");
	var mask_graphics_52 = new cjs.Graphics().p("AhRVbMAAAgq1ICjAAMAAAAq1g");
	var mask_graphics_53 = new cjs.Graphics().p("AhRWrMAAAgtVICjAAMAAAAtVg");
	var mask_graphics_57 = new cjs.Graphics().p("AhRWrMAAAgtVICjAAMAAAAtVg");
	var mask_graphics_62 = new cjs.Graphics().p("AhRWrMAAAgtVICjAAMAAAAtVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_graphics_36,x:229.875,y:145.925}).wait(1).to({graphics:mask_graphics_37,x:229.875,y:137.8721}).wait(1).to({graphics:mask_graphics_38,x:229.875,y:129.8191}).wait(1).to({graphics:mask_graphics_39,x:229.875,y:121.7662}).wait(1).to({graphics:mask_graphics_40,x:229.875,y:113.7132}).wait(1).to({graphics:mask_graphics_41,x:229.875,y:105.6603}).wait(1).to({graphics:mask_graphics_42,x:229.875,y:97.6074}).wait(1).to({graphics:mask_graphics_43,x:229.875,y:89.5544}).wait(1).to({graphics:mask_graphics_44,x:229.875,y:81.5015}).wait(1).to({graphics:mask_graphics_45,x:229.875,y:73.4485}).wait(1).to({graphics:mask_graphics_46,x:229.875,y:65.3956}).wait(1).to({graphics:mask_graphics_47,x:229.875,y:57.3426}).wait(1).to({graphics:mask_graphics_48,x:229.875,y:49.2897}).wait(1).to({graphics:mask_graphics_49,x:229.875,y:41.2368}).wait(1).to({graphics:mask_graphics_50,x:229.875,y:33.1838}).wait(1).to({graphics:mask_graphics_51,x:229.875,y:25.1309}).wait(1).to({graphics:mask_graphics_52,x:229.875,y:17.0779}).wait(1).to({graphics:mask_graphics_53,x:229.875,y:9.025}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_57,x:229.875,y:9.025}).wait(1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_62,x:229.875,y:9.025}).wait(32).to({graphics:null,x:0,y:0}).wait(1));

	// right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAz/MAAAAn/");
	this.shape.setTransform(228.45,0);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(36).to({_off:false},0).wait(17).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},32).wait(1));

	// 圖層_7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_17 = new cjs.Graphics().p("Ag6VKMAAAgqTIB1AAMAAAAqTg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ai3VKMAAAgqTIFvAAMAAAAqTg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ak1VKMAAAgqTIJrAAMAAAAqTg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AmyVKMAAAgqTINlAAMAAAAqTg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AowVKMAAAgqTIRhAAMAAAAqTg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AqtVKMAAAgqTIVbAAMAAAAqTg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AsrVKMAAAgqTIZXAAMAAAAqTg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AuoVKMAAAgqTIdRAAMAAAAqTg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AwlVKMAAAgqTMAhLAAAMAAAAqTg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AyjVKMAAAgqTMAlHAAAMAAAAqTg");
	var mask_1_graphics_27 = new cjs.Graphics().p("A0gVKMAAAgqTMApBAAAMAAAAqTg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A2eVKMAAAgqTMAs9AAAMAAAAqTg");
	var mask_1_graphics_29 = new cjs.Graphics().p("A4bVKMAAAgqTMAw3AAAMAAAAqTg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A6ZVKMAAAgqTMA0zAAAMAAAAqTg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A8WVKMAAAgqTMA4tAAAMAAAAqTg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A+UVKMAAAgqTMA8pAAAMAAAAqTg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EggRAVKMAAAgqTMBAjAAAMAAAAqTg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgiOAVKMAAAgqTMBEdAAAMAAAAqTg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgkMAVKMAAAgqTMBIZAAAMAAAAqTg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgmJAVKMAAAgqTMBMTAAAMAAAAqTg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgmJAVKMAAAgqTMBMTAAAMAAAAqTg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgmJAVKMAAAgqTMBMTAAAMAAAAqTg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgmJAVKMAAAgqTMBMTAAAMAAAAqTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_1_graphics_17,x:-238.85,y:1.275}).wait(1).to({graphics:mask_1_graphics_18,x:-226.3092,y:1.275}).wait(1).to({graphics:mask_1_graphics_19,x:-213.7684,y:1.275}).wait(1).to({graphics:mask_1_graphics_20,x:-201.2276,y:1.275}).wait(1).to({graphics:mask_1_graphics_21,x:-188.6868,y:1.275}).wait(1).to({graphics:mask_1_graphics_22,x:-176.146,y:1.275}).wait(1).to({graphics:mask_1_graphics_23,x:-163.6053,y:1.275}).wait(1).to({graphics:mask_1_graphics_24,x:-151.0645,y:1.275}).wait(1).to({graphics:mask_1_graphics_25,x:-138.5237,y:1.275}).wait(1).to({graphics:mask_1_graphics_26,x:-125.9829,y:1.275}).wait(1).to({graphics:mask_1_graphics_27,x:-113.4421,y:1.275}).wait(1).to({graphics:mask_1_graphics_28,x:-100.9013,y:1.275}).wait(1).to({graphics:mask_1_graphics_29,x:-88.3605,y:1.275}).wait(1).to({graphics:mask_1_graphics_30,x:-75.8197,y:1.275}).wait(1).to({graphics:mask_1_graphics_31,x:-63.2789,y:1.275}).wait(1).to({graphics:mask_1_graphics_32,x:-50.7382,y:1.275}).wait(1).to({graphics:mask_1_graphics_33,x:-38.1974,y:1.275}).wait(1).to({graphics:mask_1_graphics_34,x:-25.6566,y:1.275}).wait(1).to({graphics:mask_1_graphics_35,x:-13.1158,y:1.275}).wait(1).to({graphics:mask_1_graphics_36,x:-0.575,y:1.275}).wait(17).to({graphics:mask_1_graphics_53,x:-0.575,y:1.275}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_1_graphics_57,x:-0.575,y:1.275}).wait(1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_62,x:-0.575,y:1.275}).wait(32).to({graphics:null,x:0,y:0}).wait(1));

	// MergedLayer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("EAjsAAAMhHXAAA");
	this.shape_1.setTransform(0.025,128);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("EgjrAAAMBHXAAA");
	this.shape_2.setTransform(0.025,-128);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},17).to({state:[{t:this.shape_2},{t:this.shape_1}]},36).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[]},32).wait(1));

	// 圖層_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AghB4IAAjvIBDAAIAADvg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AghDTIAAmlIBDAAIAAGlg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AghEvIAApdIBDAAIAAJdg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AghGKIAAsTIBDAAIAAMTg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AghHlIAAvJIBDAAIAAPJg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AghJAIAAx/IBDAAIAAR/g");
	var mask_2_graphics_6 = new cjs.Graphics().p("AghKcIAA03IBDAAIAAU3g");
	var mask_2_graphics_7 = new cjs.Graphics().p("AghNFIAA6JIBDAAIAAaJg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AghPvIAA/dIBDAAIAAfdg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AghSZMAAAgkxIBDAAMAAAAkxg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AghVCMAAAgqDIBDAAMAAAAqDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AghXsMAAAgvXIBDAAMAAAAvXg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AghaWMAAAg0rIBDAAMAAAA0rg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Aghc/MAAAg59IBDAAMAAAA59g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AgheVMAAAg8pIBDAAMAAAA8pg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AghfrMAAAg/VIBDAAMAAAA/Vg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgAhAhBMAAAhCBIBDAAMAAABCBg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgAhAiWMAAAhErIBDAAMAAABErg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgAhAiWMAAAhErIBDAAMAAABErg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgAhAiWMAAAhErIBDAAMAAABErg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EgAhAiWMAAAhErIBDAAMAAABErg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-227.8,y:-147.2}).wait(1).to({graphics:mask_2_graphics_1,x:-227.8,y:-135.9375}).wait(1).to({graphics:mask_2_graphics_2,x:-227.8,y:-124.675}).wait(1).to({graphics:mask_2_graphics_3,x:-227.8,y:-113.4125}).wait(1).to({graphics:mask_2_graphics_4,x:-227.8,y:-102.15}).wait(1).to({graphics:mask_2_graphics_5,x:-227.8,y:-90.8875}).wait(1).to({graphics:mask_2_graphics_6,x:-227.8,y:-79.625}).wait(1).to({graphics:mask_2_graphics_7,x:-227.8,y:-79.6179}).wait(1).to({graphics:mask_2_graphics_8,x:-227.8,y:-79.6107}).wait(1).to({graphics:mask_2_graphics_9,x:-227.8,y:-79.6036}).wait(1).to({graphics:mask_2_graphics_10,x:-227.8,y:-79.5964}).wait(1).to({graphics:mask_2_graphics_11,x:-227.8,y:-79.5893}).wait(1).to({graphics:mask_2_graphics_12,x:-227.8,y:-79.5821}).wait(1).to({graphics:mask_2_graphics_13,x:-227.8,y:-79.575}).wait(1).to({graphics:mask_2_graphics_14,x:-227.8,y:-79.575}).wait(1).to({graphics:mask_2_graphics_15,x:-227.8,y:-79.575}).wait(1).to({graphics:mask_2_graphics_16,x:-227.8,y:-79.575}).wait(1).to({graphics:mask_2_graphics_17,x:-227.8,y:-79.575}).wait(36).to({graphics:mask_2_graphics_53,x:-227.8,y:-79.575}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_2_graphics_57,x:-227.8,y:-79.575}).wait(1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_2_graphics_62,x:-227.8,y:-79.575}).wait(32).to({graphics:null,x:0,y:0}).wait(1));

	// left
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAUAMAAAgn/");
	this.shape_3.setTransform(-228.4,0);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(53).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.9,-130.5,461.9,261);


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


(lib.tearline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.tearlinepng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.5,-350.5,701,701.1);


(lib.omoving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.o();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,0);

	this.instance_1 = new lib.oclose();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(2).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-13.8,32,27.700000000000003);


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


(lib.logomoving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(11,1,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// citycirclewithanimal
	this.instance_1 = new lib.citycirclewithanimal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.05,0,1,1,0,0,0,-11.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// orangecircle
	this.instance_2 = new lib.orangecircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// whitecircle
	this.instance_3 = new lib.whitecircle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tearline
	this.instance_4 = new lib.tearline();
	this.instance_4.parent = this;
	this.instance_4.setTransform(11,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.logomoving, new cjs.Rectangle(-262.2,-287.8,524.5,575.7), null);


// stage content:
(lib.rwdlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		/* 在此影格停止
		時間軸會在插入此程式碼的影格停止/暫停。
		亦可用來停止/暫停影片片段的時間軸。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// 圖層_4
	this.instance = new lib.blksquare();
	this.instance.parent = this;
	this.instance.setTransform(917.4,427.95);

	this.instance_1 = new lib.words();
	this.instance_1.parent = this;
	this.instance_1.setTransform(930.45,392.2,1.9801,1.9801,0,0,0,2.2,-20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},109).wait(1));

	// 圖層_6
	this.instance_2 = new lib.omoving();
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.35,486.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110));

	// flash0_ai
	this.instance_3 = new lib.heart();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1297.4,593.05,0.5172,0.5172,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({x:916},8).wait(2));

	// flash0_ai
	this.instance_4 = new lib.logomoving();
	this.instance_4.parent = this;
	this.instance_4.setTransform(370.15,399);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(707.9,511.2,642.6999999999999,175.7);
// library properties:
lib.properties = {
	id: '062C4B0FB3AB204DBA93DAD6D241AAC0',
	width: 1200,
	height: 800,
	fps: 24,
	color: "#EFA747",
	opacity: 0.00,
	manifest: [
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
an.compositions['062C4B0FB3AB204DBA93DAD6D241AAC0'] = {
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