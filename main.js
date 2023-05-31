var modal = document.getElementById('myModal');
var modaltwo = document.getElementById('myModaltwo');
var btn = document.getElementById("myBtn");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree")
var submitButton = document.getElementById("submitButton")
var span = document.getElementsByClassName("modal__close")[0];
var spantwo = document.getElementsByClassName("modal__close--two")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
btnTwo.onclick = function () {
    modal.style.display = "block";
}
btnThree.onclick = function () {
    modal.style.display = "block";
}
btnFour.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
spantwo.onclick = function() {
    modaltwo.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
submitButton.onclick = function() {
  modal.style.display = "none";
  modaltwo.style.display = "block";
}
// Подключение к сервису EmailJS
emailjs.init('Rj1z-WxcTh9swIrVE');

// Обработка отправки формы
function sendForm() {
  event.preventDefault(); // Предотвращение отправки формы по умолчанию

  // Получение значений из формы
  var name = document.getElementById('fullname').value;
  var phoneparent = document.getElementById('phoneparent').value;
  var namechild = document.getElementById('namechild').value;
  var yochild = document.getElementById('yochild').value;
  var namecourse = document.getElementById('namecourse').value;
  var telephone = document.getElementById('telephone').value;

  // Параметры для отправки письма
  var params = {
    from_name: name,
    phoneparent: phoneparent,
    namechild: namechild,
    yochild: yochild,
    namecourse: namecourse,
    telephone: telephone
  };

  // Отправка письма через EmailJS
  emailjs.send('service_v7zf4zp', 'template_if5khuc', params)
    .then(function(response) {
      console.log('Письмо успешно отправлено!', response.status, response.text);
    }, function(error) {
      console.log('Произошла ошибка при отправке письма:', error);
    });
}