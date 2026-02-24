const main = async () => {
    const cards = await (await fetch("cards.json")).json();
    const random = cards[Math.floor(Math.random() * cards.length)];
    document.querySelector("#front").innerText = random["q"]; // question
    document.querySelector("#back").innerText = random["a"]; // answer
}

main();