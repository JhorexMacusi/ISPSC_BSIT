fetch('students.json')
  .then(response => response.json())
  .then(students => {
    const container = document.getElementById('portfolio-list');
    students.forEach(student => {
      const card = document.createElement('div');
      card.className = 'student-card';
      card.innerHTML = `
        <img src="${student.photo}" alt="${student.name}">
        <h3>${student.name}</h3>
        <p>${student.course} - Batch ${student.yearLevelSection}</p>
        <p>${student.bio}</p>
        <a href="${student.github}" target="_blank">GitHub Profile</a>
      `;
      container.appendChild(card);
    });
  });
