const main = $('#main');
const passwordForm = $('#passwordForm');
const inputs = passwordForm.find('input, select, button, textarea');

const popup = $('#popup');
const closePopupButton = $('#closePUContent');
const popupMessage = $('#popupMessage');

const validatorPostURL = 'http://localhost/validator.php'

closePopupButton.click(() => {
    popupMessage.html('');
    popup.hide();
});

$(document).ready(() => {
    passwordForm.submit((event) => {
        event.preventDefault();
        var serializedData = passwordForm.serialize();
        inputs.prop('disabled', true);
        $.post(validatorPostURL, serializedData, (res) => {
            // console.log('Response: ' + res);
        })
        .done((response) => {
            data = $.parseJSON(response);
            if (data === undefined || data.length == 0) {
                passwordSuccess();   
            }
            else {
                passwordFail(data);
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

const passwordSuccess = () => {
    popup.show();
    popupMessage.html('Password was successfully validated.');
    passwordForm[0].reset();
};

const passwordFail = (validationErrors) => {
    popup.show();
    for (error of validationErrors) {
        popupMessage.append(error + '<br><br>');
    };
};