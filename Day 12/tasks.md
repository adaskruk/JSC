# Tasks

## 1. What will be the output and why?

```jsx
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
// "Not provided", because nullish coalescent operator checks if a value is null or undefined.
```

## 2. What will happen if we try to modify a frozen object?

```jsx
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
// There's an error, runtime interrupted. console.log not executed.
```

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```jsx
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

let {
  name,
  company: {
    name: company,
    location: { city },
  },
} = person;
console.log(name, company, city);
```

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

```jsx
function Student(name, age, grades) {
  this.name = name;
  this.age = age;
  this.grades = grades;
  this.gradesAvg = function () {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  };
}

let student = new Student("Pete", 20, [1, 2, 1, 1]);
console.log(student.gradesAvg());
```

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

```jsx

```

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

```
Object.keys() returns an array consisting of keys of an object.
Object.entries() returns an array of key value pairs (arrays).
```
## 7. How do you check if an object has a certain property?

```jsx
Object.hasOwn(obj, prop) // checks if an object, has a property.
```

## 8. What will be the output and why?

```jsx
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
// Doe, because the reference to the object was copied, and both refere to the same object.
```

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

```jsx
Object.assign(obj) // makes shallow copy, nested objects are copied as references

structuredClone(obj) // makes a deep copy together with nested objects
```

## 10. Loop and print values using Object destructuiring

```jsx
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for (let { name, address, age } of users) {
  console.log(name, address, age);
}
```