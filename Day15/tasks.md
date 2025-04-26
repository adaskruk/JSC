# Tasks

- [x]  **T-001**: Create an array of 5 elements using the Array Constructor.
    
    ```jsx
    let arr = new Array(1,2,3,4,5);
    ```
    
- [x]  **T-002**: Create an array of 3 empty slots.
    
    ```jsx
    let arr = new Array(3);
    ```
    
- [x]  **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
    
    ```jsx
    let arr = [1.2.3.4.5.6];
    console.log(arr[arr.lenght - 3]);
    ```
    
- [x]  **T-004**: Use the `for` loop on the above array to print elements in the odd index.
    
    ```jsx
    let arr1 = ["a", "b", "c", "d", "e", "f"];
    p(arr1);
    
    for (let i = 0; i < arr1.length; i++) {
      if (i % 2 === 1) continue;
      console.log(arr1[i]);
    }
    ```
    
- [x]  **T-005**: Add one element at the front and the end of an array.
    
    ```jsx
    let arr = [2, 3, 4];
    
    arr.unshift(1);
    arr.push(5);
    ```
    
- [x]  **T-006**: Remove an element from the front and the end of an array.
    
    ```jsx
    let arr = [1, 2, 3, 4, 5];
    
    arr.shift();
    arr.pop();
    ```
    
- [x]  **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
    
    ```jsx
    let arr = [
      "apple",
      "banana",
      "biscuits",
      "waffle",
      "ice cream",
      "strawberries",
      "pineapple",
      "steak",
      "pierogi",
      "pancakes",
    ];
    
    let [, , , , , myFavFood] = arr;
    ```
    
- [x]  **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
    
    ```jsx
    let arr = [
      "apple",
      "banana",
      "biscuits",
      "waffle",
      "ice cream",
      "strawberries",
      "pineapple",
      "steak",
      "pierogi",
      "pancakes",
    ];
    
    let [, , ...restFood] = arr;
    ```
    
- [x]  **T-009**: Clone an Array(Shallow cloning)
    
    ```jsx
    const arr = [1,2,3];
    const newArr = arr.slice();
    const newArr1 = [...arr];
    ```
    
- [x]  **T-010**: Empty an array using its length property
    
    ```jsx
    let arr = [1,2,3];
    arr.length = 0;
    ```
    
- [x]  **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
    
    ```jsx
    const arr = Array.from({ length: 10 }, (_, i) => i + 1);
    let searchedValue = 6;
    
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] === searchedValue) {
        arr.length = i + 1;
      }
    }
    ```
    
- [x]  **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
    
    ```jsx
    const arr = Array.from({ length: 10 }, (_, i) => i + 1);
    arr.splice(0, arr.length);
    ```
    
- [x]  **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?
    
    ```
    I think the most efficient is using lenght property, because no computations are done
    over the elements. I guess the most inefficient is shift(), because it has to 
    reorder every element in every shift action, which can be resource heavy if the array is big.
    I'd order them like this:
    length > pop() > splice() > shift()
    I'm not sure about setting the array with []. It creates a new item in the heap and assigns it to the original variable (if it was declared with let or var, error if const).
    This is probably also quite efficient, but has to take actions in heap and garbage collection. Also if the original array object was assigned to any other variable, it'd stay in the memory, so actually it wouldn't be emptied...
    ```
    
- [x]  **T-014**: What happens when you concatenate two empty arrays?
    
    ```
    It returns an empty array.
    ```
    
- [x]  **T-015**: How can you check if a value is partially matching with any of the elements of an Array?
    
    ```jsx
    arr.findIndex((i) => i.includes("oro"));
    arr.some((i) => i.includes("oro"));
    ```
    
- [x]  **T-016**: What is the difference between the slice() and splice() methods?
    - slice
        - immutable
        - extracts values fr om an array
        - start and end accept negative value
    - splice
        - mutates original array
        - start accepts negative value
        - deletes elementss
        - allows adding new elements
        - deleted items are returned as an array
- [x]  **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
    
    ```jsx
    // sort MUTATES, so toSorted
    const srcArr = ["bob", "koko", null, "4ann", 14, "yolo"];
    const newAsc = srcArr
    .map((i) => String(i))
    .sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
    const newDesc = srcArr
    .map((i) => String(i))
    .sort((a, b) => (a === b ? 0 : a > b ? -1 : 1));
    ```
    
