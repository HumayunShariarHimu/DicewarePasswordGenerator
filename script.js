// Sample diceware list (you can replace this with a bigger one from EFF)
const dicewareWords = {
  "11111": "apple",
  "11112": "banana",
  "11113": "cloud",
  "11114": "dream",
  "11115": "earth",
  "11116": "forest",
  "11121": "grape",
  "11122": "house",
  "11123": "island",
  "11124": "jungle",
  "11125": "kite",
  "11126": "lemon",
  "11131": "magic",
  "11132": "night",
  "11133": "orange",
  "11134": "pizza",
  "11135": "queen",
  "11136": "river",
  "11141": "sun",
  "11142": "tree",
  "11143": "umbrella",
  "11144": "violet",
  "11145": "whale",
  "11146": "xray",
  "11151": "yellow",
  "11152": "zebra"
};

function rollDice() {
  return String(
    Math.floor(Math.random() * 6 + 1) +
    '' + Math.floor(Math.random() * 6 + 1) +
    '' + Math.floor(Math.random() * 6 + 1) +
    '' + Math.floor(Math.random() * 6 + 1) +
    '' + Math.floor(Math.random() * 6 + 1)
  );
}

function generatePassphrase() {
  const wordCount = parseInt(document.getElementById("wordCount").value);
  const outputDiv = document.getElementById("output");
  let passphrase = [];

  for (let i = 0; i < wordCount; i++) {
    let roll = rollDice();
    while (!dicewareWords[roll]) {
      roll = rollDice();
    }
    passphrase.push(dicewareWords[roll]);
  }

  outputDiv.innerText = passphrase.join(" ");
}
