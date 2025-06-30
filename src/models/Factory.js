import FacturasModel from "./DAO/model.js";
import FacturasModelFS from "./DAO/modelFS.js";

class Factory {
    static create(persistance) {
        switch(persistance) {
            case "file":
                console.log("File System persistance")
                return new FacturasModelFS()
            case "memory":
                console.log("memory persistance")
                return new FacturasModel()
            
            default:
                console.log("default persistance")
                return new FacturasModel()    
        }
    }
}

export default Factory