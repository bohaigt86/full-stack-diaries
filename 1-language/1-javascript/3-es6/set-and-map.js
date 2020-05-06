const map = new Object(null);
const key1 = {},
  key2 = {};
// as keys of map will be converted to string
// key1 and key 2 are turned into "[object Object]"
map[key1] = 'foo';
console.log(map[key2]); // "foo"
console.log(map); // { '[object Object]': 'foo' }

const set = new Set();
const key3 = {},
  key4 = {};
set.add(key3);
set.add(key4);
console.log(set.size); // 2
set.add(5);
set.add('5');
set.add(5);
console.log(set.size); // 4
console.log(set.delete('5')); // true
console.log(set.delete('5')); // false
console.log(set.has(5)); // true
console.log(set.size); // 3
set.clear();
console.log(set.size); // 0

// therefore set can be use to remove duplicated values
const arr = [1, 2, 1, 2];
// you can pass any iterable object as param to set constructor
const s = new Set(arr);
console.log(s.size); // 2
