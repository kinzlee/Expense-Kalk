const  individual  = {
    name : 'Nido Tunik',
    age : 20,
    height : '6ft',
    profession : 'software developer',
    location : {
        continent : 'africa',
        temp : 24,
        country : {
            countryName : 'Nigeria',
            state : 'Lagos',
            city : 'surulere'
        }
    }
}

const {name, age, profession} = individual;
const {continent, temp} = individual.location
const {countryName, state, city} = individual.location.country;

console.log(`I am ${name}, and i am ${age} years of age, i work as a ${profession}, and i live in ${continent},
 which is ${temp} degree celcious, in ${continent} i live in a country called ${countryName} in ${state} state, and a city called ${city}.`)


 const book = {
     name : 'nido vs odin',
     author: 'Nido tunik',
     bestSeller: 'yes it is',
     publisher : {
        //  name: 'clark cent',
         company: 'donemgo plc'

     }
 }

 const {name: firstName, author, bestSeller} = book;
 const {name:publisherName = 'anonymous', company} = book.publisher;

 console.log(`this book is called ${firstName}, and it was authored by ${author} and ${bestSeller} a best seller,
  also it was personaly published by ${publisherName} and the company ${company}`);



 const item  = ['cofee(hot)', '#30', '#60', '#75', '#100'];

 const [tea, , medprice] = item;

 console.log(`i want to buy ${tea} and it costs ${medprice}`);

