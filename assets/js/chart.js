google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);
function drawVisualization() {
       // Some raw data (not necessarily accurate)
       var data = google.visualization.arrayToDataTable([
         ['Year', 'Total-Walk-ins', 'Registrations'],
         ['2012',  400,                 250,       ],
         ['2016',  700,                600,        ],
         ['2017',  900,                750,        ],
         ['2018',  1000,                850,       ],
       ]);

       var options = {
         vAxis: {title: 'Numbers'},
         hAxis: {title: 'Year'},
         seriesType: 'bars',
         series: {5: {type: 'line'}},
         colors: ['#9e34db', '#3598db', '#2ecc71']
       };
       var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
       chart.draw(data, options);
}
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization2);
function drawVisualization2() {
       // Some raw data (not necessarily accurate)
       var data = google.visualization.arrayToDataTable([
         ['Year', 'Prize Money(In Lakhs)'],
         ['2012', 1.5],
         ['2016', 3],
         ['2017', 5],
         ['2018', 5.6],
       ]);

       var options = {
         vAxis: {title: 'Prize-Money(in Lakhs)'},
         hAxis: {title: 'Year'},
         seriesType: 'bars',
         series: {5: {type: 'line'}},
         colors: ['#db3463']
       };
       var chart = new google.visualization.ComboChart(document.getElementById('chart_div_2'));
       chart.draw(data, options);
}
$(window).resize(function(){
  drawVisualization();
  drawVisualization2();
});
