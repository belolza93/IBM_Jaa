document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;  // แปลงจาก cm เป็น m

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);  // คำนวณค่า BMI
        document.getElementById('bmi-value').textContent = bmi;

        // ตรวจสอบสถานะสุขภาพตามค่า BMI และเปลี่ยนสีตามหมวดหมู่
        const bmiStatus = document.getElementById('bmi-status');

        if (bmi < 18.5) {
            bmiStatus.textContent = 'ผอมไปนะเพื่อน';
            bmiStatus.className = 'ผอมไปนะเพื่อน';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiStatus.textContent = 'ทำดีต่อไปสหาย';
            bmiStatus.className = 'ทำดีต่อไปสหาย';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiStatus.textContent = 'พุงเริ่มออกแล้วนะ';
            bmiStatus.className = 'พุงเริ่มออกแล้วนะ';
        } else {
            bmiStatus.textContent = 'อ้วน';
            bmiStatus.className = 'อ้วน';
        }
    } else {
        alert('Please enter valid values.');
    }
});
