const Tambah = (a) => {
  for (let i = a; i <= 200; i++) {
    if (i % 2 === 0 && i % 4 === 0) {
      console.log(`perulangan ke ${i} `);
    } else {
      console.log(`${i}`);
    }
  }
};
console.log(Tambah(20));
