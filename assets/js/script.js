// Start Jquery Area 
$(document).ready(function(){
    // Start Header 
       //Start Navbar 
       $('.navbuttons').click(function(){
          $(this).toggleClass('crossxs');
       });
       //Start Navbar 
    // End Header 
    // Start login box 
    $('#openform').click(function(){
      document.getElementById('form-popup').style.display = 'block';
    });
    $('#closeform').click(function(){
      document.getElementById('form-popup').style.display = 'none';
    });
    // End login box 
});
// End Jquery Area 

// Start Javascript Area 

// Start Student Count Section

var getCounterValues = document.querySelectorAll('.countervalues');
// console.log(getCounterValues);
getCounterValues.forEach(function(getCounterValue){
      getCounterValue.textContent = 0 ;
    //   console.log(getCounterValue);

    const updateCounter = function(){
        const getCountTarget = +getCounterValue.getAttribute('data-target');
        // console.log(getCountTarget);
        // console.log(typeof getCountTarget,getCountTarget);

        const getctcontent = +getCounterValue.innerText;
        // console.log(typeof getctcontent);

        const incnumber = getCountTarget / 100;

        if(getctcontent < getCountTarget){
            getCounterValue.textContent = getctcontent+incnumber;
            // getCounterValue.textContent = getctcontent + 100;
            setTimeout(updateCounter,100)
        }
    }
    updateCounter();
});



// End Student Count Section

// Start rating section 

// Start google code for chart 

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Loas',    8]
        ]);

        var options = {
          title: 'International Students',
          width : 550,
          height : 400,
          is3D : true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

// End google code for chart 

// End rating section 

const getYear = document.getElementById('getYear');
const getFullYear = new Date().getUTCFullYear();
getYear.textContent = getFullYear;

// End Javascript Area 

// 25CT 