document.addEventListener('DOMContentLoaded', function() {
    const btnMonthly = document.getElementById('btn-monthly');
    const btnYearly = document.getElementById('btn-yearly');
    const prices = document.querySelectorAll('.price-val');
    
    const packageNames = document.querySelectorAll('.package-name-text'); 
    const pricePeriods = document.querySelectorAll('.price-period-text');

    if (btnMonthly && btnYearly) {
        function animatePriceChange(isYearly) {
            // Update status tombol aktif secara visual
            btnYearly.classList.toggle('active', isYearly);
            btnMonthly.classList.toggle('active', !isYearly);

            prices.forEach(el => {
                el.classList.add('price-changing'); 
                setTimeout(() => {
                    const newValue = isYearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
                    el.innerText = "IDR " + newValue;
                    el.classList.remove('price-changing');
                }, 250); 
            });

            packageNames.forEach((name, index) => {
                name.style.opacity = '0';
                setTimeout(() => {
                    if (index === 0) {
                        name.innerText = isYearly ? "Loyal" : "Basic";
                    } else {
                        name.innerText = isYearly ? "Premium Plus" : "Premium";
                    }
                    name.style.opacity = '1';
                }, 250);
            });

            pricePeriods.forEach(period => {
                period.style.opacity = '0';
                setTimeout(() => {
                    period.innerText = isYearly ? "/tahun" : "/bulan";
                    period.style.opacity = '1';
                }, 250);
            });
        }

        btnMonthly.addEventListener('click', () => {
            if(!btnMonthly.classList.contains('active')) animatePriceChange(false);
        });

        btnYearly.addEventListener('click', () => {
            if(!btnYearly.classList.contains('active')) animatePriceChange(true);
        });
    }

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.style.padding = "5px 0";
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.padding = "15px 0";
            }
        });
    }
});