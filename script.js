const article = document.getElementById('article')

const changeFn = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => {
        article.innerText = data.quote
    });
};
changeFn();