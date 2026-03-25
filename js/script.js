// Mobile menu toggle
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form handler
const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showMessage('Harap isi semua field', 'error');
            return;
        }
        
        // Simulasi pengiriman (ganti dengan endpoint backend jika perlu)
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        
        // Simulasi delay
        setTimeout(() => {
            showMessage('Pesan berhasil dikirim! Saya akan menghubungi Anda segera.', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Kirim Pesan <i class="fas fa-paper-plane"></i>';
            
            // Optional: kirim ke WhatsApp
            // window.open(`https://wa.me/62895341011865?text=Halo%20${encodeURIComponent(name)}%2C%20${encodeURIComponent(message)}`);
        }, 1000);
    });
}

function showMessage(msg, type) {
    messageDiv.textContent = msg;
    messageDiv.className = `form-message ${type}`;
    setTimeout(() => {
        messageDiv.style.display = 'none';
        messageDiv.className = 'form-message';
    }, 5000);
}