$(document).ready(function () {
    $(".modalTarget").click(function () {
        var price = parseInt($(this).children(".priceTovar").html());
        var name = $("#nameTovarForModal").html();
        $(".priceForOne").html(price);
        $(".nameTovarModal").html(name);

        var inp = parseInt($("#inputCol").val());
        var price = parseInt($(".priceForOne").html());
        price *= inp;
        $(".sumTovar").html(price);

        if ($('#address1').is(':checked')) {
            $('#curier').css('display', 'block');
            $('#novaposhta').css('display', 'none');
        }
        if ($('#address2').is(':checked')) {
            $('#curier').css('display', 'none');
            $('#novaposhta').css('display', 'block');
            var price = parseInt($(".sumTovar").html());
            price += 45;
            $(".sumTovar").html(price);
        }
    });

    $(".minusCol").click(function () {
        var inp = parseInt($("#inputCol").val());
        if (inp != 1) {
            inp--;
            $("#inputCol").val(inp);
            var price = parseInt($(".priceForOne").html());
            price *= inp;
            $(".sumTovar").html(price);
        }
    });

    $(".plusCol").click(function () {
        var inp = parseInt($("#inputCol").val());
        inp++;
        $("#inputCol").val(inp);

        var price = parseInt($(".priceForOne").html());
        price *= inp;
        $(".sumTovar").html(price);
    });

    $('#inputCol').bind("keyup input", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
            this.value = 1;
        } else if (this.value == "0") {
            this.value = 1;
        }

        var inp = parseInt($("#inputCol").val());
        var price = parseInt($(".priceForOne").html());
        price *= inp;
        $(".sumTovar").html(price);
    });

    $(".color_choice").click(function () {
        if ($(this).hasClass("color_choisen")) {
            $(this).removeClass("color_choisen");
        } else {
            var col = parseInt($("#inputCol").val());
            var colColors = $(".color_choisen").length;

            if (col > colColors) {
                $(this).addClass("color_choisen");
            }
            $(".color_choice").removeClass("errorForColors");
            $("#errPForColors").slideUp();
        }
    });

    $('#next1').click(function () {
        var name = $(".nameTovarModal").html();

        if (name != "") {
            var col = parseInt($("#inputCol").val());
            if (col > 0) {
                var colColors = $(".color_choisen").length;
                if (colColors > 0) {
                    var text = name + ", количество " + col + " шт., цвет ";

                    $(".color_choisen").each(function (i, elem) {
                        text += $(elem).children(".nameColor").html().toLowerCase();
                        text += ", ";
                    });

                    text = text.substr(0, text.length - 2);

                    $(".choices_data").html(text);
                    $('#step1').css('display', 'none');
                    $('#step2').css('display', 'block');
                } else {
                    $(".color_choice").addClass("errorForColors");
                    $("#errPForColors").slideDown();
                }
            }
        }
        $(".error_input").removeClass("error_input");
    });
    $('#prev2').click(function () {
        $('#step1').css('display', 'block');
        $('#step2').css('display', 'none');
        $(".error_input").removeClass("error_input");
    });
    $('#next2').click(function () {
        $(".error_input").removeClass("error_input");
        $("#errorForStepTwo").html("");

        if ($("#nameCustomer").val() == "") {
            $("#nameCustomer").addClass("error_input");
            $("#errorForStepTwo").html("Заполните все обязательные поля");
        }

        if ($("#serNameCustomer").val() == "") {
            $("#serNameCustomer").addClass("error_input");
            $("#errorForStepTwo").html("Заполните все обязательные поля");
        }

        if ($("#emailCustomer").val() == "") {
            $("#emailCustomer").addClass("error_input");
            $("#errorForStepTwo").html("Заполните все обязательные поля");
        } else if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($("#emailCustomer").val()))) {
            $("#emailCustomer").addClass("error_input");
            $("#errorForStepTwo").html("Неверный формат ввода");
        }

        if ($("#telCustomer").val() == "") {
            $("#telCustomer").addClass("error_input");
            $("#errorForStepTwo").html("Заполните все обязательные поля");
        } else if (!(/[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}$/.test($("#telCustomer").val()))) {
            $("#telCustomer").addClass("error_input");
            $("#errorForStepTwo").html("Формат ввода 0501235693");
        }

        if ($("#errorForStepTwo").html() == "") {
            $('#step2').css('display', 'none');
            $('#step3').css('display', 'block');
        } else {
            $("#errorForStepTwo").slideDown();
        }
    });

    $("#nameCustomer").keyup(function () {
        $(this).removeClass("error_input");
        if ($(".error_input").length == 0) {
            $("#errorForStepTwo").html("");
            $("#errorForStepTwo").slideUp();
        }
    });

    $("#serNameCustomer").keyup(function () {
        $(this).removeClass("error_input");
        if ($(".error_input").length == 0) {
            $("#errorForStepTwo").html("");
            $("#errorForStepTwo").slideUp();
        }
    });

    $("#emailCustomer").keyup(function () {
        $(this).removeClass("error_input");
        if ($(".error_input").length == 0) {
            $("#errorForStepTwo").html("");
            $("#errorForStepTwo").slideUp();
        }
    });

    $("#telCustomer").keyup(function () {
        $(this).removeClass("error_input");
        if ($(".error_input").length == 0) {
            $("#errorForStepTwo").html("");
            $("#errorForStepTwo").slideUp();
        }
    });

    $('#prev3').click(function () {
        $('#step2').css('display', 'block');
        $('#step3').css('display', 'none');
        $(".error_input").removeClass("error_input");
    });

    $('input[type="radio"]').change(function () {
        $(".error_input").removeClass("error_input");
        if ($('#address1').is(':checked')) {
            $('#curier').css('display', 'block');
            $('#novaposhta').css('display', 'none');
            var price = parseInt($(".sumTovar").html());
            price -= 45;
            $(".sumTovar").html(price);
        }
        if ($('#address2').is(':checked')) {
            $('#curier').css('display', 'none');
            $('#novaposhta').css('display', 'block');
            var price = parseInt($(".sumTovar").html());
            price += 45;
            $(".sumTovar").html(price);
        }
    });

    $("#order").click(function () {
        var send = true;

        var tovar = $("#nameTovarForModal").html();
        var price = parseInt($(".priceForOne").html());
        var col = parseInt($("#inputCol").val());
        var colors = "";
        $(".color_choisen").each(function (i, elem) {
            colors += $(elem).children(".nameColor").html().toLowerCase();
            colors += ", ";
        });
        colors = colors.substr(0, colors.length - 2);
        var summ = parseInt($(".sumTovar").html());
        var name = $("#nameCustomer").val();
        var serName = $("#serNameCustomer").val();
        var email = $("#emailCustomer").val();
        var tel = $("#telCustomer").val();
        if ($("#address1").prop("checked")) {
            var spos = $("#address1").parent().text();
            var sposNum = 1;
        } else {
            var spos = $("#address2").parent().text();
            var sposNum = 2;
        }
        var city = $("#cityCustomer").val();
        var street = $("#streetCustomer").val();
        var build = $("#buildCustomer").val();
        var kv = $("#kvCustomer").val();

        var cityNP = $("#cityCustomerNP").val();
        var numNP = $("#numNPCustomer").val();
        
        var comment = $("#commentCustomer").val();

        if ($("#address1").prop("checked")) {
            if (city == "") {
                $("#cityCustomer").addClass("error_input");
                send = false;
            }
            if (street == "") {
                $("#streetCustomer").addClass("error_input");
                send = false;
            }
            if (build == "") {
                $("#buildCustomer").addClass("error_input");
                send = false;
            }
        } else {
            if (cityNP == "") {
                $("#cityCustomerNP").addClass("error_input");
                send = false;
            }
            if (numNP == "") {
                $("#numNPCustomer").addClass("error_input");
                send = false;
            }
        }

        if (send) {
            $.ajax({
                method: "POST",
                url: "php/send.php",
                data: {
                    name: name,
                    serName: serName,
                    email: email,
                    tel: tel,
                    tovar: tovar,
                    col: col,
                    colors: colors,
                    price: price,
                    summ: summ,
                    spos: spos,
                    sposNum: sposNum,
                    city: city,
                    cityNP: cityNP,
                    street: street,
                    build: build,
                    kv: kv,
                    numNP: numNP,
                    comment: comment
                },
                success: function (data) {
                    if (data == "") {
                        $("#step4").css("display", "block");
                        $('#step3').css('display', 'none');
                    } else {
                        alert(data);
                    }
                }
            });
        }
    });

    $("#cityCustomer").keyup(function () {
        $(this).removeClass("error_input");
    });

    $("#streetCustomer").keyup(function () {
        $(this).removeClass("error_input");
    });

    $("#buildCustomer").keyup(function () {
        $(this).removeClass("error_input");
    });

    $("#cityCustomerNP").keyup(function () {
        $(this).removeClass("error_input");
    });

    $("#numNPCustomer").keyup(function () {
        $(this).removeClass("error_input");
    });
});