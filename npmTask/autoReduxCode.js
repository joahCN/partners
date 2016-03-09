/**
 * Created by joah.zhang on 2016/3/9.
 */
'use strict';

var path = require("path"),
    argv = require('optimist').argv,
    fs = require("fs"),
    prompt = require("prompt");

prompt.start();
prompt.get(["componentName"], (error, result)=> {
    if(error) {
        throw error;
    }
    let componentName = result.componentName;
    console.log("componentName: " + componentName);
    createFiles(componentName);
});

let createFiles = (componentName) => {
    let templates = getTemplatesConfig(componentName);
    templates.forEach((template)=> {
        if(fs.existsSync(template.filePath)) {
            console.log("WARNING:"+template.filePath + " exist");
            return;
        }
        fs.writeFile(template.filePath, template.template.trim(), (error) => {
            error ? console.log("create:" + template.filePath + " error:" + error) : console.log("create:" + template.filePath + " success")
        });
    });
};

let getTemplatesConfig = (componentName) => {
    let exportComponent = componentName.substr(0,1).toLocaleUpperCase()+componentName.substr(1);
    let reduxFolder = "./web/redux";

    return [
        {
            filePath: path.join(reduxFolder, "container", `${componentName}.js`),
            template: `
import { connect } from '../index';
import {${exportComponent}} from "../../components/${componentName}/index.js"
let mapStateToProps = (state) => {
    return {

    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(${exportComponent});
        `
        },
        {
            filePath: path.join(reduxFolder, "reducer", `${componentName}.js`),
            template: `
import {Immutable} from "../../elements/core.js"
export default (state, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}
        `
        }
    ];
};





