var total = Number(document.getElementById("total").innerText);
let heart = document.querySelectorAll(".coeur");
for(let like of heart){
    like.addEventListener("click",function(){
        document.getElementById("like" + like.getAttribute("name")).style.backgroundColor="red"
        if(document.getElementById("like" + like.getAttribute("name")).style.backgroundColor ="red"){
            like.addEventListener("click",function(){
                document.getElementById("like" + like.getAttribute("name")).style.backgroundColor="white"
            })
        }
    })
}
let deleteBtns = document.querySelectorAll("#btn");
console.log(deleteBtns)
for (let btn of deleteBtns) {
    btn.addEventListener("click", function (){
        btn.parentNode.remove();
        let price = Number(
            document.getElementById(btn.getAttribute("name") + "_price").innerHTML
          );
          let qty = Number(
            document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
          );
          total -= price * qty;
          document.getElementById(btn.getAttribute("name")).remove();
          document.getElementById("total").innerText = total;
    });
}
var plusBtns = document.querySelectorAll(".plus");
console.log(plusBtns);
for (let btn of plusBtns) {
  btn.addEventListener("click", function (){
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    qty++;
    total += price;
    document.getElementById("total").innerText = total;
    document.getElementById(btn.getAttribute("name") + "_qty").innerHTML = qty;
  });
}
var minusBtns = document.querySelectorAll(".minus");
for (let btn of minusBtns) {
  btn.addEventListener("click", function () {
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    if (qty > 0) {
      qty--;
      total -= price;
    } else alert("stop");
    document.getElementById("total").innerText = total;
    document.getElementById(btn.getAttribute("name") + "_qty").innerHTML = qty;
  });
}

