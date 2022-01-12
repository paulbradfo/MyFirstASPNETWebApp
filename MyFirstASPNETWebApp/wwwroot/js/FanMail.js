////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From" + document.getElementById("from").value +
////        ", Subject: " + document.getElementById("subject").value +
////        ", Message: " + document.getElementById("message").value);
////})

$("#btnSend").click(function () {
    alert("From: " + $("#from").val() +
        ", Subject: " + $("#subject").val() +
        ", Message: " + $("#message").val());

    $("#picGanderson").fadeOut("slow");
})