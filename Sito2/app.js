// Funzione per caricare un componente HTML
async function loadComponent(file, targetId) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Errore nel caricamento di ${file}`);
        }
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error(`Errore nel caricamento del componente ${file}:`, error);
    }
}

// Carica tutti i componenti quando la pagina è pronta
document.addEventListener('DOMContentLoaded', async () => {
    // Carica i componenti in sequenza
    await loadComponent('navbar.html', 'navbar-container');
    await loadComponent('body.html', 'body-container');
    await loadComponent('footer.html', 'footer-container');
    
    // Inizializza le funzionalità dopo il caricamento
    initializeNavigation();
    initializeForm();
});

// Gestione della navigazione mobile
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    }

    // Gestione cambio sezione senza scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Nascondi tutte le sezioni
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostra la sezione target
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Aggiorna link attivo nella navbar
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
            
            // Chiudi il menu mobile se aperto
            if (window.innerWidth < 768 && navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });
    
    // Mostra la prima sezione di default
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
    const firstLink = document.querySelector('.nav-menu a');
    if (firstLink) {
        firstLink.classList.add('active');
    }
}

// Gestione del form di contatto
function initializeForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Disabilita il pulsante durante l'invio
            submitButton.disabled = true;
            submitButton.textContent = 'Invio in corso...';
            
            try {
                const response = await fetch('https://formspree.io/f/mvgabazj', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Grazie per il tuo messaggio! Ti risponderò presto.');
                    form.reset();
                } else {
                    const data = await response.json();
                    alert('Errore nell\'invio del messaggio. Riprova più tardi.');
                    console.error('Errore Formspree:', data);
                }
            } catch (error) {
                alert('Errore di rete. Verifica la connessione e riprova.');
                console.error('Errore:', error);
            } finally {
                // Riabilita il pulsante
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    }
}
