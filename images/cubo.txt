const cube = document.getElementById('cube');
let isDragging = false;
let previousX = 0;
let previousY = 0;
let rotationX = 45;
let rotationY = 45;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  previousY = e.clientY;
});

cube.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - previousX;
    const deltaY = e.clientY - previousY;

    rotationX -= deltaY / 2;
    rotationY += deltaX / 2;

    cube.style.transform = rotateX`(${rotationX}deg)`; rotateY`(${rotationY}deg)`;

    previousX = e.clientX;
    previousY = e.clientY;
  }
});

cube.addEventListener('mouseup', () => {
  isDragging = false;
});

cube.addEventListener('mouseleave', () => {
  isDragging = false;
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('faceHour').innerText = `${hours}:${minutes}`;
    
    requestAnimationFrame(updateClock);
  }
  
  updateClock();
  
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('faceHour').innerText = hours;
    document.getElementById('faceMinute').innerText = minutes;
    
    requestAnimationFrame(updateClock);
  }
  
  updateClock();

  function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  document.getElementById('faceHour').innerText = hours;
  document.getElementById('faceMinute').innerText = minutes;
  document.getElementById('faceSecond').innerText = seconds;
  
  requestAnimationFrame(updateClock);
}

updateClock();

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('faceHour').innerText = hours;
    document.getElementById('faceMinute').innerText = minutes;
    document.getElementById('faceSecond').innerText = seconds;
    
    requestAnimationFrame(updateClock);
  }
  
  updateClock();
  
  function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  document.getElementById('faceHour').innerText = hours;
  document.getElementById('faceMinute').innerText = minutes;
  document.getElementById('faceSecond').innerText = seconds; // Actualiza la cara de los segundos
  
  requestAnimationFrame(updateClock);
}

updateClock();