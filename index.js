


const dog1 = {
    race: "dog",
    height: 2,
    Speed: 45,
    Weight: 60
}

const Cat2 = {
    race: "cat",
    height: 1,
    Speed:30,
    Weight:20
}

const bird3 = {
    race: "bird",
    height: .5,
    Speed: 70,
    Weight: 10
}

function Animal(Race,Height, speed, weight){
    this.race = Race
    this.height = Height 
    this.Speed = speed 
    this.Weight = weight
}

const DogA = new Animal("dog",2,45,60);
const catA = new Animal("cat",1,30,20);
const BirdA = new Animal("bird",.5,70,10);

console.log(DogA);
console.log(catA);
console.log(BirdA);
