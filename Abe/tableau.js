var viz;

window.onload = function(){
    var vizDiv = document.getElementById('myViz');
    var vizURL = "https://public.tableau.com/profile/abdallah2505#!/vizhome/Lottery_years/FIRST?publish=yes";
    var options = {
        width: '600px',
        height: '540px'
    };
    viz = new.tableau.Viz(vizDiv, vizURL, options);
}


var tableau;
