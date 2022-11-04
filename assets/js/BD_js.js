function mostrarFrmJean(){
  //alert('rrrr');
  $("#tienda").hide();
  $("#frmPedido").show();
  $("#nombre").val("Pantalones Jean");
  $("#categoria").val("Ropa Casual");
  $("#precio").val("115");
  $("#cantidad").val("0");
  $("#total").val("");


}
function mostrarFrmCamisas(){
  //alert('rrrr');
  $("#tienda").hide();
  $("#frmPedido").show();
  $("#nombre").val("Camisas");
  $("#categoria").val("Ropa Casual");
  $("#precio").val("80");
  $("#cantidad").val("0");
  $("#total").val("");

}
function mostrarFrmImpermeables(){
  //alert('rrrr');s
  $("#tienda").hide();
  $("#frmPedido").show();
  $("#nombre").val("Impermeables");
  $("#categoria").val("Ropa de Trabajo");
  $("#precio").val("55");
  $("#cantidad").val("0");
  $("#total").val("");

}
function mostrarFrmMochilas(){
  //alert('rrrr');
  $("#tienda").hide();
  $("#frmPedido").show();
  $("#nombre").val("Mochila");
  $("#categoria").val("Estudiantil");
  $("#precio").val("180");
  $("#cantidad").val("0");
  $("#total").val("");

}
function mostrarFrmChamarras(){
  //alert('rrrr');
  $("#tienda").hide();
  $("#frmPedido").show();
  $("#nombre").val("Overol");
  $("#categoria").val("Ropa de Trabajo");
  $("#precio").val("220");
  $("#cantidad").val("0");
  $("#total").val("");

}
function mostrarFrmOverol(){
  //alert('rrrr');
  $("#tienda").hide();
  $("#frmPedido").show();
  $("#nombre").val("Pantalones Jean");
  $("#categoria").val("Ropa Casual");
  $("#precio").val("115");
  $("#cantidad").val("0");
  $("#total").val("");

}
function mostrarTienda(){
  //alert('rrrr');
  $("#tienda").show();
  $("#frmPedido").hide();
 

}
function calcular()
{
  var cantidad=parseInt($("#cantidad").val());
  var precio=parseInt($("#precio").val());
  var total=cantidad*precio;
  //alert(total);
  $("#total").val(parseInt(total));
}
function insert_Pedido(){
alert("entro pedido");
  let pedido=new { nombre: $("#nombre").val(), categoria:$("#categoria").val(), cantidad:$("#cantidad").val(), precio:$("#precio").val(), total:$("#total").val()}
localStorage.setItem("pedidos",JSON.stringify(pedido));
pedidos.ad
}