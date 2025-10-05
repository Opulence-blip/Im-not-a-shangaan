// Function to handle header behavior on scroll
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const tabs = document.getElementById('tabs-tops');
    const scrollPosition = window.scrollY;
    
    // Determine scroll direction
    const scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = scrollPosition;
    
    if (scrollPosition > 50 && scrollDirection === 'down') {
        // Scrolling down - hide header
        header.classList.add('hidden');
        tabs.style.top = '0';
    } else if (scrollDirection === 'up') {
        // Scrolling up - show header
        //header.classList.remove('hidden');
        //tabs.style.top = '120px'; removed for now
    }
    
    // Always show header when at the top of the page
    if (scrollPosition <= 50) {
        header.classList.remove('hidden');
        tabs.style.top = '120px';
    }
});

// Add active class to clicked tab
const tabLinks = document.querySelectorAll('#tabs-tops a');
tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
   
        tabLinks.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
    });
});

//codes for the sidenavigation of options////////////////////////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Close the sidenav when clicking outside of it
document.addEventListener('click', function(event) {
    const sidenav = document.getElementById('mySidenav');
    const main = document.getElementById('main');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (window.innerWidth <= 768 && 
        sidenav.style.width === '250px' && 
        !sidenav.contains(event.target) && 
        event.target !== menuBtn) {
        closeNav();
    }
});

// Make page responsive on resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
});


const wrapper = document.querySelector('.boxes-wrapper');
        let animationSpeed = 30;
        
        function pauseAnimation() {
            wrapper.style.animationPlayState = 'paused';
        }
        
        function playAnimation() {
            wrapper.style.animationPlayState = 'running';
        }
        
        function slowDown() {
            animationSpeed += 5;
            wrapper.style.animationDuration = animationSpeed + 's';
        }
        
        function speedUp() {
            if (animationSpeed > 5) {
                animationSpeed -= 5;
                wrapper.style.animationDuration = animationSpeed + 's';
            }
        }
        
        // Adjust animation speed based on screen size
        function adjustForScreenSize() {
            if (window.innerWidth < 768) {
                // Slightly faster on mobile to account for smaller size
                wrapper.style.animationDuration = '25s';
                animationSpeed = 25;
            } else {
                wrapper.style.animationDuration = '30s';
                animationSpeed = 30;
            }
        }
        
        // Initial adjustment
        adjustForScreenSize();
        
        // Adjust on window resize
        window.addEventListener('resize', adjustForScreenSize);


//Fill in infomation, contact form


document.getElementById('country').addEventListener('change', function() {
    const manualCountryGroup = document.getElementById('manual-country-group');
    if (this.value === 'other') {
        manualCountryGroup.style.display = 'block';
    } else {
        manualCountryGroup.style.display = 'none';
    }
});

// Optional: Show success message after form submission
document.getElementById('contactForm').addEventListener('submit', function() {
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'block';
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }, 100);
});