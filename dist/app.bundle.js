(()=>{"use strict";let e={"":"Films les mieux notés","Sci-Fi":"Science-Fiction",Adventure:"Aventure",Comedy:"Comédie"},t=document.getElementById("categories"),i=(document.getElementById("best-movie"),document.getElementById("best-movie-img")),n=document.getElementById("best-movie-title");function l(e,t){let i=document.createElement("div");i.classList.add("movie");let n=document.createElement("img");n.classList.add("movie__img"),n.src=t.image_url,n.alt=t.title;let l=document.createElement("div");l.classList.add("movie__overlay");let d=document.createElement("p");d.classList.add("movie__title"),d.textContent=t.title,l.appendChild(d),i.appendChild(n),i.appendChild(l),e.appendChild(i)}function d(e,i){let n=document.createElement("div");n.classList.add("category");let d=document.createElement("h2");d.classList.add("category__title"),d.textContent=i;let o=document.createElement("div");o.classList.add("movies_container"),n.appendChild(d),n.appendChild(o),t.appendChild(n),fetch(`http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score&genre=${e}`).then((e=>e.json())).then((function(e){for(let t of e.results)l(o,t)}))}fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score").then((e=>e.json())).then((function(e){let t=e.results[0];i.src=t.image_url,i.alt=t.title,n.textContent=t.title}));for(let t in e)d(t,e[t])})();