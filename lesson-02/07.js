let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedClone = structuredClone(passportMarried);

passportMarriedClone.married = true;
console.log(passportMarried);
console.log(passportMarriedClone);