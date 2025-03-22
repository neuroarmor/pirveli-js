let address=document.getElementById("nat").src;
console.log(address);

// let onoff = () => {
//     let nat = document.getElementById("nat");
//     if (nat.src == "file:///C:/Users/User/Desktop/pirveli%20js/img/off.png") {
//         nat.src = "img/on.png";  
//     } 
//     else {
//         nat.src = "img/off.png";  
//     }
// }
// არ იმუშავა გითჰაბში
let onoff = () => {
    let nat = document.getElementById("nat");
    if (nat.src.includes("off.png")) { 
        nat.src = "img/on.png";
    }
    else {
        nat.src = "img/off.png";
    }
}
