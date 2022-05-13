$(document).ready(function(){

    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
    })
    
        
    $("#carrossel img:eq(0)").addClass("banner-ativo").show()
    setInterval(slide,1000);

    function slide(){
        if($(".banner-ativo").next().length){
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        }else{
            $(".banner-ativo").removeClass().hide()
            $("#carrossel img:eq(0)").addClass("banner-ativo").show()
        }
    }

})


$("#entrar").click(function() {
    var email = $("#email").val();
    var senha = $("#senha").val();
  if (email == "senai@123.com.br" && senha == "12345678") {
    window.location.href = "bemvindo.html";
    } else {
      alert("Login ou senha incorretos");
      $("#email").val("senai@123.com.br");
      $("#senha").val("12345678");
    }
  });
let listaDestaques = [
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
        imagem:"src=img/Produto 2.png" ,
    },
    {
        Nome:"teste teste teste Bia",
        Preco:"De:3.999,00",
        Preçopromo: "Por:1.500,55",
    },
]

function carregarDestaques(){
    let espaco = document.getElementById("destaques")
    
    let template = "";

    for  (let index = 0; index < listaDestaques.length; index++) {
        const destaques = listaDestaques[index]; 
        
        template += ` <div class="Produto">
        <a href=""><img class="imagem" src="img/Produto 1.png"></a>
        <h4>${destaques.Nome}</h4>
        <p>DE: R$ 500,00</p>
        <p>Por:459,99</p>
        <a href=""><img class="comprar" src="img/botao-comprar.png"></a>
        </div>`
    }

    espaco.innerHTML = template; 
    }
