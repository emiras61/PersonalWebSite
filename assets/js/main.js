// Kaynak: https://www.youtube.com/watch?v=keglFOZ7iTY&t=1076s

var Hour = document.getElementById('hour');
var Dots = document.getElementById('dots');
var Minutes = document.getElementById('minute');

var Day = document.getElementById('day');
var Month = document.getElementById('month');
var Year = document.getElementById('year');

setInterval(function() {

    var D = new Date();
    var Saat = D.getHours();
    var Dakika = D.getMinutes();
    console.log(Hour, Minutes)

    var Gun = D.getDate();
    var Ay = D.getMonth();
    var Yil = D.getFullYear();

    Hour.innerHTML = Saat < 10 ? '0' + Saat : Saat;
    Minutes.innerHTML = (Dakika < 10) ? '0' + Dakika : Dakika;
    var Months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    Day.innerHTML = Gun;
    Month.innerHTML = Months[Ay];
    Year.innerHTML = Yil;
    Dots.classList.toggle('color');
}, 50);


// Kaynak: https://www.youtube.com/watch?v=GdrbE-s5DgQ&t=780s
const toggleBtn = document.querySelector('.toggle_btn')
const drwMenu = document.querySelector('.drw_menu')

toggleBtn.onclick = function () {
    drwMenu.classList.toggle('open')
}

// Kaynak: https://www.youtube.com/watch?v=In0nB0ABaUk
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const textArea = document.getElementById('textArea')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Lütfen bir ad giriniz!')
  }

  if (surname.value === '' || surname.value == null) {
    messages.push('Lütfen bir soyad giriniz!')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Lütfen bir email giriniz!')
  }

  if (textArea.value === '' || textArea.value == null) {
    messages.push('Lütfen mesajınızı yazınız!')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join('\n ')
  }
})