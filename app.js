const menuBar = document.querySelector('.menu-bar');
const menuItems = document.querySelector('.menu-items');
const topMenu = document.querySelector(".top");

window.onscroll = function () {
    let yScroll = this.pageYOffset;


    if(yScroll > 80) {
        topMenu.classList.add("active");
    } else {
        topMenu.classList.remove("active");
    }

}
menuBar.onclick = () => {
    menuBar.classList.toggle('active');
    menuItems.classList.toggle('display');
}