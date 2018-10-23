var addon = require('bindings')('hello');

console.log(addon.add(0.1, 0.2));
console.log(addon.runCallback(function() {
  console.log('cool');
}));