let arr = ['apple', 'teapot', 'lizard', 'paperclip', 'tupperware'];
console.log(arr);

arr.push('appendix');
console.log(arr);

arr.splice(2, 1);
console.log(arr);

let x = arr.join(', ');
console.log(x);