//<![CDATA[
function labnolThumb(e){return'<img class="youtube-thumb" src="//i.ytimg.com/vi/'+e+'/hqdefault.jpg"><div class="play-button"></div>'}function labnolIframe(){var e=document.createElement("iframe");e.setAttribute("src","//www.youtube.com/embed/"+this.parentNode.dataset.id+"?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0"),e.setAttribute("frameborder","0"),e.setAttribute("id","youtube-iframe"),this.parentNode.replaceChild(e,this)}!function(){for(var e=document.getElementsByClassName("youtube-player"),t=0;t<e.length;t++){var a=document.createElement("div");a.innerHTML=labnolThumb(e[t].dataset.id),a.onclick=labnolIframe,e[t].appendChild(a)}}();
//]]> 