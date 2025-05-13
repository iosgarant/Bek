function setLanguage(lang) {
  alert("Til o'zgartirildi: " + lang);
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('data/services.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('services-list');
      data.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service.name + " – " + service.price;
        list.appendChild(li);
      });
    });
});
