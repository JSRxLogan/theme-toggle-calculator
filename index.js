
let modeBtn = document.querySelector("#mode-btn");
let previous = document.querySelector(".previous-exp");
let expression = document.querySelector(".expression");
let history = document.querySelector(".fa-clock");
let sizeBtn = document.querySelector(".fa-up-right-and-down-left-from-center");
let deleat = document.querySelector(".fa-delete-left");
let choiceBtns = document.querySelectorAll(".items");

let mode = "dark";
let exp = "";
let prevExp = "";
let size = "small";



deleat.addEventListener("click",()=>{
  exp=exp.substring(0,exp.length-1)
  expression.textContent=exp;
})

function builtInEvaluate(expressionToEvaluate)
{
    try{
        return eval(expressionToEvaluate);
    }catch(error){
        alert("Invalid expression");
        return error;
    }
}


choiceBtns.forEach((button)=>{

    button.addEventListener("click",()=>{
        let char = button.textContent;
        let ans;
     
        if(char=="AC" || char=="=")
        {
          if(char=="AC")
          {
             exp="";
             expression.textContent=exp;
          }
     
          else{
             ans=builtInEvaluate(exp.trim());
     
             if(ans!==undefined)
             {
                if((ans%1)>0)
                {
                    ans=ans.toFixed(7);
                }

                 prevExp=exp;
                 exp=ans;
         
                 expression.textContent=exp;
                 previous.textContent=prevExp;
             }
          }
        }
     
        else{
         exp=exp+char;
         expression.textContent = exp;
        }
       console.log(exp)
     })
    console.log(button);
})

let modeBtnTheme = document.querySelector(".mode")
let cont_1_1_l = document.querySelector(".container-1-1");
let cont_1_l = document.querySelector(".container-1");
let cont_1_2_l = document.querySelector(".container-1-2");
let cont_1_3_l = document.querySelector(".container-1-3");
let cont_2_l = document.querySelector(".container-2");
let cont_2_1_l = document.querySelector(".container-2-1");
let cont_2_1_1_l =document.querySelector(".container-2-1-1");
let cont_2_2_l = document.querySelector(".container-2-2");
let special_l = document.querySelectorAll(".special");
let operator_l = document.querySelectorAll(".operator");
let operand_l = document.querySelectorAll(".operand");
let equal_l = document.querySelector(".equal");
let delete_l=document.querySelector(".delete");
let body_l = document.querySelector("body");
let previous_l= document.querySelector(".previous-exp");
let expression_l = document.querySelector(".expression");

modeBtn.addEventListener("click",()=>{

    if(mode==="dark")
    {
      modeBtnTheme.classList.add("mode-l")
      modeBtn.classList.add("mode-btn-l");
      cont_1_1_l.classList.add("cont-1-1-l");
      cont_1_l.classList.add("cont-1-l");
      cont_1_2_l.classList.add("cont-1-2-l");
      cont_1_3_l.classList.add("cont-1-3-l");
      cont_2_l.classList.add("cont-2-l");
      cont_2_1_l.classList.add("cont-2-1-l");
      cont_2_1_1_l.classList.add("cont-2-1-1-l");
      delete_l.classList.add("delete-l");
      cont_2_2_l.classList.add("cont-2-2-l");
      previous_l.classList.add("previous-exp-l");
      expression_l.classList.add("expression-l");

        special_l.forEach((box)=>{
            box.classList.add("special-l");
        })

        operand_l.forEach((box)=>{
            box.classList.add("operand-l");
        })

        operator_l.forEach((box)=>{
            box.classList.add("operator-l");
        })

      equal_l.classList.add("equal-l");
      body_l.classList.add("body-l");

      mode="light";

    }

    else{
        modeBtnTheme.classList.remove("mode-l")
        modeBtn.classList.remove("mode-btn-l");
        cont_1_1_l.classList.remove("cont-1-1-l");
        cont_1_l.classList.remove("cont-1-l");
        cont_1_2_l.classList.remove("cont-1-2-l");
        cont_1_3_l.classList.remove("cont-1-3-l");
        cont_2_l.classList.remove("cont-2-l");
        cont_2_1_l.classList.remove("cont-2-1-l");
        cont_2_1_1_l.classList.remove("cont-2-1-1-l");
        delete_l.classList.remove("delete-l");
        cont_2_2_l.classList.remove("cont-2-2-l");
        previous_l.classList.remove("previous-exp-l");
      expression_l.classList.remove("expression-l");


        special_l.forEach((box)=>{
            box.classList.remove("special-l");
        })

        operand_l.forEach((box)=>{
            box.classList.remove("operand-l");
        })

        operator_l.forEach((box)=>{
            box.classList.remove("operator-l");
        })


        equal_l.classList.remove("equal-l");

        body_l.classList.remove("body-l");

        mode="dark";
    }
})
