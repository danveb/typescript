import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement, 

    // methods 
    clear(): void, 
    render(fullList: FullList): void, 
}; 

export default class ListTemplate implements DOMList {

    ul: HTMLUListElement; 

    static instance: ListTemplate = new ListTemplate; 

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement; 
    }; 

    // methods 
    clear(): void {
        this.ul.innerHTML = ""; 
    }; 

    render(fullList: FullList): void {
        this.clear(); 
        fullList.list.forEach((item) => {
            const li = document.createElement("li") as HTMLLIElement; 
            li.className = "item"; 

            // create checkbox 
            const check = document.createElement("input") as HTMLInputElement; 
            check.type = "checkbox"; 
            check.id = item.id; 
            check.tabIndex = 0;
            check.checked = item.checked; 
            li.append(check); 
            // addEventListener to checkbox 
            check.addEventListener("change", () => {
                item.checked = !item.checked; 
                fullList.save(); 
            }); 
            
            // create label 
            const label = document.createElement("label") as HTMLLabelElement; 
            label.htmlFor = item.id; 
            label.textContent = item.item; 
            li.append(label); 

            // create button 
            const btn = document.createElement("button") as HTMLButtonElement; 
            btn.className = "button"; 
            btn.textContent = "X"; 
            li.append(btn); 
            // addEventListner to btn
            btn.addEventListener("click", () => {
                fullList.removeItem(item.id); 
                // with removeItem method it automatically saves per our Model
                // fullList.save(); 
                this.render(fullList); 
            });

            this.ul.append(li);  
        }); 
    }
}