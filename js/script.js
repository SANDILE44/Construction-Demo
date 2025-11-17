// Hero Slider
const heroSlides = document.querySelectorAll('.slider .slide');
let heroIndex = 0;
if (heroSlides.length > 0) {
    setInterval(() => {
        heroSlides[heroIndex].classList.remove('active');
        heroIndex = (heroIndex + 1) % heroSlides.length;
        heroSlides[heroIndex].classList.add('active');
    }, 3500);
}

// Gallery Slider Data
const galleryImages = {
    building: [
        'assets/images/building.jpg',
        'assets/images/building2.jpg',
        'assets/images/building3.jpg',
        'assets/images/building4.jpg',
        'assets/images/building5.jpg'
    ],
    construction: [
        'assets/images/construction.jpg',
        'assets/images/construction2.jpg',
        'assets/images/construction3.jpg',
        'assets/images/construction4.jpg',
        'assets/images/construction5.jpg'
    ],
    electric: [
        'assets/images/electric.jpg',
        'assets/images/electric2.jpg',
        'assets/images/electric3.jpg',
        'assets/images/electric4.jpg',
        'assets/images/electric5.jpg',
        'assets/images/electric6.jpg'
    ],
    flooring: [
        'assets/images/flooring.jpg'
    ],
    heavymachinery: [
        'assets/images/heavymachinery.jpg',
        'assets/images/heavymachinery2.jpg',
        'assets/images/heavymachinery3.jpg',
        'assets/images/heavymachinery4.jpg',
        'assets/images/heavymachinery5.jpg'
    ],
    house: [
        'assets/images/house.jpg',
        'assets/images/house2.jpg',
        'assets/images/house3.jpg',
        'assets/images/house4.jpg',
        'assets/images/house5.jpg',
        'assets/images/house6.jpg',
        'assets/images/house7.jpg'
    ],
    machinery: [
        'assets/images/machinery.jpg',
        'assets/images/machinery2.jpg',
        'assets/images/machinery3.jpg',
        'assets/images/machinery4.jpg',
        'assets/images/machinery5.jpg',
        'assets/images/machinery6.jpg',
        'assets/images/machinery7.jpg'
    ],
    plumbing: [
        'assets/images/plumbing.jpg'
    ],
    powertools: [
        'assets/images/powertools.jpg',
        'assets/images/powertools2.jpg'
    ],
    roadconstruction: [
        'assets/images/roadconstruction.jpg',
        'assets/images/roadconstruction2.jpg',
        'assets/images/roadconstruction3.jpg',
        'assets/images/roadconstruction4.jpg'
    ],
    roofing: [
        'assets/images/roofing.jpg',
        'assets/images/roofing2.jpg'
    ],
    team: [
        'assets/images/team1.jpg',
        'assets/images/team2.jpg'
    ],
    tiling: [
        'assets/images/tiling.jpg',
        'assets/images/tiling2.jpg',
        'assets/images/tiling3.jpg',
        'assets/images/tiling4.jpg',
        'assets/images/tiling5.jpg',
        'assets/images/tiling6.jpg'
    ],
    welding: [
        'assets/images/welding.jpg',
        'assets/images/welding2.jpg',
        'assets/images/welding3.jpg',
        'assets/images/welding4.jpg'
    ]
};

// Gallery Slider Logic
const gallerySlider = document.getElementById('gallery-slider');
const galleryBtns = document.querySelectorAll('.gallery-btn');
let galleryCategory = 'building';
let galleryIndex = 0;

function renderGallerySlider(category) {
    if (!gallerySlider) return;
    gallerySlider.innerHTML = '';
    const images = galleryImages[category] || [];
    if (images.length === 0) return;
    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = category + ' image ' + (i+1);
        img.className = 'gallery-image' + (i === 0 ? ' active' : '');
        gallerySlider.appendChild(img);
    });
    // Controls
    if (images.length > 1) {
        const controls = document.createElement('div');
        controls.className = 'gallery-controls';
        const prev = document.createElement('button');
        prev.className = 'gallery-arrow';
        prev.innerHTML = '&#8592;';
        prev.onclick = () => changeGallerySlide(-1);
        const next = document.createElement('button');
        next.className = 'gallery-arrow';
        next.innerHTML = '&#8594;';
        next.onclick = () => changeGallerySlide(1);
        controls.appendChild(prev);
        controls.appendChild(next);
        gallerySlider.appendChild(controls);
    }
    galleryIndex = 0;
}
function changeGallerySlide(dir) {
    const images = gallerySlider.querySelectorAll('.gallery-image');
    if (images.length === 0) return;
    images[galleryIndex].classList.remove('active');
    galleryIndex = (galleryIndex + dir + images.length) % images.length;
    images[galleryIndex].classList.add('active');
}
if (galleryBtns.length > 0 && gallerySlider) {
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            galleryCategory = btn.getAttribute('data-category');
            renderGallerySlider(galleryCategory);
        });
    });
    renderGallerySlider(galleryCategory);
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const phone = contactForm.phone.value.trim();
        const projectType = contactForm.projectType.value;
        const message = contactForm.message.value.trim();
        let msg = '';
        if (!name) { valid = false; msg += 'Name is required. '; }
        if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { valid = false; msg += 'Valid email required. '; }
        if (!phone) { valid = false; msg += 'Phone is required. '; }
        if (!projectType) { valid = false; msg += 'Project type required. '; }
        if (!message) { valid = false; msg += 'Message required. '; }
        const formMessage = document.getElementById('formMessage');
        if (valid) {
            msg = 'Thank you! Your request has been submitted.';
            contactForm.reset();
        }
        formMessage.textContent = msg;
        formMessage.style.color = valid ? '#1565c0' : '#d32f2f';
    });
}
