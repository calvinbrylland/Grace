function submitemail(){
    if(document.getElementById("email")=="" && document.getElementById("textar")==""){
        window.alert("Pesan tidak lengkap!");
    }else{
        window.alert("Pesan anda terkirim!");
        document.getElementById("email").value="";
        document.getElementById("textar").value="";
    }
}
function submitregist(){
    if(document.getElementById("name")=="" && document.getElementById("cont")==""&& document.getElementById("nim")==""&& document.getElementById("fileup")==null){
        window.alert("Pesan tidak lengkap!");
    }else{
        window.alert("Terimakasih sudah melakukan pendaftaran pada UKM ini");
        document.getElementById("name").value="";
        document.getElementById("nim").value="";
        document.getElementById("cont").value="";
    }
}
