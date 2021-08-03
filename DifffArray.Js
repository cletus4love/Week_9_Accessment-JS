function diffArray(arr1, arr2) {
    return [
        ...arr1.filter(elem1 => arr2.every(elem2 => elem2 != elem1)),
        ...arr2.filter(elem1 => arr1.every(elem2 => elem2 != elem1))
    ];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
