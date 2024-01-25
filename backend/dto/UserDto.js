export default class UserDto {
    id;
    vkId;

    constructor(model) {
        const user = model[0][0]
        this.id = user.id
        this.username = user.name
    }
}