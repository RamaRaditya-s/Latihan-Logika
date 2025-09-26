export function luasBelahKetupat(diagonal1: string, diagonal2: string): void {
  console.log("\n##  Program TypeScript Luas Belah Ketupat ##");
  console.log("===============================================\n");

  const d1 = parseFloat(diagonal1);
  const d2 = parseFloat(diagonal2);

  const luas = 0.5 * d1 * d2;
  console.log(`Luas Belah Ketupat: ${luas}`);
}
