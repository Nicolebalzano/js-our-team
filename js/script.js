const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// creo le cards
const cardsElem = document.getElementById("cards");


const createMemberCard = (member) => {
 const { name, role, email, img } = member;
return  `<div class="card mb-3 text-bg-dark" style="max-width: 540px;">
<div class="row g-0">
  <div class= "col-md-4">
    <img src= './${img}' class="img-fluid" alt='${name}'>
  </div>
  <div class="col-md-8">
    <div class="card-body py-4">
      <h3 class="card-title py-2 fw-bold">${name}</h3>
      <h5 class="card-text">${role}</h5>
      <a href="#" class="link-underline link-underline-opacity-0 fs-5"><span>${email}</span></a>
    </div>
  </div>
</div>
</div>`
}
function newCard(arrayTeam){
  let cards = '';
  for (let member of arrayTeam){
    console.log(member);
    cards += createMemberCard(member);
  }
  cardsElem.innerHTML = cards;
}
newCard(teamMembers);
