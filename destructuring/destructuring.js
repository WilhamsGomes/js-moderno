const user = {
    firstName: "Wilhams",
    lastName: "Gomes",
    full_name: "Nome completo",
    age: 23,
    instagram: "wilham__s",
    skills: ["Back-end", "Front-End", "Mobile", "UI/UX"],
};

//Destructuring
const { firstName, age, skills, full_name: fullName } = user;
const [primary, secondary, tertiary, quarternay] = skills;

console.log(fullName)