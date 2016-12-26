$(document).ready(function () {
    $("#contact-form").submit(function (e) {

        $(".errorForm").removeClass("errorForm");
        $(".errorFormNum").removeClass("errorFormNum");
        $('.send_success').fadeOut();
        $('.send_error').fadeOut();

        var send = true;

        if ($("#name").val() == "") {
            send = false;
            $("#name").addClass("errorForm");
            $('#myModal').animate({
                scrollTop: $('#modal_top').offset().top
            }, 1500);
            $('#send_error').fadeIn('fast');
        }
        if ($("#sername").val() == "") {
            send = false;
            $("#sername").addClass("errorForm");
            $('#myModal').animate({
                scrollTop: $('#modal_top').offset().top
            }, 1500);
            $('#send_error').fadeIn('fast');
        }
        if ($("#tel").val() == "") {
            send = false;
            $("#tel").addClass("errorForm");
            $('#myModal').animate({
                scrollTop: $('#modal_top').offset().top
            }, 1500);
            $('#send_error').fadeIn('fast');
        }
        if ($("#email").val() == "") {
            send = false;
            $("#email").addClass("errorForm");
            $('#myModal').animate({
                scrollTop: $('#modal_top').offset().top
            }, 1500);
            $('#send_error').fadeIn('fast');
        }

        if ($("#dost").val() == null) {
            send = false;
            $("#dost").addClass("errorForm");
            $('#myModal').animate({
                scrollTop: $('#modal_top').offset().top
            }, 1500);
            $('#send_error').fadeIn('fast');
        }

        if ($("#adress").val() == "") {
            if ($("#dost").val() != "Самовивіз") {
                send = false;
                $("#adress").addClass("errorForm");
                $('#myModal').animate({
                    scrollTop: $('#modal_top').offset().top
                }, 1500);
                $('#send_error').fadeIn('fast');
            }
        }

        if ($("#count").val() == "0") {
            send = false;
            $("#count").addClass("errorFormNum");
            $("#count_price").addClass("errorFormNum");
            $(".plus1").addClass("errorFormNum");
            $(".plus2").addClass("errorFormNum");
            $(".minus1").addClass("errorFormNum");
            $(".minus2").addClass("errorFormNum");
            $('#send_error').fadeIn('fast');
        }


        if (send) {
            var name = $("#name").val();
            var sername = $("#sername").val();
            var tel = $("#tel").val();
            var email = $("#email").val();
            var kol1 = $("#pm1").val();
            var kol2 = $("#pm2").val();
            var kol = $("#count").val();
            var price = $("#count_price").val();
            var dost = $("#dost").val();
            var adress = $("#adress").val();

            $.ajax({
                method: "POST",
                url: "php/send.php",
                data: {
                    name: name,
                    sername: sername,
                    email: email,
                    tel: tel,
                    kol: kol,
                    price: price,
                    dost: dost,
                    adress: adress,
                    kol1: kol1,
                    kol2: kol2
                },
                success: function (data) {
                    if (data == "") {
                        $('#contact-form').trigger("reset");
                        $("#okform").html("Замовлено");
                        $('#myModal').animate({
                            scrollTop: $('#modal_top').offset().top
                        }, 1500);
                        $('#send_error').fadeOut('fast');
                        $('#send_success').fadeIn('fast');
                    }
                }
            });

        }
        e.preventDefault();
    });

    $("#name").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#sername").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#email").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#tel").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#dost").change(function () {
        $(this).removeClass("errorForm");
        if ($(this).val() == "Самовивіз") {
            $("#adress").removeClass("errorForm");
        }
    });

    $("#adress").change(function () {
        $(this).removeClass("errorForm");
    });

    $(".plus1").click(function () {
        var c = parseInt($("#count").val());
        c++;
        $("#count").val(c);
        var p = parseInt($("#count_price").val());
        p += 350;
        $("#count_price").val(p);
        k = parseInt($("#pm1").val());
        k++;
        $("#pm1").val(k);
        $(".errorFormNum").removeClass("errorFormNum");
    });

    $(".plus2").click(function () {
        var c = parseInt($("#count").val());
        c++;
        $("#count").val(c);
        var p = parseInt($("#count_price").val());
        p += 700;
        $("#count_price").val(p);
        k = parseInt($("#pm2").val());
        k++;
        $("#pm2").val(k);
        $(".errorFormNum").removeClass("errorFormNum");
    });

    $(".minus1").click(function () {
        var c = parseInt($("#count").val());
        if (c != 0) {
            c--;
            $("#count").val(c);
            var p = parseInt($("#count_price").val());
            p -= 350;
            $("#count_price").val(p);
            k = parseInt($("#pm1").val());
            k--;
            $("#pm1").val(k);
            $(".errorFormNum").removeClass("errorFormNum");
        }
    });

    $(".minus2").click(function () {
        var c = parseInt($("#count").val());
        if (c != 0) {
            c--;
            $("#count").val(c);
            var p = parseInt($("#count_price").val());
            p -= 700;
            $("#count_price").val(p);
            k = parseInt($("#pm2").val());
            k--;
            $("#pm2").val(k);
            $(".errorFormNum").removeClass("errorFormNum");
        }
    });
});