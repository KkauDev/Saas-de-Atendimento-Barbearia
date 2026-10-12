const box = document.querySelector(".cont-carrossel");
const imagens = document.querySelectorAll(".cont-carrossel .img-carrossel");

let contador = 0;

function slide() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 450}px)`;
}

setInterval(slide, 2000);
/////

//DOWNDROPER

document.addEventListener('DOMContentLoaded', function() {
    populateHours();
});

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectOption(optionText) {
    document.getElementById("dropdownButton").textContent = optionText;
    document.getElementById("selectedOption").textContent = `Dia selecionado: ${optionText}`;
    document.getElementById("myDropdown").classList.remove("show");
}

function populateHours() {
    const horaSelect = document.getElementById("horaSelect");
    const startHour = 9; // 09:00
    const endHour = 18; // 18:00
    const interval = 30; // Intervalo de 30 minutos

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += interval) {
            let time = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            let option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            horaSelect.appendChild(option);
        }
    }
}

function bookService() {
    const diaSelecionado = document.getElementById("dropdownButton").textContent;
    const horaSelecionada = document.getElementById("horaSelect").value;
    
    if (diaSelecionado === 'Selecione um Dia') {
        alert('Por favor, selecione um dia primeiro.');
        return;
    }
    
    if (horaSelecionada === '') {
        alert('Por favor, selecione um horário.');
        return;
    }

    const confirmationMessage = `Serviço agendado para ${diaSelecionado} às ${horaSelecionada}.`;
    document.getElementById("confirmation-hr").textContent = confirmationMessage;
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function bookService() {
    const diaSelecionado = document.getElementById("dropdownButton").textContent;
    const horaSelecionada = document.getElementById("horaSelect").value;
    
    if (diaSelecionado === 'Selecione um Dia') {
        alert('Por favor, selecione um dia primeiro.');
        return;
    }
    
    if (horaSelecionada === '') {
        alert('Por favor, selecione um horário.');
        return;
    }

    const confirmationMessage = `Serviço agendado para ${diaSelecionado} às ${horaSelecionada}.`;
    document.getElementById("modalMessage").textContent = confirmationMessage;
    document.getElementById("myModal").style.display = "block";
}

// Fecha o modal quando o usuário clica no botão de fechar
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}
