// Troca de Abas
document.querySelectorAll('.tabs a').forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove a classe 'active' de todas as abas e conteúdos
        document.querySelectorAll('.tabs a').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Adiciona 'active' na aba clicada
        tab.classList.add('active');
        
        // Mostra o conteúdo correspondente
        const target = tab.getAttribute('href');
        document.querySelector(target).classList.add('active');
    });
});

// Copiar IP
document.getElementById('copy-ip').addEventListener('click', () => {
    const ip = document.querySelector('.ip').textContent;
    navigator.clipboard.writeText(ip)
        .then(() => {
            alert('IP copiado! Agora é só colar no Minecraft.');
        });
});

// Simular jogadores online (pode substituir por API real)
setInterval(() => {
    const onlineCount = Math.floor(Math.random() * 50) + 10;
    document.getElementById('online-count').textContent = onlineCount;
}, 3000);
