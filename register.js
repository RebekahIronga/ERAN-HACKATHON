$(document).ready(function () {
    $('#contact_form').bootstrapValidator({


        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Enter Recruiter name'
                    }
                }
            },

            Phone: {
                validators: {
                    stringLength: {
                        min: 20,
                    },
                    notEmpty: {
                        message: 'Enter Phone Number'
                    }
                }
            },
            Email: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Enter your Email'
                    }
                }
            },

            NIN: {
                validators: {
                    stringLength: {
                        min: 20,
                    },
                    notEmpty: {
                        message: 'Enter National Identification Number'
                    }
                }
            },

            

            nextOfKin: {
                validators: {
                    stringLength: {
                        min: 20,
                
                    notEmpty:{
                        message: 'Enter Next Of Kin Name'
                    }
                }
            },
            contact_no: {
                validators: {
                    stringLength: {
                        min: 12,
                        max: 12,
                        notEmpty: {
                            message: ' Enter Phone Number'
                        }
                    }
                },

            }
        }
    }

        password: {
        validators: {
            stringLength: {
                min: 8,
            notEmpty: {
                message: 'Enter your Password'
            }
        }
    }


        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") 
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent submission
            e.preventDefault();

            // Get the form 
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data

            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json') 
                window.location.replace("./dash/dash.html");
            } )
        
        

    