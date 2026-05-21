import {IUser} from "@/src/modules/IUser";
import {IPost} from "@/src/modules/IPost";
import {IComment} from "@/src/modules/IComment";
const baseURL = 'https://jsonplaceholder.typicode.com/'


export const getJSONApi = {

    getUsers: async ():Promise<IUser[]> => {

        const users = await fetch(baseURL+'users')
            .then(res => res.json())

        return users;
    },
    getUser: async (id:number):Promise<IUser> => {
        const user = await fetch(baseURL+'users/'+id)
        .then(res => res.json())

        return user;
    },
    getPosts: async ():Promise<IPost[]> => {

        const posts = await fetch(baseURL+'posts')
            .then(res => res.json())

        return posts;
    },
    getPost: async (id:number):Promise<IPost> => {
        const post = await fetch(baseURL+'posts/'+id)
            .then(res => res.json())

        return post;
    },
    getComments: async ():Promise<IComment[]> => {

        const comments = await fetch(baseURL+'comments')
            .then(res => res.json())

        return comments;
    },
    getComment: async (id:number):Promise<IComment> => {
        const comment = await fetch(baseURL+'comments/'+id)
        .then(res => res.json())
        return comment;
    }

}