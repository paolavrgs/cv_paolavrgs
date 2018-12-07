const qtrf = {
  company_name: 'QTRF Net Consulting C.A',
  year: 'January 2018',
  type: 'Web',
  description: 'Lorem ipsum...',
  video: 'assets/img/qtrf.mp4'
}

const keppler = {
  company_name: 'Keppler Admin',
  year: 'August 2018',
  type: 'App',
  description: 'Lorem ipsum...',
  video: ''
}

const prodesa = {
  company_name: 'Prodesa',
  year: 'December 2017',
  type: 'Web',
  description: 'Lorem ipsum...',
  video: ''
}

const project = $('.item a')
var arr = []
for (let i=0; i<project.length; i++) {
  arr.push(project[i].dataset.project)
}
console.log(arr)


$('.modal').on('shown.bs.modal', function () {
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
})