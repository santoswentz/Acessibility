const btns=[
    {
        id: 1,
        name: 'Deficiencias Visuais'
    },
    {
        id: 2,
        name: 'Idoso'
    },
    {
        id: 3,
        name: 'Nanismo'
    },
    {
        id: 4,
        name: 'Gigantismo, Acromegalia'
    },
    {
        id:5,
        name: 'Cadeirante'
    },
]
const filters = [...new Set(btns.map((btn)=>
    {return btn}))]
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<label class='switch' onclick='filteritems("+(id)+`)'><span class='switch-texto'>${name}</span><div class='switch-wrap'><input type='checkbox'/><span class='botaocheckbox'></span></div></label>`
            )
    }).join('');

    const product = [
    {
        id: 1,
        image: '../img/casa1.png',
        localizacao: 'Rua da sorte 123',
        price: '270.000',
        category: 'deficienciavisual'
    },
    {
        id: 2,
        image: '../img/casa2.jpg',
        localizacao: 'rua da abobrinha 321',
        price: '130.000',
        category: 'gigantismo'
    },
    {
        id: 3,
        image: '../img/casa3.png',
        localizacao: 'rua da assombração 987',
        price: '300.000',
        category: 'nanismo'
    },
    {
        id: 4,
        image: '../img/casa4.jpg',
        localizacao: 'rua da conceição 678',
        price: '390.000',
        category: 'gigantismo'
    },
    {
        id: 5,
        image: '../img/casa5.png',
        localizacao: 'rua da felicidade 545',
        price: '290.000',
        category: 'cadeirante'
    }
]

const categories = [...new Set(product.map((item)=>
    {return item}))]

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var {image, title, price, localizacao} = item;
        return(
            `
            <div class='card'>
              <img src="${image}" id="imgbackcard" alt="">
              <div class="imoveldesc">  
                <div class="divimg">
                  <img src='../img/gnomo.png' class='imgacessibilidades'> 
                  <img src='../img/incapacidade.png'  class='imgacessibilidades'>
                  <img src='../img/velho.png'  class='imgacessibilidades'>
                </div>
                <div class='cardtxt'>
                  <h2>${localizacao}</h2>
                  <h3>M²</h3>
                  <h3>${price}</h3>
                </div> 
              </div> 
              <div class='info'><!--tudo aq fica no hover-->
                  <div class='descricoes'>
                  <h1>Rua *******</h1>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-bed'></i>
                      <p>1 Dormitório</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-car'></i>
                      <p>2 Vagas</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-regular fa-building'></i>
                      <p>4° Andar</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-shower'></i>
                      <p>1 Chuveiro</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-maximize'></i>
                      <p>72m²</p>
                    </div>
                    <div class='uncdesc' id='centraliza'>
                      <a href=''><button class='button'>Saiba Mais</button></a>
                    </div>
                  </div>
              </div>
          </div>`)
        }).join('');
}
displayItem(categories);