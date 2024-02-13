let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let objSandwich = JSON.parse(sandwiches);
let objFries = JSON.parse(fries);
// console.log(`My favourite sandwich is ${objSandwich.sandwich} which has ${objSandwich.calories} kcal,
//  along with it I enjoy eating ${objFries.fries_size} which have about ${objFries.calories} kcal`)


let employees = `[
    {
      "ID": 1,
      "FirstName": "John",
      "LastName": "Doe",
      "EmailAddress": "john.doe@example.com",
      "JobTitle": "Software Engineer",
      "Salary": 80000
    },
    {
      "ID": 2,
      "FirstName": "Jane",
      "LastName": "Smith",
      "EmailAddress": "jane.smith@example.com",
      "JobTitle": "Marketing Specialist",
      "Salary": 65000
    },
    {
      "ID": 3,
      "FirstName": "Mike",
      "LastName": "Johnson",
      "EmailAddress": "mike.johnson@example.com",
      "JobTitle": "Financial Analyst",
      "Salary": 75000
    },
    {
      "ID": 4,
      "FirstName": "Emily",
      "LastName": "Clark",
      "EmailAddress": "emily.clark@example.com",
      "JobTitle": "Graphic Designer",
      "Salary": 60000
    },
    {
      "ID": 5,
      "FirstName": "David",
      "LastName": "Taylor",
      "EmailAddress": "david.taylor@example.com",
      "JobTitle": "Human Resources Manager",
      "Salary": 90000
    },
    {
      "ID": 6,
      "FirstName": "Sophie",
      "LastName": "Brown",
      "EmailAddress": "sophie.brown@example.com",
      "JobTitle": "Sales Representative",
      "Salary": 70000
    },
    {
      "ID": 7,
      "FirstName": "Daniel",
      "LastName": "Anderson",
      "EmailAddress": "daniel.anderson@example.com",
      "JobTitle": "Product Manager",
      "Salary": 95000
    },
    {
      "ID": 8,
      "FirstName": "Olivia",
      "LastName": "Martin",
      "EmailAddress": "olivia.martin@example.com",
      "JobTitle": "Customer Support Specialist",
      "Salary": 55000
    },
    {
      "ID": 9,
      "FirstName": "Alex",
      "LastName": "Hill",
      "EmailAddress": "alex.hill@example.com",
      "JobTitle": "Operations Coordinator",
      "Salary": 72000
    },
    {
      "ID": 10,
      "FirstName": "Ryan",
      "LastName": "Miller",
      "EmailAddress": "ryan.miller@example.com",
      "JobTitle": "IT Manager",
      "Salary": 85000
    }
  ]`;


let employeeArray = JSON.parse(employees);
console.log(employeeArray)

let tableData = document.getElementById("table-data");

employeeArray.forEach((element) => {
    tableData.innerHTML += `
            <tr>
                <th scope="row"> ${element.ID} </th>
                <td>${element.FirstName}</td>
                <td>${element.LastName}</td>
                <td>${element.EmailAddress}</td>
                <td>${element.JobTitle}</td>
                <td>€${element.Salary}</td>
            </tr>
`
});