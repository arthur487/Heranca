class Animal {
    constructor(TipoDeAnimal,dono,Race){
        this.TipoDeAnimal = TipoDeAnimal
        this.dono = dono
        this.Race = Race
    }
    
}

const Dog = Animal
const Gato = Animal

const CachorroDoPaulo = new Dog("Cachorro","Paulo","Pastor Alemao");
const CachorroDoJohn = new Dog("Cachorro","John","Labrador");
const GatoDoPaulo2 = new Gato("Gato","Paulo","Preto");


console.log(CachorroDoPaulo);
console.log(CachorroDoJohn);
console.log(GatoDoPaulo2);