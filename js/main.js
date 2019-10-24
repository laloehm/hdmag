const autoras = $('.autoras');

autoras.on('click', '.header', function () {
    $(this).siblings().slideToggle().parent().toggleClass('active').find('.hide').css('transform', 'rotate(90deg)');
    $(this).parent().siblings().find('.body').slideUp().parent().removeClass('active').find('.hide').css('transform', 'rotate(0deg)');

    // $(this).parent().removeClass('active');
    // $(this).parent().css('background', '#fff');
    // $(this).parent().addClass('active');
    // $(this).parent().siblings().css('background', '#160812');
})

console.log(autoras);