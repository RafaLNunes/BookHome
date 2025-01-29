
//Criar o Fundo com o brilho
const gradient = document.getElementById('gradient');
document.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    gradient.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, 
    rgba(255, 255, 255, 0.1), #121212 30%)`;
});


