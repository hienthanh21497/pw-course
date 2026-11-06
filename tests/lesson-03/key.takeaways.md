# Javascript
### 1. Convention
- snake_case: hien_pham (Tạm thời không dùng đến)
- kebab-case: hien-pham (Đặt tên file và folder)
- camelCase: hienPham (Đặt tên biến và hàm)
- PascalCase: HienPham (Đặt tên class)
- UPPER_CASE = SCREAMING_SNAKE_CASE: HIEN_PHAM
---
### 2. console.log
- Dùng để in ra phần muốn tháy
- Có thể dùng kèm biến muốn in ra cùng, sử dung backtick `` để có thể sử dụng biến  
*VD:* 
```
let name = "A";
let age = 18;
console.log(`Tôi là ${name}, tôi ${age} tuổi`)
```
---
### 3. Object
Tạo hàm gồm nhiều biến trong option
- Cấu trúc
```
const hocVienA ={
    name: A,
    age: 18,
    queQuan: HN,
    khoaHoc: {
        name: "Playwright",
        level: "Fresher"
    }
    "Trường học": "Đống Đa",
    "Lớp học": {
        "Tên": "A7",
        "Chủ nhiệm": "Huyền"
    }
}
```
- Cách in ra 1 object
```
console.log(hocVienA) // Lấy ra toàn bộ object
console.log(hocVienA.name) // Lấy ra 1 thuộc tính trong object
console.log(hocVienA.khoaHoc.name) // Lấy ra 1 thuộc tính của object con trong object to
```
- Cách in ra 1 object trong trường hợp key có ký tự đặc biệt
```
console.log(hocVienA["Trường học])
console.log(hocVienA["Lớp học"]["Chủ nhiệm"])
```
---
### 4. Array
Array là 1 mảng thông tin
- Cú pháp
```
const arrayName = [soLieu1, soLieu2, soLieu3];
console.log(arrayName[index])

soLieu1 = index 0
soLieu2 = index 1
soLieu3 = index 2
...
Index se bat dau tu so 0
```
---
### 5. Function
- Funtion là 1 hàm, dùng cho đoạn code sẽ được dùng đi dùng lại nhiều lần
*VD:*
```
function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    console.log(`Dien tich hinh chu nhat (${dai}x${rong}) = ${dienTich}`)
}

tinhDienTich(5,10); => In ra "Dien tich hinh chu nhat (5x10) = 50"
tinhDienTich(10,20); => In ra "Dien tich hinh chu nhat (10x20) = 200"
```
```
function checkChanLe(number) {
    if (number%2 === 0) {
        return "chan";
    }

    if (number%2!==0) {
        return "le";
    }
}
console.log(checkChanLe(10)); => In ra "chan"
console.log(checkChanLe(11)); => In ra "le"
console.log(checkChanLe(12)); => In ra "chan"
```
---
### 6. Array with length
```
arr = [24, 11, 26, 39]  => length = 4
for (let i = 0; i < arr.length; i++) {  
    console.log(arr[i])  
}
i = 0 => index = 0 => i = 24
i = 1 => index = 1 => i = 11
i = 2 => index = 2 => i = 26
i = 3 => index = 3 => i = 39
```

### 7. Cách thêm thuộc tính vào object
- Để thêm thuộc tính vào object, cần dùng dấu . hoặc [] để định nghĩa thuộc tính mới
*VD:*
```
let bike = {
    make: 'Yamaha',
    model: 'YZF-03',
};
bike.color = "Blue" // Thêm thuộc tính color: Blue vào object
bike["price new"] = 100 // Thêm thuộc tính "price new": 100 vào object
```

---
### 8. Xóa thuộc tính của object
- Để xóa thuộc tính của object, dùng hàm delete
*VD:*
```
let bike = {
    make: 'Yamaha',
    model: 'YZF-03',
    coloe: 'Blue',
    'price new': 100
};
delete bike.color; // Xóa thuộc tính color
delete bike["price new] // Xóa thuộc tính "price new"
```

### 9. Thêm phần tử vào array
- Để thêm phần tử vào mảng, dùng push
*VD:*
```
const arr = [1,2];
arr.push(3);

console.log(arr); => In ra [1, 2, 3]
```
---
# Git
### 1. Sửa commit message  
`git commit --amend` Mở editor VIM để sửa đổi trực tiếp
- Di chuyển đến vị trí cần sửa => Nhấn i
- Sửa xong nhấn Esc
- Sau đó nhấn :wq để thoát khỏi VIM  

`git commnit --amend -m "message mới"` Dùng để sửa message của commit cuối cùng
---
### 2. Thêm file vào commit cuối
- Không sửa message
```
git add <file_mới>
git commit --amend --no-edit
```
- Sửa message
```
git add <file_mới>
git commit --amend -m "message mới"
```
---
### 3. Tạo nhánh
Luôn pull code trước khi tạo nhánh  
`git branch <tên_nhánh>  `  
*VD: git branch lesson-03*

---
### 4. Check các nhánh đang có trên thư mục hiện tại
`git branch`  
*VD: git branch* =>   
Return {  
    lesson-03    
    *main  
    }  
*main có nghĩa là đang đứng ở nhánh main

---
### 5. Chuyển sang nhánh muốn làm việc
`git checkout <tên_nhánh>`  
  
- Vừa tạo nhánh + vừa chuyển sang nhánh mới  
`git checkout -b <tên_nhánh>`

### 6. Xóa nhánh
- Phải đang đứng ở 1 nhánh khác nhánh muốn xóa thì mới xóa được  
`git branch -d <tên_nhánh>`

