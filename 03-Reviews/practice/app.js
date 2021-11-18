
const Person = function(img, name, position, description){
    this.img = img;
    this.name = name;
    this.position = position;
    this.description = description;
}

const personImg = document.querySelector("#person-img");
const personName = document.querySelector("#person-name");
const personPosition = document.querySelector("#person-position");
const personDescription = document.querySelector("#person-description");

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
const btnRandom = document.querySelector("#btn-random");

let cur_page = 0;

const persons = [
    new Person("./img/person1.jpg","Susan Smith", "web developer", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"),
    new Person("./img/person2.jpg","Anna Johnson", "web designer", "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."),
    new Person("./img/person3.jpg","Peter Jones","intern","Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."),
    new Person("./img/person4.jpg","Bill Anderson","the boss","Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.")
];

const setReview = function(){
    personImg.src = persons[cur_page].img;
    personName.textContent = persons[cur_page].name;
    personPosition.textContent = persons[cur_page].position;
    personDescription.textContent = persons[cur_page].description;
}

const nextReview = function(){
    if(cur_page+1>=persons.length)
    {
        cur_page = 0;
    }
    else
    {
        cur_page++;
    }
    setReview();
}

const prevReview = function(){
    if(cur_page<=0){
        cur_page = persons.length-1;
    }
    else
    {
        cur_page--;
    }
    setReview();
}

const RandomReview = function(){
    cur_page = Math.floor(Math.random()*persons.length);    
    setReview();
}

btnNext.addEventListener("click",nextReview);
btnPrev.addEventListener("click",prevReview);
btnRandom.addEventListener("click",RandomReview);
