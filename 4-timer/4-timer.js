// Целевая дата — 1 января 2026 года, 00:00:00
const newYear = new Date('2026-01-01T00:00:00');


// Функция для склонения слов (месяц/месяцев, день/дней и т.д.)
function pluralize(n, words) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[Math.min(n % 10, 5)]];
}

// Функции для правильного склонения единиц времени
function getMonthsText(count) {
    return pluralize(count, ['месяц', 'месяца', 'месяцев']);
}

function getDaysText(count) {
    return pluralize(count, ['день', 'дня', 'дней']);
}

function getHoursText(count) {
    return pluralize(count, ['час', 'часа', 'часов']);
}

function getMinutesText(count) {
    return pluralize(count, ['минута', 'минуты', 'минут']);
}

function getSecondsText(count) {
    return pluralize(count, ['секунда', 'секунды', 'секунд']);
}

// Функция расчёта оставшегося времени
function calculateTimeLeft() {
    const now = new Date();
    const diff = newYear - now;

    // Если Новый год уже наступил
    if (diff <= 0) {
        return 'С Новым годом!';
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    
    // Приближённое количество дней (без учёта перехода месяцев)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Приближённое количество месяцев (30.44 дня в среднем месяце)
    const months = Math.floor(days / 30.44);
    const remainingDays = days % 30.44;


    return `${months} ${getMonthsText(months)}, ` +
           `${Math.floor(remainingDays)} ${getDaysText(Math.floor(remainingDays))}, ` +
           `${hours} ${getHoursText(hours)}, ` +
           `${minutes} ${getMinutesText(minutes)}, ` +
           `${seconds} ${getSecondsText(seconds)}`;
}

// Обновление таймера каждую секунду
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = calculateTimeLeft();
}

// Запускаем обновление таймера
setInterval(updateTimer, 1000);

// Первое отображение (чтобы не ждать 1 сек)
updateTimer();
