import Api from "../api"

class CategoriesAPI extends Api {
    
    constructor(){
        super('categories')
    }

    public async getCategories(){
        
        return await super.get('get-categories')
    }

}

export default CategoriesAPI