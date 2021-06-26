function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            
            break;
        case "subadmin":
            return `${name} is subadmin with access`;
            break;
        case "testprep":
            return `${name} is a testprep with access to create admin`;
            break;
        case "user":
            return `${name} heaving partial access`;
            break;
    
        default:
            return `${name} you need to login`;
            break;
    }
}
console.log( getUserRole("raju","subadmin"));