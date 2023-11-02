// filter is A higher order function that takes a function as parameter.

const myArrayOfAnimals = ["Cat", "Dog", "Dolphin"];

const dolphine = myArrayOfAnimals.filter((animal) => {
    if(animal === "Dolphin") {
        return animal;
    }

    return;
});

console.log(dolphine[0]);