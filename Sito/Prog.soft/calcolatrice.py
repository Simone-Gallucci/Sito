def addizione(a, b):
    return a + b

def sottrazione(a, b):
    return a - b

def moltiplicazione(a, b):
    return a * b

def divisione(a, b):
    if b == 0:
        return "Errore: divisione per zero"
    return a / b

def potenza(a, b):
    return a ** b

def calcolatrice():
    print("=== CALCOLATRICE ===")
    print("Operazioni disponibili:")
    print("1. Addizione (+)")
    print("2. Sottrazione (-)")
    print("3. Moltiplicazione (*)")
    print("4. Divisione (/)")
    print("5. Potenza (^)")
    print("6. Esci")
    
    while True:
        scelta = input("\nScegli un'operazione (0-5): ")
        
        if scelta == '0':
            print("Arrivederci!")
            break
        
        if scelta in ['1', '2', '3', '4', '5']:
            num1 = float(input("Inserisci il primo numero: "))
            num2 = float(input("Inserisci il secondo numero: "))
            
            if scelta == '1':
                print(f"Risultato: {num1} + {num2} = {addizione(num1, num2)}")
            elif scelta == '2':
                print(f"Risultato: {num1} - {num2} = {sottrazione(num1, num2)}")
            elif scelta == '3':
                print(f"Risultato: {num1} * {num2} = {moltiplicazione(num1, num2)}")
            elif scelta == '4':
                print(f"Risultato: {num1} / {num2} = {divisione(num1, num2)}")
            elif scelta == '5':
                print(f"Risultato: {num1} ^ {num2} = {potenza(num1, num2)}")
        else:
            print("Scelta non valida. Riprova.")

if __name__ == "__main__":
    calcolatrice()