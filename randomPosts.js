rndmpstslcznk = "undefined" == typeof rndmpstslcznk ? 0 : rndmpstslcznk + 1,
    function(e, t, o, n, a, i, r) {
        let s = [],
            l = r[o + "All"](a)[e],
            p = r.createElement("div"),
            b = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-",
            d = "pbpRP-";
        for (; d.length < 16;) d += b[Math.floor(Math.random() * b.length)];
        p.id = d, l.parentNode.insertBefore(p, l);
		
		let frd = document.createElement('div');
		frd.style.textAlign = 'right';
		let bzk = document.createElement('a');
		frd.appendChild(bzk);
		bzk.href = 'https://bloggerwidgets.github.io/random-posts';
		bzk.title = 'New Random Posts Widget For Blogger';
		bzk.innerHTML = '<img src="data:image/png;base64,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" style="height:22px;">';
		l.parentNode.insertBefore(frd, l);
		
        let c = Number(l[t]("numberOfPosts"));
        (c < 1 || isNaN(c)) && (c = 5);
        let m = l[t]("label");
        m = "none" === m || "" === m || null === m ? "" : "/-/" + m;
        let u = Number(l[t]("textSize"));
        (u < 4 || isNaN(u)) && (u = 12);
        let g = Number(l[t]("titleSize"));
        (g < 5 || isNaN(g)) && (g = u + 3);
        let f = u < 12 ? 2 : u < 21 ? 3 : 4,
            h = l[t]("borderWidth") ? Number(l[t]("borderWidth")) : 1;
        (h < 0 || isNaN(h)) && (h = 1);
        let x = l[t]("borderStyle");
        "dotted" !== x && "dashed" !== x && (x = "solid");
        let A = l[t]("titleColor") ? l[t]("titleColor") : "#9d0000",
            y = l[t]("textColor") ? l[t]("textColor") : "#333333",
            C = l[t]("titleFont") ? l[t]("titleFont") : "'Comic Sans MS', cursive, sans-serif",
            k = l[t]("textFont") ? l[t]("textFont") : "Georgia, serif",
            N = l[t]("thumbnail");
        N = "none" === N ? "display:none;" : "right" === N ? "float:right;margin:0 0 5px 5px;" : "float:left;margin:0 5px 5px 0;";
        let w = l[t]("thumbnailSize");
        (Number(w) < 0 || isNaN(w) || null === w) && (w = 70);
        let L = l[t]("thumbnailRounding");
        (isNaN(L) || null === L) && (L = 15);
        let M = l[t]("noThumbnail");
        "default" !== M && "" !== M && null !== M || (M = "https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png");
        let T = l[t]("postTitle"),
            v = l[t]("postInfo"),
            z = l[t]("postAuthor"),
            S = l[t]("publishDate"),
            G = l[t]("numOfComments"),
            E = l[t]("postCategories"),
            I = l[t]("excerptLength");

        function R(e) {
            return "none" === e ? "display:none;" : "right" === e ? "display:block;text-align:right;" : "center" === e ? "display:block;text-align:center;" : "display:block;text-align:left;"
        }

        function P(e) {
            return "Georgia" == e || "Georgia, serif" == e ? "Georgia, serif" : "Palatino" == e || "'Palatino Linotype', 'Book Antiqua', Palatino, serif" == e ? '"Palatino Linotype", "Book Antiqua", Palatino, serif' : "Times New Roman" == e || "'Times New Roman', Times, serif" == e ? '"Times New Roman", Times, serif' : "Arial" == e || "Arial, Helvetica, sans-serif" == e ? "Arial, Helvetica, sans-serif" : "Arial Black" == e || "'Arial Black', Gadget, sans-serif" == e ? '"Arial Black", Gadget, sans-serif' : "Comic Sans" == e || "'Comic Sans MS', cursive, sans-serif" == e ? '"Comic Sans MS", cursive, sans-serif' : "Impact" == e || "Impact, Charcoal, sans-serif" == e ? "Impact, Charcoal, sans-serif" : "Lucida Sans" == e || "'Lucida Sans Unicode', 'Lucida Grande', sans-serif" == e ? '"Lucida Sans Unicode", "Lucida Grande", sans-serif' : "Tahoma" == e || "Tahoma, Geneva, sans-serif" == e ? "Tahoma, Geneva, sans-serif" : "Trebuchet" == e || "'Trebuchet MS', Helvetica, sans-serif" == e ? '"Trebuchet MS", Helvetica, sans-serif' : "Verdana" == e || "Verdana, Geneva, sans-serif" == e ? "Verdana, Geneva, sans-serif" : "Courier New" == e || "'Courier New', Courier, monospace" == e ? '"Courier New", Courier, monospace' : "Lucida Console" == e || "'Lucida Console', Monaco, monospace" == e ? '"Lucida Console", Monaco, monospace' : "Inherit"
        }

        function B(e) {
            return "none" === e ? "display:none;" : "display:inline-block;"
        }(null === I || isNaN(I) || Number(I) < 0) && (I = 200);
        let J = r.createElement("style");

        function K() {
            return;
        }

        function Y(e, a) {
            let r = {};
            r.l = e[o]('link[rel="alternate"]') ? e[o]('link[rel="alternate"]')[t]("href") : "/", r.t = I > 0 && e[o]("summary") ? e[o]("summary")[i].replace(/<(?:.|\n)*?>/gm, "").substring(0, I) + "..." : "", r.n = e[o]("title") ? e[o]("title")[i] : "No title", r.d = e[o]("published") ? e[o]("published")[i].substring(0, 10) : "";
            let s = e[n]("media:thumbnail");
            s.length > 0 ? r.obrzk = '<img src="' + s[0][t]("url") + '" style="' + N + ";width:" + w + 'px;height:auto;padding:0;border:0;" alt="No image" onerror="this.src=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">' : r.obrzk = '<img src="' + M + '" style="' + N + ";width:" + w + 'px;height:auto;padding:0;border:0;" alt="No image..." onerror="this.src=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">', r.k = e[n]("thr:total").length > 0 ? Number(e[n]("thr:total")[0][i]) : 0, r.a = e[o]("author") && e[o]("author")[o]("name") ? e[o]("author")[o]("name")[i] : "Anonymous", r.b = "", r.c = "", e[o + "All"]("category").forEach((n, a) => {
                r.b += "<pbplabel>\ud83d\udd16" + n[t]("term") + "</pbplabel>", r.c += n[t]("term") + (n !== e[o + "All"]("category").length - 1 ? ", " : "")
            }), p[o]('.pbpRandomPost[post="np7' + a + 's1"]').innerHTML = '<pbprandompost><a href="' + r.l + '" title="' + r.n + '">' + r.obrzk + "<pbpostitle>" + r.n + '</pbpostitle></a><pbpinfobox><pbpkomenty title="' + r.k + " comments about " + r.n + '">\ud83d\udcac ' + r.k + '</pbpkomenty><pbpautor title="Published by ' + r.a + '">\ud83d\udc64 ' + r.a + '</pbpautor><pbpdatapubl title="Date of publication">\ud83d\udcc5 ' + r.d + '</pbpdatapubl></pbpinfobox><pbptagi title="Labels: ' + r.c + '">' + r.b + "</pbptagi><pbpfragment>" + r.t + "</pbpfragment></pbprandompost>"
        }

        function F(e) {
            let t = new XMLHttpRequest;
            t.open("GET", "/feeds/posts/summary?start-index=" + e + "&max-results=1"), t.onload = function() {
                if (200 === t.status) {
                    Y(t.responseXML[n]("entry")[0], e)
                }
            }, t.send()
        }
        J.innerHTML = "#" + d + "{display:block;} #" + d + " .pbpRandomPost{display:block;} #" + d + " .pbpRandomPost:first-child pbprandompost{border-top:" + h + "px " + x + " " + A + ";} #" + d + " pbprandompost{display:block;font-size:" + u + "px;color:" + y + ";padding:5px;border-bottom:" + h + "px " + x + " " + A + ";line-height:normal;font-family:" + P(k) + ";} #" + d + ' pbprandompost:after{content:"";display:block;clear:both;} #' + d + " pbprandompost pbpostitle{" + R(T) + ";font-size:" + g + "px;font-weight:bold;color:" + A + ";font-family:" + P(C) + ";margin-bottom:" + f + "px;} #" + d + " pbprandompost a {text-decoration:none;border:none;padding:0;margin:0;} #" + d + " pbprandompost a:hover pbpostitle{text-decoration:underline;} #" + d + " pbprandompost a img{border-radius:" + L + "%;} #" + d + " pbprandompost a img:hover {opacity:0.8;} #" + d + " pbpinfobox{" + R(v) + ";cursor:default;margin-bottom:" + f + "px;} #" + d + " pbpinfobox pbpdatapubl{" + B(S) + "} #" + d + " pbpinfobox pbpautor{" + B(z) + "margin-right:" + u + "px;} #" + d + " pbpinfobox pbpkomenty{" + B(G) + "margin-right:" + u + "px;} #" + d + " pbptagi{" + R(E) + ";white-space:nowrap;overflow-x:hidden;cursor:default;margin-bottom:" + (f + 1) + "px;padding-top:1px;} #" + d + " pbptagi pbplabel{display:inline-block;border:1px solid " + y + ";padding:1px 3px;border-radius:15%;margin-right:4px;} #" + d + " pbpfragment{display:block;font-style:italic;text-align:justify;}", r.head.appendChild(J);
        let H = new XMLHttpRequest;
        H.open("GET", "/feeds/posts/summary" + m + "?start-index=1&max-results=150"), H.onload = function() {
            if (200 === H.status) {
                ! function(e, t) {
                    for (; s.length < t && s.length < e;) {
                        let t = Math.floor(Math.random() * e + 1);
                        if (s.indexOf(t) < 0) {
                            s.push(t);
                            let e = r.createElement("div");
                            e.setAttribute("class", "pbpRandomPost"), e.setAttribute("post", "np7" + t + "s1"), p.appendChild(e)
                        }
                    }
                }(Number(H.responseXML[n]("openSearch:totalResults")[0][i]), c);
                let o = H.responseXML[n]("entry");
                for (var e = 0; e < s.length; e++) {
                    var t = s[e];
                    t <= 150 ? Y(o[t - 1], t) : F(t), e === s.length - 1 && K()
                }
            }
        }, H.send()
    }(rndmpstslcznk, '\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65', '\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72', '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65', '\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x62\x6c\x6f\x67\x67\x65\x72\x70\x6c\x75\x67\x69\x6e\x73\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x72\x61\x6e\x64\x6f\x6d\x50\x6f\x73\x74\x73\x2f\x72\x61\x6e\x64\x6f\x6d\x50\x6f\x73\x74\x73\x2e\x6a\x73\x22\x5d', '\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74', document);
