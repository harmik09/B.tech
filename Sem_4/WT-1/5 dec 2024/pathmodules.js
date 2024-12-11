const path=require('path');

console.log(path.basename('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'));

console.log(path.extname('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'))

console.log(path.dirname('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'));

console.log(path.isAbsolute('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'));

console.log(path.resolve('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt','student'));

console.log('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'.split(path.sep));

console.log(path.toNamespacedPath('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'));

console.log(path.relative('C:\\Users\\student\\Desktop\\wt-2\\5_dec\\demo.txt'));

