
function addButton() {
    var toolbar = document.getElementsByClassName("budget-toolbar")[0];
    if (toolbar) {
        var newBtn = document.createElement("button");
        newBtn.innerText = "Hide";
        newBtn.id = "hideRightSideBtn";
        newBtn.className = "button";

        function hideRightSide() {
            var budgetInspector = document.getElementsByClassName("budget-inspector")[0];
            budgetInspector.style = "display:none";
            var budgetTable = document.getElementsByClassName("budget-table-container")[0];
            budgetTable.style = "width:100%";
            newBtn.onclick = showRightSide;
            newBtn.innerText = "Show";
        }

        function showRightSide() {
            var budgetInspector = document.getElementsByClassName("budget-inspector")[0];
            budgetInspector.style = "";
            var budgetTable = document.getElementsByClassName("budget-table-container")[0];
            budgetTable.style = "";
            newBtn.onclick = hideRightSide;
            newBtn.innerText = "Hide";
        }

        newBtn.onclick = hideRightSide;
        toolbar.appendChild(newBtn);
        return true;
    }
    else {
        return false;
    }
}
async function start() {
    while(!addButton()) {
        await new Promise(r => setTimeout(r, 500));
    }
}

start().then(r => { console.log("show/hide button added")});
