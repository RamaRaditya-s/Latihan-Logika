export function continuousAlphabetPyramid(n: number): void {
  console.log("\n##  Program Continuous Alphabet Pyramid  ##");
  console.log("==========================================\n");

  let charCode = 65; // Kode ASCII untuk 'A'

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(charCode) + " ";
      charCode++;
    }
    console.log(row.trimEnd());
  }
}
