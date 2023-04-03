import ListItem from "./ListItem";

interface List {
    list: ListItem[], 
    load(): void,
    save(): void, 
    clearList(): void, 
    addItem(itemObj: ListItem): void, 
    removeItem(id: string): void, 
};

export default class FullList implements List {
    static instance: FullList = new FullList(); 

    private constructor(private _list: ListItem[] = []) {}

    // getter 
    get list(): ListItem[] {
        return this._list; 
    }; 

    load(): void {
        // get "myList" from localStorage
        const storedList: string | null = localStorage.getItem("myList"); 
        // type guard to check if the storedList is NOT a string... we just return 
        if(typeof storedList !== "string") return; 
        // else... 
        // parse the stored list 
        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList); 
        // iterate over the parsedList []
        parsedList.forEach((itemObj) => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked); 
            FullList.instance.addItem(newListItem); 
        });

    };

    save(): void {
        // save list to localStorage 
        localStorage.setItem("myList", JSON.stringify(this._list)); 
    }; 

    clearList(): void {
        this._list = []; 
        this.save(); 
    }; 

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj); 
        this.save(); 
    };

    removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id); 
        this.save(); 
    }; 
}; 