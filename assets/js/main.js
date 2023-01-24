const firstName = "Karin";
const lastName = "Lee";
const age = "30";
const placeOfBirth = "Bünde";
const height = "162cm";
const weight = "57kg";
const hobby = "drinking coffee";
const food  = "sushi";
const sport = "kickboxing";
const fashion = "vero moda";
const season = "spring";
const holiday = "algarve";

const sentence = "My Name is " + firstName + " " + lastName + ". I am " + age + " years old." + " I was born in " + placeOfBirth + ". I am " + height + " tall and I weigh " + weight + ". I like " + hobby + " and eating " + food +". On sundays I often go to " + sport + ". My favorite season is " + season + ". I like to travel to the " + holiday + ".";

const sentenceTem = `My Name is ${firstName} ${lastName}. I am ${age} years old. I was born in ${placeOfBirth}. I am ${height} tall and I weigh ${weight}. I like ${hobby} and eating ${food}. On sundays I often go to ${sport}. My favorite season is ${season} and I like to travel to the ${holiday}.`

console.log(sentence);
document.write(sentence + "<br>");

console.log(sentenceTem);
document.write(sentenceTem);


