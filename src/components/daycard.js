function renderDayCard(day) {
    const dayCard = document.createElement('p');
    dayCard.textContent = day.temp;
    return dayCard;
}

export { renderDayCard };