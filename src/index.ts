import * as readline from "readline";
import { simplePyramid } from "./services/SimplePyramid.js";
import { flippedSimplePyramid } from "./services/FlippedSimplePyramid.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Pilih Program:");
console.log("1. Simple Pyramid\n");
console.log("2. Flipped Simple Pyramid\n");

rl.question("Masukkan pilihan (1): ", (menu) => {
  if (menu === "1") {
  rl.question("Masukkan ukuran piramida: ", (ans) => {
      const size = parseInt(ans, 10);
      simplePyramid(size);
      rl.close();
    });
} else if (menu === "2") {
  rl.question("Masukkan ukuran piramida terbalik: ", (ans) => {
      const size = parseInt(ans, 10);
      flippedSimplePyramid(size);
      rl.close();
    });
} else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});
