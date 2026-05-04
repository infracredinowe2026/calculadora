const display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch {
        display.value = "Erro";
    }
}

document.addEventListener("keydown", (e) => {
    const tecla = e.key;

    if (!isNaN(tecla) || ['+', '-', '*', '/', '.', '%'].includes(tecla)) {
        adicionar(tecla);
    }

    if (tecla === "Enter") {
        calcular();
    }

    if (tecla === "Backspace") {
        apagar();
    }

    if (tecla === "Escape") {
        limpar();
    }
});