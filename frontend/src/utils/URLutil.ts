
class URLUtil{
    public search(searchURL: string){

        const search = window.location.search

        if(
            search.slice(
                1, 
                search.indexOf('=')
            ) === searchURL
        ) {
            return search.slice(
                search.indexOf('=') + 1
            )
            
        } else {
            return undefined
        }
    }
}

export default new URLUtil()