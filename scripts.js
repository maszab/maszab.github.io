let currentPhoto = 0
let counter = 0
let imagesData = [{
    photo: './images/egy.jpg',
    title: 'Teniszlabda',
    description: 'A teniszlabda egy sportszer, amelyet legfőképpen a tenisz sportágában használnak. A jelentősebb tenisztornákon általában a fényes sárga labda a leginkább elterjedt, a versenyen kívüli, szabadidős céllal űzött játékban viszont gyakorlatilag bármilyen színű labdát lehet használni.'
  },
  {
    photo: './images/ketto.jpg',
    title: 'Himalája',
    description: 'A Himalája az Eurázsiai-hegységrendszer része, amely a Tibet és az indiai szubkontinens között húzódik. Itt található a Föld legmagasabb hegycsúcsa, a 8848 - 8850 méter magas Csomolungma (angol nevén Mount Everest). Tágabb értelemben véve a hegységrendszer részét képezik a Pamír, a Hindukus és a Karakorum hegyvonulatai is.'
  },
  {
    photo: './images/harom.jpg',
    title: 'Vízilabda',
    description: 'A vízilabda vagy régebbi elnevezéssel vízipóló olyan labdajáték, melyet két, 7–7 fős csapat (hat mezőnyjátékos + egy kapus) vív egymás ellen egy medencében.'
  },
  {
    photo: './images/negy.jpg',
    title: 'Unicode',
    description: 'A Unicode (ejtsd: junikód) a különböző írásrendszerek egységes kódolását és használatát leíró nemzetközi számítástechnikai iparági szabvány. A Unicode nemcsak a karakterkódolással, hanem a karakterek osztályozásával, megjelenítésével és használatával is részletesen foglalkozik.'
  },
  {
    photo: './images/ot.jpg',
    title: 'Orinoco',
    description: 'Az Orinoco (Río Orinoco) Dél-Amerika egyik leghosszabb folyója, hossza 2140 km, vízgyűjtő területe 880 000 km² nagyságú. Ennek 76,3%-a Venezuelában, a többi része része pedig Kolumbiában található. Az Orinoco a fő közlekedési út Venezuela keleti és belföldi területei, valamint a kolumbiai llanók között.'
  },
  {
    photo: './images/hat.jpg',
    title: 'Szuburbanizáció',
    description: 'A szuburbanizáció a városszéli területek népességgyarapodásának a folyamata, amelynek során a város belső területein élők egy része a város szélére költözik, rendszerint a jobb környezeti viszonyok, és az elérhető ingatlanárak függvényében.'
  },
  {
    photo: './images/het.jpg',
    title: 'Macskakígyó',
    description: 'A zöld macskakígyó (Boiga cyanea) a hüllők (Reptilia) osztályának pikkelyes hüllők (Squamata) rendjébe, ezen belül a siklófélék (Colubridae) családjába tartozó Délkelet-Ázsiában honos, fán lakó, hátsóméregfogas siklófaj.'
  }];
  let photoCount = imagesData.length;

  function displayMyPic(picIndex) {
    $('.pic').attr('src', imagesData[picIndex].photo)
    $('#photo-title').text(imagesData[picIndex].title)
    $('#photo-description').text(imagesData[picIndex].description)
  }

  function thumbnailsFunction(index) {
    $('.thumbnails').append(`<div class="thumbConti"><div class="thumbTitle">${index.title}</div><img class="thumb" src=${index.photo} alt=${index.title} id=${counter}></div>`)
    counter++
  } 

  function removeActiveThumb(nr) {
    $('#' +nr).css('border','none')
    $('#' +nr).css('opacity','0.4') 
  }

  function setActiveThumb (nr){
    $('#' +nr).css('border','solid 5px #f2f2f2')
    $('#' +nr).css('opacity','1')
  }

displayMyPic(currentPhoto)

$('.button2').click(() => {
  if (currentPhoto<6) {
    removeActiveThumb(currentPhoto)
    currentPhoto++
    displayMyPic(currentPhoto)
    setActiveThumb(currentPhoto)
  }
  else {
    removeActiveThumb(currentPhoto)
    currentPhoto=0
    displayMyPic(currentPhoto)
    setActiveThumb(currentPhoto)}
}
)

$('.button1').click(() => {
  if (currentPhoto>0) {
    removeActiveThumb(currentPhoto)
    currentPhoto--
    displayMyPic(currentPhoto)
    setActiveThumb(currentPhoto)
  } else {
    removeActiveThumb(currentPhoto)
    currentPhoto=6
    displayMyPic(currentPhoto)
    setActiveThumb(currentPhoto)
  }
})

imagesData.forEach(thumbnailsFunction)

setActiveThumb(currentPhoto)

$('.thumb').click((event) => {
  let indexClicked = $(event.target).attr('src')
  removeActiveThumb(currentPhoto)
  currentPhoto = imagesData.findIndex(x => x.photo === indexClicked)
  setActiveThumb(currentPhoto)
  displayMyPic(currentPhoto)
})

