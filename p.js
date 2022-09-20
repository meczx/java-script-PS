var arr = [
    {
        name: "bharathi",
        age: 20,
        weight: 45

    },
    {
        name: "admin",
        age: 29,
        weight: 450

    }

];
const grpby = p => {
    var check = {};
    p.forEach(element => {
        if (!check[element.age]) {
            check[element.age] = element;
        }
        else {
            check[element.age].push(element);
        }
        
    });
    return check;
}
console.log(grpby(arr));