
const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener("click", function (event) {

        if (event.target.classList.contains('finishButton')) {
            
        
            // fetch header text 
            const cardHeader = this.querySelector(".cardHeader");
            const cardHeaderText=cardHeader.innerText;

            // fetch the date and time 
            const dateTime=document.getElementById('datetime').innerText;

            // fetch cntplus 
            const cntPlus=document.getElementById('cntplus');

            // fetch cntminus
            const cntMinus=document.getElementById('cntminus');

            // fetch latest time 
            const today = new Date();
            const currentTime = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});

            // make the activity notification 
            const activityText='You have completed the task '+cardHeaderText+' issue at '+ currentTime;
            // alert(activityText);

            // catch the activity Container 
            const notificationContianer=document.getElementById('activityContainer');

            // create the p element 
            const newParagraph = document.createElement("p");

            newParagraph.textContent=activityText;
            newParagraph.classList.add("bg-slate-100", "p-3", "rounded-lg", "mt-2","text-justify");
            notificationContianer.appendChild(newParagraph);
            
            cntPlus.innerText=parseInt(cntPlus.innerText)+1;
            cntMinus.innerText=parseInt(cntMinus.innerText)-1;
            
            // fetch button 
            const completeButton=this.querySelector('.finishButton');
            completeButton.setAttribute('disabled', 'true');
            completeButton.classList.remove('bg-blue-600');
            completeButton.classList.add('bg-blue-400');

        }
    });
};
