document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.product-1 .btn-dark');
    const cartDot = document.getElementById('cart-dot');
    const toastElement = document.getElementById('cartToast');
    const cartToast = new bootstrap.Toast(toastElement, {delay: 2500});

    const cartIconImage = document.querySelector('.cart-icon img');

    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
                
            cartDot.classList.remove('d-none');
                    
            cartToast.show();

            cartIconImage.classList.add('shake-anim');
            setTimeout(() => {
                cartIconImage.classList.remove('shake-anim');
            }, 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

            const unitPrice = 10000000; 

         
            function formatVND(number) {
                return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
            }

            function updateGrandTotal() {
                let total = 0;
                const rows = document.querySelectorAll('tbody tr');
                

                rows.forEach(row => {
                    const qty = parseInt(row.querySelector('input.form-control').value);
                    total += qty * unitPrice;
                });

                const priceRows = document.querySelectorAll('.col-lg-4 .d-flex.justify-content-between');
                
                if (priceRows.length >= 4) {
                   
                    priceRows[0].querySelector('.fw-bold').innerText = formatVND(total); 

                    priceRows[3].querySelector('.text-danger').innerText = formatVND(total); 
                }
            }

            const tableBody = document.querySelector('tbody');
            if (tableBody) {
                tableBody.addEventListener('click', function(e) {
                    
        
                    if (e.target.tagName === 'BUTTON' && e.target.innerText === '+') {
                        let input = e.target.previousElementSibling;
                        input.value = parseInt(input.value) + 1; 
                        
                        e.target.closest('tr').querySelector('td.text-danger').innerText = formatVND(parseInt(input.value) * unitPrice);
                        updateGrandTotal();
                    }
                    
                    else if (e.target.tagName === 'BUTTON' && e.target.innerText === '-') {
                        let input = e.target.nextElementSibling;
                        if (parseInt(input.value) > 1) { // Không cho giảm xuống dưới 1
                            input.value = parseInt(input.value) - 1;
                            
                            e.target.closest('tr').querySelector('td.text-danger').innerText = formatVND(parseInt(input.value) * unitPrice);
                            updateGrandTotal();
                        }
                    }
                    
                     if (e.target.closest('.btn-remove-item')) {
                        e.preventDefault();
                        let row = e.target.closest('tr');
                                
                            
                        row.style.transition = "all 0.4s ease";
                        row.style.opacity = "0";
                        row.style.transform = "translateX(-50px)";
                                
                        setTimeout(() => {
                            row.remove(); 
                            updateGrandTotal(); 
                                    
                            if (document.querySelectorAll('tbody tr').length === 0) {
                                document.getElementById('cart-dot').classList.add('d-none');
                                }
                        }, 400);
                    }
                });
            }

           
            const checkoutBtn = document.querySelector('.btn-checkout');
            if (checkoutBtn) {
                checkoutBtn.addEventListener('click', function(e) {
                    e.preventDefault(); 
                    
                    const rows = document.querySelectorAll('tbody tr');
                    

                    if (rows.length === 0) {
                        alert('Giỏ hàng của bạn đang trống trải quá! Hãy quay lại thêm vài đôi Sneaker cho xôm nhé.');
                    } 
                    else {
                        let confirmCheckout = confirm('Đơn hàng của bạn đã sẵn sàng. Đồng ý thanh toán chứ?');
                        if (confirmCheckout) {
                            alert('🎉 Thanh toán thành công! Cảm ơn bạn đã vung tiền tại Sneaker Store.');
                            
                            document.querySelector('tbody').innerHTML = '';
                            updateGrandTotal();
                        }
                    }
                });
            }
           
        });
