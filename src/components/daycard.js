import './daycard.css';

function renderDayCard(day) {
    const dayCard = document.createElement('div');
    dayCard.classList.add('day-card');

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-container');
    const date = new Date(day.datetime).toString().substring(0,15);
    const dayOfWeek = document.createElement('p');
    dayOfWeek.textContent = date.substring(0,3);
    dateContainer.appendChild(dayOfWeek);
    const dayFull = document.createElement('p');
    dayFull.textContent = date.substring(3,10);
    dateContainer.appendChild(dayFull);
    dayCard.appendChild(dateContainer);

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('temp-container');
    const tempHi = document.createElement('p');
    tempHi.textContent = day.maxt;
    tempContainer.appendChild(tempHi);
    const tempMid = document.createElement('p');
    tempMid.textContent = day.temp;
    tempContainer.appendChild(tempMid);
    const tempLo = document.createElement('p');
    tempLo.textContent = day.mint;
    tempContainer.appendChild(tempLo);
    dayCard.appendChild(tempContainer);

    const conditions = document.createElement('p');
    conditions.classList.add('conditions');
    conditions.textContent = day.conditions;
    dayCard.appendChild(conditions);

    return dayCard;
}

export { renderDayCard };