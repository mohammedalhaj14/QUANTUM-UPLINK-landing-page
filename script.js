// MATRIX DATA RAIN
const matrix = document.getElementById('matrix');
function createDataDrop() {
    const drop = document.createElement('div');
    drop.style.position = 'absolute';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.top = '-100px';
    drop.style.height = '80px';
    drop.style.width = '1px';
    drop.style.background = 'linear-gradient(to bottom, transparent, var(--lime))';
    drop.style.opacity = Math.random() * 0.5;
    drop.style.animation = `fall ${Math.random() * 2 + 1}s linear infinite`;
    
    matrix.appendChild(drop);
    setTimeout(() => drop.remove(), 3000);
}
setInterval(createDataDrop, 150);

// TERMINAL LOGIC
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');
let currentStep = 0;
let userProfile = { name: '', message: '' };

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputVal = terminalInput.value.trim();
        if (!inputVal) return;

        terminalInput.value = '';
        printLine(`<span class="prompt">user@nexus:~$</span> ${inputVal}`, '#fff');
        
        processCommand(inputVal);
    }
});

function printLine(text, color = '#666') {
    const line = document.createElement('div');
    line.className = 'line';
    line.style.color = color;
    line.innerHTML = text;
    terminalBody.insertBefore(line, terminalInput.parentElement);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function processCommand(val) {
    if (currentStep === 0) {
        userProfile.name = val;
        printLine(`>> Welcome, Agent ${val}. Handshake verified.`, 'var(--lime)');
        printLine(`>> [System]: Please specify your operational objective (message).`, 'var(--lime)');
        currentStep = 1;
    } else if (currentStep === 1) {
        userProfile.message = val;
        printLine(`>> Data packets compressed. Establishing external uplink...`, 'var(--lime)');
        printLine(`>> [SUCCESS] Uplink established to Core Command.`, '#fff');
        
        setTimeout(() => {
            const phoneNumber = "96176724176";
            const encodedMsg = `*QUANTUM UPLINK*%0A*Source:* ${userProfile.name}%0A*Objective:* ${userProfile.message}`;
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
        }, 1200);
    }
}