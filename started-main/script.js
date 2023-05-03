const reviews = [

    {
        id: 0,
        name: "fernanda",
        job: "web devolper",
        Image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        Text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    
    },

    { 


    id: 1,
    name: "susan smith",
    job: "web devolper",
    Image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    Text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",

},

{


    id: 2,
    name: "anna johnson",
    job: "web devolper",
    Image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    Text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",

},

{


    id: 3,
    name: "peter jones",
    job: "intern",
    Image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    Text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",

},

{


    id: 4,
    name: "bill anderson",
    job: "the boss",
    Image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    Text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",

},

];


const author = document.getElementById('author')
const job = document.getElementById('job')
const image = document.getElementById('image-profile')
const information = document.getElementById('description')

const  prevButton = document.querySelector('.prev-button');
const  nextButton = document.querySelector('.next-button');
const  randomButton = document.querySelector('#random-button');

let currentItem = 0;

function showPerson(person) {

    const item = reviews[person] 
    image.src = item.Image
    author.textContent = item.name
    job.textContent = item.job
    information.textContent = item.Text
}


nextButton.addEventListener('click', () => {

    if(currentItem < reviews.length -1) {
        currentItem++
    }
    else{
        currentItem = 0
    }
    showPerson(currentItem)
})


// prevButton.addEventListener('click', () => {

//     currentItem--

//     if(currentItem < 0) {
//         currentItem = reviews.length -1
//     }

//     showPerson(currentItem)
// })


// randomButton.addEventListener('click', () => {

//     currentItem = Math.floor(Math.random() * 5)
//     showPerson(currentItem)


// })