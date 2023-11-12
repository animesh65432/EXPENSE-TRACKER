let buttom = document.querySelector("#add") ; 
buttom.addEventListener("click" , clicker) 

function  clicker (event){
    event.preventDefault() ; 
    const add_money = document.getElementById("ch=ex").value ; 
    const dec = document.getElementById("ch-dec").value ; 
    const category = document.getElementById("ch-c").value ; 

    const all_container = document.body ; 

    const cre_ele = document.createElement("p") ; 
    cre_ele.textContent = add_money + dec + category ; 
    let cre_bottom = document.createElement("button") ;
    cre_bottom.textContent = "DEL EXPENSE"; 
    const cre_edit = document.createElement("button") ;
    cre_edit.textContent = "EDIT EXPENSE"
    cre_ele.appendChild(cre_bottom);
    cre_ele.appendChild(cre_edit);
    all_container.appendChild(cre_ele);


    const user_details = {
        TODAY_MONEY : add_money , 
        TODAY_LIST : dec , 
        TODAY_CATEGORY : category 

    }

    localStorage.setItem("userdetails" , JSON.stringify(user_details)) 

    cre_bottom.onclick  = ()=>{
        cre_bottom.parentElement.remove() ;
        localStorage.removeItem("userdetails")
    }

    cre_edit.onclick  = ()=>{
        cre_bottom.parentElement.remove()
        localStorage.removeItem("userdetails")
    }

}