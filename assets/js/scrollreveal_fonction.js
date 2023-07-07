 /*=============== SCROLL REVEAL ANIMATION ===============*/
 

document.addEventListener('DOMContentLoaded', function() {
    // Code ScrollReveal ici
    const sr = ScrollReveal({
        origin: 'top',
        distance: '500px',
        duration: 1500,
        delay: 100,
    //reset : true,
    })
                                                    
    sr.reveal(`.SR-top`)
    sr.reveal(`.SR-bottom`, {origin: 'bottom',})
    sr.reveal(`.SR-left`, {origin: 'left'})
    sr.reveal(`.SR-right`, {origin: 'right'})
  });
  
