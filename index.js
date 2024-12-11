//1-misol
//Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)

function num1(arr, index) {
  return arr.at(index);
}

let a = [1, 2, 3, 4, 5];
let index = 1;
console.log(num1(a, index));

// 2-misol
// Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.

function num2(num) {
  let sum = [];

  for (let i = 0; i < num.length; i += 2) {
    sum.push(num.at(i));
  }
  return sum;
}

console.log(num2([3, 6, 10, 12, 20]));

//3-misol
//Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating.

function num3(arr, index2) {
  arr[index2] = "salom";

  return arr;
}

let arr = [1, 2, 3, 4, 5];
let index2 = 2;

console.log(num3(arr, index2));

//4-misol
//Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.

function num4(arr, $sum4) {
  let sum4 = arr.join($sum4);
  return sum4.length;
}

let $num4 = [1, 2, 3, 4, 5, 6];
let $sum4 = "-";
console.log(num4($num4, $sum4));

//5-misol
//Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.

function num5(arr, $sum5) {
  let sum5 = arr.reverse();
  return sum5.join($sum5);
}

let newsum5 = [1, 2, 3, 4];
let sum5 = ", ";
console.log(num5(newsum5, sum5));

//6-misol
//Berilgan massivning faqat toq sonli elementlarini ajratib, ularni biriktiruvchi funksiyani yarating.

function num6(arr, newsum6) {
  let sum6 = arr % 2 !== 0;
  return sum6.join(newsum6);
}

let newnum6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newsum6 = "-";
console.log(num6(newnum6, newsum6));

//7-misol
//Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.

function num7(arr) {
  let sum7 = [];
  for (let i = 0; i < arr.length; i++) {
    let stringElement = arr[i].toString();
    sum7.push(stringElement.length);
  }
  return sum7;
}

let newsum7 = [123, 45, 678];
console.log(num7(newsum7));

//8-misol
//Massiv elementlarini string shaklida birlashtiring.

function num8(arr) {
  return arr.toString();
}

let sum8 = [1, 65, 78, 42];
console.log(num8(sum8));

//9-misol
//Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.

function num9(arr) {
  let sum9 = arr.toString();
  let newnum9 = sum9.split(",");
  newnum9.pop();
  return newnum9.join(",");
}

let newsum9 = [1, 31, 67, 8, 42];
console.log(num9(newsum9));

//10-misol
//Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.

function num10(arr1, arr2) {
  let sum10 = arr1.concat(arr2);
  sum10.pop();
  return sum10;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(num10(arr1, arr2));

//11-misol
//Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.

let sum11 = [1, 2, 3, 4];
let $sum11 = [3, 4, 5, 6];
let _sum11 = [6, 7, 8];

let res = sum11.concat($sum11, _sum11);
console.log(res);

let num11 = [];

for (let itarator of res) {
  if (!num11.includes(itarator)) {
    num11.push(itarator);
  }
}

console.log(num11);

//12-misol
//Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.

let sum12 = [1, 2, 3];
let $sum12 = [4, -5, 6];
let _sum12 = [7, 8, -9];

let ress = sum12.concat($sum12, _sum12);

console.log(ress);

let num12 = [];

for (let itarator of ress) {
  if (ress > 0) {
    num12.push(itarator);
  }
}

console.log(num12);

//13-misol
//Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.

function num13(arr) {
  let num13 = arr.length;

  arr.copyWithin(0, num13 - 3, num13);

  return arr;
}

let sum13 = [1, 2, 3, 4, 5, 6, 7];

console.log(num13(arr));

//14-misol
//Massivning bir qismini ko'chirish orqali oxirgi bo'lakni juft indekslarga qo'yuvchi funksiyani yarating.

function num14(arr) {
  newnum14 = arr.length;

  let sum14 = arr.slice(-3);

  for (let i = 0; i < sum14.newnum14; i++) {
    arr.copyWithin(i * 2, newnum14 - 3 + i, newnum14 - 3 + i + 1);
  }

  return arr;
}

let sum14 = [1, 2, 3, 4, 5, 6, 7];

console.log(num14(arr));

//15-misol
//Massivning biror qismini boshqa indeksga ko'chirgan holda yangi massiv qaytaruvchi funksiyani yarating.

//16-misol
// Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.

function num16(arr) {
  if (arr > 0) {
    return arr.flat(Infinity);
  }
}

let sum16 = [1, [2, [3, 4, [5, 6]], 7], 8, [9]];

console.log(num16(sum16));

//17-misol
//3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.

function num17(arr) {
  return arr.flat(2);
}

let sum17 = [1, [2, [3, [4, [5]]]], 6, [7, [8, [9]]]];

console.log(num17(sum17));

//18-misol
//Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.

//19-misol
// Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.

function num19(arr, startIndex) {
  let sum19 = [...arr];

  sum19.splice(startIndex, 3);

  return sum19;
}

let newnum19 = [1, 2, 3, 4, 5, 6, 7];
let startIndex = 2;

console.log(num19(newnum19, startIndex));

//20-misol
//Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.

//21-misol
//Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.

//22-misol
// Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.

function num22(arr) {
  let length = arr.length;
  let sum22 = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return arr.slice(sum22, sum22 + 1);
  }
}

