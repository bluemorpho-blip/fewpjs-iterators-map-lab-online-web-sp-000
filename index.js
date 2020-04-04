const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let array = []
  tutorials.map(tutorial => {
   tutorial = tutorial.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1)})
   array.push(tutorial);
  });
  console.log(array);
  return array;
}

titleCased(tutorials);

