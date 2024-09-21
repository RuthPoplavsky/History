"use strict";

(function () {
    let title = "";
    let genre = "";
    let cast = "";

    const state = [{ "Name": "רקפת יוונית", "color": "סגול", "family": "רקפתיים" },
    { "Name": "כלנית מצויה", "color": "אדום", "family": "נוריתיים" },
    { "Name": "חצב מצוי", "color": "לבן", "family": "אספרגיים" },
    { "Name": "חרצית עטורה", "color": "צהוב", "family": "מורכבים" },
    { "Name": "נרקיס מצוי", "color": "לבן", "family": "נרקיסיים" },
    { "Name": "צפורנית ארץ ישראלית", "color": "סגול", "family": "צפורניים" },
    { "Name": "סיגל עטוי", "color": "לבן", "family": "סיגליים" },
    { "Name": "יסמין שיחני", "color": "צהוב", "family": "זיתיים" },
    { "Name": "גרגרנית לילכית", "color": "סגול", "family": "קטניות" }];


    const userColor = document.querySelector('#color');
    const userFamily = document.querySelector('#family');
    const errorSearch = document.querySelector('#error');
    const searchBtn = document.querySelector('#search_btn');
    const table = document.querySelectorAll('.table')[0];
    const myTable = document.querySelector('table');
    let fullTable = false;
    userColor.disabled = false;
    userFamily.disabled = false;


    errorSearch.style.display = "block";

    searchBtn.addEventListener('click', searchFlowers);

    let resultsLen = 0;




    function searchingFlowers() {
        if (fullTable) {
            myTable.innerHTML = "";
            table.style.display = "none";
            fullTable = false;
        }
        errorSearch.innerHTML = "";
        const results = state.filter(check);
        if (results.length === 0) {
            errorSearch.innerHTML = "Flowers don't exists";
        }
        else {
            table.style.display = "block";
            resultsLen = results.length;
            results.forEach(createRow);
        }
    }

    function check(obj) {
        if (userFamily.value && userColor.value) {
            return obj.color === userColor.value && obj.family === userFamily.value
        }
        else if (userColor.value) {
            return obj.color === userColor.value;
        }
        else if (userFamily.value) {
            return obj.family === userFamily.value;
        }
        else {
            return errorSearch;
        }
    }

    function createRow(obj) {
        let row = myTable.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = obj.Name;
        cell2.innerHTML = obj.color;
        cell3.innerHTML = obj.family;
        fullTable = true;
    }





})();