import handlbares from '../hand.hbs'
const btnRef = document.querySelector('.btn');
const boxRef = document.querySelector('.block')
const imagesRef = document.querySelectorAll('img')



imagesRef.forEach(img => {
    img.addEventListener('click', addClass )
})


function addClass(e) {
    console.log(e.currentTarget);
    hasClass()
        e.currentTarget.classList.toggle('pick')
}
function hasClass () {
   imagesRef.forEach(img => {
       if (img.classList.contains('pick')) {
           img.classList.remove('pick')
           return
        }
   })
}

btnRef.addEventListener('click', createCard)

function createCard(e) {
    e.preventDefault()
    console.dir(e);
    const fName = e.target.form[0].value;
    const sName = e.target.form[1].value;
    const age = e.target.form[2].value;
    const job = e.target.form[3].value;

    let imgUrl = ''
    imagesRef.forEach(img => {
        if (img.classList.contains('pick')) {
            imgUrl = img.src
        }
    })
    
    const profile = new Profile(fName, sName, age, job,imgUrl)
    makeProfile(profile)
}

const Profile = function(fName, sName, age,job,imgUrl) {
    this.fName = fName;
    this.sName = sName;
    this.age = age;
    this.job = job;
    this.imgUrl = imgUrl
}


function makeProfile (markup) {
    const profile = handlbares(markup)
    boxRef.insertAdjacentHTML('beforeend', profile)
}


