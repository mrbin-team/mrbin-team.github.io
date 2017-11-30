$(function() {

    $("#subscribe_form input, #subscribe_form textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#subscribe_email").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://formspree.io/bonjour@mrbin.fr",
                type: "POST",
                data: {
                    email: email,
                },
                dataType: "json",
                cache: false,
                success: function() {
                    // Success message
                    $('#subscribe_success').html("<div class='alert alert-success'>");
                    $('#subscribe_success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribe_success > .alert-success')
                        .append("<strong>Votre inscription a bien été demandée. </strong>");
                    $('#subscribe_success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#subscribe_form').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#subscribe_success').html("<div class='alert alert-danger'>");
                    $('#subscribe_success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#subscribe_success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#subscribe_success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#subscribe_form').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
