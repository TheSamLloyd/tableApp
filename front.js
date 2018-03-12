// (API endpoint) "/api/tables" (GET) return tables object
// (API endpoint) "/api/new"(POST)

var reservationApiUrl = "api/tables";
var tablesApiUrl = "api/new";

var ui = {
    tableList: $(".tableList"),
    waitList: $(".waitList"),
    inputName: $(".reservationName"),
    inputPhone: $(".reservationPhone"),
    inputEmail: $(".reservationEmail"),
    inputId: $(".reservationID"),
}


function displayTables() {
    var reservationData = {
        name: ui.inputName.text(),
        phone: ui.inputPhone.text(),
        email: ui.inputEmail.text(),
        id: ui.inputId.text(),
    };

    $.ajax({
        url: reservationApiUrl,
        method: "GET",
    }).then(function (result) {
        alert(result);
        alert("Your reservation has been made");
    }).catch(function (error) {
        alert(error);
        alert("There has been an error submitting your reservation.");
    })
}