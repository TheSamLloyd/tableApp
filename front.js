// (API endpoint) "/api/tables" (GET) return tables object
// (API endpoint) "/api/new"(POST)

var reservationApiUrl = "api/tables";
var tablesApiUrl = "api/new";

var ui = {
    tableList: $("#currentRes"),
    waitList: $("#waitList"),
    inputName: $("#reservationName"),
    inputPhone: $("#reservationPhone"),
    inputEmail: $("#reservationEmail"),
    inputId: $("#reservationID"),
}

if (ui.tableList.length > 0) {
    displayTables();
}

function displayTables() {
    $.ajax({
        url: tablesApiUrl,
        method: "GET",
    }).then(function (result) {
        alert(result);
        var index = 0;
        var isWaitList = 0;

        for (var i = 0; i < result.length; i++) {
            var itemLi = createTableListItem(index, result[i].id);
            index++;

            if (isWaitList) {
                ui.waitList.append(itemLi);
            } else {
                ui.tableList.append(itemLi);
                if (index == 5) {
                    index = 0;
                    isWaitList = true;
                }
            }
        }
    }).catch(function (error) {
        alert(error);
        alert("There has been an error submitting your reservation.");
    })
}

function createTableListItem(text, index) {
    var item = $("<li>").text(" - " + text);
    item.prepend($('<span>').addClass('label label-primary').text(index));

    return item;
}

function makeReservation() {
    var reservationData = {
        name: ui.inputName.text(),
        phone: ui.inputPhone.text(),
        email: ui.inputEmail.text(),
        id: ui.inputId.text(),
    };

    $.ajax({
        url: reservationApiUrl,
        method: "POST",
        data: reservationData,
    }).then(function (result) {
        alert(result);
        alert("Your reservation has been made");
    }).catch(function (error) {
        alert(error);
        alert("There has been an error submitting your reservation.");
    })
}
