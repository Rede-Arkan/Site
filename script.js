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

// Botão "Copiar IP"
document.getElementById('copy-ip').addEventListener('click', () => {
    const ip = "jogar.meuservidormc.com";
    navigator.clipboard.writeText(ip)
        .then(() => {
            alert('IP copiado! Agora é só colar no Minecraft.');
        })
        .catch(err => {
            console.error('Erro ao copiar IP:', err);
        });
});