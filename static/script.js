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
      var links = movies.split(",");

      mov1_str1 = links[0];
      mov1_str2 = mov1_str1.split("'");
      mov_1 = mov1_str2[1];

      mov2_str1 = links[1];
      mov2_str2 = mov2_str1.split("'");
      mov_2 = mov2_str2[1];

      mov3_str1 = links[2];
      mov3_str2 = mov3_str1.split("'");
      mov_3 = mov3_str2[1];

      mov4_str1 = links[3];
      mov4_str2 = mov4_str1.split("'");
      mov_4 = mov4_str2[1];

      mov5_str1 = links[4];
      mov5_str2 = mov5_str1.split("'");
      mov_5 = mov5_str2[1];

      mov6_str1 = links[5];
      mov6_str2 = mov6_str1.split("'");
      mov_6 = mov6_str2[1];

      mov7_str1 = links[6];
      mov7_str2 = mov7_str1.split("'");
      mov_7 = mov7_str2[1];

      mov8_str1 = links[7];
      mov8_str2 = mov8_str1.split("'");
      mov_8 = mov8_str2[1];

      mov9_str1 = links[8];
      mov9_str2 = mov9_str1.split("'");
      mov_9 = mov9_str2[1];

      mov10_str1 = links[9];
      mov10_str2 = mov10_str1.split("'");
      mov_10 = mov10_str2[1];

      mov11_str1 = links[10];
      mov11_str2 = mov11_str1.split("'");
      mov_11 = mov11_str2[1];

      pos_1 = mov11_str2[3]; //Poster 1 for 1st movie

      mov11_str1 = links[11];
      mov11_str2 = mov11_str1.split("'");
      pos_2 = mov11_str2[1];

      mov12_str1 = links[12];
      mov12_str2 = mov12_str1.split("'");
      pos_3 = mov12_str2[1];

      mov13_str1 = links[13];
      mov13_str2 = mov13_str1.split("'");
      pos_4 = mov13_str2[1];

      mov14_str1 = links[14];
      mov14_str2 = mov14_str1.split("'");
      pos_5 = mov14_str2[1];

      mov15_str1 = links[15];
      mov15_str2 = mov15_str1.split("'");
      pos_6 = mov15_str2[1];

      mov16_str1 = links[16];
      mov16_str2 = mov16_str1.split("'");
      pos_7 = mov16_str2[1];

      mov17_str1 = links[17];
      mov17_str2 = mov17_str1.split("'");
      pos_8 = mov17_str2[1];

      mov18_str1 = links[18];
      mov18_str2 = mov18_str1.split("'");
      pos_9 = mov18_str2[1];

      mov19_str1 = links[19];
      mov19_str2 = mov19_str1.split("'");
      pos_10 = mov19_str2[1];

      mov19_str1 = links[20];
      mov19_str2 = mov19_str1.split("'");
      pos_11 = mov19_str2[1];

      //
      //
      let my_first_movie = "";
      my_first_movie = `
      <div class="top_row">

        <div class="col_one">
            <h3>
              <p class="movie_detail"></p>
              <p>${mov_1}</p>
            </h3>
        </div>

        <div class="col_one">
            <img class="first_movie" id="p1" src="${pos_1}" 
            <h3>
              <span></span>
            </h3>
        </div>

      </div>
      `;
      let my_data = "";
      my_data = `<div class="column">
      <img class="poster" id="p1" src="${pos_2}" <h2>
      <span id="m1">${mov_2}</span>
      </h2>
      </div>
      
      
      
      <div class="column">
      <img class="poster" id="p2" src="${pos_3}" <h2>
      <span id="m2">${mov_3}</span>
      </h2>
      </div>
      
      
      
      
      <div class="column">
      <img class="poster" id="p3" src="${pos_4}" <h2>
      <span id="m3">${mov_4}</span>
      </h2>
      </div>
      
      
      
      <div class="column">
      <img class="poster" id="p4" src="${pos_5}" <h2>
      <span id="m4">${mov_5}</span>
      </h2>
      </div>
      
      
      
      
      <div class="column">
      <img class="poster" id="p5" src="${pos_6}" <h2>
      <span id="m5">${mov_6}</span>
      </h2>
      </div>
      
      
      <div class="column">
      <img class="poster" id="p6" src="${pos_7}" <h2>
      <span id="m6">${mov_7}</span>
      </h2>
      </div>
      
      
      
      <div class="column">
      <img class="poster" id="p7" src="${pos_8}" <h2>
      <span id="m7">${mov_8}</span>
      </h2>
      </div>
      
      <div class="column">
      <img class="poster" id="p8" src="${pos_9}" <h2>
      <span id="m8">${mov_9}</span>
      </h2>
      </div>
      
      <div class="column">
      
      <img class="poster" id="p9" src="${pos_10}" <h2>
      <span id="m9">${mov_10}</span>
      </h2>
      </div>
      
      
      <div class="column">
      
      <img class="poster" id="p10" src="${pos_11}" <h2>
      <span id="m10">${mov_11}</span>
      </h2>
      </div>`;
      document.getElementById("movie_1").innerHTML = my_first_movie;
      document.getElementById("rows").innerHTML = my_data;
    }
  };

  xhr.onload = function () {};
  xhr.send(fd);
}
