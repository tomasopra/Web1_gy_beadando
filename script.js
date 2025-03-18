function changeContent(section) {
    const content = document.getElementById("content");
    const sections = {
        "rolunk": `
            <h2>Rólunk</h2>
            <p>Az OldTimerCarShop Bt. 2010 óta foglalkozik klasszikus autók értékesítésével, bérlésével és szervizelésével. 
            Célunk, hogy a klasszikus autók szerelmeseinek megfelelő minőségű szolgáltatásokat nyújtsunk.</p>
            <div class="carousel-container">
                <div class="carousel">
                    <img src="media/car1.jpg" alt="Klasszikus autó 1" class="carousel-img active">
                    <img src="media/car2.jpg" alt="Klasszikus autó 2" class="carousel-img">
                    <img src="media/car3.jpg" alt="Klasszikus autó 3" class="carousel-img">
                </div>
                <button class="carousel-btn prev" onclick="changeSlide(-1)">❮</button>
                <button class="carousel-btn next" onclick="changeSlide(1)">❯</button>
                <div class="carousel-dots">
                    <span class="dot active" onclick="goToSlide(0)"></span>
                    <span class="dot" onclick="goToSlide(1)"></span>
                    <span class="dot" onclick="goToSlide(2)"></span>
                </div>
            </div>
        `,
        "szolgaltatasok": `
            <h2>Szolgáltatásaink</h2>
            <div class="szolgaltatas-grid">
                <div class="szolgaltatas-item" onclick="window.location.href='Vasarlas.html'">
                    <img src="media/vasarlas.jpg" alt="Klasszikus autók értékesítése">
                    <h3>Klasszikus autók értékesítése</h3>
                    <p>Kiváló állapotú, gondosan kiválogatott klasszikus autók értékesítése.</p>
                </div>
                <div class="szolgaltatas-item" onclick="window.location.href='Berles.html'">
                    <img src="media/berles.jpg" alt="Régimódi járművek bérlése">
                    <h3>Régimódi járművek bérlése</h3>
                    <p>Rövid és hosszú távú bérlési lehetőségek klasszikus járműveinkkel.</p>
                </div>
                <div class="szolgaltatas-item" onclick="window.location.href='Kapcsolat.html'">
                    <img src="media/tanacsadas.jpg" alt="Szakértői tanácsadás">
                    <h3>Szakértői tanácsadás</h3>
                    <p>Professzionális tanácsadás klasszikus autók vásárlásával és karbantartásával kapcsolatban.</p>
                </div>
                <div class="szolgaltatas-item" onclick="window.location.href='Szerviz.html'">
                    <img src="media/szerviz.jpg" alt="Teljes körű szerviz szolgáltatás">
                    <h3>Teljes körű szerviz szolgáltatás</h3>
                    <p>Kiváló minőségű szervizelés és karbantartás klasszikus járművekhöz.</p>
                </div>
            </div>
        `,
        "referenciak": `
            <h2>Referenciák</h2>
            <div class="referencia-grid">
                <div class="referencia-item">
                    <img src="media/ref1.jpg" alt="Referencia 1">
                    <p>1967-es Ford Mustang restaurálás</p>
                </div>
                <div class="referencia-item">
                    <img src="media/ref2.jpg" alt="Referencia 2">
                    <p>1972-es Volkswagen Beetle felújítás</p>
                </div>
                <div class="referencia-item">
                    <img src="media/ref3.jpg" alt="Referencia 3">
                    <p>1965-ös Chevrolet Impala szerviz</p>
                </div>
            </div>
        `,
        "nyitvatartas": `
            <h2>Nyitvatartás</h2>
            <table>
                <tr>
                    <th>Hétfő</th>
                    <th>Kedd</th>
                    <th>Szerda</th>
                    <th>Csütörtök</th>
                    <th>Péntek</th>
                    <th>Szombat</th>
                    <th colspan="2">Vasárnap</th>
                </tr>
                <tr>
                    <td>8:00 - 12:00</td>
                    <td>8:00 - 12:00</td>
                    <td>8:00 - 12:00</td>
                    <td>8:00 - 12:00</td>
                    <td>8:00 - 12:00</td>
                    <td>9:00 - 12:00</td>
                    <td rowspan="2" colspan="2">Zárva</td>
                </tr>
                <tr>
                    <td>13:00 - 17:00</td>
                    <td>13:00 - 17:00</td>
                    <td>13:00 - 17:00</td>
                    <td>13:00 - 17:00</td>
                    <td>13:00 - 17:00</td>
                    <td>13:00 - 16:00</td>
                </tr>
            </table>
        `,
        "elerhetoseg": `
            <h2>Elérhetőségek</h2>
            <ul class="lista">
                <li class="listaelem" id="email_icon">
                    <p>Email: info@oldtimercarshop.hu</p>
                </li>
                <li class="listaelem" id="phone_icon">
                    <p>Telefon: +36 30 123 4567</p> 
                </li>
            </ul>
            <img id="contact_illu" src="media/contact_illu.png">
        `,
        "cim": `
            <h2>Cím</h2>
            <p>6000 Kecskemét, Izsáki út 10.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1363.184248543157!2d19.66780071926314!3d46.89547084867401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743da7a6c479e1d%3A0xc8292b3f6dc69e7f!2sNeumann%20J%C3%A1nos%20Egyetem%20GAMF%20M%C5%B1szaki%20%C3%A9s%20Informatikai%20Kar!5e0!3m2!1shu!2shu!4v1742300783712!5m2!1shu!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `,
        "kozossegi_media": `
            <h2>Közösségi Média</h2>
            <ul class="lista">
                <li class="listaelem" id="facebook_icon"
                    <p><a href='https://www.facebook.com/'>Facebook</a></p>
                </li>
                <li class="listaelem" id="instagram_icon"
                    <p><a href='https://www.instagram.com'>Instagram</a></p>
                </li>
                <li class="listaelem" id="twitter_icon"
                    <p><a href='https://x.com/'>Twitter / X</a></p>
                </li>
                <li class="listaelem" id="tiktok_icon"
                    <p><a href='https://www.tiktok.com/'>TikTok</a></p>
                </li>
            </ul>
            <img id="social_illu" src="media/social.jpg">
        `
    };
    content.innerHTML = sections[section] || "<h2>Válassz egy témát!</h2>";
    
    // Ha a "rolunk" szekciót töltöttük be, inicializáljuk a carousel-t
    if (section === "rolunk") {
        // Állítsuk vissza a currentSlide változót
        currentSlide = 0;
        
        // Állítsuk be az első képet és pontot aktívként
        const slides = document.querySelectorAll('.carousel-img');
        const dots = document.querySelectorAll('.dot');
        
        slides.forEach((slide, index) => {
            if (index === 0) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        dots.forEach((dot, index) => {
            if (index === 0) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Indítsuk el az automatikus váltást
        startAutoSlide();
    }
}

let currentSlide = 0;
let slideInterval;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');
    
    // Távolítsuk el az aktív osztályt minden képről és pontról
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Számoljuk ki az új indexet
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Állítsuk be az új aktív képet és pontot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Újraindítsuk az automatikus váltást
    resetAutoSlide();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-img');
    const direction = index - currentSlide;
    changeSlide(direction);
}

function startAutoSlide() {
    slideInterval = setInterval(() => changeSlide(1), 5000); // 5 másodpercenként vált
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".aside-link");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Ellenőrizzük, hogy a főoldalon vagyunk-e
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'Fooldal.html' || currentPage === '') {
        // Automatikusan betöltjük a "Rólunk" szekciót
        changeContent('rolunk');
        // Az első gombot aktívként jelöljük
        const firstButton = document.querySelector('.aside-link');
        if (firstButton) {
            firstButton.classList.add('active');
        }
    }
});