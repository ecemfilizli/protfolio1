var Projedata = document.querySelector('.projects_img');

var ProjeDetail = [
    {resim:"assets/img/project1.jpg" , alt:""},
    {resim:(document.getElementById("photos").src="assets/img/project1.jpg") ,alt:""},
    {resim:"./image/abc.jpg",alt:""},
    {resim:"./image/abc.jpg", alt:""},
]

document.getElementById('projecard').innerHTML = ProjeDetail.map(Proje => 
    `<div>
      
      <img>resim: ${Proje.resim}</img>
      <div>alt: ${Proje.alt}</div>
    </div>
    `
).join('')

/*=============== FILTERS TABS ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
