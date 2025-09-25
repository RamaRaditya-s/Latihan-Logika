import * as readline from "readline";
import { programPersegiBintang } from "./services/persegiBintang.js";
import { programPersegiPanjang } from "./services/persegiPanjang.js";
import { segitigaBintang } from "./services/segitigaBintang.js";
import { segitigaBintangTerbalik } from "./services/segitigaBintangTerbalik.js";
import { belahKetupat } from "./services/belahKetupat.js";
import { segitigaAngka1 } from "./services/segitigaAngka1.js";
import { segitigaAngka2 } from "./services/segitigaAngka2.js";
import { segitigaAngka3 } from "./services/segitigaAngka3.js";
import { segitigaAngkaTerbalik1 } from "./services/segitigaAngkaTerbalik1.js";
import { segitigaAngkaTerbalik2 } from "./services/segitigaAngkaTerbalik2.js";
import { segitigaAngkaTerbalik3 } from "./services/segitigaAngkaTerbalik3.js";
import { persegiAngka1 } from "./services/persegiAngka1.js";
import { persegiAngka2 } from "./services/persegiAngka2.js";
import { persegiAngka3 } from "./services/persegiAngka3.js";
import { luasPersegi } from "./services/luasPersegi.js";
import { luasPersegiPanjang } from "./services/luasPersegiPanjang.js";
import { luasSegitiga } from "./services/luasSegitiga.js";
import { luasLingkaran } from "./services/luasLingkaran.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Pilih Program:");
console.log("1. Persegi Bintang");
console.log("2. Persegi Panjang");
console.log("3. Segitiga Bintang");
console.log("4. Segitiga Bintang Terbalik");
console.log("5. Belah Ketupat");
console.log("6. Segitiga Angka");
console.log("7. Segitiga Angka Terbalik");
console.log("8. Persegi Angka");
console.log("9. Luas Persegi");
console.log("10. Luas Persegi Panjang");
console.log("11. Luas Segitiga");
console.log("12. Luas Lingkaran\n");

rl.question("Masukkan pilihan (1/2/3/4/5/6/7/8/9/10/11/12): ", (menu) => {
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
  } else if (menu === "6") {
    // Pilihan Type Soal
    console.log("=== Pilih Jenis Segitiga Angka ===");
    console.log("1. Segitiga angka Type 1");
    console.log("2. Segitiga angka Type 2");
    console.log("3. Segitiga angka Type 3");

    rl.question("Masukkan Pilihan (1/2/3): ", (type) => {
      if (type === "1") {
        rl.question("Masukkan Tinggi Segitiga: ", (t) => {
          const tinggi = parseInt(t, 10);
          segitigaAngka1(tinggi);
          rl.close();
        });
      } else if (type === "2") {
        rl.question("Masukkan Tinggi Segitiga: ", (t) => {
          const tinggi = parseInt(t, 10);
          segitigaAngka2(tinggi);
          rl.close();
        });
      } else if (type === "3") {
        rl.question("Masukkan Tinggi Segitiga: ", (t) => {
          const tinggi = parseInt(t, 10);
          segitigaAngka3(tinggi);
          rl.close();
        });
      } else {
        console.log("Pilihan Tidak Valid");
        rl.close();
      }
    });
  } else if (menu === "7") {
    // Pilihan type soal
    console.log("=== Pilih Jenis Segitiga Angka Terbalik ===");
    console.log("1. Segitiga Angka Terbalik Type 1");
    console.log("2. Segitiga Angka Terbalik Type 2");
    console.log("3. Segitiga Angka Terbalik Type 3");

    rl.question("Masukkan Pilihan (1/2/3): ", (type) => {
      if (type === "1") {
        rl.question("Masukkan Tinggi Segitiga: ", (t) => {
          const tinggi = parseInt(t, 10);
          segitigaAngkaTerbalik1(tinggi);
          rl.close();
        });
      } else if (type === "2") {
        rl.question("Masukkan Tinggi Segitiga: ", (t) => {
          const tinggi = parseInt(t, 10);
          segitigaAngkaTerbalik2(tinggi);
          rl.close();
        });
      } else if (type === "3") {
        rl.question("Masukkan Tinggi Segitiga: ", (t) => {
          const tinggi = parseInt(t, 10);
          segitigaAngkaTerbalik3(tinggi);
          rl.close();
        });
      } else {
        console.log("Pilihan Tidak Valid");
        rl.close();
      }
    });
  } else if (menu === "8") {
    // Pilihan type soal
    console.log("=== Pilih Jenis Persegi Angka ===");
    console.log("1. Persegi Angka Type 1");
    console.log("2. Persegi Angka Type 2");
    console.log("3. Persegi Angka Type 3");

    rl.question("Masukkan Pilihan (1/2/3): ", (type) => {
      if (type === "1") {
        rl.question("Masukkan Besar Persegi: ", (t) => {
          const besar = parseInt(t, 10);
          persegiAngka1(besar);
          rl.close();
        });
      } else if (type === "2") {
        rl.question("Masukkan Besar Persegi: ", (t) => {
          const besar = parseInt(t, 10);
          persegiAngka2(besar);
          rl.close();
        });
      } else if (type === "3") {
        rl.question("Masukkan Besar Persegi: ", (t) => {
          const besar = parseInt(t, 10);
          persegiAngka3(besar);
          rl.close();
        });
      } else {
        console.log("Pilihan Tidak Valid");
        rl.close();
      }
    });
  } else if (menu === "9") {
  rl.question("Input sisi persegi: ", (t) => {
    luasPersegi(t.trim());
    rl.close();
  });
} else if (menu === "10") {
  rl.question("Input panjang persegi panjang: ", (t) => {
    rl.question("Input lebar persegi panjang: ", (s) => {
      luasPersegiPanjang(t.trim(), s.trim());
      rl.close();
    });
  });
} else if (menu === "11") {
  rl.question("Input alas segitiga: ", (a) => {
    rl.question("Input tinggi segitiga: ", (t) => {
      luasSegitiga(a.trim(), t.trim());
      rl.close();
    });
  });
} else if (menu === "12") {
  rl.question("Input jari-jari lingkaran: ", (j) => {
    luasLingkaran(j.trim());
    rl.close();
  });
} else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});
