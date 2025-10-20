import * as readline from "readline";
import { simplePyramid } from "./services/SimplePyramid.js";
import { flippedSimplePyramid } from "./services/FlippedSimplePyramid.js";
import { invertedPyramid } from "./services/invertedPyramid.js";
import { flippedInvertedPyramid } from "./services/flippedInvertedPyramid.js";
import { trianglePyramid } from "./services/triangle.js";
import { InvertedTriangle } from "./services/invertedTriangle.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Pilih Program:");
console.log("1. Simple Pyramid");
console.log("2. Flipped Simple Pyramid");
console.log("3. Inverted Pyramid");
console.log("4. Flipped Inverted Pyramid");
console.log("5. Triangle (Full Pyramid)");
console.log("6. InvertedTriangle\n");

rl.question("Masukkan pilihan (1/2/3/4/5/6): ", (menu) => {
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
  } else if (menu === "3") {
    rl.question("Masukkan ukuran piramida: ", (ans) => {
      const size = parseInt(ans, 10);
      invertedPyramid(size);
      rl.close();
    });
  } else if (menu === "4") {
    rl.question("Masukkan ukuran piramida: ", (ans) => {
      const size = parseInt(ans, 10);
      flippedInvertedPyramid(size);
      rl.close();
    });
  } else if (menu === "5") {
    rl.question("Masukkan ukuran piramida: ", (ans) => {
      trianglePyramid(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "6") {
    rl.question("Masukkan ukuran piramida: ", (ans) => {
      InvertedTriangle (parseInt(ans, 10));
      rl.close();
    });
  } else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});
