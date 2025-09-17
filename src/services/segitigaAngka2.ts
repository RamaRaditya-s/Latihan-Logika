export function segitigaAngka2(tinggi: number): void {
  console.log("\n##  Program TypeScript Segitiga Angka (2) ##");
  console.log("=========================================\n");

  for ( let i = 1; i <= tinggi; i++ ) {
    let row = "";
    for ( let j = 1; j <= i; j++) {
      row += j + " ";  
      }
    console.log(row.trim());
  }

}