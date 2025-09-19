export function persegiAngka2(besar: number): void {
  console.log("\n##  Program TypeScript Persegi Angka (2) ##");
  console.log("=========================================\n");

  for (let i = 1; i <= besar; i++) {
    let row = "";
    for (let j = 1; j <= besar; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }
}