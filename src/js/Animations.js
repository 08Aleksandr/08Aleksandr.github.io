$(function () {
    var target_block = $(".num_1"); // Ищем блок 
    var blockStatus = true;
    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({
                numberValue: 0
            }).animate({
                numberValue: 120
            }, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                step: function (val) {
                    $(".num_1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
                }
            });
        }
    });
});

$(function () {
    var target_block = $(".num_2"); // Ищем блок 
    var blockStatus = true;
    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({
                numberValue: 0
            }).animate({
                numberValue: 4600
            }, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                step: function (val) {
                    $(".num_2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
                }
            });
        }
    });
});

$(function () {
    var target_block = $(".num_3"); // Ищем блок 
    var blockStatus = true;
    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({
                numberValue: 0
            }).animate({
                numberValue: 340
            }, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                step: function (val) {
                    $(".num_3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
                }
            });
        }
    });
});

$(function () {
    var target_block = $(".num_4"); // Ищем блок 
    var blockStatus = true;
    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({
                numberValue: 0
            }).animate({
                numberValue: 23
            }, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
                easing: "linear",
                step: function (val) {
                    $(".num_4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию			
                }
            });
        }
    });
});

$(document).ready(function () {

    let options = {
        thresholt: [0.9]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}

/*$(document).ready(function () {
    $(function () {
        var Summ = 0;
        var Srok = 0;
        var tipSrok = {
            Site_0: Srok = 0,
            Site_1: Srok = 5,
            Site_2: Srok = 10,
            Site_3: Srok = 15
        };

        var tipStoim = {
            Site_0: Summ = 0,
            Site_1: Summ = 5000,
            Site_2: Summ = 10000,
            Site_3: Summ = 15000
        };

        var disSrok_1 = {
            Disine_0: Srok = 0,
            Disine_1: Srok = 5 + tipSrok.Site_1,
        };
        $('#Kalk_2').change(function () {
            var a = $(this).val();
            $('#Sroki').html(disSrok_1[a]);
        });
    });

    $(function () {

        var disSrok_2 = {
            Disine_0: Srok = 0,
            Disine_1: Srok = 5 + tipSrok.Site_2,
        };
        $('#Kalk_2').change(function () {
            var a = $(this).val();
            $('#Sroki').html(disSrok_2[a]);
        });
    })
});*/


$(document).ready(function () {
    $(function () {
        var Summ = 0;
        var Srok = 0;
        var tipSrok = {
            Site_0: Srok = 0,
            Site_1: Srok = 5,
        };
        var tipStoim = {
            Site_0: Summ = 0,
            Site_1: Summ = 1000,
        };

        var disSrok = {
            Disine_0: Srok = 0,
            Disine_1: Srok = 5 + tipSrok.Site_1,
            Disine_2: Srok = 10 + tipSrok.Site_1
        };
        var disStoim = {
            Disine_0: Summ = 0,
            Disine_1: Summ = 1000 + tipStoim.Site_1,
            Disine_2: Summ = 2000 + tipStoim.Site_1
        };

        var adaSrok = {
            Adaptivnost_0: Srok = 0 * tipSrok.Site_1,
            Adaptivnost_1: Srok = 5 + disSrok.Disine_1 + ' - В днях',
            Adaptivnost_2: Srok = 10 + disSrok.Disine_1 + ' - В днях',
            Adaptivnost_1: Srok = 15 + disSrok.Disine_2 + ' - В днях',
            Adaptivnost_2: Srok = 20 + disSrok.Disine_2 + ' - В днях'
        };

        var adaStoim = {
            Adaptivnost_0: Summ = 0 * tipStoim.Site_1,
            Adaptivnost_1: Summ = 1000 + disStoim.Disine_1 + ' - В рублях',
            Adaptivnost_2: Summ = 2000 + disStoim.Disine_1 + ' - В рублях',
            Adaptivnost_1: Summ = 2000 + disStoim.Disine_2 + ' - В рублях',
            Adaptivnost_2: Summ = 3000 + disStoim.Disine_2 + ' - В рублях'
        };

        $('#Kalk_3').change(function () {
            var a = $(this).val();
            $('#Sroki').html(adaSrok[a]);
            $('#Stoimost').html(adaStoim[a]);
        });
    });
});




$(document).ready(function () {
    $(function () {
        var Summ = 0;
        var Srok = 0;
        var tipSrok = {
            Site_0: Srok = 0,
            Site_2: Srok = 10,
        };
        var tipStoim = {
            Site_0: Summ = 0,
            Site_2: Summ = 2000,
        };

        var disSrok = {
            Disine_0: Srok = 0,
            Disine_1: Srok = 5 + tipSrok.Site_2,
            Disine_2: Srok = 10 + tipSrok.Site_2
        };
        var disStoim = {
            Disine_0: Summ = 0,
            Disine_1: Summ = 1000 + tipStoim.Site_2,
            Disine_2: Summ = 2000 + tipStoim.Site_2
        };

        var adaSrok = {
            Adaptivnost_0: Srok = 0 * tipSrok.Site_2,
            Adaptivnost_1: Srok = 5 + disSrok.Disine_1 + ' - В днях',
            Adaptivnost_2: Srok = 10 + disSrok.Disine_1 + ' - В днях',
            Adaptivnost_1: Srok = 15 + disSrok.Disine_2 + ' - В днях',
            Adaptivnost_2: Srok = 20 + disSrok.Disine_2 + ' - В днях'
        };

        var adaStoim = {
            Adaptivnost_0: Summ = 0 * tipStoim.Site_2,
            Adaptivnost_1: Summ = 1000 + disStoim.Disine_1 + ' - В рублях',
            Adaptivnost_2: Summ = 2000 + disStoim.Disine_1 + ' - В рублях',
            Adaptivnost_1: Summ = 2000 + disStoim.Disine_2 + ' - В рублях',
            Adaptivnost_2: Summ = 3000 + disStoim.Disine_2 + ' - В рублях'
        };

        $('#Kalk_3').change(function () {
            var a = $(this).val();
            $('#Sroki').html(adaSrok[a]);
            $('#Stoimost').html(adaStoim[a]);
        });
    });
});




$(document).ready(function () {
    $(function () {
        var Summ = 0;
        var Srok = 0;
        var tipSrok = {
            Site_0: Srok = 0,
            Site_3: Srok = 15,
        };
        var tipStoim = {
            Site_0: Summ = 0,
            Site_3: Summ = 3000,
        };

        var disSrok = {
            Disine_0: Srok = 0,
            Disine_1: Srok = 5 + tipSrok.Site_3,
            Disine_2: Srok = 10 + tipSrok.Site_3
        };
        var disStoim = {
            Disine_0: Summ = 0,
            Disine_1: Summ = 1000 + tipStoim.Site_3,
            Disine_2: Summ = 2000 + tipStoim.Site_3
        };

        var adaSrok = {
            Adaptivnost_0: Srok = 0 * tipSrok.Site_3,
            Adaptivnost_1: Srok = 5 + disSrok.Disine_1 + ' - В днях',
            Adaptivnost_2: Srok = 10 + disSrok.Disine_1 + ' - В днях',
            Adaptivnost_1: Srok = 15 + disSrok.Disine_2 + ' - В днях',
            Adaptivnost_2: Srok = 20 + disSrok.Disine_2 + ' - В днях'
        };

        var adaStoim = {
            Adaptivnost_0: Summ = 0 * tipStoim.Site_3,
            Adaptivnost_1: Summ = 1000 + disStoim.Disine_1 + ' - В рублях',
            Adaptivnost_2: Summ = 2000 + disStoim.Disine_1 + ' - В рублях',
            Adaptivnost_1: Summ = 2000 + disStoim.Disine_2 + ' - В рублях',
            Adaptivnost_2: Summ = 3000 + disStoim.Disine_2 + ' - В рублях'
        };

        $('#Kalk_3').change(function () {
            var a = $(this).val();
            $('#Sroki').html(adaSrok[a]);
            $('#Stoimost').html(adaStoim[a]);
        });
    });
});

