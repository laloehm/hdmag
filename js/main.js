const autoras = $('.autoras');
const header = $('.autora .header');

autoras.on('click', '.header', function () {
    $(this).siblings().slideToggle().parent().toggleClass('active');
    $(this).parent().siblings().find('.body').slideUp().parent().removeClass('active');
    // $(this).parent().removeClass('active');
    // $(this).parent().css('background', '#fff');
    // $(this).parent().addClass('active');
    // $(this).parent().siblings().css('background', '#160812');
})

console.log(autoras);