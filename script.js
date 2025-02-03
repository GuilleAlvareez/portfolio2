const botones = document.querySelectorAll('.botones-contacto')
const espanol = document.getElementById('espanol')
const ingles = document.getElementById('ingles')
const cambiarIdioma = document.getElementById('switch')

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        switch (boton.id) {
            case 'boton-linkedin':
                window.open('https://www.linkedin.com/in/guillermo-%C3%A1lvarez-moreno-15904030a/')
                break;
            case 'boton-github':
                window.open('https://github.com/GuilleAlvareez')
                break;
            case 'boton-email':
                window.open('mailto:guillealvarezmoreno2@gmail.com')
                break;
        }
    })
})

cambiarIdioma.addEventListener('click', () => {
    if (espanol.style.display === 'none') {
        espanol.style.display = 'block';
        ingles.style.display = 'none';
    } else {
        espanol.style.display = 'none';
        ingles.style.display = 'block';
    }
});
