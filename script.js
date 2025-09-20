const icons = document.querySelectorAll('.icon');
const hero = document.querySelector('.hero');
const heroWidth = window.innerWidth;
const heroHeight = window.innerHeight;
icons.forEach(icon => {
    icon.style.left = Math.random() * (heroWidth - 100) + 'px';
    icon.style.top = Math.random() * (heroHeight - 100) + 'px';
    icon.dataset.vx = (Math.random() * 1.5 + 0.5) * (Math.random() < 0.5 ? -1 : 1);
    icon.dataset.vy = (Math.random() * 1.5 + 0.5) *(Math.random() < 0.5 ? -1 : 1);
});
function animate(){
    icons.forEach(icon => {
        let x = parseFloat(icon.style.left);
        let y = parseFloat(icon.style.top);
        let vx = parseFloat(icon.style.vx);
        let vy = parseFloat(icon.dataset.vy);
        x += vx;
        y += vy;
        if(x <= 0 || x >= heroWidth - 80){
            vx *= -1;
        }

        if(y <= 0 || y >= heroHeight - 80){
            vy *= -1;

        }
        icon.style.left = x + 'px';
        icon.style.top = y + 'px';
        icon.dataset.vx = vx;
        icon.dataset.vy = vy;
    });
    requestAnimationFrame(animate);
}
animate();
    

