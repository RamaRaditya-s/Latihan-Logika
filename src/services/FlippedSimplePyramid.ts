export function flippedSimplePyramid(ukuran: number): void{
  console.log("\n##  Program TypeScript Flipped Simple Pyramid  ##");
  console.log("==================================================\n");

  for (let i = 1; i <= ukuran; i++) {
    let indent = "  ".repeat(ukuran - i);
    let stars = "* ".repeat(i).trimEnd();
    console.log(indent + stars);
  }
}