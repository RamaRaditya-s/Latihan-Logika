export function persegiAngka3(besar: number): void {
  console.log("\n##  Program TypeScript Persegi Angka (3) ##");
  console.log("=========================================\n");

  let k = 0;
  for (let i = 1; i <= besar; i++) {
    let row = "";
    for (let j = 1; j <= besar; j++) {
      k++;
      row += k.toString().padStart(3) + " ";
    }
    console.log(row);
  }
}