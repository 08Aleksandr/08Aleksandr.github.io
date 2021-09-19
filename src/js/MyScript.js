$(document).ready(function () {
    $('form').on('submit', function (event) {
        if ($("#text").val() == "") {
            event.preventDefault();
            alert('Пожалуйста проверьте заполнение всех полей!');
        }
    });
});

$(document).ready(function () {
    
    
    $('form').on('submit', function (event) {
        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        })
            .done(function (html) {
            $(this).find("input" + "textarea").val("");
            alert("Отправлено");
            $("form").trigger("reset");
        });
        return false;
    });
});
