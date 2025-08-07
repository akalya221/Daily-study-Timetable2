// This contains the timetable data and dynamically updates the HTML table
const timetableData = [
  ["09:00 - 10:00", "Mathematics", "Algebra Practice"],
  ["10:15 - 11:15", "Computer Science", "DSA Revision"],
  ["11:30 - 12:30", "English", "Grammar & Comprehension"],
  ["02:00 - 03:00", "DBMS", "ER Diagrams & SQL"],
  ["03:15 - 04:15", "Project Work", "GitHub Practice"],
  ["06:00 - 07:00", "Self Study", "Revision or Reading"]
];

// Populate the table with the above data
window.onload = function () {
  const table = document.getElementById("timetable");

  timetableData.forEach(([time, subject, activity]) => {
    const row = document.createElement("tr");

    [time, subject, activity].forEach((cellText) => {
      const cell = document.createElement("td");
      cell.textContent = cellText;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
};
