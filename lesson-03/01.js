const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];


function createColorString() {
    let trueColors = colors.filter((color) => color === "черный" || color === "красный" ||color === "желтый");
    return trueColors.join("-");

}

console.log(createColorString());
