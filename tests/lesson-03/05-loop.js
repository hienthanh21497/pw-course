// 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i // sum = sum + i
};
console.log(sum)

// 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

// 3. Tạo mảng chứa các số lẻ từ 1 đến 99
let soLe = [1, 3]
for (let i = 4; i < 100; i++) {
    if (i % 2 !== 0) {
        soLe.push(i);
    }
}
console.log(soLe)

// 4. In ra 10 email dựa trên tên ngươi dùng và số thứ tự (VD: user1@example.com, user2@example.com, ... user10@example.com)
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu
let doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 100 },
    { month: 4, total: 200 },
    { month: 5, total: 100 },
    { month: 6, total: 200 },
    { month: 7, total: 100 },
    { month: 8, total: 200 },
    { month: 9, total: 100 },
    { month: 10, total: 200 },
    { month: 11, total: 100 },
    { month: 12, total: 200 },
]
let tongDoanhThu = 0;
for (const item of doanhThu) { // Lấy từng object trong doanhThu, coi là 1 items
    tongDoanhThu += item.total; // tongDoanhThu = tongDoanhThu + item.total (Từng total của mỗi items)
}
console.log(`Tổng doanh của của 12 tháng trong năm là ${tongDoanhThu}`);
