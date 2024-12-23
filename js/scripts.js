// Chuyển trang khi click vào card
document.querySelectorAll('.pet-card a').forEach(link => {
    link.addEventListener('click', function() {
        window.location.href = this.getAttribute('href');
    });
});
