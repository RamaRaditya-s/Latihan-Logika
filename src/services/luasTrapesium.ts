export function luasTrapesium(panjangAtasInput: string, panjangBawahInput: string, tinggiInput: string): void {
  console.log("\n##  Program TypeScript Luas Trapesium ##");
  console.log("===============================================\n");

  const panjangAtas = parseFloat(panjangAtasInput);
  const panjangBawah = parseFloat(panjangBawahInput);
  const tinggi = parseFloat(tinggiInput);

  const luas = ((panjangAtas + panjangBawah) / 2) * tinggi;
  console.log(`Luas Trapesium: ${luas}`);
}