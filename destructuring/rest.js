const user = {
    firstName: "Wilhams",
    lastName: "Gomes",
    full_name: "Nome completo",
    age: 23,
    instagram: "wilham__s",
    skills: ["Back-end", "Front-End", "Mobile", "UI/UX"],
};

// Rest operator (Resto do objeto) - Sempre precisa ser a última váriavel
const { firstName, skills, ...restoUser } = user;
const [primary, ...restoSkills] = skills;

console.log(restoSkills)