/***************************** FUNCTION MAIN ************************/
/****************************************************************** */
/************ Varible First call********************* */

//MPN calculator
var indexTheTich = 1;
var indexOngDuongTinh = 1;
var indexOngAmTinh = 1;




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
    //createInputTag.setAttribute("type", "text");
    createInputTag.setAttribute("id", idInputField);
    createInputTag.setAttribute("placeholder", placeHolder);
    createInputTag.setAttribute("class", "format_input");
    createInputTag.setAttribute("value", "");

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
    createInputTag.setAttribute("value", "");

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
    //createInputTag.setAttribute("type", "text");
    createInputTag.setAttribute("value", "");

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

function SumAllID(idFieldNeedToSum, numberFieldNeedToSum) {
    var sum = 0;
    for (i = 0; i < numberFieldNeedToSum; i++) {
        sum = sum + (document.getElementById(idFieldNeedToSum + i).value * 1.0);
    }
    return sum;
}
/*********** Function formular***** ***********/
/******************************************** */

function MPNThomas(soOngDuongTinh, theTichOngAmTinh, tongTheTichMau) {
    return (soOngDuongTinh * 100) / (Math.sqrt(theTichOngAmTinh * tongTheTichMau));
}



















/****************************************Render form when load********************* */
/************************************************************************************ */
function DienTichHCN() {


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

function MPNCalculalor() {
    //function
    function CallThisWhenChangeValue() {
        var soOngDuongTinh = SumAllID("ong_duong_tinh_id", indexOngDuongTinh);
        var theTichMauTrongOAmTinh = 0;
        var theTichMauTrongTatCa = 0;
        var result = 0;

        // Thể tích mẫu trong ống âm tính
        for (i = 0; i < indexOngAmTinh; i++) {
            var soOng = document.getElementById("ong_am_tinh_id" + i).value * 1.0;

            var theTich = document.getElementById("the_tich_mau_id" + i).value * 1.0;

            theTichMauTrongOAmTinh = theTichMauTrongOAmTinh + (soOng * theTich);
        }

        //Thể tích mẫu trong tất cả các ống
        for (i = 0; i < indexTheTich; i++) {
            var soOngDuong = document.getElementById("ong_duong_tinh_id" + i).value * 1.0;

            var soOngAm = document.getElementById("ong_am_tinh_id" + i).value * 1.0;

            var theTich = document.getElementById("the_tich_mau_id" + i).value * 1.0;

            theTichMauTrongTatCa = theTichMauTrongTatCa + ((soOngDuong + soOngAm) * theTich);
        }
        result = MPNThomas(soOngDuongTinh, theTichMauTrongOAmTinh, theTichMauTrongTatCa) + "";
        //console.log(soOngDuongTinh, theTichMauTrongOAmTinh, theTichMauTrongTatCa);
        if (result.indexOf(".", 0) !== -1) {
            document.getElementById("mpn_result_id").innerHTML = "Kết quả MPN: <b>" + result + "</b>";
        }
    }



    //create title
    AddTextLable("<b>Công thức Thomas tính thông số MPN</b>", "titleCalculation");
    document.getElementById("titleCalculation").style.color = "#27ae60";
    document.getElementById("titleCalculation").style.fontSize = "25px";

    //create Thể tich mẫu
    AddPlusRowField("Thể tích mẫu (mL)", "the_tich_mau_btn_plus_id", "the_tich_mau_btn_minus_id", "the_tich_mau_id");
    AddPlusRowField("Ống dương tính (ống)", "ong_duong_tinh_btn_plus_id", "ong_duong_tinh_btn_minus_id", "ong_duong_tinh_id");
    AddPlusRowField("Ống âm tính (ống)", "ong_am_tinh_btn_plus_id", "ong_am_tinh_btn_minus_id", "ong_am_tinh_id");

    //show results
    ShowResultInForm("Kết quả MPN: ", "mpn_result_id"); //show results

    //catch event....
    //Event Thể tích mẫu
    document.getElementById("the_tich_mau_btn_plus_id").addEventListener("click", function() {
        EventClickPlusBtn("the_tich_mau_id", indexTheTich);
        document.getElementById("the_tich_mau_id" + indexTheTich).addEventListener("keyup", function() {
            CallThisWhenChangeValue();
        })
        indexTheTich++;

    });

    document.getElementById("the_tich_mau_id" + 0).addEventListener("keyup", function() {
        CallThisWhenChangeValue();
    })

    document.getElementById("the_tich_mau_btn_minus_id").addEventListener("click", function() {
        EventClickMinusBtn("the_tich_mau_id", indexTheTich);
        if (indexTheTich >>> 1) { indexTheTich--; }

    });

    //Event Ống dương tính
    document.getElementById("ong_duong_tinh_btn_plus_id").addEventListener("click", function() {
        EventClickPlusBtn("ong_duong_tinh_id", indexOngDuongTinh);
        document.getElementById("ong_duong_tinh_id" + indexOngDuongTinh).addEventListener("keyup", function() {
            CallThisWhenChangeValue();
        });
        indexOngDuongTinh++;

    });

    document.getElementById("ong_duong_tinh_id" + 0).addEventListener("keyup", function() {
        CallThisWhenChangeValue();
    });

    document.getElementById("ong_duong_tinh_btn_minus_id").addEventListener("click", function() {
        EventClickMinusBtn("ong_duong_tinh_id", indexOngDuongTinh);
        if (indexOngDuongTinh >>> 1) { indexOngDuongTinh--; }

    });

    //Event Ống âm tính
    document.getElementById("ong_am_tinh_btn_plus_id").addEventListener("click", function() {
        EventClickPlusBtn("ong_am_tinh_id", indexOngAmTinh);
        document.getElementById("ong_am_tinh_id" + indexOngAmTinh).addEventListener("keyup", function() {
            CallThisWhenChangeValue();
        });
        indexOngAmTinh++;

    });

    document.getElementById("ong_am_tinh_id" + 0).addEventListener("keyup", function() {
        CallThisWhenChangeValue();
    });

    document.getElementById("ong_am_tinh_btn_minus_id").addEventListener("click", function() {
        EventClickMinusBtn("ong_am_tinh_id", indexOngAmTinh);
        if (indexOngAmTinh >>> 1) { indexOngAmTinh--; }

    });


}
/******************************DEFAULT FORM LOAD******************** */
/******************************************************************** */

// Tính toán chỉ số MPN sau quá trình phân tích
if (sessionStorage.getItem("checkLoadFormValue") === "mpn") {
    MPNCalculalor();
}

if (sessionStorage.getItem("checkLoadFormValue") === "songChanRac") {
    DienTichHCN();
}
console.log("aaaaaa", sessionStorage.getItem("checkLoadFormValue"));

//