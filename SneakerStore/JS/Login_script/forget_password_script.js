const emailInput = document.getElementById('forgot-email');
const codeInput = document.getElementById('verify-code');
const btnVerify = document.getElementById('btn-verify');

if (codeInput) {
    codeInput.addEventListener('input', () => {
        codeInput.value = codeInput.value.replace(/\D/g, '');
    });
}

if (btnVerify && emailInput && codeInput) {
    btnVerify.addEventListener('click', (event) => {
        event.preventDefault(); 

        let valEmail = emailInput.value.trim();
        let valCode = codeInput.value.trim();

        if (valEmail === "" || valCode === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
        } 
        else if (valCode.length < 6) {
            alert("Mã xác nhận phải đủ 6 chữ số!");
        }
        else {
            window.location.href = "New_password.html";
        }
    });
}