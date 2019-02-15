function createTable(numberOfRows, numberOfCells) {
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
    let tbody = document.createElement('tbody')

    for (let i = 0; i <= numberOfRows; i++) {
        let row = document.createElement('tr');
        for (let i = 0; i <= numberOfCells; i++) {
            let cell = document.createElement('td');
            let text = document.createTextNode('Cell');
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    body.appendChild(table);
    tbl.setAttribute("border", "2");
}