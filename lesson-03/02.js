const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange(array) {
    let tryToFind = array.indexOf("апельсин", 0);
    if (tryToFind >= 0) {
        console.log("Ура! нашел");
    } else {
        console.log("Придется поискать в другом магазине…");
    }
}

findOrange(words)