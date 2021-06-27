let prima = document.querySelector('.imgBa2')
let adoua = document.querySelector('.imgBa3')
let imgUltima = document.querySelector('.imgBa4')
let imgprima = document.querySelector('.imgBa5')
let imgAdoua = document.querySelector('.imgBa6')
let imgFadein = document.querySelector('.imgBa7')
let footer = document.querySelector('.footer')

let primpara = document.querySelector('.paragr1')
let para2 = document.querySelector('.paragr2')




  imgprima.style.opacity = '80%'
  primpara.style.right = '0'


window.addEventListener('scroll', ()=>{
  let value = window.scrollY
  if (value < 3300) {
    prima.style.top = value * 1.2 + "px"
    adoua.style.top = value * 0.5 + "px"
    adoua.style.opacity = value * 0.1  + "%"
    prima.style.opacity = 100 - value * 0.05  + "%"
    
    console.log(prima.cl)
  }
  
  if ( value > 500){
    imgAdoua.style.opacity = '70%'
    para2.style.right = '50%'
   }
   if ( value < 500 || value > 1200){
    imgAdoua.style.opacity = '0'
    para2.style.right = '100%'
   }

  if (value > 1200){
    imgFadein.style.left = '0%'
  } 

  if (value < 1200 || value > 1900){
    imgFadein.style.left = '-100%'
  }

  if ( value > 500){
    imgprima.style.opacity = '0'
    primpara.style.right = '-100%'
  }
  if ( value < 500){
    imgprima.style.opacity = '70%'
    primpara.style.right = '0%'
  }
  
  if(value > 2000){
    footer.style.bottom = '0px'
    imgUltima.style.opacity = "70%"
    
  }
  if(value < 2000){
    footer.style.bottom = '-80px'
    imgUltima.style.opacity = "0"
  }
  console.log(value)
  
})

let sideNavBtn1 = document.querySelector('.sn1')
console.log(sideNavBtn1)
let sideNavBtn2 = document.querySelector('.sn2')
let sideNavBtn3 = document.querySelector('.sn3')
let sideNavBtn4 = document.querySelector('.sn4')

sideNavBtn1.addEventListener('click', ()=> {
window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
sideNavBtn1.style.width = '30px'
sideNavBtn1.style.height = '30px'

sideNavBtn2.style.width = '20px'
sideNavBtn2.style.height = '20px'

sideNavBtn3.style.width = '20px'
sideNavBtn3.style.height = '20px'

sideNavBtn4.style.width = '20px'
sideNavBtn4.style.height = '20px'

})
sideNavBtn2.addEventListener('click', ()=> {
  window.scrollTo({
    top: 700,
    behavior: 'smooth',
  })
sideNavBtn1.style.width = '20px'
sideNavBtn1.style.height = '20px'

sideNavBtn2.style.width = '30px'
sideNavBtn2.style.height = '30px'

sideNavBtn3.style.width = '20px'
sideNavBtn3.style.height = '20px'

sideNavBtn4.style.width = '20px'
sideNavBtn4.style.height = '20px'

})
sideNavBtn3.addEventListener('click', ()=> {
  window.scrollTo({
    top: 1400,
    behavior: 'smooth',
  })
  sideNavBtn1.style.width = '20px'
  sideNavBtn1.style.height = '20px'
  
  sideNavBtn2.style.width = '20px'
  sideNavBtn2.style.height = '20px'
  
  sideNavBtn3.style.width = '30px'
  sideNavBtn3.style.height = '30px'
  
  sideNavBtn4.style.width = '20px'
  sideNavBtn4.style.height = '20px'
})
sideNavBtn4.addEventListener('click', ()=> {
  window.scrollTo({
    top: 2100,
    behavior: 'smooth',
  })
  sideNavBtn1.style.width = '20px'
  sideNavBtn1.style.height = '20px'
  
  sideNavBtn2.style.width = '20px'
  sideNavBtn2.style.height = '20px'
  
  sideNavBtn3.style.width = '20px'
  sideNavBtn3.style.height = '20px'
  
  sideNavBtn4.style.width = '30px'
  sideNavBtn4.style.height = '30px'
})
