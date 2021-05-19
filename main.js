let modal = document.getElementById("myModal");

let allBtns = document.querySelectorAll('#whatWeTreat .bubble')

let showTestBtn = document.getElementById('showTestBtn')

let span = document.getElementsByClassName("close")[0];

let allLinks = document.querySelectorAll('.links a')

let footer = document.querySelector('footer')
let footerClose = document.querySelector('footer img')


let mobileLinks = document.querySelectorAll('.overlay-content a')
mobileLinks.forEach(link => {
  link.addEventListener('click', function(){
    setTimeout(() => {
     closeNav() 
    }, 1200)
  })
})

if(footer){
  footerClose.addEventListener('click', hideFooter)
}

function hideFooter(){
  footer.style.display = 'none'
}


allBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        showModal(this.getAttribute('data-name'))
    })
})

function showModal(name){
    if(name === 'adhd'){
        window.location.href = '/adhd.html'
    }else if(name === 'anx'){
      window.location.href = '/anxiety.html'
    }else if(name === 'bip'){
      window.location.href = '/bipolar.html'
   }else if(name === 'depr'){
    window.location.href = '/depression.html'
    }else if(name === 'schiz'){
      window.location.href = '/schizophrenia.html'
    }else if(name === 'panA'){
      window.location.href = '/panic-attack.html'
    }else if(name === 'ptsd'){
      window.location.href = '/ptsd.html'
    }else if(name === 'grief'){
      window.location.href = '/grief-loss.html'
    }else if(name === 'ocd'){
      window.location.href = '/ocd.html'
    }else{
        return
    }
}

// When the user clicks on <span> (x), close the modal
if(span){
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    document.querySelector('#logo img').src = '/images/WhiteTransparent.png'

  } else {
    navbar.classList.remove("sticky");
    document.querySelector('#logo img').src = '/images/BlueTransparent.png'

  }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


if(showTestBtn){
  showTestBtn.addEventListener('click', showTestimonials)
}

function showTestimonials() {
  this.style.display = 'none'
  document.querySelector('.hiddenTest').classList.add('fadeInUp')
  if(window.innerWidth <= 1024){
    document.querySelector('.hiddenTest').style.display = 'block'
  }else{
    document.querySelector('.hiddenTest').style.display = 'grid'
  }
  
}

