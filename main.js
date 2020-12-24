var fs = require("fs");

function keypadToWords(keyStrokes) {
    let allWords = readFromFile();
    let result = [];

    let numToCharMap = new Map();
    numToCharMap.set("2", ["a", "b", "c"]);
    numToCharMap.set("3", ["d", "e", "f"]);
    numToCharMap.set("4", ["g", "h", "i"]);
    numToCharMap.set("5", ["j", "k", "l"]);
    numToCharMap.set("6", ["m", "n", "o"]);
    numToCharMap.set("7", ["p", "q", "r", "s"]);
    numToCharMap.set("8", ["t", "u", "v"]);
    numToCharMap.set("9", ["w", "x", "y", "z"]);

    let filteredWords = allWords.filter(w => w.length === keyStrokes.length);

    let inputKeyStrokes = [];
    for (let i = 0; i < keyStrokes.length; i++) {
        inputKeyStrokes.push(numToCharMap.get(keyStrokes[i]));
    }

    // Form the combinations
    for (let index1 = 0; index1 < filteredWords.length; index1++) {
        let found = true;
        for (let index2 = 0; index2 < filteredWords[index1].length; index2++) {
            if (!inputKeyStrokes[index2].includes(filteredWords[index1][index2])) {
                found = false;
                break;
            }
        }
        if (found) {
            result.push(filteredWords[index1]);
        }
    }

    result = result.sort();

    // console.log(result);
    return result;

}


function readFromFile() {
    try {
        let data = fs.readFileSync('english_words.txt', 'utf-8');
        let lines = data.split(/\r?\n/);
        return lines;
    } catch (err) {
        console.log(err);
        return -1;
    }
}


keypadToWords("23");
keypadToWords("6463");
keypadToWords("43556");
