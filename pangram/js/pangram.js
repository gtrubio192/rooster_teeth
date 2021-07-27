
const handlePangram = (e) => {
  e.preventDefault();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const missingLetters = [];
  const resultsArea = document.getElementById('results');
  const missingLabel = document.getElementsByClassName('missing-label')[0];
  const video = document.getElementsByClassName('secret-show')[0];
  let input = document.getElementById('pangram-input').value.toLowerCase();
  
  // Remove spaces chars from input
  const spacesRegex = /\s/g;
  input = input.replace(spacesRegex, '');
  // Check for every letter in the alphabet, ignoring all other chars
  for(let i = 0; i < alphabet.length; i++) {
    if(input.indexOf(alphabet[i]) === -1) {
      missingLetters.push(alphabet[i]);
    }
  }

  if(!missingLetters.length) {
    video.style.display = 'inherit';
    missingLabel.style.display = 'none';
  }
  else {
    missingLabel.style.display = 'inherit';
    video.style.display = 'none';
  }
  let results = missingLetters.length ? missingLetters.sort().join(' ') : 'PANAGRAM';
  resultsArea.innerHTML = results;

}

document.getElementById('submit-button').addEventListener('click', handlePangram);