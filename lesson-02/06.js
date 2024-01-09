let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressClone = {};

for (let key in passportWithAddress) {
    passportWithAddress[key] = passportWithAddressClone[key]
}

passportWithAddressClone.city = "Bobryisk";

console.log(passportWithAddress.city);
console.log(passportWithAddressClone.city);