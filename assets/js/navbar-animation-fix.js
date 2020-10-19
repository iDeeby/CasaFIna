$('#collapse-navbar').on('show.bs.collapse', function () {
    $('.banner-header').css('transform', 'translate(-50%, 20%)')
})

$('#collapse-navbar').on('hide.bs.collapse', function () {
    $('.banner-header').css('transform', 'translate(-50%, -50%)')
})