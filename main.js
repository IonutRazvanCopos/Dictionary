let words = new Set();

function addWord() {
    const input = document.getElementById("searchInput");
    const word = input.value.trim();
    const errorElement = document.getElementById("error");

    if (word === "") {
        errorElement.textContent = "You should add a word in dictionary.";
        return;
    }

    if (words.has(word)) {
        errorElement.textContent = "This word already exists in dictionary.";
        return;
    }

    words.add(word);
    updateWordList();
    input.value = "";
    errorElement.textContent = "You have successfully added a new word.";
}

function updateWordList() {
    const wordList = document.getElementById("wordList");

    words.forEach(word => {
        if (!wordList.contains(document.getElementById(`word-${word}`))) {
            const li = document.createElement("li");
            li.id = `word-${word}`;
            li.textContent = word;
            wordList.appendChild(li);
        }
    });
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        addWord();
    }
});
