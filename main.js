onload = () =>{
        document.body.classList.remove("container");
};

const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    cursor.style.animation = 'brillo 0.3s ease-out';
    
    cursor.addEventListener('animationend', () => {
        cursor.remove();
    });
});

