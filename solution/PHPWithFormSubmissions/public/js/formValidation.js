const main = $('#main');
const validationForm = $('#validationForm');
const inputs = validationForm.find('input, select, button, textarea');

const popup = $('#popup');
const closePopupButton = $('#closePUContent');
const popupMessage = $('#popupMessage');

const validatorPostURL = 'http://localhost/formValidator.php'

closePopupButton.click(() => {
    popupMessage.html('');
    popup.hide();
});

$(document).ready(() => {
    validationForm.submit((event) => {
        event.preventDefault();
        var serializedData = validationForm.serialize();
        inputs.prop('disabled', true);
        $.post(validatorPostURL, serializedData, (res) => {
            // console.log('Response: ' + res);
        })
        .done((response) => {
            data = $.parseJSON(response);
            if (data === undefined || data.length == 0) {
                formSuccess();   
            }
            else {
                formFail(data);
            }
        })
        .fail(() => {
            console.log('Posting failed.');
        })
        .always(() => {
            inputs.prop('disabled', false);
        });
    });
});

const formSuccess = () => {
    popup.show();
    popupMessage.html('Thank you for your submission!');
    validationForm[0].reset();
};

const formFail = (validationErrors) => {
    popup.show();
    for (error of validationErrors) {
        popupMessage.append(error + '<br><br>');
    };
};