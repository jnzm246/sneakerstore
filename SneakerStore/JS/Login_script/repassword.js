const password = document.getElementById('newpassword');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    password.addEventListener('input', () => {
        let value = password.value.trim();
        
        if (value === "") {
            password.style.borderColor = '#444';
            password.style.boxShadow = 'none';
        } 
        else if (passwordRegex.test(value)) {
            password.style.borderColor = '#22c55e'; 
            password.style.boxShadow = '0 0 8px rgba(34, 197, 94, 0.5)';
        } 
        else {
            password.style.borderColor = '#ef4444'; 
            password.style.boxShadow = '0 0 8px rgba(239, 68, 68, 0.5)';
        }
    });

const repassword = document.getElementById('repassword');

if (repassword && password) { 
    repassword.addEventListener('input', () => {
        let value = repassword.value.trim();
        let originalPassword = password.value.trim(); 
        
        repassword.style.outline = 'none';

        if (value === "") {
            repassword.style.borderColor = '#444';
            repassword.style.boxShadow = 'none';
        } 
        else if (value === originalPassword) {
            repassword.style.borderColor = '#22c55e'; 
            repassword.style.boxShadow = '0 0 8px rgba(34, 197, 94, 0.5)';
        } 
        else {
            repassword.style.borderColor = '#ef4444'; 
            repassword.style.boxShadow = '0 0 8px rgba(239, 68, 68, 0.5)';
        }
    });
}

 const btnSubmit = document.querySelector('.btn-submit');

if (btnSubmit && password && repassword) {
    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        let valPass = password.value.trim();
        let valRepass = repassword.value.trim();

        if (valPass === "" || valRepass === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return; 
        }
        
        if (valPass !== valRepass) {
            alert("Mật khẩu nhập lại không khớp! Vui lòng kiểm tra lại.");
            return;
        }

        localStorage.setItem('userPassword', valPass);
        
        alert("Cập nhật thành công!");
        window.location.href = "Login_interface.html"; 
    });
}