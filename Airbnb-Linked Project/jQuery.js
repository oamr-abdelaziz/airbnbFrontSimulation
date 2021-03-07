$(document).ready(()=>{
    var nav_items = $(".nav-item")
    $(nav_items).on("click",function(){
        for (let index = 0; index < nav_items.length; index++) {
            $(nav_items[index]).removeClass("active")   
        }
        $(this).addClass("active")
    })
    $('select').selectpicker({
        showSubtext: true
    });
})