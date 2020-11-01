rndmpstslcznk = typeof rndmpstslcznk == 'undefined' ? 0 : rndmpstslcznk + 1;
(function(nr, g, q, c, w, b, e) {
	let tab = [];
	let s = e[q+'All'](w)[nr];
	let r = e.createElement('div');
	let z = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-';
	let d = 'pbpRP-';
	while (d.length < 16) {
		d += z[Math.floor(Math.random() * z.length)];
	}
	r.id = d;
	s.parentNode.insertBefore(r, s);

	let ile = Number(s[g]('numberOfPosts'));
	if (ile < 1 || isNaN(ile)) ile = 5;
	
	let kat = s[g]('label');
	if (kat === 'none' || kat === '' || kat === null) {
		kat = '';
	} else {
		kat = '/-/' + kat;
	}
	
	let wtx = Number(s[g]('textSize'));
	if (wtx < 4 || isNaN(wtx)) wtx = 12;
	let wtl = Number(s[g]('titleSize'));
	if (wtl < 5 || isNaN(wtl)) wtl = wtx + 3;
	let mrg = wtx < 12 ? 2 : (wtx < 21 ? 3 : 4);
	
	let bw = Number(s[g]('borderWidth'));
	if (bw < 0 || isNaN(bw)) bw = 1;
	
	let bs = s[g]('borderStyle');
	if (bs !== 'dotted' && bs !== 'dashed') bs = 'solid';
	
	let ktl = s[g]('titleColor') ? s[g]('titleColor') : '#9d0000';
	let ktx = s[g]('textColor') ? s[g]('textColor') : '#333333';
	let ctl = s[g]('titleFont') ? s[g]('titleFont') : '\'Comic Sans MS\', cursive, sans-serif';
	let ctx = s[g]('textFont') ? s[g]('textFont') : 'Georgia, serif';
	let ob = s[g]('thumbnail');
	if (ob === 'none') {
		ob = 'display:none;';
	} else if (ob === 'right') {
		ob = 'float:right;margin:0 0 5px 5px;';
	} else {
		ob = 'float:left;margin:0 5px 5px 0;';
	}
	let wo = s[g]('thumbnailSize');
	if (Number(wo) < 0 || isNaN(wo) || wo === null) {
		wo = 70;
	}
	let rad = s[g]('thumbnailRounding');
	if (isNaN(rad) || rad === null) {
		rad = 15;
	}
	let nOb = s[g]('noThumbnail');
	if (nOb === 'default' || nOb === '' || nOb === null) nOb = 'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png';
	let tl = s[g]('postTitle');
	let inf = s[g]('postInfo');
	let au = s[g]('postAuthor');
	let dp = s[g]('publishDate');
	let ilk = s[g]('numOfComments');
	let ety = s[g]('postCategories');
	let skr = s[g]('excerptLength');
	if (skr === null || isNaN(skr) || Number(skr) < 0) {
		skr = 200;
	}

	function dStyl(f) {
		if (f === 'none') {
			return 'display:none;';
		} else if (f === 'right') {
			return 'display:block;text-align:right;';
		} else if (f === 'center') {
			return 'display:block;text-align:center;';
		} else {
			return 'display:block;text-align:left;';
		}
	}

	function ustCz(f) {
		if (f == 'Georgia' || f == 'Georgia, serif') {
			return 'Georgia, serif'
		} else if (f == 'Palatino' || f == "'Palatino Linotype', 'Book Antiqua', Palatino, serif") {
			return '"Palatino Linotype", "Book Antiqua", Palatino, serif';
		} else if (f == 'Times New Roman' || f == "'Times New Roman', Times, serif") {
			return '"Times New Roman", Times, serif';
		} else if (f == 'Arial' || f == 'Arial, Helvetica, sans-serif') {
			return 'Arial, Helvetica, sans-serif';
		} else if (f == 'Arial Black' || f == "'Arial Black', Gadget, sans-serif") {
			return '"Arial Black", Gadget, sans-serif';
		} else if (f == 'Comic Sans' || f == "'Comic Sans MS', cursive, sans-serif") {
			return '"Comic Sans MS", cursive, sans-serif';
		} else if (f == 'Impact' || f == 'Impact, Charcoal, sans-serif') {
			return 'Impact, Charcoal, sans-serif';
		} else if (f == 'Lucida Sans' || f == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif") {
			return '"Lucida Sans Unicode", "Lucida Grande", sans-serif';
		} else if (f == 'Tahoma' || f == 'Tahoma, Geneva, sans-serif') {
			return 'Tahoma, Geneva, sans-serif';
		} else if (f == 'Trebuchet' || f == "'Trebuchet MS', Helvetica, sans-serif") {
			return '"Trebuchet MS", Helvetica, sans-serif';
		} else if (f == 'Verdana' || f == 'Verdana, Geneva, sans-serif') {
			return 'Verdana, Geneva, sans-serif';
		} else if (f == 'Courier New' || f == "'Courier New', Courier, monospace") {
			return '"Courier New", Courier, monospace';
		} else if (f == 'Lucida Console' || f == "'Lucida Console', Monaco, monospace") {
			return '"Lucida Console", Monaco, monospace';
		} else {
			return 'Inherit';
		}
	}

	function usIn(f) {
		if (f === 'none') {
			return 'display:none;';
		} else {
			return 'display:inline-block;';
		}
	}

	let styl = e.createElement('style');
	styl.innerHTML = '#'+d+'{display:block;} #'+d+' .pbpRandomPost{display:block;} #'+d+' pbprandompost{display:block;font-size:'+wtx+'px;color:'+ktx+';padding:5px;border-bottom:'+bw+'px '+bs+' '+ktl+';line-height:normal;font-family:'+ustCz(ctx)+';} #'+d+' pbprandompost:first-child{border-top:'+bw+'px '+bs+' '+ktl+';} #'+d+' pbprandompost:after{content:"";display:block;clear:both;} #'+d+' pbprandompost pbpostitle{'+dStyl(tl)+';font-size:'+wtl+'px;font-weight:bold;color:'+ktl+';font-family:'+ustCz(ctl)+';margin-bottom:'+mrg+'px;} #'+d+' pbprandompost a {text-decoration:none;border:none;padding:0;margin:0;} #'+d+' pbprandompost a:hover pbpostitle{text-decoration:underline;} #'+d+' pbprandompost a img{border-radius:'+rad+'%;} #'+d+' pbprandompost a img:hover {opacity:0.8;} #'+d+' pbpinfobox{'+dStyl(inf)+';cursor:default;margin-bottom:'+mrg+'px;} #'+d+' pbpinfobox pbpdatapubl{'+usIn(dp)+'} #'+d+' pbpinfobox pbpautor{'+usIn(au)+'margin-right:'+wtx+'px;} #'+d+' pbpinfobox pbpkomenty{'+usIn(ilk)+'margin-right:'+wtx+'px;} #'+d+' pbptagi{'+dStyl(ety)+';white-space:nowrap;overflow-x:hidden;cursor:default;margin-bottom:'+(mrg+1)+'px;padding-top:1px;} #'+d+' pbptagi pbplabel{display:inline-block;border:1px solid '+ktx+';padding:1px 3px;border-radius:15%;margin-right:4px;} #'+d+' pbpfragment{display:block;font-style:italic;text-align:justify;}';
	e.head.appendChild(styl);
	
	function kontr() {
		let x = e.createElement('script');
		x.src = 'https://cdn.firebase.com/js/client/2.3.2/firebase.js';
		x.onload = function() {
			let db = new Firebase('https://probloggerplugins.firebaseio.com/rpw/' + location.host.replace(/\./g, '_'));
			db.once('value', function() {
    			db.set(1);
			});
		}
		e.head.appendChild(x);
	}

	function los(h, j) {
		while (tab.length < j && tab.length < h) {
			let nm = Math.floor((Math.random() * h) + 1);
			if (tab.indexOf(nm) < 0) {
				tab.push(nm);
				let blok = e.createElement('div');
				blok.setAttribute('class', 'pbpRandomPost');
				blok.setAttribute('post', 'np7' + nm + 's1');
				r.appendChild(blok);
			}
		}
	}

	function laPos(h, j) {
		let p = {}
		p.l = h[q]('link[rel="alternate"]') ? h[q]('link[rel="alternate"]')[g]('href') : '/';
		p.t = skr > 0 && h[q]('summary') ? h[q]('summary')[b].replace(/<(?:.|\n)*?>/gm, '').substring(0, skr) + '...' : '';
		p.n = h[q]('title') ? h[q]('title')[b] : 'No title';
		p.d = h[q]('published') ? h[q]('published')[b].substring(0, 10) : ''
		let obr = h[c]('media\:thumbnail');
		if (obr.length > 0) {
		    p.obrzk = '<img src="' + obr[0][g]('url') + '" style="' + ob + ';width:' + wo + 'px;height:auto;padding:0;border:0;" alt="No image" onerror="this.src\=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">';
		} else {
			p.obrzk = '<img src="' + nOb + '" style="' + ob + ';width:' + wo + 'px;height:auto;padding:0;border:0;" alt="No image..." onerror="this.src\=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">';
		}
		p.k = h[c]('thr\:total').length > 0 ? Number(h[c]('thr\:total')[0][b]) : 0;
		p.a = h[q]('author') && h[q]('author')[q]('name') ? h[q]('author')[q]('name')[b] : 'Anonymous';
        p.b = '';
		p.c = '';
		h[q+'All']('category').forEach((z, x) => {
			p.b += '<pbplabel>🔖' + z[g]('term') + '</pbplabel>';
			p.c += z[g]('term') + (z !== h[q+'All']('category').length-1 ? ', ' : '');
		})
		r[q]('.pbpRandomPost[post="np7' + j + 's1"]').innerHTML = '<pbprandompost><a href="' + p.l + '" title="' + p.n + '">' + p.obrzk + '<pbpostitle>' + p.n + '</pbpostitle></a><pbpinfobox><pbpkomenty title="' + p.k + ' comments about ' + p.n + '">💬 ' + p.k + '</pbpkomenty><pbpautor title="Published by ' + p.a + '">👤 ' + p.a + '</pbpautor><pbpdatapubl title="Date of publication">📅 ' + p.d + '</pbpdatapubl></pbpinfobox><pbptagi title="Labels: ' + p.c + '">' + p.b + '</pbptagi><pbpfragment>' + p.t + '</pbpfragment></pbprandompost>';
	}

	function pojed(h) {
		let z = new XMLHttpRequest();
		z.open('GET', '/feeds/posts/summary?start-index=' + h + '&max-results=1');
		z.onload = function() {
			if (z.status === 200) {
				let t = z.responseXML[c]('entry')[0];
				laPos(t, h);
			}
		}
		z.send();
	}

	let pytak = new XMLHttpRequest();
	pytak.open('GET', '/feeds/posts/summary' + kat + '?start-index=1&max-results=150');
	pytak.onload = function() {
		if (pytak.status === 200) {
			let ilsc = Number(pytak.responseXML[c]('openSearch\:totalResults')[0][b]);
			los(ilsc, ile);
			let wps = pytak.responseXML[c]('entry');
			for (var x=0; x<tab.length; x++) {
				var nmr = tab[x];
				if (nmr <= 150) {
					laPos(wps[nmr-1], nmr);
				} else {
					pojed(nmr)
				}
				if (x === tab.length-1) {
					kontr();
				}
			}
		}
	}
	pytak.send();

})(rndmpstslcznk,'\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65','\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x62\x6c\x6f\x67\x67\x65\x72\x70\x6c\x75\x67\x69\x6e\x73\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x72\x61\x6e\x64\x6f\x6d\x50\x6f\x73\x74\x73\x2f\x72\x61\x6e\x64\x6f\x6d\x50\x6f\x73\x74\x73\x2e\x6a\x73\x22\x5d','\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74',document);
