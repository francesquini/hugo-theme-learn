$(document).ready(function(){
    //$(pre.outp_code)
})

function esconde_mostra(obj){
    $(obj).next().toggle("slow")
    if ($(obj).hasClass("btn_hide")){
	$(obj).removeClass("btn_hide")
	$(obj).addClass("btn_show")
	$(obj).html("<<<")
    }else{
	$(obj).removeClass("btn_show")
	$(obj).addClass("btn_hide")
	$(obj).html(">>>")
    }
}
