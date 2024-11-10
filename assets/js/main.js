/*
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const navLinksHover = document.querySelectorAll('.navbar ul li a:hover');
    
    if (window.scrollY > 100) {
        // Sayfa 50 piksel aşağı kaydırıldığında arka plan rengini değiştir
        navbar.style.backgroundColor = 'rgba(255, 255, 255)';
        navLinks.forEach(link => { link.style.color = 'rgb(0, 0, 0)';});
    } else {
        // Sayfa en üstte iken orijinal renge dön
        navbar.style.backgroundColor = 'rgba(255, 255, 255';
    }
}); */

document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("text");
    const button = document.getElementById("toggleButton");

    // Kısa ve uzun içerik
    const shortText = "Teknolojiye ve inovasyona olan tutkum beni yazılım geliştirme dünyasına adım atmaya yönlendirdi.";
    const fullText = "Teknolojiye ve inovasyona olan tutkum beni yazılım geliştirme dünyasına adım atmaya yönlendirdi. Bilgisayar mühendisliği eğitimim boyunca edindiğim teorik bilgileri pratiğe dökerek, işlevsel ve kullanıcı dostu projeler geliştirmeyi hedefliyorum. Sürekli öğrenmeye açık bir yapıya sahibim ve her yeni proje benim için bir gelişim fırsatı.";

    // Başlangıçta kısa metni ayarla
    text.innerText = shortText;

    // Butona tıklama olayı ekle
    button.addEventListener("click", function() {
        if (text.innerText === shortText) {
            text.innerText = fullText;
            button.innerText = "Daha az gör...";
        } else {
            text.innerText = shortText;
            button.innerText = "Daha fazla gör...";
        }
    });
});

function setActive(button) {
    // Tüm butonların active sınıfını kaldır
    const buttons = document.querySelectorAll('.projects-bar-container button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Tıklanan butona active sınıfını ekle
    button.classList.add('active');

    // Kategoriye göre projeleri filtrele
    const category = button.id;
    const projects = document.querySelectorAll('.project-container');

    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('category') === category) {
            project.style.opacity = '1'; // Görünür yap
            project.style.visibility = 'visible';
            project.style.position = 'relative';
        } else {
            project.style.opacity = '0'; // Gizle
            project.style.visibility = 'hidden';
            project.style.position = 'absolute';
        }
    });
}


function updateDateTime() {
    const dateButton = document.getElementById('dateButton');
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // Tarihi (gün/ay/yıl) formatında gösterir
    const formattedTime = now.toLocaleTimeString(); // Saati (saat:dakika:saniye) formatında gösterir
    dateButton.textContent = `${formattedDate} - ${formattedTime}`; // Butonun içine tarih ve saati yazar
}

// Sayfa yüklendiğinde hemen zamanı günceller
updateDateTime();
// Her saniye zamanı günceller
setInterval(updateDateTime, 1000);



// Menü öğelerini seçin
const menuItems = document.querySelectorAll('.navbar ul li a');

// Her bir bölümün başlangıcını bulmak için bölümleri seçin
const sections = document.querySelectorAll('section');

// Bölüme göre active sınıfını ayarlayan işlev
function setActiveMenuItem() {
    let index = sections.length;

    // Sayfa kaydırma pozisyonuna göre aktif bölümü bul
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

    // Tüm menü öğelerinden active sınıfını kaldır
    menuItems.forEach((link) => link.classList.remove('active'));

    // Şu anki görünür bölüme ait menü öğesine active sınıfını ekle
    if (menuItems[index]) {
        menuItems[index].classList.add('active');
    }
}

// Sayfa kaydırıldığında setActiveMenuItem işlevini çağır
window.addEventListener('scroll', setActiveMenuItem);

// İlk başta doğru bölümün vurgulanması için çağır
setActiveMenuItem();