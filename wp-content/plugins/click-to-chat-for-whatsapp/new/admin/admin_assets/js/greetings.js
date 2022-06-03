(function ($) {

    // ready
    $(function () {

        try {
            if (document.querySelector('.pr_greetings_template')) {
                greetings_template();
            }

            // todo..
            if (document.querySelector('.pr_greetings_template')) {
                editor();
            }
        } catch (e) { }

        /**
        * display settings based on Greetings template selection
        */
        function greetings_template() {


            var greetings_template = $('.pr_greetings_template select').find(":selected").val();

            console.log(greetings_template);

            // greetings-1
            if (greetings_template == 'greetings-1') {
                $('.ctc_greetings_settings.ctc_g_1').show();
                $('.pr_ht_ctc_greetings_1').show();
                $('.pr_ht_ctc_greetings_settings').show();
                $('.ctc_greetings_notes').show();
            }

            // greetings-2
            if (greetings_template == 'greetings-2') {
                $('.ctc_greetings_settings.ctc_g_2').show();
                $('.pr_ht_ctc_greetings_2').show();
                $('.pr_ht_ctc_greetings_settings').show();
                $('.ctc_greetings_notes').show();
            }

            // on change
            $('.pr_greetings_template select').on("change", function (e) {
                var greetings_template = e.target.value;
                console.log(greetings_template);

                // ctc_greetings_settings 
                if (greetings_template == 'no') {
                    $(" .ctc_greetings_settings").hide(100);
                } else {
                    // $(" ." + greetings_template).show(100);

                    // if not no - then first hide all and again display required fields..
                    $(" .ctc_greetings_settings").hide();
                    $('.ctc_greetings_notes').show();

                    // greetings-1
                    if (greetings_template == 'greetings-1') {
                        $('.ctc_greetings_settings.ctc_g_1').show(100);
                        $('.pr_ht_ctc_greetings_1').show(100);
                    }
                    // greetings-2
                    if (greetings_template == 'greetings-2') {
                        $('.ctc_greetings_settings.ctc_g_2').show(100);
                        $('.pr_ht_ctc_greetings_2').show(100);
                    }

                    $('.pr_ht_ctc_greetings_settings').show();

                }
            });

        }


        function editor() {
            // tinymce editor - bg color
            var check = 1;
            var check_interval = 1000;
            var check_times = 28; // ( check_times * check_interval = total milliseconds )

            if (document.getElementById("header_content_ifr")) {
                try {
                    tiny_bg_color();
                } catch (e) { }
            } else {
                check++;
                if (check < check_times) {
                    setTimeout(tiny_bg, check_interval);
                }
            }

            function tiny_bg_color() {
                // f0f0f1
                var header_content_ifr = document.getElementById("header_content_ifr");
                var elmnt = header_content_ifr.contentWindow.document.getElementsByTagName("body")[0];
                elmnt.style.backgroundColor = "#26a69a";

                var main_content_ifr = document.getElementById("main_content_ifr");
                var elmnt = main_content_ifr.contentWindow.document.getElementsByTagName("body")[0];
                elmnt.style.backgroundColor = "#26a69a";

                var bottom_content_ifr = document.getElementById("bottom_content_ifr");
                var elmnt = bottom_content_ifr.contentWindow.document.getElementsByTagName("body")[0];
                elmnt.style.backgroundColor = "#26a69a";
            }
        }


    });


}) (jQuery);