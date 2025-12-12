class Animal {
    constructor(TipoDeAnimal,dono,Race){
        this.TipoDeAnimal = TipoDeAnimal
        this.dono = dono
        this.Race = Race
    }
    
}

class Dog extends Animal {
    constructor(dono,Race) {
        super("cachorro",dono,Race)
    }
}
class Cat extends Animal{
    constructor(dono,Race) {
        super("Cat",dono,Race)
    }
}
class Bird extends Animal {
    constructor(dono,Race) {
        super("bird",dono,Race);
    }
}

const CachorroDoPaulo = new Dog("Paulo","Pastor Alemao");
const CachorroDoJohn = new Dog("John","Labrador");
const GatoDoPaulo2 = new Cat("Paulo","Preto");
const PassaroDoJohn = new Bird("John", "papagaio")


console.log(CachorroDoPaulo);
console.log(CachorroDoJohn);
console.log(GatoDoPaulo2);
console.log(PassaroDoJohn)