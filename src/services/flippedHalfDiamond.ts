export function flippedHalfDiamond(ukuran: number): void {
  console.log("\n##  Program Flipped Half Diamond Pattern  ##");
  console.log("===========================================\n");

  for (let i = 1; i <= ukuran; i++) {
    let row = "";
    for (let s = ukuran; s > i; s--) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }

  for (let i = ukuran - 1; i >= 1; i--) {
    let row = "";
    for (let s = ukuran; s > i; s--) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
