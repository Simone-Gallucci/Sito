#include <stdio.h>

int main() {
    char testo[100];
    int chiave, scelta, i;
    
    printf("=== CIFRARIO DI CESARE ===\n\n");
    
    printf("1. Cifrare\n");
    printf("2. Decifrare\n");
    printf("Scelta: ");
    scanf("%d", &scelta);
    getchar();
    
    printf("Inserisci il testo: ");
    fgets(testo, 100, stdin);
    
    printf("Inserisci la chiave: ");
    scanf("%d", &chiave);
    chiave=chiave-1;

    if (scelta == 2) {
        chiave = -chiave;
    }
    
    for (i = 0; testo[i] != '\0'; i++) {
        if (testo[i] >= 'a' && testo[i] <= 'z') {
            int pos = testo[i] - 'a' + 1;
            pos = (pos - 1 + chiave + 26) % 26 + 1;
            testo[i] = pos - 1 + 'a';
        }
        else if (testo[i] >= 'A' && testo[i] <= 'Z') {
            int pos = testo[i] - 'A' + 1;
            pos = (pos - 1 + chiave + 26) % 26 + 1;
            testo[i] = pos - 1 + 'A';
        }
    }
    
    printf("\nRisultato: %s\n", testo);
    
    return 0;
}
