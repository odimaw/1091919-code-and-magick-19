'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_BAR = 50;
var GAP_TEXT = 30;
var GAP_TEXT_ABOVE = 20;
var GAP_RESULT = 60;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  if (arr.length === 0) {
    maxElement = 4;
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP_TEXT_ABOVE);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP_TEXT_ABOVE * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var GAP_RESULT_X = CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i;
    var barHeightI = (barHeight * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], GAP_RESULT_X, CLOUD_Y + CLOUD_HEIGHT - GAP_TEXT);
    ctx.fillText(Math.round(times[i]), GAP_RESULT_X, CLOUD_Y + CLOUD_HEIGHT - barHeightI - GAP_RESULT);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(221,' + Math.random() * 100 + '%, 49%)';
    }
    ctx.fillRect(GAP_RESULT_X, CLOUD_Y + CLOUD_HEIGHT - BAR_WIDTH, BAR_WIDTH, -barHeightI);
  }
};
