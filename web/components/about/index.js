/**
 * Created by joah.zhang on 2016/3/3.
 */

import {React} from "../../elements/core"

export default ({loadAboutItems, loadingStatus})=>{
    return <div>
        This is about page, changed again!
        <button onClick = {()=>{loadAboutItems()}}>load</button>
        {loadingStatus}
    </div>
}