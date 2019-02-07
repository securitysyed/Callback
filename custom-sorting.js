var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 45 },
  { id: 4, name: "alex",     age: 35}
];

students.sort(function(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  if (a.name === a.name) {
    return a.age - b.age;
  }
  return 0;
});

console.log(students);