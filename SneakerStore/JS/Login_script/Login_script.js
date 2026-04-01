     const fullname = document.getElementById('fullname');
        
        // Quy tắc: Viết hoa chữ cái đầu mỗi từ, ít nhất 2 từ
        const fullnameRegex = /^[A-ZÀ-Ỹ][a-zA-ZÀ-ỹ]*(\s+[A-ZÀ-Ỹ][a-zA-ZÀ-ỹ]*)+$/;

        fullname.addEventListener('input', () => {
        let value = fullname.value.trim();

        // Nếu ô input trống
        if (value === "") {
            fullname.style.borderColor = '#444'; 
            fullname.style.boxShadow = 'none';   
        } 
        // Nếu nhập ĐÚNG định dạng
        else if (fullnameRegex.test(value)) {
            fullname.style.borderColor = '#22c55e'; // Viền Xanh lá
            fullname.style.boxShadow = '0 0 8px rgba(34, 197, 94, 0.5)'; // Bóng Xanh lá
        } 
        // Nếu nhập SAI định dạng
        else {
            fullname.style.borderColor = '#ef4444'; // Viền Đỏ
            fullname.style.boxShadow = '0 0 8px rgba(239, 68, 68, 0.5)'; // Bóng Đỏ
        }
        });
