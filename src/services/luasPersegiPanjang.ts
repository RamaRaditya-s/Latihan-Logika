export function luasPersegiPanjang(panjangInput: string, lebarInput: string): void {
  console.log("\n##  Program TypeScript Luas Persegi Panjang ##");
  console.log("===============================================\n");

  const panjang = parseFloat(panjangInput);
  const lebar   = parseFloat(lebarInput);

  const luas = panjang * lebar;
  console.log(`Luas Persegi Panjang: ${luas}`);
}
