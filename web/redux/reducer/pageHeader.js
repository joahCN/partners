/**
 * Created by joah.zhang on 2016/3/3.
 */
import {Immutable} from "../../elements/core.js"

let initialNavBar = {
    brand: "Partners",
    items: [
        {
            id: 1,
            title: "Assembly",
            isActive: true,
            route: "/"
        },
        {
            id: 2,
            title: "Dreamer",
            isActive: false,
            route: "/about"
        }
    ],
    loadingStatus: ""
};

export let pageHeader = (state = initialNavBar, action = {})=>{
    switch(action.type) {
        case "navItemClick" :
            let item = action.item;
            state = Immutable.fromJS(initialNavBar);

            let updatedItems = state.update("items",(items) => {
                return items.map((_item)=> {
                    return _item.update("isActive",()=>{
                        return _item.get("id") == item.id;
                    } );
                });
            } );
            return updatedItems.toJS();

        default:
            return state
    }
};