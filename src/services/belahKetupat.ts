export function belahKetupat(lebar: number): void {
  console.log("\n##  Program TypeScript Belah Ketupat ##");
  console.log("=========================================\n");

  for (let i = 1; i <= lebar; i++) {
    let row = "";
    for (let j = 1; j <= lebar - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += " *";
    }

    console.log(row);
  }

  for (let i = 1; i < lebar; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " ";
    }
    for (let k = 1; k <= lebar - i; k++) {
      row += " *";
    }

    console.log(row);
  }
}
