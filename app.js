const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()

    console.log(data)
    document.getElementById("title").textContent = `Advice #${data.slip.id}`;
    document.getElementById("quote").textContent = `${data.slip.advice}`;
}

fetchAdvice()
// const btn = document.getElementById("generateBtn");
// btn.addEventListener('click', fetchAdvice)


