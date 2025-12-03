let players = document.getElementById("players");

let search = document.getElementById("search");

let alfa = document.getElementById("alfa");
let order = document.getElementById("order");

let player = [
  {
    name: "Messi",
    img: "https://www.aljazeera.com/wp-content/uploads/2021/08/2019-12-07T000000Z_879038429_RC2LQD9L67FQ_RTRMADP_3_SOCCER-SPAIN-FCB-RCD-REPORT.jpg?resize=770%2C513&quality=80",
    year: 1987,
    rating: 9.9,
  },
  {
    name: "Mbappe",
    img: "https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1",
    year: 1998,
    rating: 9.6,
  },
  {
    name: "Ronaldo",
    img: "https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-during-the-uefa-nations-news-photo-1748359673.pjpeg?crop=0.610xw:0.917xh;0.317xw,0.0829xh&resize=640:*",
    year: 1985,
    rating: 10,
  },
  {
    name: "Neymar",
    img: "https://www.aljazeera.com/wp-content/uploads/2025/01/GettyImages-2182914650-1738052482.jpg?resize=1920%2C1440",
    year: 1991,
    rating: 9.8,
  },
];

function renderData(data) {
  players.innerHTML = "";
  data.map((value) => {
    let div = document.createElement("div");
    div.className = "box";

    div.innerHTML = `
    <img class="img"  width="200px" src=${value.img}/>
    <h2>${value.name} </h2>
    <h4>Birth year ${value.year}</h4>
    <h4>Rating ${value.rating}</h4>
    `;

    players.appendChild(div);
  });
}

renderData(player);

search.addEventListener("input", (e) => {
  let newFiltered = player.filter((value) => {
    return value.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  renderData(newFiltered);
});

// search.addEventListener("select", (e) => {
//   let newFiltered = alfa.filter((value) => {
//     return value.name.toLowerCase().includes(e.target.value.toLowerCase());
//   });

//   renderData(newFiltered);
// });

alfa.addEventListener("change", (e) => {
  if (e.target.value === "a-z") {
    let sortedPlayers = [...player].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    renderData(sortedPlayers);
  } else if (e.target.value === "z-a") {
    let sortedPlayers = [...player].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    renderData(sortedPlayers);
  } else {
    renderData(player);
  }
});

order.addEventListener("change", (e) => {
  if (e.target.value === "year") {
    let sortedPlayers = [...player].sort((a, b) => {
      return a.year - b.year;
    });
    renderData(sortedPlayers);
  } else if (e.target.value === "rating") {
    let sortedPlayers = [...player].sort((a, b) => {
      return b.rating - a.rating;
    });
    renderData(sortedPlayers);
  } else {
    renderData(player);
  }
});
