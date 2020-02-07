/* ******************** function area ****************************** */
/* *******************************************************************/
function CreatPart(idPart, textInput) {
    var createDivTag = document.createElement("div");
    createDivTag.setAttribute("class", "part_form_toash");
    createDivTag.setAttribute("id", idPart); ///create new Part Form Toash

    var createTitleDivTag = document.createElement("div");
    createTitleDivTag.setAttribute("class", "title_form_toash"); // create new title form

    var createImgTag = document.createElement("h3");
    createImgTag.innerHTML = textInput; //creat text for new title

    createTitleDivTag.appendChild(createImgTag);
    createDivTag.appendChild(createTitleDivTag);
    document.getElementsByClassName("boder_form_toash")[0].appendChild(createDivTag); // add all to document
}



function CreateContent(link, textInput, idParent) {
    var createDivTag = document.createElement("div");
    createDivTag.setAttribute("class", "content_form_toash");

    var createATag = document.createElement("a");
    createATag.setAttribute("href", link);
    createATag.setAttribute("target", "_blank");

    var createPTag = document.createElement("p");
    createPTag.innerHTML = textInput; // create many tag

    createATag.appendChild(createPTag);
    createDivTag.appendChild(createATag); //append child to tag

    document.getElementById(idParent).appendChild(createDivTag); //append div tag to parent div

} //create a new content any

function RemoveAllClassWhenClose() {
    var selectClassContent = document.getElementsByClassName("content_form_toash");
    while (selectClassContent.length !== 0) {
        selectClassContent[0].remove();
        selectClassContent = document.getElementsByClassName("content_form_toash");
    }

} // clear all data when user click close form toash

function HiddenTitleToash() {
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("part_form_toash")[i].style.display = "none";
    }
} //hidden title form when do not nescesary

function RemovePartToash() {
    var getQuantityofPart = document.getElementsByClassName("part_form_toash");
    console.log(getQuantityofPart.length);
    while (getQuantityofPart.length > 4) {
        var indexRemove = getQuantityofPart.length - 1;
        getQuantityofPart[indexRemove].remove();
        getQuantityofPart = document.getElementsByClassName("part_form_toash");
    }

}

function ShowTitleToash() {
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("part_form_toash")[i].style.display = "block";
    }
} // show title again when close form toash

/* ******************* Default Loaded when open************************/
/******************************************************************** */
// run with some event
document.getElementById("background_form_appear_id").addEventListener("click", RemoveAllClassWhenClose);
document.getElementById("close_btn_form_toash").addEventListener("click", RemoveAllClassWhenClose);
document.getElementById("background_form_appear_id").addEventListener("click", ShowTitleToash);
document.getElementById("close_btn_form_toash").addEventListener("click", ShowTitleToash);
document.getElementById("background_form_appear_id").addEventListener("click", RemovePartToash);
document.getElementById("close_btn_form_toash").addEventListener("click", RemovePartToash);

// Code for Air item
document.getElementById("id_item_air").addEventListener("click", function() {
    // Tieu chuan, quy chuan viet nam
    CreateContent("https://www.env.go.jp/air/tech/ine/asia/vietnam/files/law/QCVN%2019-2009.pdf", "<b>QCVN 19:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải công nghiệp đối với bụi và các chất hữu cơ", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN26-2010-BTNMT.pdf", "<b>QCVN 26:2010/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về tiếng ồn", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN02-2008BTNMT.pdf", "<b>QCVN 02:2008/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải lò đốt chất thải y tế", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-05-2009-BTNMT-chat-luong-khong-khi-xung-quanh.pdf", "<b>QCVN 05:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về chất lượng không khí xung quanh", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-06-2009-BTNMT-chat-doc-hai-trong-khong-khi-xung-quanh.pdf", "<b>QCVN 06:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về một số chất độc hại trong không khí xung quanh", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5939-2005.pdf", "<b>TCVN 5939:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với bụi và các chất hữu cơ", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5940-2005.pdf", "<b>TCVN 5940:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với một số chất hữu cơ", "tc_qc_vn");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5949-1998.pdf", "<b>TCVN 5949:1998</b> | Âm học - Tiếng ồn khu vực công cộng và dân cư - Mức ồn tối đa cho phép", "tc_qc_vn");

    // Tài liệu, sách, giáo trình
    CreateContent("https://drive.google.com/file/d/1ruyD4lf-Qc3pTI-9qdIcwvFnu5fODK6V/view", "Trần Hồng Côn - Công nghệ xử lí khí thải", "documents_textbook");

    // Công cụ tính toán thời gian thực
    CreateContent("#", "<b>Coming soon...<b>", "calculator_treatment");

    // Others
    CreateContent("#", "<b>Coming soon...<b>", "other_content");

});

