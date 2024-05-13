// Profil resimleri ve metinleri için dizi oluştur
const images = [
    { src: 'image1.jpg', text: 'profile' },
    { src: 'image2.jpg', text: 'ARMUT' },
    { src: 'image3.jpg', text: 'ÇİLEK' },
    { src: 'image4.jpg', text: 'ELMA' },
];

// Şu anki profil resminin dizideki indeksini bulmak için fonksiyon
function findCurrentIndex() {
    const profileImage = document.getElementById("profileImage");
    return images.findIndex(img => img.src === profileImage.src);
}

// Profil resimlerini ve metinlerini değiştirmek için fonksiyon
function changeProfileImage() {
    const profileImage = document.getElementById("profileImage");
    const imageDetails = document.getElementById("profileImage").alt;
    let currentIndex = findCurrentIndex();
    currentIndex = (currentIndex + 1) % images.length; // Bir sonraki resme geç
    profileImage.src = images[currentIndex].src;
    profileImage.alt = images[currentIndex].text; // Profil resminin alternatif metnini değiştir
}

// Profil resmine tıklanınca yeni resme geçmek için event listener ekleyin
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById("profileImage");
    profileImage.addEventListener('click', changeProfileImage);
});

const images = ["image1.jpg", "ELMA.jpg", "ARMUT.jpg", "ÇİLEK.jpg"];
const profileImage = document.getElementById("profileImage");
profileImage.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  profileImage.src = images[currentIndex];
});


