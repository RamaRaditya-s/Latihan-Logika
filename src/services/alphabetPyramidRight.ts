export function alphabetPyramidRight(n: number): void {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) row += String.fromCharCode(65 + i) + " ";
    console.log(row.trimEnd());
  }
}
