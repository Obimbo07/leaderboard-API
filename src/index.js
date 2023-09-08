/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './index.css';
import Data from './modules/data.js';
import getScore from './modules/getscore.js';
import addscore from './modules/addscore.js';

const formData = document.getElementById('form');
const refreshBtn = document.getElementById('refresh-btn');
const scoreList = document.getElementById('score-list');

formData.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  const name = inputName.value;
  const score = inputScore.value;
  const newData = new Data(name, score);
  await addscore(newData);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

refreshBtn.addEventListener('click', () => {
  scoreList.innerHTML = '';
  getScore();
});

window.addEventListener('load', () => {
  scoreList.innerHTML = '';
  getScore();
});