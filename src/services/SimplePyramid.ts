export function simplePyramid(ukuran: number): void {
  console.log("\n##  Program TypeScript Simple Pyramid  ##");
  console.log("==========================================\n");

   for (let i = 1; i <= ukuran; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " *";
    }
    console.log(row);
  }
}

