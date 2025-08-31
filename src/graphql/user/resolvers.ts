import UserService, { CreateUserPayload } from "../../services/user";
import { mutations } from "./mutation"

const queries = {}

const mutation = {
    createUser:async(_:any,payload:CreateUserPayload) => {
        const res = await UserService.createUser(payload);
        return res.id;
    } 
   
}

export const resolvers = {
    queries,
     mutation,
}