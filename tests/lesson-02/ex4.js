const height = 170;
const sole_height = height % 100;
const best_weight = sole_height * 9 / 10;
const max_weight = sole_height;
const min_weight = sole_height * 8 / 10;
if (height > 100) {
    console.log(`Cân nặng lý tưởng của bạn là: ${best_weight}. Cân nặng tối đa là: ${max_weight}. Cân nặng tối thiểu là: ${min_weight} `);
};

if (height <= 100) {
    console.log("Hãy điền chiều cao lớn hơn 100");
};