export {default} from "next-auth/middleware";

// I don't think this is working
// TODO: need to check if this config should be imported
//  to be used as redirection config for Auth.js
export const config = {
    // *: zero or more parameters
    // +: one or more parameters
    // ?: zero or one
    matcher: ['/users']
}
