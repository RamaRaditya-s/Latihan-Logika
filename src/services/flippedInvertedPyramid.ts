export function flippedInvertedPyramid(ukuran: number): void{
  console.log("\n##  Program Flipped Inverted Half Pyramid  ##");
  console.log("============================================\n");

  for (let i = 0; i < ukuran; i++) {
    let row = "";
    for (let s = 0; s < i; s++) {
      row += "  ";
    }
    for (let j = i; j < ukuran; j++) {
      row += "* ";
    }

    console.log(row.trimEnd());
  }
}
