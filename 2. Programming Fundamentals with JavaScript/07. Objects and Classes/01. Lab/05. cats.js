function cats(input){

    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        let currentSplit = current.split(' ');
        let name = currentSplit[0];
        let age = currentSplit[1];

        let cat = new Cat(name, age);
        cat.meow();
    }

}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])