- [x]  **T-018**: Can you give examples of sparse and dense arrays?
    
    ```jsx
    // Sparse arrays have missing or uninitialised values, empty slots.
    const denseArr = [1,2,3,4,5];
    const sparseArr = Array(5);
    ```
    
- [x]  **T-019**: Give a practical usages of the .fill() method
    
    ```
    Map method doesn't work on empty elements, so after creating  new array with lenght, it can be populated with some values with fill, for further mapping...
    const arr = new Array(5).fill("A");
    ```
    
- [x]  **T-020**: How to convert an array to a string?
    
    ```jsx
    const srcArr = ["bob", "koko", null, "4ann", 14, "yolo"];
    let newArr = srcArr.join();
    let anottherArr= srcArr.map(i => String(i));
    ```
    

> Consider these input arrays for question T-21 to T-48
> 
- `employees array`: An array of emplyees working in a department.
    
    ```jsx
    const employees = [
      { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
      { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
      { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
      { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
      { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
      { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
      { id: 7, name: "George", departmentId: 3, salary: 5200 },
      { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
      { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
      { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
    ];
    
    ```
    
- `departments array`: An array of departments where emplyees work.
    
    ```jsx
    const departments = [
      { id: 1, name: "HR" },
      { id: 2, name: "Engineering" },
      { id: 3, name: "Marketing" },
      { id: 4, name: "Sales" },
    ];
    
    ```
    
- [x]  **T-021**: Can you filter employees who work in the "Engineering" department?
    
    ```jsx
    function getEmployeesByDep(depName) {
      return employees.filter((emp) => emp.departmentId == departments.find((dep) => dep.name == depName).id);
    }
    
    const engineeringEmployees = getEmployeesByDep("Engineering");
    ```
    
- [x]  **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
    
    ```jsx
    const employeesDepList = employees.map(
      (emp) =>
        `${emp.name} (${departments.find((dep) => dep.id == emp.departmentId).name})`
    );
    ```
    
- [x]  **T-023**: Find the highest salary among employees.
    
    ```jsx
    let topEarningEmployee = employees.toSorted((a, b) => b.salary - a.salary)[0]; //inefficient
    // Sorting is not particulaely efficient (time complexity of O(nlogn)), so...
    // better to use reduce...
    topEarningEmployee = employees.reduce((max, emp) =>
      emp.salary > max.salary ? emp : max
    );
    ```
    
- [x]  **T-024**: Check if there is at least one employee in the "Sales" department.
    
    ```jsx
    employees.some(emp=> emp.departmentId == 4)
    ```
    
- [x]  **T-025**: Write a function to filter employees earning more than 6000.
    
    ```jsx
    const emplyeesAbove6000 = employees.filter((emp) => emp.salary > 6000);
    ```
    
- [x]  **T-026**: Create an array of employee names only.
    
    ```jsx
    let empNames = employees.map((emp) => emp.name);
    ```
    
- [x]  **T-027**: Calculate the total salary of all employees using reduce.
    
    ```jsx
    let totalSal = employees.reduce((sum, emp) => (sum + emp.salary), 0);
    ```
    
- [x]  **T-028**: Is there any employee earning less than 5000?
    
    ```jsx
    employees.some(emp=> emp.salary < 5000)
    ```
    
- [x]  **T-029**: Find the first employee who earns exactly 5100.
    
    ```jsx
    print(employees.find(emp=>emp.salary == 5100));
    ```
    
- [x]  **T-030**: Find the last employee in the "HR" department.
    
    ```jsx
    print(employees.findLast(emp=>emp.departmentId == 1));
    ```
    
- [x]  **T-031**: Find the first employee in the "Marketing" department.
    
    ```jsx
    print(employees.find(emp=>emp.departmentId == 3));
    ```
    
- [x]  **T-032**: Check if all employees earn more than 4000.
    
    ```jsx
    print(employees.every(emp=>emp.salary > 4000));
    ```
    
- [x]  **T-033**: Find the first employee in the "Sales" and "HR" department.
    
    ```jsx
    print(employees.find((emp) => emp.departmentId == 1 || emp.departmentId == 4));
    ```
    
