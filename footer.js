 const buttons = document.querySelectorAll('.footer-button');
        const underline = document.querySelector('.underline');

        buttons.forEach(button => {
            button.addEventListener('mouseover', function() {
                underline.style.width = `${this.offsetWidth}px`;
                underline.style.left = `${this.offsetLeft}px`;
            });

            button.addEventListener('click', function() {
                window.location.href = this.getAttribute('data-href');
            });
        });