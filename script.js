function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftValue').value);
  
    if (isNaN(shift) || shift < 1 || shift > 25) {
      alert('Please enter a valid shift value between 1 and 25.');
      return;
    }
  
    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      if (char.match(/[a-zA-Z]/)) {
        const charCode = char.charCodeAt(0);
        const base = char.toLowerCase() === char ? 97 : 65;
        encryptedText += String.fromCharCode(((charCode - base + shift) % 26) + base);
      } else {
        encryptedText += char;
      }
    }
  
    document.getElementById('outputText').innerText = encryptedText;
  }
  
  function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftValue').value);
  
    if (isNaN(shift) || shift < 1 || shift > 25) {
      alert('Please enter a valid shift value between 1 and 25.');
      return;
    }
  
    let decryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      if (char.match(/[a-zA-Z]/)) {
        const charCode = char.charCodeAt(0);
        const base = char.toLowerCase() === char ? 97 : 65;
        decryptedText += String.fromCharCode(((charCode - base - shift + 26) % 26) + base);
      } else {
        decryptedText += char;
      }
    }
  
    document.getElementById('outputText').innerText = decryptedText;
  }
  