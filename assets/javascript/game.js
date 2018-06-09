var roster = [];
var activeCard = false;
var activeIndex;
var enemyIndex;
var enemyCard = false;
var activeHealth;
var enemyHealth;
var compounder;

function Character(name, healthPoints, attackPower, counterAttackPower) {
    this.name = name;
    this.image = "image";
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
}

roster.push(new Character('Arthas Menethil', 300, 20, 30));
roster.push(new Character('Jaina Proudmoore', 200, 30, 20));
roster.push(new Character('Illidan Stormrage', 250, 25, 25));
roster.push(new Character('Sylvanas Windrunner', 250, 25, 20));
roster.push(new Character('Grom Hellscream', 300, 20, 25));

for (i = 0; i < roster.length; i++) {
    var card = $('<div>').addClass('card').val(i);
    card.append($('<p>').text(roster[i].name));
    card.append($('<p>').text('Health Points: ' + roster[i].healthPoints));
    card.append($('<p>').text('Attack Power: ' + roster[i].attackPower));
    card.append($('<p>').text('Counterattack Power: ' + roster[i].counterAttackPower));
    card.addClass('col-sm-2');
    $('.roster').append(card);
};

$('.card').click(function() {
    if (!activeCard) {
        $('.active').append($(this));
        activeIndex = $(this).val();
        activeCard = $(this);
        compounder = roster[activeIndex].attackPower;
        activeHealth = roster[activeIndex].healthPoints;
        $('.active').append($('<h1>').text('HP: ' + activeHealth));
    } else if (!enemyCard) {
        $('.enemy').append($(this));
        enemyIndex = $(this).val();
        enemyCard = $(this);
        enemyHealth = roster[enemyIndex].healthPoints;
        $('.enemy').append($('<h1>').text('HP: ' + enemyHealth));
        $('.enemy').append($('<button>').text('ATTACK').click(function(){
            enemyHealth-=roster[activeIndex].attackPower;
            $('.enemy').find('h1').text('HP: ' + enemyHealth);
            activeHealth-=roster[enemyIndex].counterAttackPower;
            $('.active').find('h1').text('HP: ' + activeHealth);
            roster[activeIndex].attackPower+=compounder;
            if (enemyHealth <= 0) {
                enemyCard.remove();
                enemyCard = null;
                $('.enemy').find('h1').remove();
                $(this).remove();
            }
        }));
    };
})


