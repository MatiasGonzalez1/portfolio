/** typing animation*/

const typed = new Typed(".typing", {
    strings:[" "," ","Web developer","Desarrollador web","Photograph", "Fotografo", "Content creator", "Creador de contenido"],
    typeSpeed:80,
    backSpeed:40,
    loop:true
})

const typed2 = new Typed(".typing2", {
    strings:[" "," ","Javascript","React","MySql", "Node.js", "Canva", "Filmora"],
    typeSpeed:90,
    backSpeed:60,
    loop:true
})

/**Aside **/
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
        for(let i = 0; i<totalNavList; i++){
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function(){
             removeBackSection();
                for(let j = 0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        addBackSection(j);
                        //allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth<1200){
                    asideSectionToglerBtn();
                }
           })
        }
        function removeBackSection(){
            for(let  i = 0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
        }
        function addBackSection(num){
            allSection[num].classList.add("back-section");
        }
        function showSection(e){
            for(let  i = 0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
         const target = e.getAttribute("href").split("#")[1];
         document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(e){
            for(let i = 0; i<totalNavList; i++){
                navList[i].querySelector("a").classList.remove("active");
                const target = e.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navList[i].querySelector("a").classList.add("active");

                }
            }
        }
        document.querySelector(".hire-me").addEventListener("click", function(){
            const sectionIndex = this.getAttribute("data-section-index");

            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        })
        const navTogglerBtn = document.querySelector(".nav-toggler");
        const aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", ()=>{
            asideSectionToglerBtn();
        })

        function asideSectionToglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i = 0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
        }