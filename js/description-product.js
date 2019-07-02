const $star = window.document.querySelector(".star")
const $addCompras = window.document.querySelector(".-button-second")
const $MostrarQuantidade = window.document.querySelector(".quantidade")
let valorInicial = 10;

$star.addEventListener("click", handleClickStar);
$addCompras.addEventListener("click", handleClickCompras);

function handleClickStar() {
    // if ($star.classList.contains('starActived')) {
    //     $star.classList.remove("starActived")
    // } else {
    //     $star.classList.add("starActived")
    // }

    $star.classList.toggle("starActived")
}

function handleClickCompras() {
    $MostrarQuantidade.textContent = `Carrinho (${++valorInicial})`;
}
