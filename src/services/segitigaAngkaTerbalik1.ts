export function segitigaAngkaTerbalik1(tinggi: number): void {
  console.log("\n##  Program TypeScript Segitiga Angka Terbalik (1) ##");
  console.log("=========================================\n");

  for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 0; j <= tinggi - i; j++) {
      row += i + " ";
    }
    console.log(row.trim());
  }
}