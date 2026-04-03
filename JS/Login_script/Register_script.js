const fullname = document.getElementById('fullname');
    const fullnameRegex = /^[A-ZÀ-Ỹ][a-zA-ZÀ-ỹ]*(\s+[A-ZÀ-Ỹ][a-zA-ZÀ-ỹ]*)+$/;

    fullname.addEventListener('input', () => {
    let value = fullname.value.trim();

    if (value === "") {
        fullname.style.borderColor = '#444'; 
        fullname.style.boxShadow = 'none';   
    } 
    else if (fullnameRegex.test(value)) {
        fullname.style.borderColor = '#22c55e'; 
        fullname.style.boxShadow = '0 0 8px rgba(34, 197, 94, 0.5)'; 
    } 
    else {
        fullname.style.borderColor = '#ef4444'; 
        fullname.style.boxShadow = '0 0 8px rgba(239, 68, 68, 0.5)'; 
    }
    });
    
const email = document.getElementById('email');


const emailRegex = /^([a-z]|[A-Z]|[0-9]|\_|\-){1,10}@(gmail|edu|email|yahoo).com$/;

email.addEventListener('input', () => {
    let value = email.value.trim();
    email.style.outline = 'none';
    if (value === "") {
        email.style.borderColor = '#444'; 
        email.style.boxShadow = 'none';   
    } 
    else if (emailRegex.test(value)) {
        email.style.borderColor = '#22c55e'; 
        email.style.boxShadow = '0 0 8px rgba(34, 197, 94, 0.5)'; 
    } 
    else {
        email.style.borderColor = '#ef4444'; 
        email.style.boxShadow = '0 0 8px rgba(239, 68, 68, 0.5)'; 
    }
}); 

const tele = document.getElementById('tele');
const teleRegex = /^[01|03|08|09][0-9]{8}/;

tele.addEventListener('input', () => {
    let value = tele.value.trim();
    tele.style.outline = 'none';

    if (value === "") {
        tele.style.borderColor = '#444';
        tele.style.boxShadow = 'none';
    } 
    else if (teleRegex.test(value)) {
        tele.style.borderColor = '#22c55e';
        tele.style.boxShadow = '0 0 8px rgba(34, 197, 94, 0.5)';
    } 
    else {
        tele.style.borderColor = '#ef4444';
        tele.style.boxShadow = '0 0 8px rgba(239, 68, 68, 0.5)';
    }
});

const password = document.getElementById('password');
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

const passwordInput = document.getElementById('password');

if (passwordInput) {
    passwordInput.addEventListener('focus', () => {
        alert("Mật khẩu phải có ít nhất một ký tự in hoa, một số, và một ký tự đặc biệt");
    }, { once: true });
}

const btnRegister = document.querySelector('.btn-submit');

if (btnRegister) {
    btnRegister.addEventListener('click', (event) => {
        const valFullname = document.getElementById('fullname').value.trim();
        const valEmail = document.getElementById('email').value.trim();
        const valPassword = document.getElementById('password').value.trim();
        const valTele = document.getElementById('tele').value.trim();
        const valDob = document.querySelector('input[type="date"]').value; 
        if (valFullname === "" || valEmail === "" || valPassword === "" || valTele === "" || valDob === "") {
            event.preventDefault(); 
            alert("Vui lòng điền đầy đủ thông tin");
        } else {
            localStorage.setItem('userEmail', valEmail);
            localStorage.setItem('userPassword', valPassword);
            
            alert("Đăng ký thành công!");
            window.location.href = "Login_interface.html"; 
        }
    });
}
