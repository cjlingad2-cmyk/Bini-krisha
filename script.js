const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const happyCat = document.getElementById("happyCat");
    const loveSong = document.getElementById("loveSong");
    const card = document.getElementById("card");

    noBtn.style.left = "220px";
    noBtn.style.top = "120px";

    card.addEventListener("mousemove", (e) => {
        const rect = noBtn.getBoundingClientRect();
        const distance = Math.hypot(
            e.clientX - (rect.left + rect.width / 2),
            e.clientY - (rect.top + rect.height / 2)
        );

        if (distance < 80) {
            const cardRect = card.getBoundingClientRect();

            let newX = Math.random() * (cardRect.width - rect.width);
            let newY = Math.random() * (cardRect.height - rect.height);

            noBtn.style.left = newX + "px";
            noBtn.style.top = newY + "px";
        }
    });

    yesBtn.addEventListener("click", () => {
        happyCat.style.display = "block";
        loveSong.play();

        setInterval(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "YEHEEYYY! :)";
            heart.classList.add("hearts");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (Math.random() * 20 + 10) + "px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, 300);
    });