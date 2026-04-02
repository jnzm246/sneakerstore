const btnLogin = document.getElementById('btn-login');

if (btnLogin) {
    btnLogin.addEventListener('click', (event) => {
        event.preventDefault(); 

        const inputEmail = document.getElementById('login-email').value.trim();
        const inputPassword = document.getElementById('login-password').value.trim();

        const savedEmail = localStorage.getItem('userEmail');
        const savedPassword = localStorage.getItem('userPassword');

        if (inputEmail === "" || inputPassword === "") {
            alert("Vui lòng nhập Email và Mật khẩu!");
        } 
        else if (inputEmail === savedEmail && inputPassword === savedPassword) {
            alert("Đăng nhập thành công!");
            window.location.href = "../home.html"; 
        } 
        else {
            alert("Email hoặc Mật khẩu không chính xác"); 
        }
    });
}