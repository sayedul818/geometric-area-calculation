// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener for mouseover to change triangle container background color
document.getElementById('triangle-box').addEventListener('dblclick', function(){
    const triangleContainer = document.getElementById('triangle-box');
    triangleContainer.style.backgroundColor = getRandomColor();
});
document.getElementById('rectangle-box').addEventListener('dblclick',function(){
    const rectangleContainer = document.getElementById('rectangle-box');
    rectangleContainer.style.backgroundColor = getRandomColor();
});
document.getElementById('parallelogram-box').addEventListener('dblclick',function(){
    const parallelogramContainer = document.getElementById('parallelogram-box');
    parallelogramContainer.style.backgroundColor = getRandomColor();
});
document.getElementById('rhombus-box').addEventListener('dblclick',function() {
    const rhombusContainer = document.getElementById('rhombus-box');
    rhombusContainer.style.backgroundColor =getRandomColor();
});
document.getElementById('pentagon-box').addEventListener('dblclick', function(){
    const pentagonContainer = document.getElementById('pentagon-box');
    pentagonContainer.style.backgroundColor = getRandomColor();
});
document.getElementById('oval-box').addEventListener('dblclick',function(){
    const ovalContainer = document.getElementById('oval-box');
    ovalContainer.style.backgroundColor = getRandomColor();
});
