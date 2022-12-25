const user = {
    firstName: "Wilhams",
    lastName: "Gomes",
    age: 23,
    instagram: "wilham__s",
    skills: ["Back-end", "Front-End", "Mobile", "UI/UX"],
    active: false,
};

// const testVue = {...user, ...{
//     teste:"Feito com sucesso"
// }}
// console.log({testVue})

// Spread (espalhar) operator
const updatedUser = {
    ...user,
    skills: [...user.skills, "Marketing"],
    active: true,
}

//console.log({user})
console.log({updatedUser})