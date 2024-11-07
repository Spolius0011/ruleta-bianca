function girarRuleta() {
    const ruleta = document.getElementById('ruleta');
    
    const vueltasMinimas = 30; // Vueltas mínimas completas
    const gradosAleatorios = Math.floor(Math.random() * 360); // Grados aleatorios para detenerse

    // Calcular la rotación total (80 vueltas + grados aleatorios)
    const rotacionTotal = (vueltasMinimas * 360) + gradosAleatorios;

    // Aplicar la rotación con animación
    ruleta.style.transition = "transform 6s cubic-bezier(0.33, 1, 0.68, 1)";
    ruleta.style.transform = `rotate(${rotacionTotal}deg)`;

    // Mostrar la opción ganadora al finalizar el giro
    setTimeout(() => {
        const opcionGanadora = Math.floor(gradosAleatorios / 60) + 1;
        alert("¡reinicia la pagina para volver a girar Opción ganadora : " + opcionGanadora + "!");
    }, 6000); // Después de 6 segundos
}
