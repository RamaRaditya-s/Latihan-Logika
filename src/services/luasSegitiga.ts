export function luasSegitiga(tinggiInput: string, alasInput: string): void {
  console.log("\n##  Program TypeScript Luas Segitiga ##");
  console.log("===============================================\n");

  const tinggi = parseFloat(tinggiInput);
  const alas   = parseFloat(alasInput);

  const luas = 0.5 * alas * tinggi;
  console.log(`Luas Segitiga: ${luas}`);
}
