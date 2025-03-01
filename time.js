const dateContainer=document.getElementById('datetime');

const today = new Date();

const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});

dateContainer.innerText=formattedDate;

const weekContainer=document.getElementById('weekDay');

const weekday = today.toLocaleDateString('en-US', {
    weekday: 'short'
});

weekContainer.innerText=weekday;
