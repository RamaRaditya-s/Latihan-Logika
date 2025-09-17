export function segitigaAngka3(tinggi: number): void {
  console.log("\n##  Program TypeScript Segitiga Angka (3) ##");
  console.log("=========================================\n");


  let k = 0;
  for (let i=1; i <= tinggi; i++) {
    let row = "";
    for ( let j = 1; j <= i; j++) {
      k++;
      row += k + " ";
    }
    console.log(row.trim());
  }
}