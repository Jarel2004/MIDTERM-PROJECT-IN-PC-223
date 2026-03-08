// Like button functionality
function toggleLike(element) {
    let heartIcon = element.querySelector("i");
    
    if (heartIcon.dataset.liked === "true") {
        heartIcon.style.color = "";
        heartIcon.dataset.liked = "false";
        heartIcon.className = "fa-regular fa-heart";
        heartIcon.classList.remove("pop");
    } else {
        heartIcon.style.color = "red";
        heartIcon.dataset.liked = "true";
        heartIcon.className = "fa-solid fa-heart";
        heartIcon.classList.add("pop");
        
        setTimeout(() => {
            heartIcon.classList.remove("pop");
        }, 400);
    }
}

// Add comment functionality
function addComment(button, commentsListId, commentCountId) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    
    if (commentText !== "") {
        let commentList = document.getElementById(commentsListId);
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
        
        // Update comment counts
        updateCommentCounts(commentsListId, commentCountId);
    }
}

function updateCommentCounts(commentsListId, commentCountId) {
    let commentsList = document.getElementById(commentsListId);
    let commentCount = commentsList.children.length;
    
    document.getElementById(commentCountId).textContent = commentCount;
    document.getElementById("commentCountBottom" + commentCountId.slice(-2)).textContent = commentCount + " comment" + (commentCount !== 1 ? "s" : "");
}

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;
const headerHeight = 140;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > headerHeight) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
});

// Carousel navigation
const navItems = document.querySelectorAll('.nav-menu li');
const carousel = document.getElementById('carousel');
const pages = document.querySelectorAll('.page');

let currentPage = 0;

function switchPage(index) {
    if (index < 0 || index >= pages.length) return;
    
    carousel.style.transform = `translateX(-${index * 100}%)`;
    
    navItems.forEach(item => item.classList.remove('active'));
    navItems[index].classList.add('active');
    
    currentPage = index;
    pages[index].scrollTop = 0;
}

navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(index);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        switchPage(currentPage + 1);
    } else if (e.key === 'ArrowLeft') {
        switchPage(currentPage - 1);
    }
});

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.main-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.main-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            switchPage(currentPage + 1);
        } else {
            switchPage(currentPage - 1);
        }
    }
});

// Initialize comment counts
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 12; i++) {
        let commentsList = document.getElementById('commentsList' + i);
        if (commentsList) {
            updateCommentCounts('commentsList' + i, 'commentCount' + i);
        }
    }
});

