$(document).ready(function () {
    $('#contact_form').bootstrapValidator({


        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter Driver name'
                    }
                }
            },

            boda_stage: {
                validators: {
                    stringLength: {
                        min: 20,
                    },
                    notEmpty: {
                        message: 'Please enter stage name'
                    }
                }
            },
            Age: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Password'
                    }
                }
            },

            Gender: {
                validators: {
                    stringLength: {
                        min: 20,
                    },
                    notEmpty: {
                        message: 'Please enter Gender'
                    }
                }
            },

            date: {
                validators: {
                    stringLength: {
                        max: 8,
                    },
                    notEmpty: {
                        message: 'Please enter the date'
                    }
                }
            },

            nin: {
                validators: {
                    stringLength: {
                        20,
                    notEmpty: {
                        message: 'Please enter NIN'
                    }
                }
            },

            station: {
                validators: {
                    stringLength: {
                        20,
                
                    notEmpty:{
                        message: 'Please enter station address'
                    }
                }
            },
            contact_no: {
                validators: {
                    stringLength: {
                        min: 12,
                        max: 12,
                        notEmpty: {
                            message: 'Please enter your Contact No.'
                        }
                    }
                },

            }
        }
    })
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
            }, 'json');
        });
});