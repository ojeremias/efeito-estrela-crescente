const bubbleWrapper = document.querySelector('.bolhas')
const bubbleLength = bubbleWrapper.dataset.length

{/* <span style ="--i:13"></span> */}

for(let i = 0; i < 192; i++) {
    const span = document.createElement('span')
    const randomPosition = Math.random() * (10 - 1) + 1;
    const colors = ["#fff", "#0f0", "#f00", "#00f"];
    const randomColor = Math.ceil(Math.random() * 4) - 1
    const colorSelected = colors[randomColor]

    span.setAttribute("style", `--i:${randomPosition}`);
    // span.style.background = colorSelected

    bubbleWrapper.append(span)
}