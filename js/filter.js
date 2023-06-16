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
            "<label class='switch' onclick='filteritems("+(id)+`)'><span class='switch-texto'>${name}</span><div class='switch-wrap'><input type='radio'/><span class='botaocheckbox'></span></div></label>`
            )
    }).join('');

    const product = [
    {
        id: 1,
        image: '../img/casa1.png',
        localizacao: 'Rua da sorte 123',
        price: '270.000',
        casaouapto: '1', /* casa = 1 apto = 2 */
        m2: '110',
        banheiros: '1',
        qntandares: '1',
        qntdormitorios: '2',
        vagascarro: '',
        category: 'deficienciavisual'
    },
    {
        id: 2,
        image: '../img/casa2.jpg',
        localizacao: 'rua da abobrinha 321',
        price: '130.000',
        casaouapto: '2', /* casa = 1 apto = 2 */
        m2: '65',
        banheiros: '2',
        qntandares: '1',
        qntdormitorios: '3',
        vagascarro: '1',
        category: 'gigantismo'
    },
    {
      id: 2,
      image: '../img/casa2.jpg',
      localizacao: 'rua da abobrinha 341',
      price: '130.000',
      casaouapto: '2', /* casa = 1 apto = 2 */
      m2: '65',
      banheiros: '2',
      qntandares: '1',
      qntdormitorios: '3',
      vagascarro: '1',
      category: 'gigantismo'
  },
    {
        id: 3,
        image: '../img/casa3.png',
        localizacao: 'rua da assombração 987',
        price: '300.000',
        casaouapto: '1', /* casa = 1 apto = 2 */
        m2: '150',
        banheiros: '2',
        qntandares: '1',
        qntdormitorios: '3',
        vagascarro: '2',
        category: 'nanismo'
    },
    {
        id: 4,
        image: '../img/casa4.jpg',
        localizacao: 'rua da conceição 678',
        price: '390.000',
        casaouapto: '1', /* casa = 1 apto = 2 */
        m2: '150',
        banheiros: '2',
        qntandares: '1',
        qntdormitorios: '3',
        vagascarro: '2',
        category: 'gigantismo'
    },
    {
        id: 4,
        image: '../img/casa5.png',
        localizacao: 'rua da felicidade 545',
        price: '290.000',
        casaouapto: '1', /* casa = 1 apto = 2 */
        m2: '150',
        banheiros: '2',
        qntandares: '1',
        qntdormitorios: '3',
        vagascarro: '2',
        category: 'cadeirante'
    }
]

const categories = [...new Set(product.map((item)=>
    {return item}))]

const filteritems = (a)=>{
    const flterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
        }
    }
    displayItem(flterCategories)
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var {icones, image, m2, price, localizacao, casaouapto, qntandares, qntdormitorios, banheiros, m2, vagascarro} = item;
        return(
            `
            <div class='card'>
              <img src="${image}" id="imgbackcard" alt="">
              <div class="imoveldesc">  
                <div class="divimg">
                  <img src='${icones}' class='imgacessibilidades'>
                </div>
                <div class='cardtxt'>
                  <h2>${localizacao}</h2>
                  <h3>${m2}M²</h3>
                  <h3>R$:${price}</h3>
                </div> 
              </div> 
              <div class='info'><!--tudo aq fica no hover-->
                  <div class='descricoes'>
                  <h1>${localizacao}</h1>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-bed'></i>
                      <p>${qntdormitorios} Dormitorios</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-car'></i>
                      <p>${vagascarro} Vagas</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-regular fa-building'></i>
                      <p>${qntandares} Andares</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-shower'></i>
                      <p>${banheiros} Banheiros</p>
                    </div>
                    <div class='uncdesc'>
                      <i class='fa-solid fa-maximize'></i>
                      <p>${m2}M²</p>
                    </div>
                    <div class='uncdesc' id='centraliza'>
                      <a href='../pg/produto-especifico.html'><button class='button'>Saiba Mais</button></a>
                    </div>
                  </div>
              </div>
          </div>`)
        }).join('');
}
displayItem(categories);