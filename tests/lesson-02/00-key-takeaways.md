# Javascript  
1. **Biến**  
- var
    - Cho phép khai báo lại
- let
    - Không cho phép khai báo lại  
---

2. **Hằng**
- const: Hằng số, không thể thay đổi sau khi đã khai báo
---

3. **"Hello, World"**
- Có thẻ dùng 3 kiểu nháy  
console.log("Hello, World")  
console.log('Hello, World')  
console.log(`Hello, World`) 

 // Dùng để comment 1 dòng code  
Phím tắt: Ctrl/Cmd + / để comment hoặc uncomment 1 dòng code  
Cặp /* và */ dùng để comment 1 đoạn code

---

4. **Variable**
```
var centerName = "hoctest";
let isLovePlaywright = true; // false
console.log(centerName);
console.log(isLovePlaywright);
```
```
userName = 'Hien Thanh';
isLovePlaywright = false;
console.log(userName);
console.log(isLovePlaywright);
```
- Khai bao biến
- Đoạn code thứ 2 dùng để ghi đè lên biến đã khai báo trước đó nên vẫn pass

---
5. **Const**
```
const slogan = "Học kỹ - Hiểu bản chất - Mentor tận tình";
console.log(slogan);
```
```
slogan = "tesst"; 
console.log(slogan);
```
- Khai báo hằng số
- Đoạn code thứ 2 sẽ false do slogan đã được khai báo ở đoạn code trước đó rồi
---

6. **Datatype**
```
const age = 18;
console.log(age);

const myTemplate = `My age is: ${age}`;
console.log(myTemplate);

const isActive = true; // false;
console.log(isActive);

console.log(typeof age); // number
console.log(typeof myTemplate); // string
console.log(typeof isActive); // boolean
```
---

7. **Toán tử so sánh**
```
const a=5;
const b=10;
console.log(a<b);
console.log(a===b);
console.log(a!==b);
```
`&&` = AND => Neu ca 2 dung thi dung   

`||` = OR => Neu 1 trong 2 dung thi dung  

`==` So sánh dữ liệu, 1 bên sẽ tự động convert về kiểu dữ liệ giống với bên kia  
*Ví dụ*  `5 = "5" => true`  `5 = "6" => False do 5 != 6`  

`===` So sánh kiểu dữ liệu, 2 bên đều phải chung 1 kiểu dữ liệu sau đó mới tiến hành so sánh  
*Ví dụ* `5 = "5" => false do khác kiểu dữ liệu`

---

8. **Toán tử 1 ngôi**
```
let a = 10;
b = ++a; // Lấy a + 1 để ra được a1, sau đó trả ra a = a1, b = a1

let c = 10
d = c++; // Lấy d = c, sau đó c + 1 để ra c1 => trả ra d = c, c = c1

console.log("===== a = ", a)
console.log("===== b = ", b)
console.log("===== c = ", c)
console.log("===== d = ", d)
```
++a là lấy a+1 trước, sau đó mới dùng a+1
a++ là dùng a trước, sau đó lấy a+1

---

9. **Toán tử toán học**  
Sử dụng + - * /
```
const a = 5;
const b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
```
---

10. **Câu điều kiện**  
Cấu trúc:
```
if (<Dieu kien>) {
    code
};
```
Ví dụ  
```
let hour = 21
if (hour <= 11 && hour >= 6) {
    console.log("Good morning");
}

if (hour > 11 && hour < 18) {
    console.log("Good day");
}
```
Điều kiện trong điều kiện (If lồng)
```
if (hour >= 18) { // Nested condition
    if (hour < 23) {
        console.log("Good night");
    }
}

```
---

11. **Vòng lặp**  
Cấu trúc
```
for (<Khởi tạo>; <điều kiện lặp>; <Cập nhật>) {
    Code
}
```
Ví dụ
```
for (let i = 0; i < 5; i++)
    console.log("Hello");
```
Tinh tong tu 1 den 101
```
let sum = 0
for (let i = 0; i <= 101; i++) {
    sum += i; //sum += i  (tương đương với sum = sum + i)
}
console.log(sum);
```