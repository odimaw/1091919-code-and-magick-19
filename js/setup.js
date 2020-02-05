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

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// var windowSettingsPersonage = document.querySelector('.setup');
// windowSettingsPersonage.classList.remove('hidden');

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

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var windowSettingsPersonage = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = windowSettingsPersonage.querySelector('.setup-close');
var setupUserName = windowSettingsPersonage.querySelector('.setup-user-name');
var wizardCoat = windowSettingsPersonage.querySelector('.setup-wizard').querySelector('.wizard-coat');
var wizardEyes = windowSettingsPersonage.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var setupFireballWrap = windowSettingsPersonage.querySelector('.setup-fireball-wrap');
var eyesColor = windowSettingsPersonage.querySelector('input[name="eyes-color"]');
var coatColor = windowSettingsPersonage.querySelector('input[name="coat-color"]');

var onKeydownEsc = function (evt) {
  if (evt.key === ESC_KEY) {
    onSpanCloseClick();
  }
};

var onAvatarClick = function () {
  windowSettingsPersonage.classList.remove('hidden');
  document.addEventListener('keydown', onKeydownEsc);
};

var onSpanCloseClick = function () {
  windowSettingsPersonage.classList.add('hidden');
  document.removeEventListener('keydown', onKeydownEsc);
};

var onInputSetupUserNameClick = function () {
  document.removeEventListener('keydown', onKeydownEsc);
};

var onSetupUserNameOnblur = function () {
  document.addEventListener('keydown', onKeydownEsc);
};

var onWizardCoatClick = function () {
  wizardCoat.style.fill = coatColors[getRandomInRange(0, 5)];
  coatColor.value = wizardCoat.style.fill;
};

var onWizardEyesClick = function () {
  wizardEyes.style.fill = eyesColors[getRandomInRange(0, 4)];
  eyesColor.value = wizardEyes.style.fill;
};

var onFireballWrapClick = function () {
  setupFireballWrap.style.backgroundColor = fireballColors[getRandomInRange(0, 4)];
};

setupOpen.addEventListener('click', function () {
  onAvatarClick();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onAvatarClick();
  }
});

setupClose.addEventListener('click', function () {
  onSpanCloseClick();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    onSpanCloseClick();
  }
});

setupUserName.addEventListener('click', function () {
  onInputSetupUserNameClick();
});

setupUserName.addEventListener('keydown', function () {
  onInputSetupUserNameClick();
});

setupUserName.onblur = function () {
  onSetupUserNameOnblur();
};

wizardCoat.addEventListener('click', function () {
  onWizardCoatClick();
});

wizardEyes.addEventListener('click', function () {
  onWizardEyesClick();
});

setupFireballWrap.addEventListener('click', function () {
  onFireballWrapClick();
});

