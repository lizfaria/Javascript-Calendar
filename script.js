const app = {}

app.getFirstDay(theYear, theMonth){
    var firstDate = new Date(theYear, theMonth,1);
    return firstDate.getDay()
}

// getFirstDay(2018, 11);
var CURRENTDATE = new Date();
var theYear = CURRENTDATE.getFullYear();
var theMonth = CURRENTDATE.getMonth();
var theDate = CURRENTDATE.getDate();
var theDay = CURRENTDATE.getMonth();

app.NumberOfDaysInMonth = function(theMonth, theYear) {
    return new Date(theYear, theMonth, 0).getDate();
}

// 1. create a table with header of weekdays and 6 rows for date days
var days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
app.createTable = f() {
    table = $('<table>').addClass('calendar__table');
    createTableHeader(table);
}
createTableHeader = function(table) {
    for (var day of days) {
        var headerRow = $('<th>').append(day);
        $(table).append(headerRow);
    }
    createDateRows(table, headerRow);
    $('#calendar').append(table);
}

createDateRows = function(table, headerRow) {
    var newRow = ("<tr>");
    var cell = $("<td>")
    $(table).append(newRow);

    for (var i = 1; i < 43; i++) {
        $(table).append("<td name='single_day' id="+ i +">cell</td>");
        if (i % 7 == 0) {
            $(table).append(newRow);
        }
    }
    appendDateToDateRows(table, headerRow, cell);
}

// 4 loop through each day and put html text of day in table 
appendDateToDateRows = function(table, headerRow, cell) {

    var firstDay = getFirstDay(theYear, theMonth);
    var howManyDays = NumberOfDaysInMonth(theMonth, theDate);
    console.log(firstDay, howManyDays)
    for (var i = 0; i < 42; i++) {
        if (i < firstDay || i >= (howManyDays + firstDay)) {
            emptyCells(num, cell);
        } else {
             cell.text(i - firstDay + 1);   
       }
    }
}

emptyCells = function(num, cell) {
    
}


app.init = function () {
    app.createTable();
}

(function () {
    app.init();
});