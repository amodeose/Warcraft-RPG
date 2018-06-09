var roster = [];
var activeCard;
var activeIndex;
var enemyIndex;
var enemyCard;
var activeHealth;
var enemyHealth;
var compounder;

function Character(name, healthPoints, attackPower, counterAttackPower, image) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    this.image = image;
};

roster.push(new Character('Arthas Menethil', 300, 20, 30, 'assets/images/arthas.jpg'));
roster.push(new Character('Jaina Proudmoore', 200, 30, 20));
roster.push(new Character('Illidan Stormrage', 250, 25, 25));
roster.push(new Character('Sylvanas Windrunner', 250, 25, 20));
roster.push(new Character('Grom Hellscream', 300, 20, 25));

for (i = 0; i < roster.length; i++) {
    var card = $('<div>').addClass('roster').val(i);
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
        activeCard.removeClass('roster').addClass('active');
        $('.roster').removeClass('roster').addClass('enemy');
        $('.grid-container').append($('<div>').addClass('health').html('<h1>HP: ' + activeHealth + '</h1>'));
    } else if (!enemyCard) {
        enemyCard = $(this);
        enemyIndex = $(this).val();
        enemyHealth = roster[enemyIndex].healthPoints;
        enemyCard.removeClass('enemy').addClass('opponent');
        $('.grid-container').append($('<div>').addClass('enemyHealth').html('<h1>HP: ' + enemyHealth + '</h1>'));
    }
});

$('.grid-container').append($('<button>').text('ATTACK').click(function(){
            enemyHealth-=roster[activeIndex].attackPower;
            $('.enemyHealth').find('h1').text('HP: ' + enemyHealth);
            activeHealth-=roster[enemyIndex].counterAttackPower;
            $('.health').find('h1').text('HP: ' + activeHealth);
            roster[activeIndex].attackPower+=compounder;
            if (enemyHealth <= 0) {
                enemyCard.remove();
                enemyCard = null;
                $('.enemyHealth').remove();
            }
}));


