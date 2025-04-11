let totalClicks = 0;
let clicksInCurrentSecond = 0;
let maxClickPerSecond = 0;
// Обновление статистики кликов
function updateStats() {
    document.getElementById('totalClicks').textContent = totalClicks;
    document.getElementById('clicksPerSecond').textContent = clicksInCurrentSecond;
    document.getElementById('maxclicksPerSecond').textContent = maxClickPerSecond;
}

// Сброс кликов в секунду каждую секунду
setInterval(() => {
    if (clicksInCurrentSecond > maxClickPerSecond) {
        maxClickPerSecond = clicksInCurrentSecond;
        }
    clicksInCurrentSecond = 0;
    updateStats();
}, 1000);

// Обработчик кликов по кнопке
document.getElementById('clickButton').addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное меню браузера
    totalClicks++;
    clicksInCurrentSecond++;
    updateStats();
});