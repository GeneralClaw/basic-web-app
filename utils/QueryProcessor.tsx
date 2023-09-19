export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrewid")) {
    return "My Andrew ID is dballuff";
  } else if (query.toLowerCase().includes("name")) {
    return "My name is General_Claw";
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const findMax = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (findMax) {
    const x: number = parseInt(findMax[1]);
    const y: number = parseInt(findMax[2]);
    const z: number = parseInt(findMax[3]);
    return Math.max(x, y, z).toString();
  }

  // What is 78 multiplied by 83?
  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }
  return "";
}
