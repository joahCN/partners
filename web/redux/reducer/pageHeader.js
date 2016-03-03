/**
 * Created by joah.zhang on 2016/3/3.
 */
import ImmutableUpdate from "react-addons-update";

let initialNavBar = {
    brand: "partner",
    items: [
        {
            id: 1,
            title: "join a team",
            isActive: true,
            route: "/"
        },
        {
            id: 2,
            title: "launch a project",
            isActive: false,
            route: "/about"
        }
    ]
};

export let pageHeader = (state = initialNavBar, action = {})=>{
    switch(action.type) {
        case "navItemClick" :
            let item = action.item;
            let activeIndex, oldIndex = 0;
            state.items.forEach(function(_item, i) {
                if(_item.id == item.id) {
                    activeIndex = i;
                }
                if(_item.isActive) {
                    oldIndex = i;
                }
            });
            return ImmutableUpdate(state, {
                items: {
                    [oldIndex]: {
                        isActive: {$set: false}
                    },
                    $splice: [[activeIndex, 1, ImmutableUpdate(item, {
                        isActive: {$set: true}
                    })]]
                }
            });
        default:
            return state
    }
};