
/* creating sections at the buttom of the document
I used data- which is a custom data to ensure linking the section created at the body with one at the link which means it has the same title*/
let count = 1;
const nav = document.getElementById("navbar__list");
const Sections=document.querySelectorAll("section")
const createSections = function()  {
    count++
    const seection=document.querySelector("main")
    let sec =document.createElement('section')
    seection.insertAdjacentElement('beforeend',sec)
    document.querySelectorAll("section").forEach(function() {
        sec.setAttribute('id',`section${count}`)
        sec.setAttribute('data-sec',`Section${count}`)
        sec.innerHTML=`<div class="landing__container">
        <h2>Section ${count}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>`
    });
        nav.innerHTML = "";
        document.querySelectorAll("section").forEach((section) => {
            const d=document.createElement('li')
            nav.insertAdjacentElement("beforeend", d);
            const anchor=`<a href="#${section.id}" data-sec="${section.id}" class="menu__link">${section.dataset.sec}</a>`;
            d.insertAdjacentHTML("beforeend", anchor);
        });
        
    };


//it is used to display active class along with css changes
//this function marks the only current section we view as active and makes it uniqe by changing (i.e. color)
window.addEventListener("scroll",()=>{
    let sections=document.querySelectorAll("section")
    sections.forEach(function(sec){
        if(sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top <= 100){
            let navLoc=nav.querySelector(`[data-sec=${sec.id}]`)
            sec.classList.add("active-class")
            navLoc.classList.add("active-link")
        }
        else{
            let navLoc=nav.querySelector(`[data-sec=${sec.id}]`)
            sec.classList.remove("active-class")
            navLoc.classList.remove("active-link")
        }
    });
});
/*I made this for loop to create the 4 sections which was at the html document instead of having them at the html document to ensure that
the page is interactive with no repeatition */
for (let i = 1; i < 5; i++) 
createSections();


//it is used to scroll to the specific section that have been clicked on the navigation bar smoothly and it can also be made by CSS
nav.addEventListener("click",((scroll)=>{
    scroll.preventDefault();
    document
    .querySelector(`[id=${scroll.target.dataset.sec}]`)
    .scrollIntoView({behavior:"smooth"})
    setTimeout(() => {
        location.hash=`${scroll.target.dataset.sec}`
    }, 500);
    }));




// creating more sections by click on the button
document.querySelector("button").addEventListener("click", () => {
    createSections();
});

// Clicking on the icon the document will scroll to the top smoothly
const Top = document.getElementById("top");
Top.addEventListener("click", function() {
    window.scrollTo({  top: 0 , behavior: "smooth" });
});


let preformanceAfter="";
preformanceAfter = performance.now();
console.log(`the Performance is ${preformanceAfter-preformanceBefore} `);
console.log(`the Performance before is ${preformanceBefore} `);
console.log(`the Performance after is ${preformanceAfter} `);
