//Задание 3
function showTemperature(cityName, temp) {
  console.log(`Сейчас в ${cityName} температура - ${temp} градусов по цельсию`);
}
showTemperature("Moscow", "20");


//Задание 4
const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Cверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость Света");
  }
}

checkSpeed(100000000);
checkSpeed(299792458);
checkSpeed(799792458);


//Задание 5
const itemName = "Tango";
const itemPrice = 90;

function currentBudget(balance) {
  if (balance >= itemPrice) {
    console.log(`Предмет ${itemName} приобретен. Спасибо за покупку!`);
  } else {
    const lowBalance = itemPrice - balance;
    console.log(`Вам не хватает ${lowBalance}, пополните баланс.`);
  }
} 

currentBudget(100)
currentBudget(80)


//Задание 6
const spellName = "Black Hole";
const manaCost = 300;

function checkMana(heroName, currentMana) {
  if (currentMana > manaCost) {
    console.log(`${heroName} успешно применил способность ${spellName}!`);
  } else if (currentMana < manaCost) {
    const missingMana = manaCost - currentMana;
    console.log(`${heroName}: не хватает ${missingMana} маны.`);
  } else {
    console.log(`${heroName}: самое время ультовать!`);
  }
}

checkMana("Enigma", 450);
checkMana("Enigma", 250);
checkMana("Enigma", 300);


//Задание 7
const CRITICAL_HEALTH_LEVEL = 25;
const myHero = "Pudge";
const myMaxHealth = 100;
let myCurrentHealth = 20;

function healHero(myHero, myMaxHealth, myCurrentHealth) {
  const missingHealth = myMaxHealth - myCurrentHealth;
  if (myCurrentHealth <= CRITICAL_HEALTH_LEVEL) {
    console.log(`${myHero} находится на грани! Нужно восстановить ${missingHealth} hp`);
  } else if (myCurrentHealth < myMaxHealth ) {
    console.log(`${myHero} ранен. Можно восстановить еще ${missingHealth} hp`);
  } else  {
    console.log(`${myHero} полностью здоров!`);
  }
}

healHero(myHero, myMaxHealth, myCurrentHealth);
healHero("Invoker", 100, 25)
healHero("Enigma", 100, 85)
healHero("Rubick", 100, 100)