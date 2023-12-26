import Request from "../request"

class CategoriesAPI extends Request {
    
    constructor(){
        super('categories')
    }

    public async getCategories(){
        
        return await super.get('get-categories')
    }

}

export default CategoriesAPI