// Code for Soil item
document.getElementById("id_item_soil").addEventListener("click", function() {
    // Tieu chuan, quy chuan viet nam
    CreateContent("#", "<b>Coming soon...<b>", "tc_qc_vn");

    // Tài liệu, sách, giáo trình
    CreateContent("#", "<b>Coming soon...<b>", "documents_textbook");

    // Công cụ tính toán thời gian thực
    CreateContent("#", "<b>Coming soon...<b>", "calculator_treatment");

    // Others
    CreateContent("#", "<b>Coming soon...<b>", "other_content");

})

// Code for Water item
document.getElementById("id_item_water").addEventListener("click", function() {
    // Tieu chuan, quy chuan viet nam
    CreateContent("#", "<b>Coming soon...<b>", "tc_qc_vn");

    // Tài liệu, sách, giáo trình
    CreateContent("#", "<b>Coming soon...<b>", "documents_textbook");

    // Công cụ tính toán thời gian thực
    CreateContent("#", "<b>Coming soon...<b>", "calculator_treatment");

    // Others
    CreateContent("#", "<b>Coming soon...<b>", "other_content");

})

// Code for Soild item
document.getElementById("id_item_waste").addEventListener("click", function() {
    // Tieu chuan, quy chuan viet nam
    CreateContent("#", "<b>Coming soon...<b>", "tc_qc_vn");

    // Tài liệu, sách, giáo trình
    CreateContent("#", "<b>Coming soon...<b>", "documents_textbook");

    // Công cụ tính toán thời gian thực
    CreateContent("#", "<b>Coming soon...<b>", "calculator_treatment");

    // Others
    CreateContent("#", "<b>Coming soon...<b>", "other_content");

})

// Code for QCVN TCVN item
document.getElementById("id_item_qctc_vn").addEventListener("click", function() {
    HiddenTitleToash();

    // Create part for this item
    CreatPart("id_the_air_regulations", "Không khí");
    CreatPart("id_the_soil_regulations", "Đất");
    CreatPart("id_the_supplywater_regulations", "Nước cấp");
    CreatPart("id_the_wastewater_regulations", "Nước thải");
    CreatPart("id_the_wastesolid_regulations", "Chất thải rắn");

    // Quy chuan tieu chuan cho khong khi
    CreateContent("https://www.env.go.jp/air/tech/ine/asia/vietnam/files/law/QCVN%2019-2009.pdf", "<b>QCVN 19:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải công nghiệp đối với bụi và các chất hữu cơ", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN26-2010-BTNMT.pdf", "<b>QCVN 26:2010/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về tiếng ồn", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN02-2008BTNMT.pdf", "<b>QCVN 02:2008/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải lò đốt chất thải y tế", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-05-2009-BTNMT-chat-luong-khong-khi-xung-quanh.pdf", "<b>QCVN 05:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về chất lượng không khí xung quanh", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-06-2009-BTNMT-chat-doc-hai-trong-khong-khi-xung-quanh.pdf", "<b>QCVN 06:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về một số chất độc hại trong không khí xung quanh", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5939-2005.pdf", "<b>TCVN 5939:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với bụi và các chất hữu cơ", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5940-2005.pdf", "<b>TCVN 5940:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với một số chất hữu cơ", "id_the_air_regulations");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5949-1998.pdf", "<b>TCVN 5949:1998</b> | Âm học - Tiếng ồn khu vực công cộng và dân cư - Mức ồn tối đa cho phép", "id_the_air_regulations");
})

