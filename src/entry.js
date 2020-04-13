const vowels = /[aeiou]/i;
const consonants = /[bcdfghjklmnpqrstvxzwy]/i;

export function Entry(heading, body){
  this.heading = heading,
  this.body = body;
}

Entry.prototype.wordCount = function(){
  var words = this.body.split(" ");
  return words.length;
};

Entry.prototype.vowelCounter = function(){
  var letters = this.body.split("");
  var vowlCount = 0;
  for (var i= 0 ; i < letters.length; i++){
    if (letters[i].match(vowels)){
      vowlCount += 1;
    } 
  }
  return vowlCount;
};

Entry.prototype.consonantCounter = function(){
  var letters = this.body.split("");
  var consonantCount = 0;
  for (var i = 0 ; i < letters.length; i++){
    if (letters[i].match(consonants)){
      consonantCount += 1;
    }
  }
  return consonantCount;
};

Entry.prototype.getTeaser = function() {
  var sent = this.body.split(".");
  var firstSent = sent[0];
  var firstWords = firstSent.split(" ");
  var string = " ";
  for( var i = 0; i < 8; i ++)
    if(firstWords[i]){
      string = string  + firstWords[i] + " ";
    }
  return string;
};