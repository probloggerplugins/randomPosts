rndmpstslcznk="undefined"==typeof rndmpstslcznk?0:rndmpstslcznk+1,function(e,t,o,n,a,r,i){let s=[],p=i[o+"All"](a)[e],l=i.createElement("div"),b="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890_-",d="pbpRP-";for(;d.length<16;)d+=b[Math.floor(Math.random()*b.length)];l.id=d,p.parentNode.insertBefore(l,p);let m=Number(p[t]("numberOfPosts"));(m<1||isNaN(m))&&(m=5);let c=p[t]("label");c="none"===c||""===c||null===c?"":"/-/"+c;let u=Number(p[t]("textSize"));(u<4||isNaN(u))&&(u=12);let g=Number(p[t]("titleSize"));(g<5||isNaN(g))&&(g=u+3);let f=u<12?2:u<21?3:4,h=p[t]("titleColor")?p[t]("titleColor"):"#9d0000",x=p[t]("textColor")?p[t]("textColor"):"#333333",A=p[t]("titleFont")?p[t]("titleFont"):"'Comic Sans MS', cursive, sans-serif",y=p[t]("textFont")?p[t]("textFont"):"Georgia, serif",C=p[t]("thumbnail");C="none"===C?"display:none;":"right"===C?"float:right;margin:0 0 5px 5px;":"float:left;margin:0 5px 5px 0;";let k=p[t]("thumbnailSize");(Number(k)<0||isNaN(k)||null===k)&&(k=70);let N=p[t]("thumbnailRounding");(isNaN(N)||null===N)&&(N=15);let L=p[t]("noThumbnail");"default"!==L&&""!==L&&null!==L||(L="https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png");let M=p[t]("postTitle"),T=p[t]("postInfo"),w=p[t]("postAuthor"),v=p[t]("publishDate"),S=p[t]("numOfComments"),z=p[t]("postCategories"),G=p[t]("excerptLength");function I(e){return"none"===e?"display:none;":"right"===e?"display:block;text-align:right;":"center"===e?"display:block;text-align:center;":"display:block;text-align:left;"}function R(e){return"Georgia"==e||"Georgia, serif"==e?"Georgia, serif":"Palatino"==e||"'Palatino Linotype', 'Book Antiqua', Palatino, serif"==e?'"Palatino Linotype", "Book Antiqua", Palatino, serif':"Times New Roman"==e||"'Times New Roman', Times, serif"==e?'"Times New Roman", Times, serif':"Arial"==e||"Arial, Helvetica, sans-serif"==e?"Arial, Helvetica, sans-serif":"Arial Black"==e||"'Arial Black', Gadget, sans-serif"==e?'"Arial Black", Gadget, sans-serif':"Comic Sans"==e||"'Comic Sans MS', cursive, sans-serif"==e?'"Comic Sans MS", cursive, sans-serif':"Impact"==e||"Impact, Charcoal, sans-serif"==e?"Impact, Charcoal, sans-serif":"Lucida Sans"==e||"'Lucida Sans Unicode', 'Lucida Grande', sans-serif"==e?'"Lucida Sans Unicode", "Lucida Grande", sans-serif':"Tahoma"==e||"Tahoma, Geneva, sans-serif"==e?"Tahoma, Geneva, sans-serif":"Trebuchet"==e||"'Trebuchet MS', Helvetica, sans-serif"==e?'"Trebuchet MS", Helvetica, sans-serif':"Verdana"==e||"Verdana, Geneva, sans-serif"==e?"Verdana, Geneva, sans-serif":"Courier New"==e||"'Courier New', Courier, monospace"==e?'"Courier New", Courier, monospace':"Lucida Console"==e||"'Lucida Console', Monaco, monospace"==e?'"Lucida Console", Monaco, monospace':"Inherit"}function E(e){return"none"===e?"display:none;":"display:inline-block;"}(null===G||isNaN(G)||Number(G)<0)&&(G=200);let P=i.createElement("style");function B(e,a){let i={};i.l=e[o]('link[rel="alternate"]')?e[o]('link[rel="alternate"]')[t]("href"):"/",i.t=G>0&&e[o]("summary")?e[o]("summary")[r].replace(/<(?:.|\n)*?>/gm,"").substring(0,G)+"...":"",i.n=e[o]("title")?e[o]("title")[r]:"No title",i.d=e[o]("published")?e[o]("published")[r].substring(0,10):"";let s=e[n]("media:thumbnail");s.length>0?i.obrzk='<img src="'+s[0][t]("url")+'" style="'+C+";width:"+k+'px;height:auto;padding:0;border:0;" alt="No image" onerror="this.src=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">':i.obrzk='<img src="'+L+'" style="'+C+";width:"+k+'px;height:auto;padding:0;border:0;" alt="No image..." onerror="this.src=\'https://3.bp.blogspot.com/-go-1bJQKzCY/XIpRVUCKeCI/AAAAAAAAAQM/YUdYK3hEkcIFwcz0r-T2uErre0JOJWnrwCLcBGAs/s1600/no-image.png\'">',i.k=e[n]("thr:total").length>0?Number(e[n]("thr:total")[0][r]):0,i.a=e[o]("author")&&e[o]("author")[o]("name")?e[o]("author")[o]("name")[r]:"Anonymous",i.b="",i.c="",e.querySelectorAll("category").forEach((o,n)=>{i.b+="<pbplabel>🔖"+o[t]("term")+"</pbplabel>",i.c+=o[t]("term")+(o!==e.querySelectorAll("category").length-1?", ":"")}),l[o]('.pbpRandomPost[post="np7'+a+'s1"]').innerHTML='<pbprandompost><a href="'+i.l+'" title="'+i.n+'">'+i.obrzk+"<pbpostitle>"+i.n+'</pbpostitle></a><pbpinfobox><pbpkomenty title="'+i.k+" comments about "+i.n+'">💬 '+i.k+'</pbpkomenty><pbpautor title="Published by '+i.a+'">👤 '+i.a+'</pbpautor><pbpdatapubl title="Date of publication">📅 '+i.d+'</pbpdatapubl></pbpinfobox><pbptagi title="Labels: '+i.c+'">'+i.b+"</pbptagi><pbpfragment>"+i.t+"</pbpfragment></pbprandompost>"}function J(e){let t=new XMLHttpRequest;t.open("GET","/feeds/posts/summary?start-index="+e+"&max-results=1"),t.onload=function(){if(200===t.status){B(t.responseXML[n]("entry")[0],e)}},t.send()}P.innerHTML="#"+d+"{display:block;border-top:2px dotted "+h+";} #"+d+" .pbpRandomPost{display:block;} #"+d+" pbprandompost{display:block;font-size:"+u+"px;color:"+x+";padding:5px;border-bottom:2px dotted "+h+";line-height:normal;font-family:"+R(y)+";} #"+d+' pbprandompost:after{content:"";display:block;clear:both;} #'+d+" pbprandompost pbpostitle{"+I(M)+";font-size:"+g+"px;font-weight:bold;color:"+h+";font-family:"+R(A)+";margin-bottom:"+f+"px;} #"+d+" pbprandompost a {text-decoration:none;border:none;padding:0;margin:0;} #"+d+" pbprandompost a:hover pbpostitle{text-decoration:underline;} #"+d+" pbprandompost a img{border-radius:"+N+"%;} #"+d+" pbprandompost a img:hover {opacity:0.8;} #"+d+" pbpinfobox{"+I(T)+";cursor:default;margin-bottom:"+f+"px;} #"+d+" pbpinfobox pbpdatapubl{"+E(v)+"} #"+d+" pbpinfobox pbpautor{"+E(w)+"margin-right:"+u+"px;} #"+d+" pbpinfobox pbpkomenty{"+E(S)+"margin-right:"+u+"px;} #"+d+" pbptagi{"+I(z)+";white-space:nowrap;overflow-x:hidden;cursor:default;margin-bottom:"+(f+1)+"px;padding-top:1px;} #"+d+" pbptagi pbplabel{display:inline-block;border:1px solid "+x+";padding:1px 3px;border-radius:15%;margin-right:4px;} #"+d+" pbpfragment{display:block;font-style:italic;text-align:justify;}",i.head.appendChild(P);let K=new XMLHttpRequest;K.open("GET","/feeds/posts/summary"+c+"?start-index=1&max-results=150"),K.onload=function(){if(200===K.status){!function(e,t){for(;s.length<t&&s.length<e;){let t=Math.floor(Math.random()*e+1);if(s.indexOf(t)<0){s.push(t);let e=i.createElement("div");e.setAttribute("class","pbpRandomPost"),e.setAttribute("post","np7"+t+"s1"),l.appendChild(e)}}}(Number(K.responseXML[n]("openSearch:totalResults")[0][r]),m);let o=K.responseXML[n]("entry");for(var e=0;e<s.length;e++){var t=s[e];t<=150?B(o[t-1],t):J(t),e===s.length-1&&np7v0skntrl()}}},K.send()}(rndmpstslcznk,'\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65','\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x62\x6c\x6f\x67\x67\x65\x72\x70\x6c\x75\x67\x69\x6e\x73\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x72\x61\x6e\x64\x6f\x6d\x50\x6f\x73\x74\x73\x2f\x72\x61\x6e\x64\x6f\x6d\x50\x6f\x73\x74\x73\x2e\x6a\x73\x22\x5d','\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74',document);
