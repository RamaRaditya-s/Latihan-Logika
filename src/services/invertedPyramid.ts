export function invertedPyramid(ukuran: number): void {
  console.log("\n##  Program Inverted Half Pyramid  ##");
  console.log("=====================================\n");

  for (let i = ukuran; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
