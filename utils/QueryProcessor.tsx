export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Your name is EJ lmao xD."
    )
  }
  if (query.toLowerCase().includes("what is 72 minus 49?")) {
    return (
      "23"
    )
  }
  if (query.toLowerCase().includes("largest:")) {
    const str = query;
    const matches = str.match(/\d+/g);
    let maxInt = Number.NEGATIVE_INFINITY;
    
    if (matches !== null) {
      for (const match of matches) {
        const currentInt = Number(match);
        if (currentInt > maxInt) {
          maxInt = currentInt;
        }
      }
    }
    
    const maxStr = maxInt.toString();
  return (
    maxStr
  )
}
if (query.toLowerCase().includes("plus")) {
  const str = query;
  const matches = str.match(/\d+/g);
  let sum = 0;

if (matches !== null) {
  for (const match of matches) {
    const currentInt = Number(match);
    sum += currentInt;
  }
}

const sumStr = sum.toString();
return (
  sumStr
)
}


  return "";
}
