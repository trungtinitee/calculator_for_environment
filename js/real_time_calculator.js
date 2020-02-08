/***************************** FUNCTION MAIN ************************/
/****************************************************************** */
/************ Varible First call********************* */
var indexTheTich = 1;

/*********** create element in website***** ***********/
/**************************************************** */
function AddTextLable(textInput, idTextField) {
    var createNewPTag = document.createElement("h3");
    createNewPTag.innerHTML = textInput;
    createNewPTag.setAttribute("id", idTextField);
    createNewPTag.setAttribute("class", "format_text");

    var createNewDivTag = document.createElement("div");
    createNewDivTag.setAttribute("class", "background_items");

    //append child just create
    createNewDivTag.appendChild(createNewPTag);
    document.getElementById("change_content_id").appendChild(createNewDivTag);
} //add text for form

function AddInputField(idInputField, placeHolder) {
    var createInputTag = document.createElement("input");
    createInputTag.setAttribute("id", idInputField);
    createInputTag.setAttribute("placeholder", placeHolder);
    createInputTag.setAttribute("class", "format_input");

    var createNewDivTag = document.createElement("div");
    createNewDivTag.setAttribute("class", "background_items");

    //append child just create
    createNewDivTag.appendChild(createInputTag);
    document.getElementById("change_content_id").appendChild(createNewDivTag);
} //add new input field

function AddPlusRowField(textInput, idBtnPlusAddRow, idBtnMinusRow, idPlusRowField) {
    var createNewDivTag = document.createElement("div");
    createNewDivTag.setAttribute("id", idPlusRowField);
    createNewDivTag.setAttribute("class", "background_items"); //add background

    var createNewPTag = document.createElement("h3");
    createNewPTag.innerHTML = textInput;
    //createNewPTag.setAttribute("id", idTextField);
    createNewPTag.setAttribute("class", "format_text");
    createNewPTag.style.display = "inline"; //create text label

    var newBtnPlus = document.createElement("span");
    newBtnPlus.setAttribute("class", "btnClickAddRow");
    newBtnPlus.setAttribute("id", idBtnPlusAddRow);
    newBtnPlus.innerHTML = "<i class=\"fas fa-plus-circle\"></i>"; // create btn add

    var newBtnMinus = document.createElement("span");
    newBtnMinus.setAttribute("class", "btnClickMinusRow");
    newBtnMinus.setAttribute("id", idBtnMinusRow);
    newBtnMinus.innerHTML = "<i class=\"fas fa-minus-circle\"></i>"; //create btn minus

    var createInputTag = document.createElement("input");
    createInputTag.setAttribute("class", "format_input");
    createInputTag.setAttribute("id", idPlusRowField + "0");
    createInputTag.setAttribute("placeholder", "Row. 0");
    var createBackInputTag = document.createElement("div");
    createBackInputTag.setAttribute("class", "background_items");
    createBackInputTag.appendChild(createInputTag); // create first input

    // append child
    createNewDivTag.appendChild(createNewPTag);
    createNewDivTag.appendChild(newBtnPlus);
    createNewDivTag.appendChild(newBtnMinus);
    createNewDivTag.appendChild(createBackInputTag);
    document.getElementById("change_content_id").appendChild(createNewDivTag);
}

function EventClickPlusBtn(idParentAppendChild, varIndex) {
    var createInputTag = document.createElement("input");
    createInputTag.setAttribute("class", "format_input");
    createInputTag.setAttribute("id", idParentAppendChild + varIndex);
    createInputTag.setAttribute("placeholder", "Row. " + varIndex);
    var createBackInputTag = document.createElement("div");
    createBackInputTag.setAttribute("class", "background_items");
    createBackInputTag.appendChild(createInputTag);
    document.getElementById(idParentAppendChild).appendChild(createBackInputTag);
}

function EventClickMinusBtn(idParentAppendChild, currentIndex) {
    if (currentIndex >>> 1) {
        var selectParent = document.getElementById(idParentAppendChild);
        selectParent.removeChild(selectParent.lastChild);
    }
}


function ShowResultInForm(textInput, idTextField) {
    var createNewPTag = document.createElement("h3");
    createNewPTag.innerHTML = textInput;
    createNewPTag.setAttribute("id", idTextField);
    createNewPTag.setAttribute("class", "format_text");

    var createNewDivTag = document.createElement("div");
    createNewDivTag.setAttribute("class", "background_items");

    //append child just create
    createNewDivTag.appendChild(createNewPTag);
    document.getElementById("result_content_id").appendChild(createNewDivTag);

} // show results calculation in form


/*********** Function formular***** ***********/
/******************************************** */

function DienTichHCN() {
    /****************************************Render form when load********************* */
    /************************************************************************************ */

    AddTextLable("<b>Tính toán song chắn rác</b>", "titleCalculation");
    document.getElementById("titleCalculation").style.color = "#27ae60";
    document.getElementById("titleCalculation").style.fontSize = "25px";
    AddTextLable("Nhập chiều rộng", "");
    AddInputField("chieu_dai_id", "");

    ShowResultInForm("Diện tích là: ", "dien_tich_id"); //show results

    AddPlusRowField("Thể tích mẫu", "the_tich_mau_btn_plus_id", "the_tich_mau_btn_minus_id", "the_tich_mau_id");


    /****************************************Catch event********************* */
    /************************************************************************************ */
    document.getElementById("chieu_dai_id").addEventListener("keyup", function DienTich() {
        var chieuDai = document.getElementById("chieu_dai_id").value;
        var chieuRong = document.getElementById("chieu_rong_id").value;
        document.getElementById("dien_tich_id").innerHTML = "Diện tích là: " + chieuRong * chieuDai;

    })

    document.getElementById("the_tich_mau_btn_plus_id").addEventListener("click", function() {
        EventClickPlusBtn("the_tich_mau_id", indexTheTich);
        document.getElementById("the_tich_mau_id" + indexTheTich).addEventListener("keyup", function() {
            alert("ok");
        })
        indexTheTich++;

    });

    document.getElementById("the_tich_mau_btn_minus_id").addEventListener("click", function() {
        EventClickMinusBtn("the_tich_mau_id", indexTheTich);
        if (indexTheTich >>> 1) { indexTheTich--; }

    });
}

/******************************DEFAULT FORM LOAD******************** */
/******************************************************************** */

// Tính toán song chắn rác
if (sessionStorage.getItem("checkLoadFormValue") === "songChanRac") {
    DienTichHCN();
}