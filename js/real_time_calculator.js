/***************************** FUNCTION MAIN ************************/
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




function DienTichHCN() {

    /****************************************Create display form load********************* */
    /************************************************************************************ */

    AddTextLable("Nhập chiều dài", "");
    AddInputField("chieu_dai_id", "");
    AddTextLable("Nhập chiều rộng", "");
    AddInputField("chieu_rong_id", ""); //create form

    ShowResultInForm("Diện tích là: ", "dien_tich_id"); //show results

    /****************************************Catch event********************* */
    /************************************************************************************ */
    document.getElementById("chieu_dai_id").addEventListener("keyup", function DienTich() {
        var chieuDai = document.getElementById("chieu_dai_id").value;
        var chieuRong = document.getElementById("chieu_rong_id").value;
        document.getElementById("dien_tich_id").innerHTML = "Diện tích là: " + chieuRong * chieuDai;

    })

    document.getElementById("chieu_rong_id").addEventListener("keyup", function DienTich() {
        var chieuDai = document.getElementById("chieu_dai_id").value;
        var chieuRong = document.getElementById("chieu_rong_id").value;
        document.getElementById("dien_tich_id").innerHTML = "Diện tích là: " + chieuRong * chieuDai;

    })
}

/******************************DEFAULT FORM LOAD******************** */
/******************************************************************** */

// Tính toán song chắn rác
if (document.getElementById("check_load_form").value === "songChanRac") {
    DienTichHCN();
}