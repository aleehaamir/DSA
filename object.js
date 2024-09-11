let person = {
    name: "Aleeha",
    age: 20,
};

// Accessing property
console.log(person.name);  
console.log(person['age']); 

// Adding a new property
person.country = "Pakistan";
console.log(person.country);  

//iterating over objects
let student = {
    name: "Rayyan",
    grade: "A",
    major: "Graphic Design"
};


for (let key in student) //using for in loop to iterate overr student properties
    {
    console.log(`${key}: ${student[key]}`);
}

