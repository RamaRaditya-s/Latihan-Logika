export function programPersegiBintang(ukuran: number): void {
  console.log("\n##  Program TypeScript Persegi Bintang  ##");
  console.log("=========================================\n");

  for (let i = 1; i <= ukuran; i++) {
    let row = "";
    for (let j = 1; j <= ukuran; j++) {
      row += " *";
    }
    console.log(row);
  }
}
