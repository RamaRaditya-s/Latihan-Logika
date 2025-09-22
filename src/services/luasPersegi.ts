export function luasPersegi(sisiInput: string): void {
  console.log("\n##  Program TypeScript Luas Persegi ##");
  console.log("=========================================\n");

  const sisi = parseFloat(sisiInput); // ubah string ke float
  const luas = sisi * sisi;

  console.log(`Luas Persegi: ${luas}`);
}
