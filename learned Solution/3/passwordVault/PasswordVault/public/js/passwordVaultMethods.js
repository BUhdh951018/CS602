$("#popupButtonAddPassword").click(() => {
    $("#popupAddPassword").show();
});

$("#addPassword").click(() => {
    addPassword($("#inputAddKey").val(), $("#inputAddPassword").val());
});

$("#updatePassword").click(() => {
    updatePassword($("#inputDisplayKey").attr("placeholder"), $("#inputDisplayPassword").val());
});

$("#deletePassword").click(() => {
    deletePassword($("#inputDisplayKey").attr("placeholder"));
});

$("#closeAddPassword").click(() => {
    $("#popupAddPassword").hide();
    $("#inputAddKey").val("");
    $("#inputAddPassword").val("");
    displayTable();
});

$("#closeMessage").click(() => {
    $("#popupMessage").hide();
    $("#popMessageText").html("");
});

$("#closeDisplayPassword").click(() => {
    $("#popupDisplayPassword").hide();
    displayTable();
});

const addPassword = (key, password) => {
    fetch("http://localhost:8000/passwords/create/" + key + "-" + password, {
                method: "POST",
                mode: "cors",
                credentials: "include",
                redirect: "follow",
                headers: new Headers({ "Content-Type": "application/json" })
    })
        .then(res => {return res.json(); })
        .then(data => {
            if (typeof data.message == "undefined") {
                $("#popupAddPassword").hide();
                $("#inputAddKey").val("");
                $("#inputAddPassword").val("");
                displayTable();
                displayMessage("Password Added");
            }
            else {
                displayMessage(data.message);
            }
        });
};

const displayTable = () => {
    fetch("http://localhost:8000/passwords/retrieve", {
                method: "GET", 
                mode:"cors",
                redirect: "follow",
                headers: new Headers({ "Content-Type": "text/plain" })
    })
        .then(res => {return res.json(); })
        .then(data => {
            $("#passwordTable").html("");
            $("#passwordTable").append('<colgroup><col style="width: 36%;"><col style="width: 36%;"><col style="width:6%;"></colgroup>');
            if (data.length == 0) {
                $("#passwordTable").append('<tr><th>Key</th><th>Password</th><th></th></tr>');
                $("#passwordTable").append('<tr style="text-align: center;"><td>No keys</td><td>No Passwords</td><th></th></tr>');
            }
            else {
                $("#passwordTable").append('<tr><th>Key</th><th>Password</th><th style="border-bottom: var(--main-border-width) solid var(--border-color)"></th></tr>');
                data.forEach(pair => {
                    var encryptedPassword = censorPassword(pair.password);
                    $("#passwordTable").append(
                        '<tr><td>'+ pair.key +
                        '</td><td>' + encryptedPassword +
                        '</td><td style="border-top: var(--main-border-width) solid var(--border-color)"><i class="fa fa-eye" id="displayPassword_' +
                        pair.key +
                        '"></span></td></tr>');
                    $("#displayPassword_"+pair.key).click(() => {
                        displayPassword(pair.key)
                    });
                })
            }
        });
};

const displayPassword = (key) => {
    fetch("http://localhost:8000/passwords/retrieve/" + key, {
                method: "GET", 
                mode:"cors",
                redirect: "follow",
                headers: new Headers({ "Content-Type": "text/plain" })
    })
        .then(res => {return res.json(); })
        .then(data => {
            $("#popupDisplayPassword").show();
            $("#inputDisplayKey").attr("placeholder", key);
            $("#inputDisplayPassword").attr("placeholder", data.password);
            $("#inputDisplayPassword").val(data.password);
        });
};

const updatePassword = (key, password) => {
    fetch("http://localhost:8000/passwords/update/" + key + "-" + password, {
                method: "PUT",
                mode: "cors",
                redirect: "follow",
                headers: new Headers({ "Content-Type": "text/plain" })
    })
        .then(res => {return res.json(); })
        .then(data => {
            $("#popupDisplayPassword").hide();
            displayTable();
            displayMessage(data.message);
        });
};

const deletePassword = (key) => {
    fetch("http://localhost:8000/passwords/delete/" + key, {
                method: "DELETE",
                mode: "cors",
                credentials: "include",
                redirect: "follow",
                headers: new Headers({ "Content-Type": "application/json" })
    })
        .then(res => {return res.json(); })
        .then(data => {
            $("#popupDisplayPassword").hide();
            displayTable();
            displayMessage(data.message);
        });
};

const censorPassword = (password) => {
    return "*".repeat(password.length);
}

const displayMessage = (message) => {
    $("#popupMessage").show();
    $("#popupMessageText").html(message);
};

displayTable();