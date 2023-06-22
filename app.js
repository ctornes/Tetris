document.addEventListener('DOMContentLoaded', () => {
    const larghezza = 10;
    const grid = document.querySelector('.grid');
    const punteggio = document.querySelector('#punteggio');
    const startbtn = document.querySelector('#start-button');
    let quadrati = Array.from(document.querySelectorAll('.grid div'));
    
    const lTetramino = [
        [1, larghezza+1, larghezza*2+1, 2],
        [larghezza, larghezza+1, larghezza+2, larghezza*2+2],
        [1, larghezza+1, larghezza*2+1, larghezza*2],
        [larghezza, larghezza*2, larghezza*2+1, larghezza*2+2]
      ]
    
      const zTetramino = [
        [0,larghezza,larghezza+1,larghezza*2+1],
        [larghezza+1, larghezza+2,larghezza*2,larghezza*2+1],
        [0,larghezza,larghezza+1,larghezza*2+1],
        [larghezza+1, larghezza+2,larghezza*2,larghezza*2+1]
      ]
    
      const tTetramino = [
        [1,larghezza,larghezza+1,larghezza+2],
        [1,larghezza+1,larghezza+2,larghezza*2+1],
        [larghezza,larghezza+1,larghezza+2,larghezza*2+1],
        [1,larghezza,larghezza+1,larghezza*2+1]
      ]
    
      const oTetramino = [
        [0,1,larghezza,larghezza+1],
        [0,1,larghezza,larghezza+1],
        [0,1,larghezza,larghezza+1],
        [0,1,larghezza,larghezza+1]
      ]
    
      const iTetramino = [
        [1,larghezza+1,larghezza*2+1,larghezza*3+1],
        [larghezza,larghezza+1,larghezza+2,larghezza+3],
        [1,larghezza+1,larghezza*2+1,larghezza*3+1],
        [larghezza,larghezza+1,larghezza+2,larghezza+3]
      ]

});

