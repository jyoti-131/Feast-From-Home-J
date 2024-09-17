var navLinks = document.getElementById("nav-links");
var profileIcon = document.getElementById("profile-icon");
var profileName = document.getElementById("profile-name");
var profileContainer = document.getElementById("profile-container");
var profileDetails = document.getElementById("profileDetails");
var profilePopup = document.getElementById("profilePopup");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function openForm() {
    document.getElementById("registrationForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("registrationForm").style.display = "none";
}

function saveProfile() {
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var phone = document.getElementById("userPhone").value;
    var address = document.getElementById("userAddress").value;

    if (name && email && phone && address) {
        profileName.textContent = name;
        profileDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        `;
        closeForm();
        profileContainer.style.display = "flex";
    } else {
        alert("Please fill in all fields.");
    }
}

function openProfile() {
    profilePopup.style.display = "flex";
}

function closeProfile() {
    profilePopup.style.display = "none";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about');
    const fadeElements = document.querySelectorAll('.fade-in-element');
    const statItems = document.querySelectorAll('.stat-number');
    const blogCards = document.querySelectorAll('.blog-card');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function animateAboutSection() {
        if (isInViewport(aboutSection)) {
            fadeElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('animate');
                }, index * 200);
            });

            statItems.forEach((item) => {
                const endValue = parseInt(item.getAttribute('data-target'));
                animateValue(item, 0, endValue, 2000);
            });

            window.removeEventListener('scroll', animateAboutSection);
        }
    }

    function animateBlogCards() {
        blogCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 200);
            }
        });
    }

    window.addEventListener('scroll', animateAboutSection);
    window.addEventListener('scroll', animateBlogCards);
    animateAboutSection();
    animateBlogCards();
});

function showMenuItems(category) {
    const menuList = document.getElementById(category);

    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        document.querySelectorAll('.menu-list').forEach(list => {
            list.style.display = 'none';
        });
        menuList.style.display = 'block';
    }
}

function openContactPopup() {
    document.getElementById("contactPopup").style.display = "flex";
}

function closeContactPopup() {
    document.getElementById("contactPopup").style.display = "none";
}