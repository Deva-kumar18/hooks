import {createBrowserRouter} from "react-router-dom"
import LayoutPage from "./Pages/LayoutPage/LayoutPage"
import UseState from "./Pages/UseState/UseState"
import UseReducer from "./Pages/UseReducer/UseReducer"
import UseRef from "./Pages/UseRef/UseRef"
import UseEffect from "./Pages/UseEffect/UseEffect"
import UseId from "./Pages/UseId/UseId"
import UseContext from "./Pages/UseContext/UseContext"
import UseCallBack from "./Pages/UseCallback/UseCallBack"
import UseDebugValue from "./Pages/UseDebugValue/UseDebugValue"
import UseLayoutEffect from "./Pages/UseLayouteffect/UseLayoutEffect"
import UseMemo from "./Pages/UseMemo/UseMemo"




export const router = createBrowserRouter([{
  path:"/",
  element:<LayoutPage/>,
children:[{
    path:"usestate",
    element:<UseState/>
},{
    path:"usereducer",
    element:<UseReducer/>
},{
    path:"useref",
    element:<UseRef/>
},{
    path:"useeffect",
    element:<UseEffect/>
},{
    path:"useid",
    element:<UseId/>
},{
    path:"usecontext",
    element:<UseContext/>
},{
    path:"usecallback",
    element:<UseCallBack/>
},{
    path:"usedebugvalue",
    element:<UseDebugValue/>
},{
    path:"uselayouteffect",
    element:<UseLayoutEffect/>
},{
    path:"usememo",
    element:<UseMemo/>
},]}    
])

