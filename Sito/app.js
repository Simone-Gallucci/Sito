const { createApp } = Vue;

createApp({
  data() {
    return {
      currentSection: 'home',
      home: {
        title: 'Ciao, sono Simone Gallucci',
        subtitle: 'Sono uno sviluppatore frontend e backend(Full stack).',
        buttonText: 'Contattami'
      },
      about: {
        title: 'Chi Sono',
        image: 'ME.jpg',
        description: 'Sono Simone, uno sviluppatore web con competenze nelle tecnologie frontend e backend moderne.',
        education: [
          {
            title: 'Istituto Tecnico Industriale - Indirizzo Informatico',
            description: 'Diploma di Istruzione Tecnica, 5 anni',
            since: '2019 - 2024'
          },
          {
            title: 'ITS - ICT & Cyber Security',
            description: 'Corso biennale post-diploma in ambito informatico',
            since: '2024 - 2026'
          }
        ],
        experience: [
          {
            title: 'Tecnico',
            description: 'Centro Sportivo MTA',
            since: '2023 - 2024'
          },
          {
            title: 'Stage',
            description: 'LogicalSystem',
            since: 'Estate 2025'
          },
          {
            title: 'Lavoro',
            description: 'LogicalSystem',
            since: '2026 - Presente'
          }
        ]
      },
      skills: {
        title: 'Le Mie Competenze',
        technical: [
          { name: 'HTML/CSS/JavaScript', level: 95 },
          { name: 'C/C++/C#', level: 90 },
          { name: 'Python', level: 85 },
          { name: 'Windows/Linux', level: 90 }
        ],
        professional: [
          { name: 'Problem Solving', level: 95 },
          { name: 'Lavoro di Squadra', level: 90 },
          { name: 'Gestione Progetti', level: 85 }
        ]
      },
      projects: [
        {
          title: 'Sito Web Personale',
          description:
            'Un sito web personale sviluppato con HTML, CSS e JavaScript(Vue.js) per mostrare le mie competenze e progetti.',
          image: 'site.jpg',
          technologies: ['HTML', 'Vue.js', 'Bootstrap', 'JavaScript'],
        },
        /* {
          title: 'J.A.R.V.I.S',
          description:
            'Sistema di intelligenza artificiale sviluppato con Python.',
          image: 'tech.jpg',
          technologies: ['Python', 'API'],
        }, */
        {
          title: 'Mini Software',
          description:
            'Collezione di piccoli software e applicazioni sviluppate in vari linguaggi di programmazione.',
          technologies: ['C', 'C++', 'Python', 'JavaScript', 'etc.'],
        }
      ],
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.contactForm.name);
      formData.append('email', this.contactForm.email);
      formData.append('subject', this.contactForm.subject);
      formData.append('message', this.contactForm.message);

      fetch('https://formspree.io/f/mvgabazj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            alert('Messaggio inviato con successo!');
            this.contactForm.name = '';
            this.contactForm.email = '';
            this.contactForm.subject = '';
            this.contactForm.message = '';
          } else {
            response.json().then(data => {
              alert(
                "Errore nell'invio del messaggio: " +
                  (data.error || 'Errore sconosciuto')
              );
            });
          }
        })
        .catch(error => {
          alert("Errore nell'invio del messaggio: " + error.message);
        });
    }
  }
}).mount('#app');

// Script per chiusura automatica navbar mobile
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (!bsCollapse) {
          bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
        }
        bsCollapse.hide();
      }
    });
  });
});
