const { add } = require('./calculator');

console.log("=== BẮT ĐẦU CHẠY KIỂM THỬ TỰ ĐỘNG (UNIT TEST) ===");

const result = add(2, 3);
const expected = 5;

if (result !== expected) {
    console.error(`[THẤT BẠI] Phép tính sai! Kỳ vọng ${expected} nhưng nhận được ${result}`);
    process.exit(1); // Báo lỗi cho Jenkins biết để dừng Pipeline
}

console.log(`[THÀNH CÔNG] Phép tính chuẩn xác: 2 + 3 = ${result}`);
process.exit(0);