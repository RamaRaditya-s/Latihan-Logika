import * as readline from "readline";
import { programPersegiBintang } from "./services/persegiBintang.js";
import { programPersegiPanjang } from "./services/persegiPanjang.js";
import { segitigaBintang } from "./services/segitigaBintang.js";
import { segitigaBintangTerbalik } from "./services/segitigaBintangTerbalik.js";
import { belahKetupat } from "./services/belahKetupat.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Pilih Program:");
console.log("1. Persegi Bintang");
console.log("2. Persegi Panjang");
console.log("3. Segitiga Bintang");
console.log("4. Segitiga Bintang Terbalik");
console.log("5. Belah Ketupat\n");

rl.question("Masukkan pilihan (1/2/3/4/5): ", (menu) => {
  if (menu === "1") {
    rl.question("Masukkan ukuran persegi: ", (ans) => {
      const size = parseInt(ans, 10);
      programPersegiBintang(size);
      rl.close();
    });
  } else if (menu === "2") {
    rl.question("Masukkan jumlah baris (H): ", (b) => {
      rl.question("Masukkan jumlah kolom (V): ", (k) => {
        const baris = parseInt(b, 10);
        const kolom = parseInt(k, 10);
        programPersegiPanjang(baris, kolom);
        rl.close();
      });
    });
  } else if (menu === "3") {
    rl.question("Masukkan tinggi segitiga: ", (h) => {
      const tinggi = parseInt(h, 10);
      segitigaBintang(tinggi);
      rl.close();
    });
  } else if (menu === "4") {
    rl.question("Masukkan tinggi segitiga terbalik: ", (t) => {
      const tinggi = parseInt(t, 10);
      segitigaBintangTerbalik(tinggi);
      rl.close();
    });
  } else if (menu === "5") {
    rl.question("Masukkan Lebar Belah Ketupat: ", (L) => {
      const lebar = parseInt(L, 10);
      belahKetupat(lebar);
      rl.close();
    });
  } else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});
