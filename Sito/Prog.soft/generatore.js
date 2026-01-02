const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Inserisci il numero minimo: ', (min) => {
    rl.question('Inserisci il numero massimo: ', (max) => {
        const minNum = parseInt(min);
        const maxNum = parseInt(max);
        
        if (isNaN(minNum) || isNaN(maxNum)) {
            console.log('Errore: inserisci numeri validi');
            rl.close();
            return;
        }
        
        if (minNum >= maxNum) {
            console.log('Errore: il minimo deve essere inferiore al massimo');
            rl.close();
            return;
        }
        
        const numeroRandom = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        console.log(`Numero generato: ${numeroRandom}`);
        
        rl.close();
    });
});