
function addButton() {
    var toolbar = document.getElementsByClassName("budget-toolbar")[0];
    if (toolbar) {
        var newBtn = document.createElement("button");
        newBtn.innerText = "Hide";
        newBtn.id = "hideSidesBtn";
        newBtn.className = "button";
        newBtn.style ="float: right;";

        function hideSides() {
            var budgetInspector = document.getElementsByClassName("budget-inspector")[0];
            budgetInspector.style = "display:none";
            var sidebar = document.getElementsByClassName("sidebar")[0];
            sidebar.style = "display:none";
            var content = document.getElementsByClassName("content")[0];
            content.style = "width:100%; left: 0px;";
            var budgetHeader = document.getElementsByClassName("budget-header")[0];
            budgetHeader.style = "width:100%; left: 0px;";
            var budgetTable = document.getElementsByClassName("budget-table-container")[0];
            budgetTable.style = "width:100%";
            newBtn.onclick = showSides;
            newBtn.innerText = "⇥ ⇤";
        }

        function showSides() {
            var budgetInspector = document.getElementsByClassName("budget-inspector")[0];
            budgetInspector.style = "";
            var sidebar = document.getElementsByClassName("sidebar")[0];
            sidebar.style = "";
            var budgetHeader = document.getElementsByClassName("budget-header")[0];
            budgetHeader.style = "";
            var content = document.getElementsByClassName("content")[0];
            content.style = "";
            var budgetTable = document.getElementsByClassName("budget-table-container")[0];
            budgetTable.style = "";
            newBtn.onclick = hideSides;
            newBtn.innerText = "⇤ ⇥";
        }

        newBtn.onclick = hideSides;
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
