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
