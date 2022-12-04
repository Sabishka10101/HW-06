let arrLen = prompt('Enter arr length');

myArr = new Array(arrLen);

for (i = 0; i < arrLen; i++) {
    myArr[i] = prompt('Enter elemet for index ' + i);
}

alert(myArr);

myArr.sort(function (a, b) {
    return a - b;
});

alert(myArr);

myArr.splice(2, 3);

alert(myArr);