- [x]  **T-034**: Verify if all employees belong to a department listed in the departments array.
    
    ```jsx
    console.log(employees.every((emp) =>
        departments.map((dep) => dep.id).includes(emp.departmentId)
      )
    );
    ```
    
- [x]  **T-035**: Log each employee's name and department name to the console.
    
    ```jsx
    employees.forEach(
      (emp) => console.log(
        `${emp.name} (${departments.find((dep) => dep.id == emp.departmentId).name})`)
    );
    ```
    
- [x]  **T-036**: Extract all employee names into a single array.
    
    ```jsx
    // The same as T-026
    let empNames = employees.map((emp) => emp.name);
    ```
    
- [x]  **T-037**: Increment each employee's salary by 10%
    
    ```jsx
    employees.forEach((emp) => emp.salary *= 1.1);
    ```
    
- [x]  **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
    
    ```jsx
    const users = [
      {
        name: "Anna",
        skills: [
          ["piano", "sight reading", "conducting"],
          ["Excel", "Word", "Outlook"],
        ],
      },
      {
        name: "Bob",
        skills: [
          ["cooking", "small talk"],
          ["reading", "writing"],
        ],
      },
      {
        name: "Chris",
        skills: [
          ["driving", "parking", "drifting"],
          ["singing", "telling stories"],
        ],
      },
    ];
    
    // Non-destructive
    const flattened = users.map((u) => {
      u.skills = u.skills.flat();
      return u;
    });
    // Destructive
    users.forEach((u) => (u.skills = u.skills.flat()));
    ```
    
- [x]  **T-039**: Find the total salary of all employees working in the "Engineering" department.
    
    ```jsx
    let totalSalaryOfEngineering = employees.reduce(
      (sum, emp) => (emp.departmentId === 2 ? sum + emp.salary : sum),
      0
    );
    ```
    
- [x]  **T-040**: Check if there is any department where all employees earn more than 5000.
    
    ```jsx
    print(
      departments.some(dep => employees
        .filter((emp) => emp.departmentId == dep.id)
        .every((emp) => emp.salary > 5000)
    ));
    ```
    
- [x]  **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
Find the total number of unique projects being handled across all employees.
    
    ```jsx
    // let uniqueProjects = employees.reduce((projs, emp) => {
    //   emp.projects.forEach((proj) => {
    //     if (!projs.includes(proj)) projs.push(proj);
    //   });
    //   return projs;
    // }, []);
    // BUT using a Set() is more efficient (learnt about it form javascript.info):
    
    let uniqueProjects = new Set();
    employees.forEach((emp) =>
      emp.projects.forEach((proj) => uniqueProjects.add(proj))
    );
    ```
    
- [x]  **T-042**: For each employee, find their department name and return an array of employee names with their department names.
    
    ```jsx
    // Repetition of T-022
    const employeesDepList = employees.map(
      (emp) =>
        `${emp.name} (${departments.find((dep) => dep.id == emp.departmentId).name})`
    );
    ```
    
- [x]  **T-043**: Get a list of names of employees earning more than 6000.
    
    ```jsx
    print(employees.filter((emp) => emp.salary > 6000));
    ```
    
- [x]  **T-044**: Write a for-of loop to print the names of all employees from the employees array.
    
    ```jsx
    for (let emp of employees) {
      print(emp.name);
    }
    ```
    
- [x]  **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
    
    ```jsx
    for (let emp of employees) {
      if (emp.salary > 5000) print(emp.name);
    }
    ```
    
- [x]  **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
    
    ```jsx
    for (let { name, salary } of employees) {
      print(name, salary);
    }
    ```
    
- [x]  **T-047**: Write a for-of loop to match employees with their departments and print the results.
    
    ```jsx
    for (let { name, departmentId } of employees) {
      print(name, departments.find((dep) => dep.id == departmentId).name);
    }
    ```
    
- [x]  **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
    
    ```jsx
    for (let [i, {name}] of employees.entries()) {
      print(i, name);
    }
    ```
    
- [x]  **T-049**: Given the array-like object below, access the second element and log it:
    
    ```jsx
    const arrayLike = { 0: "First", 1: "Second", length: 2 };
    console.log(arrayLike[1])
    ```
    
