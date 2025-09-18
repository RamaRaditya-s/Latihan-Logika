export function segitigaAngkaTerbalik2(tinggi: number): void {
  console.log("\n##  Program TypeScript Segitiga Angka Terbalik (2) ##");
  console.log("=========================================\n");

  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 0; j <= tinggi - i; j++) {
      row += (j + 1) + " ";
    }
    console.log(row.trim());
  }
}