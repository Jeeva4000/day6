//3. Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Jeeva", "Veerasamy",23, "BE", "vjeeva@gmail.com", 9524532154, "pollachi");
let person2 = new Person("Preethi","ESWARI", 19, "former", "jk123@gmail.com", 9597561571, "madathukulam");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());