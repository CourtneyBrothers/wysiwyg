let arrayOfFamousPeople = [
    {
        title: "Beyonce",
        name: "Destiny's Child Beyonce",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "img/destiny.jpg",
        lifespan: {
             birth: 1997,
            death: 2006
        }
    },
    {
        title: "Beyonce",
        name: "Dangerously in love Beyonce",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "img/dangerousb.jpeg",
        lifespan: {
          birth: 2003,
          death: 2006
        }
    },
        {
            title: "Beyonce",
            name: "B-day Beyonce",
            bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
            image: "img/beyonceirrep.jpg",
            lifespan: {
              birth: 2006,
              death: 2008
            }
        },
        {
            title: "Beyonce",
            name: "Sasha Fierce",
            bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
            image: "img/singleb.jpg",
            lifespan: {
              birth: 2008,
              death: 2011
            }
        },
            {
                title: "Beyonce",
                name: "Year of 4 Beyonce",
                bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
                image: "img/Beyonce-Party.gif",
                lifespan: {
                  birth: 2011,
                  death: 2013
                }
            },
            {
                title: "Beyonce",
                name: "Beyonce",
                bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
                image: "img/beyoncexo.gif",
                lifespan: {
                  birth: 2013,
                  death: 2016
                }
            },
            {
                title: "Beyonce",
                name: "Lemonade",
                bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
                image: "img/lemonadebeyonce.jpg",
                lifespan: {
                  birth: 2016,
                  death: "never"
                }
            }
    ];

let mainDiv = document.getElementById("main-div");
let textInput = document.createElement("input");
textInput.type = "text";
mainDiv.appendChild(textInput);

let container = document.getElementById("container");

for (i=0; i < arrayOfFamousPeople.length; i++){
    let container = document.getElementById("container");
   card = document.createElement("div");
   card.classList.add ("card");

   container.appendChild(card);
   card.innerHTML = `<h1>${arrayOfFamousPeople[i].title}</h1><h2>${arrayOfFamousPeople[i].name}</h2><section>${arrayOfFamousPeople[i].bio}<img src = ${arrayOfFamousPeople[i].image}></section><footer>${arrayOfFamousPeople[i].lifespan.birth}-${arrayOfFamousPeople[i].lifespan.death}</footer>`;
   console.log("here");
   
   };
   
cards = document.getElementsByClassName("card");
console.log(cards);
for (i=0; i < cards.length; i++){
    console.log(cards.length);
    card.addEventListener("click", () => card.style.border = "1px dotted black");
};