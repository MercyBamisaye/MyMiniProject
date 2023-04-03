showResult.style.visibility = 'hidden';
document.getElementById("btnSubmit").addEventListener("click", FillTable, false);
function FillTable() {
    showResult.style.visibility = 'visible';
    var Sentence = document.getElementById('Sentence').value

    const numChars = Sentence.length;
    const numWords = Sentence.split(' ').length;
    const reversedString = Sentence.split('').reverse().join('');
    const upperCaseString = Sentence.toUpperCase();
    const lowerCaseString = Sentence.toLowerCase();
    document.getElementById('tdSentence').innerHTML = Sentence;
    document.getElementById('tdNoChar').innerHTML = numChars;
    document.getElementById('tdNoWord').innerHTML = numWords;
    document.getElementById('tdReverse').innerHTML = reversedString;
    document.getElementById('tdToUpper').innerHTML = upperCaseString;
    document.getElementById('tdToLower').innerHTML = lowerCaseString; 
} 