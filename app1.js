function showCv(){ 
     hasil = `<div class = "container mt-5" style = "background-color : white; height: 118vh "> <div class="banner">
    <div class="liner">
        <div class="photo">
            <img src="1.jpg" alt="profile-picture">
        </div>
    </div>
    <div class="name">
        <h2>Arief<br>Syabakdan<br>
            <p
                style="text-align: center; border-radius: 5px;padding: 3px;background-color: rgb(47, 51, 62); width:13vh;">
                Full Stack Developer</p>
        </h2>
        <div class="identity">
            <p><strong>Phone :</strong><br><span style="color: gray;">+62 81280772482</span></p>
            <p><strong>email :</strong><br><span style="color: gray;">syahbakdan@gmail.com</span></p>
        </div>
        <!-- <div class="address">
            <p><strong>address :</strong></p>
            <p>Komplek Permata kopo da 12</p>
        </div> -->
    </div>
</div>
<div class="container-body">
    <div class="edhob">
        <h3 style="margin-left: 30px;">Education</h3>
        <div class="education">
            <p>2004 - 2010<br>SDN Taman Kopo Indah</p>
            <p>2010 - 2013<br>SMPN 1 Margahayu</p>
            <p>2013 - 2016<br>SMAN 4 Bandung</p>
            <p>2016 - 2020<br>Telkom University</p>
        </div>
        <h3 style="margin-left: 30px;">Hobbies</h3>
        <div class="hobbies">
            <p>Game</p>
            <p>Travelling</p>
            <p>Music</p>
        </div>
    </div>
    <div class="edskills">
        <h3 style="margin-left: 30px;">Experience</h3>
        <div class="experience">
            <div class="company">
                <p>2018<br>Telkom</p>
            </div>
            <div class="division" style="width:20vw;padding-left: 10px;">
                <p><strong>Access Maintenance & QA</strong><br>Maintenance Access Point User Telkom Di jogjakarta</p>
            </div>
        </div>
        <div class="experience">
            <div class="company">
                <p>2019<br>Telkomsel</p>
            </div>
            <div class="division" style="width:20vw;">
                <p><strong>Service Quality Assurance</strong><br>Internship sebagai staff dari networking bertanggung jawab mengelola network</p>
            </div>
        </div>
        <h3 style="margin-left: 30px;">Skills</h3>
        <div class="skills" style="display:inline-block;">
            <div class="skills-entry">
                <div class="skill">
                    <p>HTML</p>
                </div>
                <div class="bar">
                    <i class="dot" style="margin-left:50px;"></i>
                    <i class="dot"></i>
                    <i class="dot-light"></i>
                    <i class="dot-light"></i>
                </div>
                <div class="skill">
                    <p>CSS</p>
                </div>
                <div class="bar">
                    <i class="dot" style="margin-left:34px;"></i>
                    <i class="dot"></i>
                    <i class="dot-light"></i>
                    <i class="dot-light"></i>
                </div>
            </div>
            <div class="skills-entry">
                <div class="skill">
                    <p>JAVASCRIPT</p>
                </div>
                <div class="bar">
                    <i class="dot" style="margin-left:10px;"></i>
                    <i class="dot"></i>
                    <i class="dot-light"></i>
                    <i class="dot-light"></i>
                </div>
                <div class="skill">
                    <p>PYTHON</p>
                </div>
                <div class="bar">
                    <i class="dot" style="margin-left:10px;"></i>
                    <i class="dot"></i>
                    <i class="dot-light"></i>
                    <i class="dot-light"></i>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="gelombang" style="position:relative;top: -150px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgb(23, 27, 38)" fill-opacity="1"
                d="M0,256L48,250.7C96,245,192,235,288,229.3C384,224,480,224,576,229.3C672,235,768,245,864,245.3C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </div>
</div>
</div>`
document.getElementById("cv").innerHTML = hasil
}
showCv()
