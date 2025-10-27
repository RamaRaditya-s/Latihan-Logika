export function numberPyramid(ukuran: number): void {
  console.log("\n##  Program Number Pyramid  ##");
  console.log("================================\n");

  for (let i = 1; i <= ukuran; i++) {
    let row = "";
    for (let s = ukuran; s > i; s--) row += "  ";
    for (let j = 1; j <= i; j++) row += i + " ";
    console.log(row.trimEnd());
  }
}
