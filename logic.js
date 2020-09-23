

productTotal=document.getElementById("product_total");
shipCharge=document.getElementById("ship_charge");
cartAmt=document.getElementById("total_cart_amt");

// Discout object
shreyas= {value:20};

// 



const decrnum = (ids, price) => {

    var itemval = document.getElementById(ids);
    var itemprice = document.getElementById(price);
    // console.log(itemval.value);
    if (itemval.value <= 0) {
        itemval.value = 0;
        alert("negative quantity not allowed");
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        if (price == "itemval") {
            itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
            productTotal.innerHTML=parseInt(productTotal.innerHTML)-15;
            
        } else if (price == "itemval1") {
            itemprice.innerHTML = parseInt(itemprice.innerHTML) - 30;
            productTotal.innerHTML=parseInt(productTotal.innerHTML)-30;
        }
        if(productTotal.innerHTML==0){
            shipCharge.innerHTML=0;
        }else{
            shipCharge.innerHTML=50;
        }
        if(productTotal.innerHTML>=150){
            document.getElementById("freedil").innerHTML="delivery free above purchase of 150$";
            shipCharge.innerHTML=0;
        }else if(productTotal.innerHTML<150){
            document.getElementById("freedil").innerHTML="";
        }
        cartAmt.innerHTML=parseInt(productTotal.innerHTML)+parseInt(shipCharge.innerHTML);
        itemval.style.background = "#fff";
        itemval.style.color = "#000";

      
        let dissbox=document.getElementById("dissbox");
        if(productTotal.innerHTML>=30){
            dissbox.classList.remove("visibal");
        }else if(productTotal.innerHTML<30){
            dissbox.classList.add("visibal");
        }
    }
}
const incrnum = (ids, price) => {
    
    var itemval = document.getElementById(ids);
    var itemprice = document.getElementById(price);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert("max 5 allowed");
        itemval.style.background = "red";
        itemval.style.color = "#fff";
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        if (price == "itemval") {
            itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
            productTotal.innerHTML=parseInt(productTotal.innerHTML)+15;
        } else if (price == "itemval1") {
            itemprice.innerHTML = parseInt(itemprice.innerHTML) + 30;
            productTotal.innerHTML=parseInt(productTotal.innerHTML)+30;
        }
        if(productTotal.innerHTML==0){
            shipCharge.innerHTML=0;
        }else{
            shipCharge.innerHTML=50;
        }
        if(productTotal.innerHTML>=150){
            document.getElementById("freedil").innerHTML="delivery free above purchase of 150$";
            shipCharge.innerHTML=0;
        }else if(productTotal.innerHTML<150){
            document.getElementById("freedil").innerHTML="";
        }
        cartAmt.innerHTML=parseInt(productTotal.innerHTML)+parseInt(shipCharge.innerHTML);

        let dissbox=document.getElementById("dissbox");
        if(productTotal.innerHTML>=30){
            dissbox.classList.remove("visibal");
        }else if(productTotal.innerHTML<30){
            dissbox.classList.add("visibal");
           
        }
    }
}
// cartAmt=document.getElementById("total_cart_amt");






function discount_code(){
    var errortrw=document.getElementById("error-trw");
    const discountcode1=document.getElementById("discount_code1");
    const dismsg=document.getElementById("dismsg");
    const dismsg_val=document.getElementById("dismsg_val")

    if(discountcode1.value==="shreyas"){

        const prom=new Promise((resolve,reject)=>{
            let finalamt=cartAmt.innerHTML-shreyas.value;
            cartAmt.innerHTML=finalamt;
            errortrw.innerHTML="congrats! code is valid and it is applied"
            discountcode1.value="";
            dismsg.classList.remove("visibal");
            dismsg_val.innerHTML=`-${shreyas.value}`;
            resolve();
        });
       prom.then(()=>{
           removebtn=document.getElementById("removebtn");
           removebtn.innerHTML=`<button class="btn btn-primary btn-sm mt-3" id="closeDiscount">Remove</button>`;
       }).then(()=>{
           let closeDiscount=document.getElementById("closeDiscount");
           closeDiscount.addEventListener("click",()=>{
            errortrw.innerHTML=`write the discount code (code is "shreyas")`;
            let finalamt_after_remove=parseInt(cartAmt.innerHTML) +shreyas.value;
            console.log(finalamt_after_remove);
            cartAmt.innerHTML=finalamt_after_remove;
            removebtn.innerHTML="";

            dismsg.classList.add("visibal");
            dismsg_val.innerHTML=`0`;
           })
       })
    }
    else{
        errortrw.innerHTML="try again! code is 'shreyas'"
        discountcode1.value="";
        
    }
   
}