function temperatureConverter() {
    let choice = prompt("🌡️ TEMPERATURE CONVERTER\n\nChoose conversion type:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
    
    // Check if user clicked Cancel
    if (choice === null) {
        alert("❌ Conversion cancelled.");
        return;
    }
    
    // Convert to number for switch comparison
    choice = parseInt(choice);
    
    switch (choice) {
        case 1:
            let celsius = prompt("Enter temperature in Celsius:");
            
            // Check if user clicked Cancel
            if (celsius === null) {
                alert("❌ Conversion cancelled.");
                return;
            }
            
            // Validate input
            if (celsius.trim() === "" || isNaN(celsius)) {
                alert("❌ Invalid input! Please enter a valid number.");
                return;
            }
            
            celsius = parseFloat(celsius);
            let fahrenheit = (celsius * 9/5) + 32;
            alert(`✅ RESULT\n\n${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
            break;
            
        case 2:
            let fahr = prompt("Enter temperature in Fahrenheit:");
            
            // Check if user clicked Cancel
            if (fahr === null) {
                alert("❌ Conversion cancelled.");
                return;
            }
            
            // Validate input
            if (fahr.trim() === "" || isNaN(fahr)) {
                alert("❌ Invalid input! Please enter a valid number.");
                return;
            }
            
            fahr = parseFloat(fahr);
            let cels = (fahr - 32) * 5/9;
            alert(`✅ RESULT\n\n${fahr}°F = ${cels.toFixed(2)}°C`);
            break;
            
        default:
            alert("❌ Invalid choice! Please enter 1 or 2.");
            break;
    }
}

// Feature 2: Find Longer Word (compares two words)
function findLongestWord() {
    
    // Get first word
    let word1 = prompt("Enter the FIRST word:");
    
    // Check if user clicked Cancel
    if (word1 === null) {
        alert("❌ Operation cancelled.");
        return;
    }
    
    word1 = word1.trim();
    
    // Validate first word
    if (word1 === "") {
        alert("❌ Please enter a valid word.");
        return;
    }
    
    // Check if it's a single word (no spaces)
    if (word1.includes(" ")) {
        alert("❌ Please enter only ONE word, not a phrase.");
        return;
    }
    
    // Get second word
    let word2 = prompt("Enter the SECOND word:");
    
    // Check if user clicked Cancel
    if (word2 === null) {
        alert("❌ Operation cancelled.");
        return;
    }
    
    word2 = word2.trim();
    
    // Validate second word
    if (word2 === "") {
        alert("❌ Please enter a valid word.");
        return;
    }
    
    // Check if it's a single word (no spaces)
    if (word2.includes(" ")) {
        alert("❌ Please enter only ONE word, not a phrase.");
        return;
    }
    
    // Get lengths
    let len1 = word1.length;
    let len2 = word2.length;
    
    // Compare and display result
    let result = "";
    
    if (len1 > len2) {
        result = `"${word1}" is LONGER than "${word2}"\n\n` +
                 `"${word1}" has ${len1} characters\n` +
                 `"${word2}" has ${len2} characters\n` +
                 `Difference: ${len1 - len2} character(s)`;
    } 
    else if (len2 > len1) {
        result = `"${word2}" is LONGER than "${word1}"\n\n` +
                 `"${word2}" has ${len2} characters\n` +
                 `"${word1}" has ${len1} characters\n` +
                 `Difference: ${len2 - len1} character(s)`;
    } 
    else {
        result = `Both words have the SAME length!\n\n` +
                 `"${word1}" and "${word2}"\n` +
                 `Both have ${len1} characters`;
    }
    
    alert("✅ RESULT\n\n" + result);
}

// Feature 3: Find Birthstone (simpler version with month names)
function findBirthstone() {
    let month = prompt("Enter your birth month (e.g., January, February):");
    
    if (month === null) return;
    
    month = month.toLowerCase().trim();
    
    switch(month) {
        case "january": alert("Garnet"); break;
        case "february": alert("Amethyst"); break;
        case "march": alert("Aquamarine"); break;
        case "april": alert("Diamond"); break;
        case "may": alert("Emerald"); break;
        case "june": alert("Pearl"); break;
        case "july": alert("Ruby"); break;
        case "august": alert("Peridot"); break;
        case "september": alert("Sapphire"); break;
        case "october": alert("Opal"); break;
        case "november": alert("Topaz"); break;
        case "december": alert("Turquoise"); break;
        default: alert("Invalid month!");
    }
}

function basicCalculator() {
    let num1 = prompt("Enter first number:");
    if (num1 === null) return;
    
    let num2 = prompt("Enter second number:");
    if (num2 === null) return;
    
    let op = prompt("Enter operator (+, -, *, /):");
    if (op === null) return;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch(op) {
        case "+": alert("Result: " + (num1 + num2)); break;
        case "-": alert("Result: " + (num1 - num2)); break;
        case "*": alert("Result: " + (num1 * num2)); break;
        case "/": 
            if (num2 === 0) {
                alert("Cannot divide by zero!");
            } else {
                alert("Result: " + (num1 / num2));
            }
            break;
        default: alert("Invalid operator!");
    }
}

function calculateAcceleration() {
    let v1 = prompt("Initial velocity:");
    if (v1 === null || v1.trim() === "" || isNaN(v1)) {
        alert("Invalid input!");
        return;
    }
    
    let v2 = prompt("Final velocity:");
    if (v2 === null || v2.trim() === "" || isNaN(v2)) {
        alert("Invalid input!");
        return;
    }
    
    let t = prompt("Time:");
    if (t === null || t.trim() === "" || isNaN(t)) {
        alert("Invalid input!");
        return;
    }
    
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);
    t = parseFloat(t);
    
    if (t === 0) {
        alert("Time cannot be zero!");
        return;
    }
    
    let a = (v2 - v1) / t;
    alert("Acceleration: " + a);
}

// Feature 6: Mood Theme - Changes website colors and font colors
function moodChecker() {
    let mood = prompt(
        "MOOD THEME\n\n" +
        "Choose your mood:\n" +
        "1 - Happy \n" +
        "2 - Sad \n" +
        "3 - Stressed \n" +
        "4 - Tired \n" +
        "5 - Excited \n" +
        "6 - Calm \n\n" +
        "Enter 1, 2, 3, 4, 5, or 6:"
    );
    
    if (mood === null) return;
    if (mood.trim() === "" || isNaN(mood)) {
        alert("Invalid input!");
        return;
    }
    
    mood = parseInt(mood);
    
    // Get all elements that need color changes
    const header = document.querySelector('.header');
    const headerTitle = document.querySelector('.header h1');
    const headerLogo = document.querySelector('.header img');
    const navMenu = document.querySelectorAll('.nav-menu li');
    const pages = document.querySelectorAll('.page');
    const pageContent = document.querySelectorAll('.page-content');
    const heroSection = document.querySelector('.hero');
    const heroText = document.querySelectorAll('.hero h2, .hero p');
    const sectionTitles = document.querySelectorAll('.section-title');
    
    // Cards and containers
    const cards = document.querySelectorAll('.feature-card, .favorite-card, .person-card, .painting-card, .contact-info, .contact-form, .map-section');
    const cardTitles = document.querySelectorAll('.card-title, .person-name, .feature-header h3, .painting-info h3, .contact-info h3, .contact-form h3, .map-section h3');
    const cardText = document.querySelectorAll('.card-description, .person-title, .feature-description p, .person-detail-item, .painting-description, .artist, .contact-description, .info-text p, .info-text h4');
    const cardMeta = document.querySelectorAll('.card-footer span, .painting-meta span, .person-company, .painting-year, .info-item');
    
    // Buttons
    const buttons = document.querySelectorAll('.feature-btn, .submit-btn, .post-comment-btn, .action-btn, .like-btn, .comment-btn');
    const buttonText = document.querySelectorAll('.feature-btn span, .action-btn span, .comment-btn, .submit-btn span');
    
    // Form elements
    const labels = document.querySelectorAll('label');
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .comment-input');
    
    // Contact page specific
    const contactInfo = document.querySelectorAll('.contact-info p, .contact-info h3, .contact-info h4, .info-text p, .info-text h4, .contact-description');
    const contactForm = document.querySelectorAll('.contact-form h3, .contact-form label');
    const mapSection = document.querySelectorAll('.map-section h3, .map-note');
    const infoItems = document.querySelectorAll('.info-item');
    const infoIcons = document.querySelectorAll('.info-icon');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    // Remove any existing mood classes
    document.body.classList.remove('mood-happy', 'mood-sad', 'mood-stressed', 'mood-tired', 'mood-excited', 'mood-calm');
    
    switch(mood) {
        case 1: // Happy - Bright Yellow/Orange with dark text
            document.body.classList.add('mood-happy');
            
            // Backgrounds
            if (header) header.style.background = 'linear-gradient(135deg, #FDB813, #FF8C42)';
            pages.forEach(page => page.style.background = 'linear-gradient(135deg, #FFF3E0, #FFE5B4)');
            
            // Cards/Boxes - Make them visible with white background
            cards.forEach(card => {
                card.style.background = '#FFFFFF';
                card.style.boxShadow = '0 10px 30px rgba(253, 184, 19, 0.3)';
                card.style.border = '1px solid #FF8C42';
                card.style.borderRadius = '15px';
                card.style.padding = '1.5rem';
            });
            
            // Buttons
            buttons.forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #FFB347, #FF8C42)';
                btn.style.color = '#FFFFFF';
                btn.style.border = 'none';
                btn.style.boxShadow = '0 5px 15px rgba(255, 140, 66, 0.4)';
            });
            
            // Info icons
            infoIcons.forEach(icon => {
                icon.style.background = '#FFB347';
                icon.style.color = '#FFFFFF';
            });
            
            // Social icons
            socialIcons.forEach(icon => {
                icon.style.background = '#FF8C42';
                icon.style.color = '#FFFFFF';
            });
            
            if (heroSection) heroSection.style.background = 'rgba(255, 255, 255, 0.9)';
            
            // Font colors
            if (headerTitle) headerTitle.style.color = '#333333';
            navMenu.forEach(item => item.style.color = '#333333');
            pageContent.forEach(content => content.style.color = '#333333');
            heroText.forEach(text => text.style.color = '#333333');
            sectionTitles.forEach(title => title.style.color = '#333333');
            cardTitles.forEach(title => title.style.color = '#333333');
            cardText.forEach(text => text.style.color = '#555555');
            cardMeta.forEach(meta => meta.style.color = '#666666');
            buttonText.forEach(btn => btn.style.color = '#FFFFFF');
            labels.forEach(label => label.style.color = '#333333');
            
            // Contact page specific
            contactInfo.forEach(info => info.style.color = '#333333');
            contactForm.forEach(el => el.style.color = '#333333');
            mapSection.forEach(el => el.style.color = '#333333');
            infoItems.forEach(item => item.style.color = '#333333');
            formInputs.forEach(input => {
                input.style.background = '#FFFFFF';
                input.style.color = '#333333';
                input.style.border = '2px solid #FF8C42';
                input.style.borderRadius = '8px';
                input.style.padding = '0.8rem';
            });
            
            alert("😊 Happy theme activated!");
            break;
            
        case 2: // Sad - Blue/Gray with light text
            document.body.classList.add('mood-sad');
            
            // Backgrounds
            if (header) header.style.background = 'linear-gradient(135deg, #2C3E50, #3498DB)';
            pages.forEach(page => page.style.background = 'linear-gradient(135deg, #34495E, #5D6D7E)');
            
            // Cards/Boxes - Make them visible with dark background
            cards.forEach(card => {
                card.style.background = '#2C3E50';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                card.style.border = '1px solid #3498DB';
                card.style.borderRadius = '15px';
                card.style.padding = '1.5rem';
            });
            
            // Buttons
            buttons.forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #2980B9, #3498DB)';
                btn.style.color = '#FFFFFF';
                btn.style.border = 'none';
                btn.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.4)';
            });
            
            // Info icons
            infoIcons.forEach(icon => {
                icon.style.background = '#3498DB';
                icon.style.color = '#FFFFFF';
            });
            
            // Social icons
            socialIcons.forEach(icon => {
                icon.style.background = '#2980B9';
                icon.style.color = '#FFFFFF';
            });
            
            if (heroSection) heroSection.style.background = 'rgba(0, 0, 0, 0.3)';
            
            // Font colors - light for dark backgrounds
            if (headerTitle) headerTitle.style.color = '#ECF0F1';
            navMenu.forEach(item => item.style.color = '#ECF0F1');
            pageContent.forEach(content => content.style.color = '#ECF0F1');
            heroText.forEach(text => text.style.color = '#ECF0F1');
            sectionTitles.forEach(title => title.style.color = '#ECF0F1');
            cardTitles.forEach(title => title.style.color = '#ECF0F1');
            cardText.forEach(text => text.style.color = '#BDC3C7');
            cardMeta.forEach(meta => meta.style.color = '#95A5A6');
            buttonText.forEach(btn => btn.style.color = '#FFFFFF');
            labels.forEach(label => label.style.color = '#ECF0F1');
            
            // Contact page specific
            contactInfo.forEach(info => info.style.color = '#ECF0F1');
            contactForm.forEach(el => el.style.color = '#ECF0F1');
            mapSection.forEach(el => el.style.color = '#ECF0F1');
            infoItems.forEach(item => item.style.color = '#ECF0F1');
            formInputs.forEach(input => {
                input.style.background = '#34495E';
                input.style.color = '#ECF0F1';
                input.style.border = '2px solid #3498DB';
                input.style.borderRadius = '8px';
                input.style.padding = '0.8rem';
            });
            
            alert("😢 Sad theme activated!");
            break;
            
        case 3: // Stressed - Red/Orange with light text
            document.body.classList.add('mood-stressed');
            
            // Backgrounds
            if (header) header.style.background = 'linear-gradient(135deg, #B03A2E, #E67E22)';
            pages.forEach(page => page.style.background = 'linear-gradient(135deg, #943126, #DC7633)');
            
            // Cards/Boxes - Make them visible with dark background
            cards.forEach(card => {
                card.style.background = '#B03A2E';
                card.style.boxShadow = '0 10px 30px rgba(176, 58, 46, 0.5)';
                card.style.border = '1px solid #E67E22';
                card.style.borderRadius = '15px';
                card.style.padding = '1.5rem';
            });
            
            // Buttons
            buttons.forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #C0392B, #E67E22)';
                btn.style.color = '#FFFFFF';
                btn.style.border = 'none';
                btn.style.boxShadow = '0 5px 15px rgba(230, 126, 34, 0.4)';
            });
            
            // Info icons
            infoIcons.forEach(icon => {
                icon.style.background = '#E67E22';
                icon.style.color = '#FFFFFF';
            });
            
            // Social icons
            socialIcons.forEach(icon => {
                icon.style.background = '#C0392B';
                icon.style.color = '#FFFFFF';
            });
            
            if (heroSection) heroSection.style.background = 'rgba(0, 0, 0, 0.3)';
            
            // Font colors
            if (headerTitle) headerTitle.style.color = '#FAD7A0';
            navMenu.forEach(item => item.style.color = '#FAD7A0');
            pageContent.forEach(content => content.style.color = '#FAD7A0');
            heroText.forEach(text => text.style.color = '#FAD7A0');
            sectionTitles.forEach(title => title.style.color = '#FAD7A0');
            cardTitles.forEach(title => title.style.color = '#FAD7A0');
            cardText.forEach(text => text.style.color = '#FDEBD0');
            cardMeta.forEach(meta => meta.style.color = '#FDEBD0');
            buttonText.forEach(btn => btn.style.color = '#FFFFFF');
            labels.forEach(label => label.style.color = '#FAD7A0');
            
            // Contact page specific
            contactInfo.forEach(info => info.style.color = '#FAD7A0');
            contactForm.forEach(el => el.style.color = '#FAD7A0');
            mapSection.forEach(el => el.style.color = '#FAD7A0');
            infoItems.forEach(item => item.style.color = '#FAD7A0');
            formInputs.forEach(input => {
                input.style.background = '#943126';
                input.style.color = '#FAD7A0';
                input.style.border = '2px solid #E67E22';
                input.style.borderRadius = '8px';
                input.style.padding = '0.8rem';
            });
            
            alert("😫 Stressed theme activated!");
            break;
            
        case 4: // Tired - Soft Purple with dark text
            document.body.classList.add('mood-tired');
            
            // Backgrounds
            if (header) header.style.background = 'linear-gradient(135deg, #6C3483, #BB8FCE)';
            pages.forEach(page => page.style.background = '#F5EEF8');
            
            // Cards/Boxes - Make them visible with white background
            cards.forEach(card => {
                card.style.background = '#FFFFFF';
                card.style.boxShadow = '0 10px 30px rgba(108, 52, 131, 0.3)';
                card.style.border = '2px solid #BB8FCE';
                card.style.borderRadius = '15px';
                card.style.padding = '1.5rem';
            });
            
            // Buttons
            buttons.forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #6C3483, #BB8FCE)';
                btn.style.color = '#FFFFFF';
                btn.style.border = 'none';
                btn.style.boxShadow = '0 5px 15px rgba(108, 52, 131, 0.4)';
            });
            
            // Info icons
            infoIcons.forEach(icon => {
                icon.style.background = '#BB8FCE';
                icon.style.color = '#FFFFFF';
            });
            
            // Social icons
            socialIcons.forEach(icon => {
                icon.style.background = '#6C3483';
                icon.style.color = '#FFFFFF';
            });
            
            if (heroSection) heroSection.style.background = 'rgba(255, 255, 255, 0.9)';
            
            // Font colors - Dark text
            if (headerTitle) headerTitle.style.color = '#2C3E50';
            navMenu.forEach(item => item.style.color = '#2C3E50');
            pageContent.forEach(content => content.style.color = '#2C3E50');
            heroText.forEach(text => text.style.color = '#2C3E50');
            sectionTitles.forEach(title => title.style.color = '#2C3E50');
            cardTitles.forEach(title => title.style.color = '#2C3E50');
            cardText.forEach(text => text.style.color = '#4A4A4A');
            cardMeta.forEach(meta => meta.style.color = '#5E5E5E');
            buttonText.forEach(btn => btn.style.color = '#FFFFFF');
            labels.forEach(label => label.style.color = '#2C3E50');
            
            // Contact page specific
            contactInfo.forEach(info => info.style.color = '#2C3E50');
            contactForm.forEach(el => el.style.color = '#2C3E50');
            mapSection.forEach(el => el.style.color = '#2C3E50');
            infoItems.forEach(item => item.style.color = '#2C3E50');
            formInputs.forEach(input => {
                input.style.background = '#FFFFFF';
                input.style.color = '#2C3E50';
                input.style.border = '2px solid #BB8FCE';
                input.style.borderRadius = '8px';
                input.style.padding = '0.8rem';
            });
            
            alert("😴 Tired theme activated!");
            break;
            
        case 5: // Excited - Vibrant Rainbow with dark text
            document.body.classList.add('mood-excited');
            
            // Backgrounds
            if (header) header.style.background = 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7AF)';
            pages.forEach(page => page.style.background = '#FFFFFF');
            
            // Cards/Boxes - Make them visible with white background and colored borders
            cards.forEach(card => {
                card.style.background = '#FFFFFF';
                card.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
                card.style.border = '2px solid #FF6B6B';
                card.style.borderRadius = '15px';
                card.style.padding = '1.5rem';
            });
            
            // Buttons
            buttons.forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #FF6B6B, #4ECDC4)';
                btn.style.color = '#FFFFFF';
                btn.style.border = 'none';
                btn.style.boxShadow = '0 5px 15px rgba(255, 107, 107, 0.4)';
            });
            
            // Info icons
            infoIcons.forEach(icon => {
                icon.style.background = '#FF6B6B';
                icon.style.color = '#FFFFFF';
            });
            
            // Social icons
            socialIcons.forEach(icon => {
                icon.style.background = '#4ECDC4';
                icon.style.color = '#FFFFFF';
            });
            
            if (heroSection) heroSection.style.background = 'rgba(255, 255, 255, 0.9)';
            
            // Font colors - Black text
            if (headerTitle) headerTitle.style.color = '#000000';
            navMenu.forEach(item => item.style.color = '#000000');
            pageContent.forEach(content => content.style.color = '#000000');
            heroText.forEach(text => text.style.color = '#000000');
            sectionTitles.forEach(title => title.style.color = '#000000');
            cardTitles.forEach(title => title.style.color = '#000000');
            cardText.forEach(text => text.style.color = '#333333');
            cardMeta.forEach(meta => meta.style.color = '#555555');
            buttonText.forEach(btn => btn.style.color = '#FFFFFF');
            labels.forEach(label => label.style.color = '#000000');
            
            // Contact page specific
            contactInfo.forEach(info => info.style.color = '#000000');
            contactForm.forEach(el => el.style.color = '#000000');
            mapSection.forEach(el => el.style.color = '#000000');
            infoItems.forEach(item => item.style.color = '#000000');
            formInputs.forEach(input => {
                input.style.background = '#FFFFFF';
                input.style.color = '#000000';
                input.style.border = '2px solid #FF6B6B';
                input.style.borderRadius = '8px';
                input.style.padding = '0.8rem';
            });
            
            alert("🎉 Excited theme activated!");
            break;
            
        case 6: // Calm - Soft Green/Blue with dark text
            document.body.classList.add('mood-calm');
            
            // Backgrounds
            if (header) header.style.background = 'linear-gradient(135deg, #2E86C1, #1ABC9C)';
            pages.forEach(page => page.style.background = '#E8F8F5');
            
            // Cards/Boxes - Make them visible with white background
            cards.forEach(card => {
                card.style.background = '#FFFFFF';
                card.style.boxShadow = '0 10px 30px rgba(46, 134, 193, 0.3)';
                card.style.border = '2px solid #2E86C1';
                card.style.borderRadius = '15px';
                card.style.padding = '1.5rem';
            });
            
            // Buttons
            buttons.forEach(btn => {
                btn.style.background = 'linear-gradient(135deg, #2E86C1, #1ABC9C)';
                btn.style.color = '#FFFFFF';
                btn.style.border = 'none';
                btn.style.boxShadow = '0 5px 15px rgba(46, 134, 193, 0.4)';
            });
            
            // Info icons
            infoIcons.forEach(icon => {
                icon.style.background = '#1ABC9C';
                icon.style.color = '#FFFFFF';
            });
            
            // Social icons
            socialIcons.forEach(icon => {
                icon.style.background = '#2E86C1';
                icon.style.color = '#FFFFFF';
            });
            
            if (heroSection) heroSection.style.background = 'rgba(255, 255, 255, 0.9)';
            
            // Font colors - Dark teal
            if (headerTitle) headerTitle.style.color = '#0B5345';
            navMenu.forEach(item => item.style.color = '#0B5345');
            pageContent.forEach(content => content.style.color = '#0B5345');
            heroText.forEach(text => text.style.color = '#0B5345');
            sectionTitles.forEach(title => title.style.color = '#0B5345');
            cardTitles.forEach(title => title.style.color = '#0B5345');
            cardText.forEach(text => text.style.color = '#145A32');
            cardMeta.forEach(meta => meta.style.color = '#1D5B4C');
            buttonText.forEach(btn => btn.style.color = '#FFFFFF');
            labels.forEach(label => label.style.color = '#0B5345');
            
            // Contact page specific
            contactInfo.forEach(info => info.style.color = '#0B5345');
            contactForm.forEach(el => el.style.color = '#0B5345');
            mapSection.forEach(el => el.style.color = '#0B5345');
            infoItems.forEach(item => item.style.color = '#0B5345');
            formInputs.forEach(input => {
                input.style.background = '#FFFFFF';
                input.style.color = '#0B5345';
                input.style.border = '2px solid #2E86C1';
                input.style.borderRadius = '8px';
                input.style.padding = '0.8rem';
            });
            
            alert("😌 Calm theme activated!");
            break;
            
        default:
            alert("Invalid choice! Please enter 1-6.");
            return;
    }
    // For example, in the Tired mood case, add:
const featuresTitle = document.querySelector('#page2 h2');
if (featuresTitle) {
    featuresTitle.style.color = '#2C3E50'; // Dark color for tired mood
    featuresTitle.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.5)';
    featuresTitle.style.fontWeight = 'bold';
}

// In the Excited mood case:
if (featuresTitle) {
    featuresTitle.style.color = '#000000'; // Pure black
    featuresTitle.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.8)';
    featuresTitle.style.fontWeight = 'bold';
}

// In the Calm mood case:
if (featuresTitle) {
    featuresTitle.style.color = '#0B5345'; // Dark teal
    featuresTitle.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.7)';
    featuresTitle.style.fontWeight = 'bold';
}
}