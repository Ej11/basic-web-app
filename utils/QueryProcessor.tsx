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
  // if (query.toLowerCase().includes("largest:")) {
  //   const str = query;
  //   const integers: number[] = [];
  // const matches = str.match(/\d+/g);

  // if (matches !== null) {
  // for (const match of matches) {
  //   integers.push(Number(match));
  // }
  // const final = toString(Math.max(integers));
  // }
  //   return (
      
  //   )
  // }
  return "";
}
