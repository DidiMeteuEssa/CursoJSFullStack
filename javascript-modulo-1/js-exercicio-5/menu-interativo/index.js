let opc;

do {
    opc = prompt("Escolha uma música:\n\n[A] - Electrodynamix\n[B] - No More Tears\n[C] - Essa aqui vira trendi\n[D] - Bad Apple!!\n[E] - Rosenrot\n\n[F] - Sair").toUpperCase();

    switch (opc) {
        case 'A':
            alert("Bora tremer a casa!");
            break;
        case 'B':
            alert("Mas que gosto musical refinado...");
            break;
        case 'C':
            alert("Na moral, se desvive...");
            break;
        case 'D':
            alert("Dahorinha!");
            break;
        case 'E':
            alert("Essa é muito boa!");
            break;
        case 'F':
            alert("Encerrando o programa...");
            break;
    }
} while (opc != "F");