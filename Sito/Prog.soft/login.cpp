#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Users {
public:
    string name;
    string pass;
    string role;

    // Costruttore semplice
    Users(string n, string p, string r) : name(n), pass(p), role(r) {}
};

void richiediCredenziali(string& login, string& password) {

    cout << "Username: ";
    
    cin >> login;
    
    cout << "Password: ";
    
    cin >> password;
    
    }

int main() {
    // 1. Creiamo una lista (vector) di utenti
    vector<Users> list;
    list.push_back(Users("Szymon", "Szymon05", "admin"));
    list.push_back(Users("Mario", "123", "user"));

    // 2. Chiediamo i dati all'utente
    string loginname, loginPass;
    bool trovato = false;

    // Continua a chiedere finché non trova l'utente
    while (!trovato) {
        richiediCredenziali(loginname, loginPass);

        // 3. Controlliamo ogni utente nella lista
        for (int i = 0; i < list.size(); i++) {
            if (list[i].name == loginname && list[i].pass == loginPass) {
                cout << "\nLogin granted" << endl;
                cout << "===================" << endl;
                cout << "Username: " << list[i].name << endl;
                cout << "Role: " << list[i].role << endl;
                trovato = true;
                break; // Esci dal ciclo perché l'abbiamo trovato
            }
        }

        if (!trovato) {
            cout << "\nErrore: credenziali sbagliate. Riprova.\n" << endl;
        }
    }

    return 0;
}