/* calss is a javascript es6 feature and its 
 decleared with the keyword of class

a class is always decleared with the firstletter as capital.

A class is the bule print of creating of a object with predefined properties */

// we can create a object from a class using the new keyword with the class name

// we can create the instane of the class using the new keyword followed by the classname

// examnple

class Students{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
}

let student1 = new Students("Bhakta", "Dash")
console.log(student1)

// output: Students {firstName: 'Bhakta', lastName: 'Dash'}

/* instance methods

inside a class if we are defining some function is known as a methos.

we can say Array.push() here push is an method of the Array. 
We can access the method with the instance of the class with dot method name
*/

class Student{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    fullName(){
       return `full name of the student is ${this.firstName} ${this.lastName}`
    }
}

let student2 = new Student("Bhakta", "Dash")

console.log(student2.fullName()) 

// output: full name of the student is Bhakta Dash

/* Static keyword defines a static method of a class. static methods are called without 
instantiating their and cannot  be called through a call instance.
Static methods are used to create the utility functions of an application 
i.e. I can able to call the static method only using the classname with the static method name.
Student.fullname() if full is defined with the static keyword only
*/