const autoras = $('.autoras');

autoras.on('click', '.header', function () {
    $(this).siblings().slideToggle().parent().toggleClass('active').find('.hide').toggleClass('h-active');
    $(this).parent().siblings().find('.body').slideUp().parent().removeClass('active').find('.hide').removeClass('h-active');
})

console.log(autoras);