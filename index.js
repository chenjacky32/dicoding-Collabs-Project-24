// Tambah Data
const Tambah = (a) => {
  for (let i = a; i <= 200; i++) {
    if (i % 2 === 0 && i % 4 === 0) {
      console.log(`perulangan ke ${i} `);
    } else {
      console.log(`${i}`);
    }
  }
};
console.log(Tambah(200));

// Fetching Data

const Getjokes = async () => {
  try {
    const Config = {
      headers: {
        Accept: "application/json",
        //untuk header nya tdk hanya header,tetapi bisa masukkin body,data sesuai parameter axiosnya
      },
    };
    const Res = await axios.get("https://icanhazdadjoke.com/", Config);
    return Res.data.joke;
  } catch (error) {
    return "Jokes not found 404";
  }
};

console.log(Getjokes()); //utk liat data didalam api yg kita panggil

// Request API MovieList
const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll("img").forEach((img) => img.remove());
  const keyword = form.elements.query.value;
  const Config = {
    params: {
      q: keyword,
    },
  };
  const res = await axios.get("http://api.tvmaze.com/search/shows?q=naruto", Config);
  getImg(res.data);
  form.elements.query.value = "";
});

const getImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};


// Tambah object
const Jc = new PersonMember();
Jacky.firstName = "jacky";
Jacky.Lastname = "jacky";
Jacky.Hello("JACKY");

// Object 2

class User {
  constructor(name) {
    this._name = name;
  }

  static anonymous() {
    console.log("anonymous");
  }
}

const kedar = new User("kedar");
kedar.anonymous(); // error
User.anonymous(); // "anonymous"

