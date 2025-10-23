import * as readline from "readline";
import { simplePyramid } from "./services/SimplePyramid.js";
import { flippedSimplePyramid } from "./services/FlippedSimplePyramid.js";
import { invertedPyramid } from "./services/invertedPyramid.js";
import { flippedInvertedPyramid } from "./services/flippedInvertedPyramid.js";
import { trianglePyramid } from "./services/triangle.js";
import { InvertedTriangle } from "./services/invertedTriangle.js";
import { halfDiamond } from "./services/halfDiamond.js";
import { flippedHalfDiamond } from "./services/flippedHalfDiamond.js";
import { diamondPattern } from "./services/diamondPattern.js";

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
console.log("6. InvertedTriangle");
console.log("7. Half Diamond");
console.log("8. Flipped Half Diamond");
console.log("9. Diamond Pattern\n");

rl.question("Masukkan pilihan (1/2/3/4/5/6/7/8/9): ", (menu) => {
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
  } else if (menu === "7") {
    rl.question("Masukkan ukuran piramida: ", (ans) => {
      halfDiamond(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "8") {
    rl.question("Masukkan ukuran piramida: ", (ans) => {
      flippedHalfDiamond(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "9") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      diamondPattern(parseInt(ans, 10));
      rl.close();
    });
  } else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});