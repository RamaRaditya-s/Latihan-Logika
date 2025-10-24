export function hourglassPattern(ukuran: number): void {
  console.log("\n##  Program Hourglass Pattern  ##");
  console.log("==================================\n");

  for (let i = ukuran; i >= 1; i--) {
    let row = "";
    for (let s = ukuran; s > i; s--) row += "  ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "* ";
    console.log(row.trimEnd());
  }

  for (let i = 2; i <= ukuran; i++) {
    let row = "";
    for (let s = ukuran; s > i; s--) row += "  ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "* ";
    console.log(row.trimEnd());
  }
}
