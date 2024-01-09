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
    passportWithAddressClone[key] = passportWithAddress[key]
}

passportWithAddressClone.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportWithAddressClone.address.city);