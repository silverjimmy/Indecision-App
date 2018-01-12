

class Person {
    constructor(name = 'Anon', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi. I am '+ this.name.split(' ')[0] + '!';
        return `Hi. I am test! ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age}.`;
    }

}

class Student extends Person {
    constructor(name, age, major){
         super(name, age);
         this.major =major;

    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor (name, age, home){
        super(name,age);
        this.home = home;
    }
    hasHome(){
        return !! this.home;
    }
    getGreeting(){
        let hommy = super.getGreeting();

        if (this.hasHome()){
            hommy += ` I'm visiting from ${this.home}.`;
        }
        return hommy;
    }
}


const me = new Traveler('Herbert Bruno', 23, 'Kenya');
console.log(me.getGreeting());

const other =new Traveler();
console.log(other.getGreeting());
