$(document).ready(()=>{function e(){$("#fb").attr("href","https://www.facebook.com/profile.php?id=100074620631348"),$("#ins").attr("href","https://www.instagram.com/jorge_devs/"),$("#lins").attr("href","https://www.linkedin.com/in/jorge-devs")}function t(){$("#close").on("click",()=>{$("#wath").attr("src",""),$("#model_play").css("display","none")})}function o(){let e=document.getElementById("search").value,t=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(e)}&type=video&maxResults=10&order=viewCount&videoEmbeddable=true&regionCode=BR&key=AIzaSyDU5BxQK045wjMxbh7zToGRWQQCx9pV1l8`;fetch(t).then(e=>e.json()).then(e=>{let t=document.getElementById("box_video");t.innerHTML="",e.items.forEach(e=>{let o=e.id.videoId,a=e.snippet.thumbnails.high.url,i=e.snippet.title,s=document.createElement("div");s.onclick=()=>n(o),s.innerHTML=`
    <img src="${a}" alt="Imagem">
    <legend>${i}</legend>
`,t.appendChild(s)}),$("#confirma_busca").html(`<h2>
Resultado
</h2>`)}).catch(e=>console.error("Erro ao buscar v\xeddeos:",e))}function n(e){$("#model_play").css("display","block"),$("#wath").attr("src",`https://www.youtube.com/embed/${e}`)}$("#btn").click(()=>{o()}),$("#confirma_busca").html(`<h2>
Pesquise alguma coisa
</h2>`),$("#search").on("keydown",function(e){("Enter"===e.key||13===e.keyCode)&&(o(),$("#search").val(""))}),e(),o(),t()});