document.getElementById('alertButton').addEventListener('click', function() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
});