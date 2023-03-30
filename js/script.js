/**
 * Descrizione:
    Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
    Bonus:
    1- al click su una thumb, visualizzare in grande l'immagine corrispondente
    2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
    3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
 */

const { createApp } = Vue

createApp({
  data() {
    return {
      activeImage: 0,   //setto di defaul questo mio contatore per compararlo con gli indici all interno del ciclo for x add o no active class
      time: 3000,       // per ora lo setto a 1,5 s il timer cosi da vedere bene se funge tutto
      interval: null,     //mi servirà settato vuoto per far partire l'autoplay al refresh di pagina
      sensoMarcia: false,   //mi servirà come flag per capire se il mouse è sopra o meno al div   
      slides: [
        {
          image: 'img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          alt: 'Spiderman volante'
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          alt: 'Il topo e clank'
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          alt: 'Fortnite'
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          alt: 'Stray'
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
          alt: 'Marvel\'s team'
        }
      ]
    }
  },
  mounted() {
    this.startAutoplay();
  },  
  methods: {
    showNext() {
      clearInterval(this.interval);
      if (this.activeImage < this.slides.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
      this.sensoMarcia = false;
      this.startAutoplay();
    },
  
    showPrev() {
      clearInterval(this.interval);
      if (this.activeImage > 0) {
        this.activeImage--;
      } else {
        this.activeImage = this.slides.length - 1;
      }
      this.sensoMarcia = true;
      this.startAutoplay();
    },
  
    startAutoplay() {
      this.interval = setInterval(() => {
        if (this.sensoMarcia) {
          this.showPrev();
        } else {
          this.showNext();
        }
      }, this.time);  
    },

    showslide(indexToShow){
      this.activeImage=indexToShow;
    },
  
    mouseHover() {
      clearInterval(this.interval);
    },
  
    mouseLeave() {
      this.startAutoplay();
    }
  }
  
  }).mount('#app');