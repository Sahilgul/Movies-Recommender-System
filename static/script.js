function form_handler(event) {
  event.preventDefault();
}
function send_data() {
  document.querySelector("form").addEventListener("submit", form_handler);
  var fd = new FormData(document.querySelector("form"));
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/recommend", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var movies = xhr.responseText;
      console.log(movies);

      async function fetchMoviesJSON(url) {
        const response = await fetch(url);
        const movies = await response.json();
        return movies;
      }

      async function fetchTitles() {
        let data = JSON.parse(movies.replaceAll('"'));

        let titles = [];
        let posters = [];
        let overv = [];
        let genre = [];
        const my_api_key = "34b55fa7f2d2346aa1045ed4cc22bd12";
        const url1 = "https://api.themoviedb.org/3/movie/";
        const url2 = "https://image.tmdb.org/t/p/w500/";
        for (i = 0; i < data.length; i++) {
          url = url1 + data[i] + "?api_key=" + my_api_key;
          try {
            const movieResponse = await fetchMoviesJSON(url);
            titles.push(movieResponse.title);
            posters.push(url2 + movieResponse.poster_path);
            overv.push(movieResponse.overview);
            gen_resp = movieResponse.genres;
            let result = gen_resp.map((a) => a.name);
            genre.push(result);
          } catch (err) {
            console.log(err);
          }
          const my_M = `
            <h1 style="color:blue ;">
                    <span>${titles[0]}</span>
            </h1>
            `;

          let my_first_movie = "";
          my_first_movie = `
            <div class="top_row">
      
              <div class="col_one1">
                  
                  <h2>${titles[0]}</h2>
                  <p class="" style="font-weight: bold; color:yellow;">Overview:</p>
                  <p class="" style="word-spacing: 5px; color:white;">${overv[0]}</p>
                  <p class="" style="font-weight: bold; color:yellow;">Genres:</p>
                  <p class="">${genre[0]}</p>
                  
              </div>
      
              <div class="col_one2">
                  <img class="first_movie" id="p1" src="${posters[0]}" 
                  <h3>
                    <span></span>
                 </h3>
              </div>
      
            </div>
            `;

          let my_data = "";
          my_data = `<div class="column">
            <img class="poster" id="p1" src="${posters[1]}" <h2>
            <span id="m1">${titles[1]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p2" src="${posters[2]}" <h2>
            <span id="m2">${titles[2]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p3" src="${posters[3]}" <h2>
            <span id="m3">${titles[3]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p4" src="${posters[4]}" <h2>
            <span id="m4">${titles[4]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p5" src="${posters[5]}" <h2>
            <span id="m5">${titles[5]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p6" src="${posters[6]}" <h2>
            <span id="m6">${titles[6]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p7" src="${posters[7]}" <h2>
            <span id="m7">${titles[7]}</span>
            </h2>
            </div>
      
            <div class="column">
            <img class="poster" id="p8" src="${posters[8]}" <h2>
            <span id="m8">${titles[8]}</span>
            </h2>
            </div>
      
            <div class="column">
      
            <img class="poster" id="p9" src="${posters[9]}" <h2>
            <span id="m9">${titles[9]}</span>
            </h2>
            </div>
      
            <div class="column">
      
            <img class="poster" id="p10" src="${posters[10]}" <h2>
            <span id="m10">${titles[10]}</span>
            </h2>
            </div>`;

          document.getElementById("rows").innerHTML = my_data;

          document.getElementById("movie_1").innerHTML = my_first_movie;
          // document.getElementById("prediction").innerHTML = my_M;
        }
        console.log(titles);
        console.log(posters);
      }
      fetchTitles();
    }
  };

  xhr.onload = function () {};
  xhr.send(fd);
}

