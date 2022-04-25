<div class="wrap">

    <div id="account_activation_container">
        <div class="account_activation_wrapper">
            <p>
                <span>Please provide your email address to generate API Key</span><br>
                <input type="email" name="email" id="account_activation_email" placeholder="Email">
                <input type="submit" class="account_activation" data-type="email" value="Submit">
            </p>
            <p>
                <span>If you have an existing API Key, please provide it here</span><br>
                <input type="text" id="account_activation_key" placeholder="Key">		
                <input type="submit" class="account_activation" data-type="key" value="Submit">
            </p>
        </div>    
    </div>
            
    <script>       
        jQuery(".account_activation").on("click", function() {
            jQuery("#account_activation_container").find(".error").remove()

            let type = jQuery(this).data('type')
            let data = '';

            if (type == 'key'){
                data = jQuery("#account_activation_key").val()
                jQuery("#account_activation_email").val('')
            } else {
                data = jQuery("#account_activation_email").val()
                jQuery("#account_activation_key").val('')
            }
        
            jQuery.post(ajaxurl, {action: "redi_restaurant-submit", get: "activationCheck", type: type, data: data}, function(response) {
                if(response == "success") {
                    location.reload()
                } else {
                    jQuery( "#account_activation_container" ).prepend(response)
                }
            });
        });
    </script>
</div>
<div class="wrap">
<p><?php _e('Please watch our videos that helps you to setup plugin', 'redi-restaurant-reservation'); ?>:</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Gnw0qoFKbXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eGMjbIEo32Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
        <p>
            <a href="https://www.youtube.com/playlist?list=PL9B21hw4V0Mk-mjwPVpKDzq4CPYBq7Pws" _target='blank'><?php _e('Cleck here for more videos about plugin', 'redi-restaurant-reservation'); ?></a>
        </p>
<div>