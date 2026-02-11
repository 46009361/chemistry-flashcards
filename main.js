const main = async () => {
    const cards = await (await fetch("cards.json")).json();
    const random = cards[Math.floor(Math.random() * cards.length)];
    document.querySelector("#front").textContent = random["q"]; // question
    document.querySelector("#back").textContent = random["a"]; // answer
}

main();