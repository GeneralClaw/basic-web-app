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

  
  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }
  //Which of the following numbers is both a square and a cube: 677, 624, 64, 324, 512, 3678, 362?
  const squareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  if (squareCubeMatch) {
    const nums = squareCubeMatch.slice(1).map(Number);
    
    const squareAndCube = nums.filter((num) => {
      const root = Math.pow(num, 1/6);
      return root === Math.floor(root);
    });
    
    if (squareAndCube.length > 0) {
      return (squareAndCube[0]).toString();
    } else {
      return "";
    }
  }
  // Which of the following numbers are primes: 88, 23, 96, 10, 12?
  const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  if (primeMatch) {
    const x: number = parseInt(primeMatch[1]);
    const y: number = parseInt(primeMatch[2]);
    const z: number = parseInt(primeMatch[3]);
    const a: number = parseInt(primeMatch[4]);
    const b: number = parseInt(primeMatch[5]);
    const nums: number[] = [x, y, z, a, b];
    const primes: number[] = nums.filter((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    });
    return primes.join(", ");
  }
  //What is 31 minus 19?
  const subtractMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subtractMatch) {
    const x: number = parseInt(subtractMatch[1]);
    const y: number = parseInt(subtractMatch[2]);
    return (x-y).toString();
  }
  // 	What is 85 to the power of 15?
  const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
  if (powerMatch) {
    const x: number = parseInt(powerMatch[1]);
    const y: number = parseInt(powerMatch[2]);
    return (x**y).toString();
  }

  //What is 30 plus 29 plus 95?
  const addMultipleMatch = query.match(/What is (\d+) plus (\d+) plus (\d+)/);
  if (addMultipleMatch) {
    const x: number = parseInt(addMultipleMatch[1]);
    const y: number = parseInt(addMultipleMatch[2]);
    const z: number = parseInt(addMultipleMatch[3]);
    return (x+y+z).toString();
  }
  return "";
}
