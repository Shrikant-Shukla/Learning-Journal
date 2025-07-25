const Form = document.getElementById("form");
const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const tableContainer = document.getElementById("tableContainer");

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);

  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Enter valid inputs for the Rows and Columns");
    return;
  }

  generateTable(rows, cols);
});

function generateTable(rows, cols) {
  tableContainer.innerHTML = "";

  const table = document.createElement("table"); // <-- Fix is here
  table.border = "1";

  for (let i = 1; i <= rows; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= cols; j++) {
      const cell = document.createElement("td");
      cell.textContent = `r${i} c${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
