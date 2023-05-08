const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')


const userTheme =localStorage.getItem("theme")
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)').matches

const iconToggle=()=>{
    moonIcon.classList.toggle("display-none")
    sunIcon.classList.toggle("display-none")

}

const themeCheck =()=>{
    if(userTheme==="dark"||(!userTheme&&systemTheme)){
        document.documentElement.classList.add("dark")
        $(".moon").hide();
        $(".sun").show();
        moonIcon.classList.add("display-none")
        return
    }
    sunIcon.classList.add("display-none")
    $(".sun").hide();
    $(".moon").show();
}

const themeSwitch =()=>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
        iconToggle();
        return
    }
    document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark")
        iconToggle();
        
}

sunIcon.addEventListener("click",()=>{
    themeSwitch();
        $(".sun").hide();
        $(".moon").show();
})

moonIcon.addEventListener("click",()=>{
    themeSwitch();
    $(".moon").hide();
    $(".sun").show();
})


themeCheck()


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up")
        // up arrow
    }
    else if (e.keyCode == '40') {
        console.log("down")

        // down arrow
    }
    else if (e.keyCode == '37') {
        console.log("left")

       // left arrow
    }
    else if (e.keyCode == '39') {
        console.log("right")

       // right arrow
    }

}