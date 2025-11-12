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
import { hourglassPattern } from "./services/hourglassPattern.js";
import { numberPyramid } from "./services/numberPyramid.js";
import { rotatedNumberPyramid } from "./services/rotateNumberPyramid.js";
import { palindromeTriangle } from "./services/palindromeTriangle.js";
import { alphabetPyramidRight } from "./services/alphabetPyramidRight.js";
import { continuousAlphabetPyramid } from "./services/continuousAlphabetPyramid.js";

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
console.log("9. Diamond Pattern");
console.log("10. Hourglass Pattern");
console.log("11. Number Pyramid");
console.log("12. Rotated Number Pyramid");
console.log("13. Palindrome Triangle");
console.log("14. Alphabet Pyramid Right");
console.log("15. Continuous Alphabet Pyramid\n");

rl.question("Masukkan pilihan (1/2/3/4/5/6/7/8/9/10/11/12/13/14/15): ", (menu) => {
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
  } else if (menu === "10") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      hourglassPattern(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "11") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      numberPyramid(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "12") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      rotatedNumberPyramid(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "13") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      palindromeTriangle(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "14") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      alphabetPyramidRight(parseInt(ans, 10));
      rl.close();
    });
  } else if (menu === "15") {
    rl.question("Masukkan ukuran pola: ", (ans) => {
      continuousAlphabetPyramid(parseInt(ans, 10));
      rl.close();
    });
  } else {
    console.log("Pilihan tidak valid.");
    rl.close();
  }
});