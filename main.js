const body = document.body;

body.style.width = "100vw";
body.style.height = "300vh";
body.style.display = "flex";
body.style.justifyContent = "space-evenly";
body.style.alignItems = "center";


const button = document.createElement("button");
button.innerText = "Sort Elements";
button.setAttribute("onclick", "sortElements(mainContainer)");
button.style.background = "lightgreen";
button.style.width = "200px";
button.style.height = "50px";
button.style.fontSize = "20px"
body.appendChild(button);

const mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "mainContainer");
mainContainer.style.width = "600px";
body.appendChild(mainContainer);

let totalElem = 30;
let pArray = [];
let hArray = [];

function createElem(num) {
    
    for (let i = 1; i <= (num / 2); i++) {
        
        let pElem = document.createElement("p");
        let h2Elem = document.createElement("h2");
        let h3Elem = document.createElement("h3");

        pElem.textContent = `p-${i}`;
        h2Elem.textContent = `h2-${i}`;
        h3Elem.textContent = `h3-${i}`;
        
        if(i % 2 == 0) {
            pElem.setAttribute("class", "pText assessment-test");
            pElem.style.background = "yellow";

        } else {
            pElem.setAttribute("class", "pText");
        }

        pArray.push(pElem);

        if(i <= (num / 4)) {
            h2Elem.setAttribute("class", "assessment-test");
            hArray.push(h2Elem, h3Elem);
        }

    }

    let hIndex = 0, pIndex = 0;
    
    for(let j = 0; j < num; j++) {
        
        if(j % 2 == 0) {
            mainContainer.append(hArray[hIndex]);
            hIndex++;
        } else {
            mainContainer.append(pArray[pIndex]);
            pIndex++;
        }
    }

    console.log(pArray);
    console.log(hArray);
}

createElem(30);


function sortElements(elem) {

    let childrenElem = elem.children;
    let arrayElem = [...childrenElem];
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
    console.log(finalArray);

    let testing = () => {
        for (const prop of finalArray) {
            elem.append(prop);
        }
    }
    return testing();

}

// const h2_1 = document.createElement("h2");
// h2_1.setAttribute("class", "assessment-test");
// h2_1.textContent = "h2-1";
// mainContainer.appendChild(h2_1);

// const p_1 = document.createElement("p");
// p_1.setAttribute("class", "pText");
// p_1.textContent = "p-1";
// mainContainer.appendChild(p_1);

// const h3_1 = document.createElement("h3");
// h3_1.textContent = "h3-1";
// mainContainer.appendChild(h3_1);

// const p_2 = document.createElement("p");
// p_2.innerText = "p-2";
// p_2.setAttribute("class", "pText assessment-test");
// p_2.style.background = "yellow";
// mainContainer.appendChild(p_2);