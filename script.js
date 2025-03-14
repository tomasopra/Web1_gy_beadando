function changeContent(section) {
    const content = document.getElementById("content");
    const sections = {
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
            <p>1051 Budapest, Fő utca 1.</p>
            <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1340.7725387273722!2d19.05132!3d47.49801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3bbd9e8e4b%3A0x6a0c3f1778dc0b74!2sF%C5%91%20utca%201%2C%20Budapest%2C%201051!5e0!3m2!1shu!2shu!4v1648621234567"></iframe>
        `,
        "kozossegi_media": `
            <h2>Közösségi Média</h2>
            <ul class="lista">
                <li class="listaelem" id="facebook_icon"
                    <p><a href='#'>Facebook</a></p>
                </li>
                <li class="listaelem" id="instagram_icon"
                    <p><a href="#">Instagram</a></p>
                </li>
                <li class="listaelem" id="twitter_icon"
                    <p><a href="#">Twitter / X</a></p>
                </li>
                <li class="listaelem" id="tiktok_icon"
                    <p><a href="#">TikTok</a></p>
                </li>
            </ul>
            <img id="social_illu" src="media/social.jpg">
        `
    };
    content.innerHTML = sections[section] || "<h2>Válassz egy témát!</h2>";
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".aside-link");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});