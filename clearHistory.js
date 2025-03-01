const clearHistory=document.getElementById('clearHistory');
clearHistory.addEventListener('click',function(){
    const historyContainer=document.getElementById('activityContainer');
    historyContainer.innerHTML=" ";
});