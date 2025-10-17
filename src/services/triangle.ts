export function trianglePyramid(ukuran: number): void{
  console.log("\n##  Program Triangle (Full Pyramid)  ##");
  console.log("======================================\n");

  for (let i = 1; i <= ukuran; i++) {
    let row = "";
    for (let s = i; s < ukuran; s++) {
      row += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "* ";
    }

    console.log(row.trimEnd());
  }
}
