var roster = [];
var activeCard;
var activeIndex;
var enemyIndex;
var enemyCard;
var activeHealth;
var enemyHealth;
var compounder;
var image;

function Character(name, healthPoints, attackPower, counterAttackPower, image) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.image = image;
};

roster.push(new Character('Arthas Menethil', 600, 25, 40, 'assets/images/arthas.jpg'));
roster.push(new Character('Jaina Proudmoore', 400, 70, 40, 'assets/images/jaina.jpg'));
roster.push(new Character('Illidan Stormrage', 500, 40, 50, 'assets/images/illidan.jpg'));
roster.push(new Character('Sylvanas Windrunner', 450, 60, 35, 'assets/images/sylvanas.jpg'));
roster.push(new Character('Grom Hellscream', 300, 95, 70, 'assets/images/grom.jpg'));

for (i = 0; i < roster.length; i++) {
    var card = $('<div>').addClass('roster card').val(i);
    card.append($('<p>').text(roster[i].name));
    card.append($('<p>').text('Health Points: ' + roster[i].healthPoints));
    card.append($('<p>').text('Attack Power: ' + roster[i].attackPower));
    card.append($('<p>').text('Counterattack: ' + roster[i].counterAttackPower));
    $('.grid-container').append(card);
};


$('.roster').click(function() {
    if (!activeCard) {
        activeCard = $(this);
        activeIndex = $(this).val();
        compounder = roster[activeIndex].attackPower;
        activeHealth = roster[activeIndex].healthPoints;
        image = roster[activeIndex].image;
        activeCard.removeClass('roster').addClass('active');
        $('.roster').removeClass('roster').addClass('enemy');
        $('.grid-container').append($('<div>').addClass('health').html('<h1>HP: ' + activeHealth + '<br>Attack: ' + roster[activeIndex].attackPower + '</h1>'));
        $('.grid-container').append($('<img>').addClass('activeImage').attr('src', image));
    } else if (!enemyCard) {
        enemyCard = $(this);
        enemyIndex = $(this).val();
        enemyHealth = roster[enemyIndex].healthPoints;
        image = roster[enemyIndex].image;
        enemyCard.removeClass('enemy').addClass('opponent');
        $('.victory').remove();
        $('.grid-container').append($('<div>').addClass('enemyHealth').html('<h1>HP: ' + enemyHealth + '<br>Counter: ' + roster[enemyIndex].counterAttackPower + '</h1>'));
        $('.grid-container').append($('<img>').addClass('opponentImage').attr('src', image));
    }
});

$('.grid-container').append($('<button>').text('ATTACK').click(function(){
    if (enemyCard) {
        enemyHealth-=roster[activeIndex].attackPower;
        $('.enemyHealth').html('<h1>HP: ' + enemyHealth + '<br>Counter: ' + roster[enemyIndex].counterAttackPower + '</h1>');
        activeHealth-=roster[enemyIndex].counterAttackPower;
        roster[activeIndex].attackPower+=compounder;
        $('.health').html('<h1>HP: ' + activeHealth + '<br>Attack: ' + roster[activeIndex].attackPower + '</h1>');
        if (enemyHealth <= 0) {
            enemyCard.remove();
            enemyCard = null;
            $('.enemyHealth').remove();
            $('.opponentImage').remove();
            $('.grid-container').append($('<div>').addClass('victory').html('<h1>Defeated! Choose another opponent.</h1>'));
        }
    }
}));


