export function segitigaBintang(tinggi: number): void {
  console.log("\n##  Program TypeScript Segitiga Bintang  ##");
  console.log("=========================================\n");

  for ( let i = 1; i <= tinggi; i++) {
    let row = "";
    for ( let j = 1; j <= i; j++) {
        row += " *";
    }
    console.log(row);
  }
}