
window.addEventListener("load",function(){
   
   document.querySelector(".preloader").classList.add("opacity-0");
   setTimeout(function(){
      document.querySelector(".preloader").style.display="none";
   },1000)
})

const filtercontainer=document.querySelector(".portfolio-filter"),
      filterBtns= filtercontainer.children,
      totalfilterBtn=filterBtns.length,
       portfolioL =document.querySelectorAll(".portfolio-l"),
     totalportfolioL =portfolioL.length;
    
    for (let i=0; i<totalfilterBtn; i++) {
      filterBtns[i].addEventListener("click" ,function(){
        filtercontainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");   
            
            
           const filterValue =this.getAttribute("data-filter");
            for (let k=0; k<totalportfolioL; k++) {
                if (filterValue === portfolioL[k].getAttribute("data-category")) {
                      portfolioL[k].classList.remove("hide");
                       portfolioL[k].classList.add("show");
                       
                     }
                else{
                     
                     
                     portfolioL[k].classList.remove("show");
                     portfolioL[k].classList.add("hide");
                    
                    }
                    
                  
                    
                    if (filterValue === "all") {
                         portfolioL[k].classList.add("show");
                       portfolioL[k].classList.remove("hide");
                        
                    }
            }
           
          });
    }
    
    
   const lightbox=document.querySelector(".lightbox"),
         lightboxImg=lightbox.querySelector(".lightbox-img"),
         lightboxClose=lightbox.querySelector(".lightbox-close"),
         lightboxText=lightbox.querySelector(".caption-text"),
         lightboxCounter=lightbox.querySelector(".caption-counter");
         
    let itemIndex=0;
    
     for ( let i=0; i<totalportfolioL; i++) {
            portfolioL[i].addEventListener("click",function(){
             itemIndex=i;
            changeItem();
            toggleLightbox();
    
            });
     }
     
     function nextItem() {
        if (itemIndex === totalportfolioL-1){
            itemIndex=0;
        }
        else {
            itemIndex++;
        }
        changeItem();
     }
     
      function prevItem() {
        if (itemIndex === 0){
           itemIndex= totalportfolioL-1;
        }
        else {
            itemIndex--;
        }
        changeItem();
     }
     
     function toggleLightbox() {
        lightbox.classList.toggle("open");
     }
    
    function changeItem() {
        imgSrc=portfolioL[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioL[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " +  totalportfolioL;
    }
    
    lightbox.addEventListener("click" ,function(event){
        
       if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
        
       }
    });
    
    
    const nav=document.querySelector(".nav"),
          navList= nav.querySelectorAll("li"),
          totalNavList= navList.length,
          allSection=document.querySelectorAll("section"),
          totalAllSection=allSection.length;
          
     for (let i=0; i<totalNavList; i++) {
          const a=navList[i].querySelector("a");
          
          a.addEventListener("click", function(){
            removeBackSectionClass();
            
            for (j=0;j<totalNavList;j++) {
                 if (navList[j].querySelector("a").classList.contains("active")){
                    addBackSectionClass(j);
                 }
            navList[j].querySelector("a").classList.remove("active");
            
            }
            this.classList.add("active");
            showSection(this);
            
            if (window.innerWidth < 1200) {
               batoolSectionTogglerBtn();
            }
            
            });
          }
          
          function removeBackSectionClass() {
            for (let i=0;i<totalAllSection;i++) {
                    allSection[i].classList.remove("back-section");
                }
          }
          function addBackSectionClass(num) {
             allSection[num].classList.add("back-section");
          }
          function showSection(element) {
                for (let i=0;i<totalAllSection;i++) {
                    allSection[i].classList.remove("active");
                }
            const target=element.getAttribute("href").split("#")[1];
                  document.querySelector("#"+target).classList.add("active")
          }
          
          
          function updateNav(element) {
         for (let i=0;i<totalNavList;i++){
             navList[i].querySelector("a").classList.remove("active");
             const target=element.getAttribute("href").split("#")[1];
             if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                    navList[i].querySelector("a").classList.add("active");
             }
          }
          }
          
          document.querySelector(".hire-me").addEventListener("click",function(){
            const sectionIndex=this.getAttribute("data-section-index");
            showSection(this);
            updateNav(this);
            removeBackSectionClass();
             addBackSectionClass(sectionIndex);
          });
          
          const navTogglerBtn=document.querySelector(".nav-tog"),
                batool=document.querySelector(".batool");
                
            navTogglerBtn.addEventListener("click", batoolSectionTogglerBtn)
               
               
               
          
         
           function batoolSectionTogglerBtn() {
             batool.classList.toggle("open");
             navTogglerBtn.classList.toggle("open");
             for (let i=0;i<totalAllSection;i++) {
                    allSection[i].classList.toggle("open");
                }
           }
    