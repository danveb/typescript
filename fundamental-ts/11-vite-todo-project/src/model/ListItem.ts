// create an interface 

export interface Item {
    id: string, 
    item: string, 
    checked: boolean, 
}; 

// class ListItem with id, item, checked
export default class ListItem implements Item {
    constructor(
        private _id: string = "", 
        private _item: string = "", 
        private _checked: boolean = false, 
    ) {}; // we leave body of curly brace empty since we have default values in constructor

    // getters/setters for _id
    get id(): string {
        return this._id; 
    }; 
    set id(id: string) {
        this._id = id; 
    }; 
    // getters/setters for item
    get item(): string {
        return this._item; 
    }; 
    set item(item: string) {
        this._item = item; 
    }; 
    // getters/setters for _checked
    get checked(): boolean {
        return this._checked; 
    }; 
    set checked(checked: boolean) {
        this._checked = checked; 
    }; 
}; 