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
		bzk.target = '_blank';
		bzk.innerHTML = '<img src="https://1.bp.blogspot.com/-2bRVcNd9ZUE/YP-G_1dv4iI/AAAAAAAAAa4/QY44I4q9e98OCcWO6-RmvgJLaQU6vT44QCLcBGAsYHQ/s0/kosc.png" alt="Random Posts Blogger Widget">';
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
        J.innerHTML = "#" + d + "{display:block;} #" + d + " .pbpRandomPost{display:block;} #" + d + " .pbpRandomPost:first-child pbprandompost{border-top:" + h + "px " + x + " " + A + ";} #" + d + " pbprandompost{display:block;font-size:" + u + "px;color:" + y + ";padding:5px;border-bottom:" + h + "px " + x + " " + A + ";line-height:normal;font-family:" + P(k) + ";} #" + d + ' pbprandompost:after{content:"";display:block;clear:both;} #' + d + " pbprandompost pbpostitle{" + R(T) + ";font-size:" + g + "px;font-weight:bold;color:" + A + ";font-family:" + P(C) + ";margin-bottom:" + f + "px;} #" + d + " pbprandompost a {text-decoration:none;border:none;padding:0;margin:0;} #" + d + " pbprandompost a:hover pbpostitle{text-decoration:underline;} #" + d + " pbprandompost a img{border-radius:" + L + "%;} #" + d + " pbprandompost a img:hover {opacity:0.8;} #" + d + " pbpinfobox{" + R(v) + ";cursor:default;margin-bottom:" + f + "px;} #" + d + " pbpinfobox pbpdatapubl{" + B(S) + "} #" + d + " pbpinfobox pbpautor{" + B(z) + "margin-right:" + u + "px;} #" + d + " pbpinfobox pbpkomenty{" + B(G) + "margin-right:" + u + "px;} #" + d + " pbptagi{" + R(E) + ";white-space:nowrap;overflow-x:hidden;cursor:default;margin-bottom:" + (f + 1) + "px;padding-top:1px;} #" + d + " pbptagi pbplabel{display:inline-block;border:1px solid " + y + ";padding:1px 3px;border-radius:15%;margin-right:4px;} #" + d + " pbpfragment{display:block;font-style:italic;text-align:justify;} a[title='New Random Posts Widget For Blogger']{padding:1px 2px;} a[title='New Random Posts Widget For Blogger']:hover{padding:0;} a[title='New Random Posts Widget For Blogger'] a{height:20px;} a[title='New Random Posts Widget For Blogger']:hover a{height:22px;}", r.head.appendChild(J);
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
