var roster = [];


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
    var card = $('<div>').addClass('card');
    card.append($('<p>').text(roster[i].name));
    card.append($('<p>').text(roster[i].healthPoints));
    card.append($('<p>').text(roster[i].attackPower));
    card.append($('<p>').text(roster[i].counterAttackPower));
    card.addClass('col-sm-2');
    $('.roster').append(card);
};

$('.card').click(function() {
    $('.active').append($(this));
})