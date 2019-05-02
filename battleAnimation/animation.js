
    //show css animation enemy not dead
    $('.battle-fighters:eq(1)').addClass('animation-opponent');
    $('.battle-fighters:eq(1)').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $('.battle-fighters:eq(1)').removeClass('.animation-opponent');

        
    //show css animation if character is not dead
    $('.battle-fighters:eq(0)').addClass('animation-character');
    $('.battle-fighters:eq(0)').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $('.battle-fighters:eq(0)').removeClass('animation-character');