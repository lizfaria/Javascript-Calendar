const app = {}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

selectedMonth = 11;
const CURRENTDATE = new Date(2018, selectedMonth);
const theYear = CURRENTDATE.getFullYear();
const theMonth = CURRENTDATE.getMonth();
const theDate = CURRENTDATE.getDate();
console.log(CURRENTDATE, theYear, theMonth, theDate)

app.previousMonth = function() {

}

app.nextMonth = function() {

}

app.getFirstDay = function (theYear, theMonth) {
    const firstDate = new Date(theYear, theMonth, 1);
    return firstDate.getDay()
}

app.numberOfDaysInMonth = function() {
    return new Date(theYear, theMonth, 0).getDate();
}

app.createElementWithClass = function(elem, className) {
    const a = document.createElement(elem);
    a.classList.add(className);
    return a;
}
app.createContainer = function() {
    const container = app.createElementWithClass('ul', 'calendar-container');
    app.createHeader(container);
}

app.createHeader = function(container) {
    days.forEach((day) => {
        const headerRow = document.createElement('h4');
        const text = document.createTextNode(day);       
        headerRow.appendChild(text);
        document.getElementById('calendar').appendChild(headerRow);
    }); 
    app.createDateCells(container);
}

app.createDateCells = function(container) {
    const cells = Array.from(Array(43).keys())
    cells.forEach((cell) => {
        const elem = document.createElement('li');
        elem.classList.add('day');
        elem.setAttribute("id", cell);
        console.log(elem);
        container.appendChild(elem);
    });
    app.appendDateToDateCells(container);
}

// 4 loop through each day and put html text of day in table 
app.appendDateToDateCells = function(container) {
    const firstDay = app.getFirstDay(theYear, theMonth);
    const howManyDays = app.numberOfDaysInMonth(theMonth, theDate);
    document.getElementById('calendar').append(container);
    const fields = Array.from(Array(42).keys())

    fields.forEach((num) => {
        if (num < firstDay || num >= (howManyDays + firstDay)) {
          document.getElementById(num).innerHTML = "";            
        } else {
            document.getElementById(num).innerHTML = (num - firstDay + 1);
        }
    });
}
	
app.events = function () {
   app.createContainer();
//    document.getElementById("prev").onclick(app.previousMonth);
//    document.getElementById("next").onclick(app.nextMonth)
}   

app.init = function () {
    app.events();
}

(function () {
    app.init();
});

// show month on dom 
// previous and next buttons change calendar to corresponding months