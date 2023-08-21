class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    ageComparison(person) {
        if (this.age > person.age){
            console.log(person.name + " is younger than me.")
        }
        else if (this.age < person.age){
            console.log(person.name + " is older than me.")
        }
        else{
            console.log(person.name + " is the same age as me.")
        }
    }

}

//quick test

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

p1.ageComparison(p2);
p2.ageComparison(p1);
p1.ageComparison(p3);


// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."