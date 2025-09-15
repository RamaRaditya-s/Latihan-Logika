export function programPersegiPanjang(baris: number, kolom: number): void {
  console.log("\n##  Program TypeScript Persegi Panjang  ##");
  console.log("=========================================\n");

  for (let i = 1; i <= baris; i++) {
    let row = "";
    for (let j = 1; j <= kolom; j++) {
      row += " *";
    }
    console.log(row);
  }
}