- [x]  **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
    
    ```jsx
    function test (...args){
      return Array.from(args)
    }
    ```
    
- [x]  **T-051**: Write a snippet to select all div elements on a web page (using document.querySelectorAll) and convert the resulting NodeList into an array.
    
    ```jsx
    const divElements = Array.from(document.querrySelectorAll("div"));
    ```
    
- [x]  **T-052**: Merge these two arrays into a single array:
    
    ```jsx
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const merged = arr1.concat(arr2);
    ```
    
- [x]  **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
    
    ```jsx
    function genArray(num, val) {
      return Array.from(Array(num).fill(val))
    }
    
    const aA = genArray(5, "A")
    ```
    
- [x]  **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
    
    ```jsx
    let str = Array.from("Hello");
    ```
    
- [x]  **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using groupBy().
    
    ```jsx
    let arr = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
    let groupedByFirstLetter = Object.groupBy(arr, item => item[0]);
    ```
    
- [x]  **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
    
    ```jsx
    let arr = [3, 7, 3, 2, 3, 8, 7, 7];
    let grouped = Object.groupBy(arr, (n) => n);
    let mostRepeated = Object.entries(grouped)
      .map((e) => [e[0], e[1].length])
      .reduce((max, num) => (num[1] > max[1] ? num : max))[0];
    ```
    
    ```jsx
    const arr = [3, 7, 3, 2, 3, 8, 7, 7];
    
    const freq = arr.reduce((acc, n) => {
      acc[n] = (acc[n] || 0) + 1;
      return acc;
    }, {});
    
    const mostRepeated = Object.entries(freq)
      .reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];
    
    console.log(mostRepeated); // "3" or "7"
    // frequency map using reduce
    ```
    
- [x]  **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].
    
    ```jsx
    const arr = [5, 2, 9, 1, 3, 6, 8];
    
    function median(arr) {
      let s = arr.sort(),
        m;
      if (s.length % 2 === 0) {
        m = (s[s.length / 2] + s[(s.length / 2)-1]) / 2;
      } else {
        m = s[(s.length - 1) / 2];
      }
      return m;
    }
    console.log(median(arr));
    ```
    
- [x]  **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
    
    ```jsx
    // Simpliest, which I already know:
    Object.fromEntries(arr)
    
    // Now the task
    let objArr = arr.map((i) => ({ **[i[0]]**: i[1] }));
    let finalObj = objArr.reduce((acc, el) => {
      let key = Object.keys(el)[0];
      acc[key] = el[key];
      return acc;
    }, {});
    ```
    
- [x]  **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
    
    ```jsx
    const arr = [
      ["a", "b"],
      ["c", "d"],
    ];
    
    log(arr.flatMap((e) => e.map((e) => e.toUpperCase())));
    ```
    
- [x]  **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
    
    ```jsx
    const arr = ["apple", "banana", "apple", "mango", "banana", "banana"];
    
    const countWords = arr.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    
    console.log(countWords);
    ```
    
- [x]  **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
    
    ```jsx
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const extractedFromArr = arr.slice(1,4);
    ```
    
- [x]  **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
    
    ```jsx
    const arr= [1,2,3,4,5];
    const sorted = arr.toReversed();
    ```
    
- [x]  **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
    
    ```jsx
    // reverse() mutates original array, toReversed() returns a new array
    const arr= [1,2,3,4,5];
    const sorted = arr.toReversed();
    log(sorted, arr)
    ```
    
- [x]  **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):
    
    ```jsx
    const users = [
      { name: 'Alice', age: 55 },
      { name: 'Bob', age: 3 },
      { name: 'Charlie', age: 25 },
    ];
    const groupedByAge = Object.groupBy(users, i => i.age>= 18 ? "Adult" : "Minor")
    console.log(groupedByAge)
    ```
    
- [x]  **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
    
    ```jsx
    const str = "40 Days of JavaScript by tapaScript is a powerful initiative";
    let words = str.split(" ").map((i) => [i, i.length]);
    let longest = words.reduce((acc, cur) => (cur[1] > acc[1] ? cur : acc))[0];
    ```
    
- [x]  **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
    
    ```jsx
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    
    const common = arr1.filter((i => arr2.includes(i)));
    ```