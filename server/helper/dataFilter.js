const fs = require('fs')
const path = require('path')

const folderPath = __dirname + '/files'

const fileReader = fs.readdirSync(folderPath).map(file => {
    const userFile = path.join(file)
    const fileName = folderPath + '/' + file
    const fileData = fs.readFileSync(fileName, 'utf8')

    const parsedData = JSON.parse(fileData)
    const contentModule = parsedData.modulos.content_module
    const authModule = parsedData.modulos.auth_module
    const contentModuleNum = contentModule.slice(contentModule.length -1) 
    const authModuleNum = authModule.slice(authModule.length -1)

    const user_modules = { userFile, contentModuleNum, authModuleNum }
    return user_modules
  })

const dataFilter = () => {
    let data = {
        auth_module: {
            "authn.provider_1": [],
            "authn.provider_2": [],
            "authn.provider_3": [] 
        },
        content_module: {
            "authz.provider_1": [],
            "authz.provider_2": [],
            "authz.provider_3": [] 
        }
    };

    fileReader.forEach(element => {
    let user = element.userFile
    //Auth
        if (element.authModuleNum === "1") data.auth_module["authn.provider_1"].push(user)
        if (element.authModuleNum === "2") data.auth_module["authn.provider_2"].push(user)
        if (element.authModuleNum === "3") data.auth_module["authn.provider_3"].push(user)
    //Content
        if (element.authModuleNum === "1") data.content_module["authz.provider_1"].push(user)
        if (element.authModuleNum === "2") data.content_module["authz.provider_2"].push(user)
        if (element.authModuleNum === "3") data.content_module["authz.provider_3"].push(user)
    });

    return data;
  }

module.exports = { dataFilter }