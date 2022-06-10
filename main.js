const elemContainer = document.getElementById("elemContainer");
const inputElm = document.getElementById("inputElm");

function createElem(num) {
    
    let pArray = [];
    let hArray = [];
    
    for (let i = 1; i <= Math.ceil(num / 2); i++) {
        
        let pElem = document.createElement("p");
        let h2Elem = document.createElement("h2");
        let h3Elem = document.createElement("h3");

        pElem.textContent = `p-${i}`;
        h2Elem.textContent = `h2-${i}`;
        h3Elem.textContent = `h3-${i}`;
        
        if(i % 2 == 0) {
            pElem.setAttribute("class", "pText assessment-test");
            pElem.style.background = "#b455aa";

        } else {
            pElem.setAttribute("class", "pText");
        }

        pArray.push(pElem);

        if(i <= Math.ceil(num / 4)) {
            h2Elem.setAttribute("class", "assessment-test");
            hArray.push(h2Elem, h3Elem);
        }

    }
    
    let arrIndex = 0;

    for(let j = 0; j < num; j++) {
        if(j % 2 == 0) {
            elemContainer.append(hArray[arrIndex]);
            arrIndex++;
        } else {
            elemContainer.append(pArray[arrIndex - 1]);
        }
    }
}

inputElm.addEventListener("change", () => {
    elemContainer.textContent = "";
    createElem(inputElm.value);
})

function sortElements(elem) {

    let arrayElem = [...elem.children];
    let arrayH2 = [], arrayH3 = [], arrayP = [];

    for(let prop of arrayElem) {

        switch(prop.tagName){
            case "H2":
                arrayH2.push(prop);
                break;
            case "H3":
                arrayH3.push(prop);
                break;
            case "P":
                arrayP.push(prop);
                break;
            default:
                break;
        }
    }
    
    let finalArray = [...arrayH2, ...arrayH3, ...arrayP];

    let sorting = () => {
        for (const prop of finalArray) {
            elem.append(prop);
        }
    }
    return sorting();
}