// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng, gọi hàm với 2 cặp giá trị khác nhau
function multiply(a, b) {
    console.log(`${a} x ${b} = ${a * b}`)
}
multiply(5, 6);
multiply(7, 8);

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in ra kết quả với 2 bộ số khác nhau
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b
    };
    if (c < min) {
        min = c
    };
    return min;
}
console.log(`Số nhỏ nhất là ${findMin(100, 88, 87)}`);

/* 3. Viết hàm getTopStudents nhận 2 tham số:
- students: mảng các object, mỗi object chứa name và score
- threshole: ngưỡng điểm để được coi là "top"
Gọi hàm trả về mảng chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả
*/
function getTopStudents(students, threshold) {
    let topStudents = []; // Tạo mảng rỗng để lưu tên các học sinh đạt điểm cao

    // Duyệt qua từng học sinh trong mảng students
    for (const student of students) {
        if (student.score >= threshold) {
            topStudents.push(student.name); // Thêm tên học sinh đạt điều kiện vào mảng
        };
    }
    return topStudents; // Trả về mảng kết quả
}
// Tạo dữ liệu thực tế
const students = [
    { name: "A", score: 9 },
    { name: "B", score: 5 },
    { name: "C", score: 8 }
];
// Gọi hàm và in kết quả
const result = getTopStudents(students, 8);
console.log(result); // Kết quả: [ 'A', 'C' ]

/* 4. 
Viết hàm calculateInterest nhận 3 tham số:
- principal: số tiền gửi ban đầu (số)
- rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%)
- years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100. 
Gọi hàm với ví dụ thực tế và in kết quả.
*/
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    console.log(`Tổng lợi nhuận sau ${years} năm là ${total}`); // Áp biến years theo total
    return total
}
calculateInterest(100000, 5, 5);
calculateInterest(200000, 2, 4);