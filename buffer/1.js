// https://www.cnblogs.com/chyingp/p/nodejs-learning-buffer.html


// const buf = Buffer.from('11', 'utf8'); //<Buffer 31 31>中的31是十六进制，任何8位二进制数都可以用2位十六进制数表示
// console.log(buf);
// console.log(buf.toString('hex'));
// console.log(buf.toString('utf8'));
// console.log('1'.charCodeAt(0));


// const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64]);
// console.log(buf);
// outputs <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// console.log(buf.toString('utf16le'));
// outputs '敨汬⁯潷汲'

// console.log(buf.toString('utf8'));
// const buf1 = Buffer.from([0x68, 0x65, 0x6c]);
// console.log(buf1);
// console.log(buf1.toString('utf16le'));
// console.log(buf1.toString('utf8'));
// console.log('h'.charCodeAt(0)); // 104
// console.log(parseInt('0x68', 16)); // 104



// var buf6 = Buffer.from('414243', 'hex');
// console.log(buf6);

// const buf1 = Buffer.allocUnsafe(26);
// const buf2 = Buffer.allocUnsafe(26).fill('!');
// for (let i = 0 ; i < 26 ; i++) {
//   // 97 is the decimal ASCII value for 'a'
//   buf1[i] = i + 97;
// }
// buf1.copy(buf2, 8, 16, 20);
// // Prints: !!!!!!!!qrst!!!!!!!!!!!!!
// console.log(buf2.toString('ascii', 0, 25));




var buff1 = Buffer.from('abcde');
console.log(buff1);  // <Buffer 61 62 63 64 65>

var buff2 = buff1.slice();
console.log(buff2);  // <Buffer 61 62 63 64 65>

var buff3 = buff1.slice(1, 3);
console.log(buff3);  // <Buffer 62 63>

buff3[0] = 97;  // parseInt(61, 16) ==> 97
console.log(buff1);  // <Buffer 62 63>