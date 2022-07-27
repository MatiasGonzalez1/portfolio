/** typing animation*/

const typed = new Typed(".typing", {
    strings:[" "," ","Web developer","Desarrollador web","Photograph", "Fotografo", "Content creator", "Creador de contenido"],
    typeSpeed:80,
    backSpeed:40,
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
                for(let j = 0; j<totalNavList; j++){
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
           })
        }

        function showSection(e){
            for(let  i = 0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
         const target = e.getAttribute("href").split("#")[1];
         document.querySelector("#" + target).classList.add("active")
        }