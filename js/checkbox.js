var checkBoxes = document.querySelectorAll(".checkbox");
var selecionados = 0;
var btn = document.querySelector("#send");

btn.addEventListener("click",function(e) {
    e.preventDefault();
    selecionados = 0; //só para quando precisar q o loop de verificação reiniciar
    checkBoxes.forEach(function(el)
    {
        if(el.checked) {
            selecionados++;
        }
    });

    console.log(selecionados);
});
