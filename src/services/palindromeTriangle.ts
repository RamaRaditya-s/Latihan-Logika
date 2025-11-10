export function palindromeTriangle(n: number): void {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let s = n - i; s > 0; s--) {
      row += "  ";
    }

    for (let j = i; j < i + i; j++) {
      row += j + " ";
    }

    for (let j = i + i - 2; j >= i; j--) {
      row += j + " ";
    }

    console.log(row.trimEnd());
  }
}
