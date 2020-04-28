import React from "react";
import {useRouteMatch} from "react-router";

const generatePage = page =>{
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(component())
    }catch (e) {
        console.warn(e)
        return React.createElement(() => 403)
    }
}
const PageRender = () =>{
    const {
        params: { page }
    } = useRouteMatch()
    return generatePage(page)
}
export default PageRender
