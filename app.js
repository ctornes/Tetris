document.addEventListener('DOMContentLoaded', () => {
    const larghezza = 10;
    const grid = document.querySelector('.grid');
    const punteggio = document.querySelector('#punteggio');
    const startbtn = document.querySelector('#start-button');
    let quadrati = Array.from(document.querySelectorAll('.grid div'));
    
    const lBlock = [
        [1, larghezza+1, larghezza*2+1, 2],
        [larghezza, larghezza+1, larghezza+2, larghezza*2+2],
        [1, larghezza+1, larghezza*2+1, larghezza*2],
        [larghezza, larghezza*2, larghezza*2+1, larghezza*2+2]
      ]
    
      const zBlock = [
        [0,larghezza,larghezza+1,larghezza*2+1],
        [larghezza+1, larghezza+2,larghezza*2,larghezza*2+1],
        [0,larghezza,larghezza+1,larghezza*2+1],
        [larghezza+1, larghezza+2,larghezza*2,larghezza*2+1]
      ]
    
      const tBlock = [
        [1,larghezza,larghezza+1,larghezza+2],
        [1,larghezza+1,larghezza+2,larghezza*2+1],
        [larghezza,larghezza+1,larghezza+2,larghezza*2+1],
        [1,larghezza,larghezza+1,larghezza*2+1]
      ]
    
      const oBlock = [
        [0,1,larghezza,larghezza+1],
        [0,1,larghezza,larghezza+1],
        [0,1,larghezza,larghezza+1],
        [0,1,larghezza,larghezza+1]
      ]
    
      const iBlock = [
        [1,larghezza+1,larghezza*2+1,larghezza*3+1],
        [larghezza,larghezza+1,larghezza+2,larghezza+3],
        [1,larghezza+1,larghezza*2+1,larghezza*3+1],
        [larghezza,larghezza+1,larghezza+2,larghezza+3]
      ]

      // ARRAY con le figure
      const Blocks = [lBlock, zBlock, tBlock, oBlock, iBlock];

      // Seleziono la posizione corrente e la rotazione
      let posizioneCorrente = 4;
      let rotazioneCorrente = 0;
      // Creo un numero Random per scegliere il blocco corrente
      let random = Math.floor( Math.random() * Blocks.length); 
      let bloccoCorrente = Blocks[random][rotazioneCorrente];


      // FUNZIONE DISEGNA E CANCELLA
      function disegna(){
        bloccoCorrente.forEach(index => {
          quadrati[posizioneCorrente + index].classList.add('block');
        })
      }

      function cancella(){
        bloccoCorrente.forEach(index => {
          quadrati[posizioneCorrente + index].classList.remove('block');
        })
      }

      // Faccio scorrere il blocco ogni secondo
      timerID = setInterval(scorriSotto, 1000);
      
      function scorriSotto() {
        cancella();
        posizioneCorrente += larghezza;
        disegna();
        blocca();
      }


      //Funzione Blocca e Riparti quando tocca qualcosa
      function blocca() {
        if(bloccoCorrente.some(index => quadrati[posizioneCorrente + index + larghezza].classList.contains('toccato'))){
          bloccoCorrente.forEach(index => quadrati[posizioneCorrente + index].classList.add('toccato'));
          // Blocchiamo la figura e ne facciamo ripartire una nuova
          random = Math.floor( Math.random() * Blocks.length);
          bloccoCorrente = Blocks[random][rotazioneCorrente];
          posizioneCorrente = 4;
          disegna();
        }
      }

});

