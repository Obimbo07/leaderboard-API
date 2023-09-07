const getScore = async () => {
  const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9Zauo9h1pY6f15rihTkl/scores/';
  const response = await fetch(scoreURL);
  const data = await response.json();
  const gamesData = data.result;
  const scoreList = document.getElementById('score-list');

  gamesData.forEach((data) => {
    const list = document.createElement('li');
    list.textContent = `${data.user}: ${data.score}`;
    scoreList.appendChild(list);
  });
};

export default getScore;