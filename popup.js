$(document).ready(function () {
    chrome.runtime.sendMessage({ type: "stat" }, function (response) {
        $("#chk").attr('checked', !response.isDisabled);
    });
    $('#chk').change(function () {
        chrome.runtime.sendMessage({ type: "cmd", disable: !this.checked });
        window.close();
    });
});
