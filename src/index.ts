import * as readline from "readline";
import { simplePyramid } from "./services/SimplePyramid.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Pilih Program:");
console.log("1. Simple Pyramid\n");

rl.question("Masukkan pilihan (1): ", (menu) => {
  if (menu === "1") {
  rl.question("Masukkan ukuran piramida: ", (ans) => {
      const size = parseInt(ans, 10);
      simplePyramid(size);
      rl.close();
    });
} else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});
