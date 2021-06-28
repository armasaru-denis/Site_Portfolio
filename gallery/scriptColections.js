let modalSection = document.querySelector('.modal')
let modal2 = document.querySelector('.mod2')
let modal3 = document.querySelector('.mod3')
let modal4 = document.querySelector('.mod4')


const bodyTag = document.querySelector('body')
let divBullets 
// = document.querySelector('.bullets')


// = document.querySelector('.nr2')

let imgParent
 //= document.querySelector('.mod1 .imgs-parent')
let allImages 
//= document.querySelectorAll('.mod1 img')

let imgParent2
// = document.querySelector('.mod2 .imgs-parent')
let allImages2
// = document.querySelectorAll('.mod2 img')



let closeSlide = document.querySelector('.closeSlide')

let imgContent = document.querySelectorAll('.imgs-parent img')
let arraycontent = [imgContent]

let firstCollection = document.querySelectorAll('.firstCollection img')
let arrayCollection1 = [firstCollection]
console.log(firstCollection)
console.log(imgContent)
console.log(arrayCollection1)

document.getElementById('btn1').addEventListener('click',()=> {
    imgParent = document.querySelector('.mod1 .imgs-parent')
    allImages = document.querySelectorAll('.mod1 img')
    divBullets = document.querySelector('.bullets')
    openModalFun()
    bulletsFun()
    closeSlide.classList.add('apear')
} )

document.getElementById('btn2').addEventListener('click', ()=>{
    imgParent = document.querySelector('.mod2 .imgs-parent')
    allImages = document.querySelectorAll('.mod2 img')
    divBullets = document.querySelector('.nr2')
    document.querySelector('.mod2').classList.add('active')
    
    // divBullets = document.querySelector('.bullets2')
    openModalFun()
    bulletsFun()
    console.log(divBullets)
    closeSlide.classList.add('apear')
    
})
document.getElementById('btn3').addEventListener('click', ()=>{
    imgParent = document.querySelector('.mod3 .imgs-parent')
    allImages = document.querySelectorAll('.mod3 img')
    divBullets = document.querySelector('.nr3')
    document.querySelector('.mod3').classList.add('active')
    
    // divBullets = document.querySelector('.bullets2')
    openModalFun()
    bulletsFun()
    console.log(divBullets)
    closeSlide.classList.add('apear')
    
})
document.getElementById('btn4').addEventListener('click', ()=>{
    imgParent = document.querySelector('.mod4 .imgs-parent')
    allImages = document.querySelectorAll('.mod4 img')
    divBullets = document.querySelector('.nr4')
    document.querySelector('.mod4').classList.add('active')
    
    // divBullets = document.querySelector('.bullets2')
    openModalFun()
    bulletsFun()
    console.log(divBullets)
    closeSlide.classList.add('apear')
    
})
// document.getElementById('btn2').addEventListener('click', () => {
//     // document.querySelector('.imgs-parent').innerHTML= '<img src="/gallery/imagini_galerie1/aries.jpg" alt=""><img src="/gallery/imagini_galerie1/cancer 2.jpg" alt=""><img src="/gallery/imagini_galerie1/leo.jpg" alt=""><img src="/gallery/imagini_galerie1/libra.jpg" alt=""><img src="/gallery/imagini_galerie1/sagitarius.jpg" alt=""><img src="/gallery/imagini_galerie1/scorpio.jpg" alt=""><img src="/gallery/imagini_galerie1/taurus 2.jpg" alt=""><img src="/gallery/imagini_galerie1/virgo3.jpg" alt="">'

// let removeBtn = document.createElement('button')

// removeBtn.style.position = 'fixed'




function removeAllChildNodes(x) {
    while (x.firstChild) {
        x.removeChild(x.firstChild);
    }
}
// removeBtn.appendChild(x)
// console.log(removeBtn)

// }

closeSlide.addEventListener('click',()=>{
    closeSlide.classList.remove('apear')
    modalSection.classList.remove('active')
    modal2.classList.remove('active')
    modal3.classList.remove('active')
    modal4.classList.remove('active')
    removeAllChildNodes(divBullets)
    // removeAllChildNodes(divBullets2)
})

function openModalFun() {
    modalSection.classList.add('active')
    bodyTag.style.overflow = 'hidden'
    imgParent.style.left = modalSection.clientWidth/2 - allImages[0].clientWidth/2 + 'px'
    allImages[0].classList.add('active')
}

let falsebullet

function bulletsFun(){
        // create bullets
        let countImg = 0
        let imgDuplicate
        let bullet

        let sidebullet
        
        allImages.forEach(img => {
            imgDuplicate = img
            
                bullet = document.createElement('button')
                bullet.classList.add(countImg)
                countImg++
                divBullets.appendChild(bullet)
                bullet.addEventListener('click', setImgPosition)
                
                if (bullet.classList.contains(0)) {
                bullet.classList.add('active')
                }

                
            })
              
            
            setImgPosition
    // for bullets event
    
}



function setImgPosition() {
        
    let x = 0
    const imgNo = this.classList.value

    allImages.forEach(img=> img.classList.remove('active'))
    allImages[imgNo].classList.add('active')
    
    divBullets.querySelector('button').classList.remove('active')
    
    // this.focus()
    if(imgNo > 0) {
        let n = parseInt(this.classList.value)
        for(let i=n-1; i>=0; i--) {
            x += allImages[i].clientWidth + 100

            
        }

        

        
    }

    
    
    const leftVal = modalSection.clientWidth/2 - allImages[imgNo].clientWidth/2 - x
    imgParent.style.left = leftVal + 'px'
    
}

