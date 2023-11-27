// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
  return words.filter(function (word) {
    return word.toLowerCase().includes("a");
  });
}

console.log(
  "question2: ",
  filterWordsWithLetterA(["Programming", "is", "great!"])
); // ska logga ["Programming", "great!"]
