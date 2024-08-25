//Atributo data-img card notícias topo
document.querySelectorAll('.card_top--news').forEach(element => {
    const imgUrl = element.getAttribute('data-img');
    element.style.backgroundImage = `url(${imgUrl})`;
});

