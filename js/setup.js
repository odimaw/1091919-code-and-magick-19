'use strict';

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var windowSettingsPersonage = document.querySelector('.setup');
windowSettingsPersonage.classList.remove('hidden');

var personages = [];

for (var i = 0; i < 4; i++) {
  personages.push({
    name: names[getRandomInRange(0, 7)] + ' ' + surnames[getRandomInRange(0, 7)],
    coatColor: coatColors[getRandomInRange(0, 5)],
    eyesColor: eyesColors[getRandomInRange(0, 4)],
  });
}

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderPersonage = function (namber) {
  var randomPersonage = similarWizardTemplate.cloneNode(true);
  randomPersonage.querySelector('.setup-similar-label').textContent = personages[namber].name;
  randomPersonage.querySelector('.wizard-coat').style.fill = personages[namber].coatColor;
  randomPersonage.querySelector('.wizard-eyes').style.fill = personages[namber].eyesColor;
  return randomPersonage;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < 4; j++) {
  fragment.appendChild(renderPersonage(j));
}

setupSimilarList.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