// Code for Documents item
document.getElementById("id_item_documents").addEventListener("click", function() {
    HiddenTitleToash();

    // Create part for this item
    CreatPart("id_the_air_documents", "Không khí");
    CreatPart("id_the_soil_documents", "Đất");
    CreatPart("id_the_supplywater_documents", "Nước cấp");
    CreatPart("id_the_wastewater_documents", "Nước thải");
    CreatPart("id_the_wastesolid_documents", "Chất thải rắn");

    // Documents for the air
    CreateContent("https://www.env.go.jp/air/tech/ine/asia/vietnam/files/law/QCVN%2019-2009.pdf", "<b>QCVN 19:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải công nghiệp đối với bụi và các chất hữu cơ", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN26-2010-BTNMT.pdf", "<b>QCVN 26:2010/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về tiếng ồn", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN02-2008BTNMT.pdf", "<b>QCVN 02:2008/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải lò đốt chất thải y tế", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-05-2009-BTNMT-chat-luong-khong-khi-xung-quanh.pdf", "<b>QCVN 05:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về chất lượng không khí xung quanh", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-06-2009-BTNMT-chat-doc-hai-trong-khong-khi-xung-quanh.pdf", "<b>QCVN 06:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về một số chất độc hại trong không khí xung quanh", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5939-2005.pdf", "<b>TCVN 5939:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với bụi và các chất hữu cơ", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5940-2005.pdf", "<b>TCVN 5940:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với một số chất hữu cơ", "id_the_air_documents");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5949-1998.pdf", "<b>TCVN 5949:1998</b> | Âm học - Tiếng ồn khu vực công cộng và dân cư - Mức ồn tối đa cho phép", "id_the_air_documents");
})

// Code for Calculator Tools item
document.getElementById("id_item_calculator_tools").addEventListener("click", function() {
    HiddenTitleToash();

    // Create part for this item
    CreatPart("id_the_air_tools", "Không khí");
    CreatPart("id_the_soil_tools", "Đất");
    CreatPart("id_the_supplywater_tools", "Nước cấp");
    CreatPart("id_the_wastewater_tools", "Nước thải");
    CreatPart("id_the_wastesolid_tools", "Chất thải rắn");

    // Calculator for the air
    CreateContent("https://www.env.go.jp/air/tech/ine/asia/vietnam/files/law/QCVN%2019-2009.pdf", "<b>QCVN 19:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải công nghiệp đối với bụi và các chất hữu cơ", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN26-2010-BTNMT.pdf", "<b>QCVN 26:2010/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về tiếng ồn", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN02-2008BTNMT.pdf", "<b>QCVN 02:2008/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về khí thải lò đốt chất thải y tế", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-05-2009-BTNMT-chat-luong-khong-khi-xung-quanh.pdf", "<b>QCVN 05:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về chất lượng không khí xung quanh", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/QCVN-06-2009-BTNMT-chat-doc-hai-trong-khong-khi-xung-quanh.pdf", "<b>QCVN 06:2009/BTNMT</b> | Quy chuẩn kỹ thuật quốc gia về một số chất độc hại trong không khí xung quanh", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5939-2005.pdf", "<b>TCVN 5939:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với bụi và các chất hữu cơ", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5940-2005.pdf", "<b>TCVN 5940:2005</b> | Chất lượng không khí - tiêu chuẩn khí thải công nghiệp đối với một số chất hữu cơ", "id_the_air_tools");
    CreateContent("https://dongagreen.com.vn/wp-content/uploads/2017/10/TCVN5949-1998.pdf", "<b>TCVN 5949:1998</b> | Âm học - Tiếng ồn khu vực công cộng và dân cư - Mức ồn tối đa cho phép", "id_the_air_tools");
})

// Code for Others item
document.getElementById("id_item_others").addEventListener("click", function() {
    HiddenTitleToash();

})