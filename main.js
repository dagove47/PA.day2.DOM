const body = document.body;

body.style.width = "100vw";
body.style.height = "100vh";
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


const h2_1 = document.createElement("h2");
h2_1.setAttribute("class", "assessment-test");
h2_1.textContent = "h2-1";
mainContainer.appendChild(h2_1);

const p_1 = document.createElement("p");
p_1.setAttribute("class", "pText");
p_1.textContent = "p-1";
mainContainer.appendChild(p_1);

const h3_1 = document.createElement("h3");
h3_1.textContent = "h3-1";
mainContainer.appendChild(h3_1);

const p_2 = document.createElement("p");
p_2.innerText = "p-2";
p_2.setAttribute("class", "pText assessment-test");
p_2.style.background = "yellow";
mainContainer.appendChild(p_2);

const h2_2 = document.createElement("h2");
h2_2.innerText = "h2-2";
h2_2.setAttribute("class", "assessment-test");
mainContainer.appendChild(h2_2);

const p_3 = document.createElement("p");
p_3.innerText = "p-3";
p_3.setAttribute("class", "pText");
mainContainer.appendChild(p_3);

const h3_2 = document.createElement("h3");
h3_2.innerText = "h3-2";
mainContainer.appendChild(h3_2);

const p_4 = document.createElement("p");
p_4.innerText = "p-4";
p_4.setAttribute("class", "pText assessment-test");
p_4.style.background = "yellow";
mainContainer.appendChild(p_4);

const h2_3 = document.createElement("h2");
h2_3.innerText = "h2-3";
h2_3.setAttribute("class", "assessment-test");
mainContainer.appendChild(h2_3);

const p_5 = document.createElement("p");
p_5.innerText = "p-5";
p_5.setAttribute("class", "pText");
mainContainer.appendChild(p_5);

const h3_3 = document.createElement("h3");
h3_3.innerText = "h3-3";
mainContainer.appendChild(h3_3);

const p_6 = document.createElement("p");
p_6.innerText = "p-6";
p_6.setAttribute("class", "pText assessment-test");
p_6.style.background = "yellow";
mainContainer.appendChild(p_6);

const h2_4 = document.createElement("h2");
h2_4.innerText = "h2-4";
h2_4.setAttribute("class", "assessment-test");
mainContainer.appendChild(h2_4);

const p_7 = document.createElement("p");
p_7.innerText = "p-7";
p_7.setAttribute("class", "pText");
mainContainer.appendChild(p_7);

const h3_4 = document.createElement("h3");
h3_4.innerText = "h3-4";
mainContainer.appendChild(h3_4);

const p_8 = document.createElement("p");
p_8.innerText = "p-8";
p_8.setAttribute("class", "pText assessment-test");
p_8.style.background = "yellow";
mainContainer.appendChild(p_8);

const h2_5 = document.createElement("h2");
h2_5.innerText = "h2_5";
h2_5.setAttribute("class", "assessment-test");
mainContainer.appendChild(h2_5);

const p_9 = document.createElement("p");
p_9.innerText = "p-9";
p_9.setAttribute("class", "ptext");
mainContainer.appendChild(p_9);

const h3_5 = document.createElement("h3");
h3_5.innerText = "h3-5";
mainContainer.appendChild(h3_5);

const p_10 = document.createElement("p");
p_10.innerText = "p-10";
p_10.setAttribute("class", "pText assessment-test");
p_10.style.background = "yellow"
mainContainer.appendChild(p_10);


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

    let testing = () => {
        for (const prop of finalArray) {
            elem.append(prop);
        }
    }
    return testing();

}