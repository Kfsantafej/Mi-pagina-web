document.getElementById('saveBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    localStorage.setItem('user', JSON.stringify({ name, surname, email, phone }));
    alert('Datos almacenados!');
  });
  
  document.getElementById('submitBtn').addEventListener('click', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      document.getElementById('result').textContent = `Datos guardados: ${user.name} ${user.surname} - ${user.email} - ${user.phone}`;
    } else {
      document.getElementById('result').textContent = 'No hay datos almacenados.';
    }
  });
  