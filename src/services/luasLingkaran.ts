export function luasLingkaran(jariJariInput: string): void {
  console.log("\n##  Program TypeScript Luas Lingkaran ##");
  console.log("=========================================\n");

  const jariJari = parseFloat(jariJariInput.trim());
  const luas = 3.14 * jariJari * jariJari;

  console.log(`Luas Lingkaran: ${luas}`);
}