console.log(num22([1, 2, 3, 4, 5]));

//23-misol
//Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.

function getLastElements(arr, length) {
  return arr.slice(-length);
}

console.log(getLastElements([1, 2, 3, 4, 5], 3));

//24-misol
//Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.

function num24(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(num24([1, 2, 3, 4, 5, 6]));

//25-misol
//Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.

function num25(arr, element) {
  let sum25 = 0;
  let newnum25 = arr.indexOf(element);

  while (newnum25 !== -1) {
    sum25 += newnum25;
    newnum25 = arr.indexOf(element, newnum25 + 1);
  }

  return sum25;
}

console.log(num25([1, 2, 3, 2, 4, 2], 2));

//26-misol
//Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.

function num26(arr) {
  let sum26 = arr.indexOf(arr[0]);
  let newnum26 = arr.lastIndexOf(arr[arr.length - 1]);

  return newnum26 - sum26;
}

console.log(num26([1, 2, 3, 4, 5]));

//27-misol
//Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.

//28-misol
//Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.

function num28(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      return false;
    }
  }
  return true;
}

console.log(num28([1, 2, 3, 4, 5]));

//29-misol
//Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.

function num29(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}

console.log(num29([1, 2, 3], 4));

//30-misol
//Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.

function num30(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(num30([1, 2, 3, 3, 5]));

//31-misol
//Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.

function num31(arr) {
  arr.sort((a, b) => b - a);

  return arr.slice(-3);
}

console.log(num31([5, 3, 8, 1, 2, 7]));

//32-misol
//Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.

function num32(arr) {
  let sum32 = arr.sort((a, b) => a - b);

  let newsum32 = arr.sort((a, b) => a - b);

  return { sum32, newsum32 };
}

console.log(num32([1, -2, 3, -4, 5, -6]));

//33-misol
//Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.

function num33(arr) {
  let sum33 = arr.slice(0, 3);

  sum33.sort((a, b) => a - b);

  return sum33;
}

console.log(num33([5, 3, 8, 1, 2, 7]));

//34-misol
//Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.

function num34(arr) {
  let sum34 = arr[arr.length - 1];

  let newsum34 = arr.slice(0, -1).reverse();

  newsum34.push(sum34);

  return newsum34;
}

console.log(num34([1, 2, 3, 4, 5]));

//35-misol
//Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.

function num35(arr) {
  let sum35 = arr.reverse();

  let newsum35 = Math.floor(sum35.length / 2);

  if (sum35.length % 2 !== 0) {
    sum35.splice(newsum35, 1);
  } else {
    sum35.splice(newsum35 - 1, 2);
  }

  return sum35;
}

console.log(num35([1, 2, 3, 4, 5]));

//36-misol
//Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.

function num36(arr) {
  const sum36 = arr.reverse();

  return sum36.reverse();
}

console.log(num36([1, 2, 3, 4, 5]));

//37-misol
//for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.

function num37(arr) {
  let sum37 = 0;
  let count = 0;

  for (let num37 of arr) {
    if (num37 % 2 === 0) {
      sum37 += num37;
      count++;
    }
  }

  if (count > 0) {
    return sum37 / count;
  } else {
    return null;
  }
}

console.log(num37([1, 2, 3, 4, 5, 6]));

//38-misol
//for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.

function num38(arr, element) {
  let newnum38 = [];

  for (let num of arr) {
    newnum38.push(num + element);
  }

  return newnum38;
}

console.log(num38([1, 2, 3, 4], 5));

//39-misol
//for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.

function num39(array) {
  let sum39 = [];

  for (let newnum39 of array) {
    if (newnum39 < 0) {
      sum39.push(newnum39);
    }
  }

  return sum39;
}

console.log(num39([1, -2, 3, -4, 5, -6]));

//40-misol
// for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.

function num40(arr) {
  let sum40 = 0;

  for (let index in arr) {
    sum40 += index;
  }

  return sum40;
}

let newnum40 = [10, 20, 30, 40, 50];
console.log(num40(newnum40));

//41-misol
//for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.

function num41(arr) {
  for (let index in arr) {
    arr[index] = arr[index] * 2;
  }
  return arr;
}

let sum41 = [1, 2, 3, 4, 5];
console.log(num41(sum41));

//42-misol
//for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.

function num42(arr) {
  let sum42 = [];

  for (let index in arr) {
    if (arr[index] > 0) {
      sum42.push(index);
    }
  }

  return sum42;
}

let newnum42 = [10, -5, 7, 0, 3, -2, 4];
console.log(num42(newnum42));
