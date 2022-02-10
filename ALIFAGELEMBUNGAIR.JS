// <![CDATA[
var colours=new Array("#a6f","#60f","#60f","#a6f","#ccc");// colours for top,right,bottom and left borders and background of bubbles
var bubbles=66;// how many bubbles are moving at any given time
/****************************
* JavaScript Gelembung Air *
* (c) 2012 devilcode *
* Konten Publik *
* Dont't Edit Below This Box*
****************************/
var swide=800;var shigh=600;var bubb=new Array();var bubbx=new Array();var bubby=new Array();var bubbs=new Array();window.onload=function(){if (document.getElementById){var b,i;b=document.createElement("div");i=b.style;i.position="absolute";b.setAttribute("id","bod");document.body.appendChild(b);set_scroll();set_width();var rats,div;for (var i=0;i<bubbles;i++){rats=createDiv("3px","3px");div=createDiv("auto","auto");rats.appendChild(div);div=div.style;div.top="1px";div.left="0px";div.bottom="1px";div.right="0px";div.borderLeft="1px solid "+colours[3];div.borderRight="1px solid "+colours[1];div=createDiv("auto","auto");rats.appendChild(div);div=div.style;div.top="0px";div.left="1px";div.right="1px";div.bottom="0px"
div.borderTop="1px solid "+colours[0];div.borderBottom="1px solid "+colours[2];div=createDiv("auto","auto");rats.appendChild(div);div=div.style;div.left="1px";div.right="1px";div.bottom="1px";div.top="1px";div.backgroundColor=colours[4];div.opacity=0.5;if (document.all) div.filter="alpha(opacity=50)";b.appendChild(rats);bubb[i]=rats.style;}
bubble();}}
function bubble(){var c;for (c=0;c<bubbles;c++) if (!bubby[c] && Math.random()<0.333){bubb[c].left=(bubbx[c]=Math.floor(swide/6+Math.random()*swide/1.5)-10)+"px";bubb[c].top=(bubby[c]=shigh)+"px";bubb[c].width="3px";bubb[c].height="3px"
bubb[c].visibility="visible";bubbs[c]=3;break;}
for (c=0;c<bubbles;c++) if (bubby[c]) update_bubb(c);setTimeout("bubble()",40);}
function update_bubb(i){if (bubby[i]){bubby[i]-=bubbs[i]/2+i%2;if (bubby[i]>0){if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<8){bubb[i].width=bubbs[i]+"px";bubb[i].height=bubbs[i]+"px";}
bubb[i].top=bubby[i]+"px";bubbx[i]+=(i%5-2)/5;bubb[i].left=bubbx[i]+"px";}
else{bubb[i].visibility="hidden";bubby[i]=0;return;}}
;}
window.onresize=set_width;function set_width(){if (document.documentElement && document.documentElement.clientWidth){swide=document.documentElement.clientWidth;shigh=document.documentElement.clientHeight;}
else if (typeof(self.innerHeight)=="number"){swide=self.innerWidth;shigh=self.innerHeight;}
else if (document.body.clientWidth){swide=document.body.clientWidth;shigh=document.body.clientHeight;}
else{swide=800;shigh=600;}}
window.onscroll=set_scroll;function set_scroll(){var sleft,sdown;if (typeof(self.pageYOffset)=="number"){sdown=self.pageYOffset;sleft=self.pageXOffset;}
else if (document.body.scrollTop || document.body.scrollLeft){sdown=document.body.scrollTop;sleft=document.body.scrollLeft;}
else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)){sleft=document.documentElement.scrollLeft;sdown=document.documentElement.scrollTop;}
else{sdown=0;sleft=0;}
document.getElementById("bod").style.top=sdown+"px";document.getElementById("bod").style.left=sleft+"px";}
function createDiv(height,width){var div=document.createElement("div");div.style.position="absolute";div.style.height=height;div.style.width=width;div.style.overflow="hidden";return (div);}
// ]]>