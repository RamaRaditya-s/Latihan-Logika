export function halfDiamond(ukuran: number): void {
  console.log("\n##  Program Half Diamond Pattern  ##");
  console.log("====================================\n");

  for (let i = 1; i <= ukuran; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
  for (let i = ukuran - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
