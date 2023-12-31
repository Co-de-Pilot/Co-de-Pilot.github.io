/* MENU TOGGLE vezérlése */
const menuToggle = document.querySelector('nav .toggle');
const menuList = document.querySelector('nav .menu');

menuToggle.addEventListener('click', () => {
    const menuActiveItems = document.querySelectorAll('.menu-active');
    menuActiveItems.forEach(menuActiveItem => {
        menuActiveItem.classList.remove("menu-active");
    })
    if(menuActiveItems.length == 0) {
        menuToggle.classList.add("menu-active");
        menuList.classList.add("menu-active");
    }
})


/* MENU ACTIVE LINK vezérlése */
const sections = document.querySelectorAll('section');
const menuitems = document.querySelectorAll('nav .menu li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            menuitems.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav .menu li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};




/* CONTACT FORM vezérlése */
const submitButton = document.querySelector('.submit-button');
const email = document.querySelector('.field #email');
const form = document.querySelector('.contact-form');
const items = document.querySelectorAll('.form-item');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkInputs();
    let correctFormInput = true;
    for (const item of items) {
        if (item.classList.contains("blank") || item.classList.contains("error")) {
            correctFormInput = false;
        }
    }
    if (correctFormInput) {
        form.submit();
        form.reset();
    }
})

function checkInputs() {
    
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("blank");
            item.parentElement.classList.add("blank");
        }
        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener('keyup', (event) => {
            checkEmail();
        });

        
        item.addEventListener('keyup', (event) => {            
            if (item.value != "") {
                item.classList.remove("blank");
                item.parentElement.classList.remove("blank");
            } else {
                item.classList.add("blank");
                item.parentElement.classList.add("blank");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
