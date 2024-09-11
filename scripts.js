document.addEventListener('DOMContentLoaded', () => {
    const times = [
        'Mercedes',
        'Red Bull Racing',
        'Ferrari',
        'McLaren',
        'Alpine',
        'Aston Martin',
        'AlphaTauri',
        'Williams',
        'Alfa Romeo',
        'Haas'
    ];

    const calendario = [
        'GP da Bahrein - 2 de Março',
        'GP da Arábia Saudita - 9 de Março',
        'GP da Austrália - 24 de Março',
        'GP do Japão - 7 de Abril',
        'GP da China - 21 de Abril',
        'GP de Miami - 5 de Maio',
        'GP de Emilia-Romagna - 19 de Maio',
        'Gp de Mônaco - 26 de Maio',
        'GP do Canadá - 9 de Junho',
        'GP da Espanha - 23 de Junho',
        'GP da Áustria - 30 de Junho',
        'GP da Grã-Bretanha - 7 de Julho',
        'GP da Hungria - 21 de Julho',
        'GP da Bélgica - 28 de Julho',
        'GP da Holanda - 25 de Agosto',
        'GP da Itália - 1 de Setembro',
        'GP do Azerbaijão - 15 de Setembro',
        'GP de Singapura - 22 de Setembro',
        'GP dos Estados Unidos - 20 de Outubro',
        'GP do México - 27 de Outubro',
        'GP do Brasil - 3 de Novembro',
        'GP de Las Vegas - 24 de Novembro',
        'GP do Qatar - 1 de Dezembro',
        'GP de Abu Dhabi - 8 de Dezembro',
        // Adicione mais eventos conforme atualização de temporada
    ];

    const teamList = document.getElementById('times-list');
    const scheduleList = document.getElementById('calendario-list');

    if(timesList){
        times.forEach(times => {
            const li = document.createElement('li');
            li.textContent = times;
            timesList.appendChild(li);
        });
    }

    if(calendarioList){
        calendario.forEach(calendario => {
            const li = document.createElement('li');
            li.textContent = event;
            calendarioList.appendChild(li);
        });
    }
});