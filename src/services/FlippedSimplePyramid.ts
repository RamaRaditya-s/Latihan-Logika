export function flippedSimplePyramid(ukuran: number): void{
  console.log("\n##  Program TypeScript Flipped Simple Pyramid  ##");
  console.log("==================================================\n");

  for (let i = ukuran; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " *";
    }
    console.log(row);
  }
}