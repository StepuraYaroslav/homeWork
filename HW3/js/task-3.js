const findBestEmployee = function(employees) {
    const arrEmployees = Object.keys(employees);
    console.log(arrEmployees);

    let theBestEmployee = arrEmployees[0];

    for (let i = 1; i < arrEmployees.length; i += 1) {
        if (employees[theBestEmployee] < employees[arrEmployees[i]]) {
            theBestEmployee = arrEmployees[i];
        }
    }

    return theBestEmployee;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence
  
console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
