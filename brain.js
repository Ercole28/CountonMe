const display = document.getElementById("display");
const input = document.querySelectorAll("input");
let value = "";

input.forEach((e)=>{
    e.addEventListener("click", (clicked)=>{
        if(clicked.target.value == "="){
            if(value.length != 0){
                let newvalue = eval(value);
                value = newvalue;
                display.value = value;
            }
        }else if(clicked.target.value == "C"){
            value = "";
            display.value = value;
        }else{
            value += clicked.target.value;
            display.value = value;
        }
    });
});
















// switchbtn.addEventListener("click", () => {
//     if(switchbtn.checked == true){
//         document.body.setAttribute("data-theme", "dark");
//     } else {
//         document.body.setAttribute("data-theme", "");
//     }
// });

