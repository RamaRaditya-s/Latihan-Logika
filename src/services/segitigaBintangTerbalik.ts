export function segitigaBintangTerbalik(tinggi: number): void {
  console.log("\n##  Program TypeScript Segitiga Bintang Terbalik  ##");
  console.log("=========================================\n");

  for ( let i = 1; i < tinggi; i++) {
    let row = "";
    for ( let j = tinggi; j > i; j--) {
        row += " *";
    }
    console.log(row);
  }
}