window.onscroll = function () {
    scrollTransformBgNav()
};
 
const scrollTransformBgNav = () => {
 
    const x = window.matchMedia("(min-width: 992px)")
 
    const check = false;
 
    if (x.matches) {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            document.getElementById("navbar").style.background = "#ffffff";
            document.getElementById("navbar").style.boxShadow = "0px 0px 20px 0px rgb(0 0 0 / 20%)";
            document.getElementById("navbar-brand").style.color = "#380a7f";
            document.getElementsByClassName("nav-link")[0].style.color = "#000";
 
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("nav-link")[i].style.color = "#000";
            }
        } else {
            document.getElementById("navbar").style.background = "transparent";
            document.getElementById("navbar").style.boxShadow = "none";
            document.getElementById("navbar-brand").style.color = "#ffffff";
 
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("nav-link")[i].style.color = "#ffffff";
            }
        }
    }
}



