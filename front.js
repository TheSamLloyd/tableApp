// (API endpoint) "/api/tables" (GET) return tables object
// (API endpoint) "/api/new"(POST)

var reservationApiUrl = "api/new";
var tablesApiUrl = "api/tables";

var ui = {
    tableList: $("#currentRes"),
    waitList: $("#waitList"),
    inputName: $("#reserve_name"),
    inputPhone: $("#reserve_phone"),
    inputEmail: $("#reserve_email"),
    inputId: $("#reserve_id"),
    submitRes: $('#submitRes'),
}

if (ui.tableList.length > 0) {
    displayTables();
}

if (ui.submitRes.length > 0) {
    ui.submitRes.on('click', makeReservation);
}

function displayTables() {
    $.ajax({
        url: tablesApiUrl,
        method: "GET",
    }).then(function (result) {
        console.log(result);
        result = JSON.parse(result);
        var index = 0;
        var isWaitList = 0;

        for (var i = 0; i < result.length; i++) {
            var itemLi = createTableListItem(result[i].id, index + 1);
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
        console.log(error);
        alert("There has been an error loading reservations.");
    })
}

function createTableListItem(text, index) {
    var item = $("<li>").text(" - " + text);
    item.prepend($('<span>').addClass('badge badge-primary').text(index));

    return item;
}

function makeReservation() {
    var reservationData = {
        name: ui.inputName.val(),
        phone: ui.inputPhone.val(),
        email: ui.inputEmail.val(),
        id: ui.inputId.val(),
    };

    $.ajax({
        url: reservationApiUrl,
        method: "POST",
        data: reservationData,
    }).then(function (result) {
        // alert(result);
        alert("Your reservation has been made");
    }).catch(function (error) {
        console.log(error);
        alert("There has been an error submitting your reservation.");
    })
}
