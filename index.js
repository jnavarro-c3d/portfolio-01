$(document).ready(function() {
  createBoldRegAlternatingText();
})

//Creates the alternating bold effect on text elements with the class name
//"bold-reg-text-alternate."
//TODO: Consider how to make something like this that will be more friendly
//towards responsive design. Each piece of text becomes a single line so
//may stretch the pages width.
function createBoldRegAlternatingText() {
  var originalTextList = document.getElementsByClassName("bold-reg-text-alternate");
  for (var i = 0; i < originalTextList.length; i++) {
    console.log(originalTextList[i].innerHTML);
    var wordsFromText = originalTextList[i].innerHTML.trim().split(" ");
    var updatedText = "";

    for (var j = 0; j < wordsFromText.length; j++) {
      if (j % 2 == 0) {
        updatedText += "<b>" + wordsFromText[j] + "</b>";
      }
      else {
        updatedText += wordsFromText[j];
      }
    }
    console.log(updatedText);
    originalTextList[i].innerHTML = updatedText;
  }
}
