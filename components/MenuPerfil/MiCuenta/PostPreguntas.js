
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import PostCard from "../../../utils/PostCard/postCard";
import deletePost from "../../../utils/deletePost";
import VisibleDelete from "../../../utils/PostCard/visibleDelete";

export default function PostPreguntas({post, User}){
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [message, setMessage] = useState(null);
    const router = useRouter();
    
    console.log(post?._id);
    const handleDelete=()=>{
        deletePost(post?._id,router, setMessage)
    }

    return(
        <>
        {visibleDelete === true && <VisibleDelete message={message} handleDelete={handleDelete}/>}
        <PostCard Post={post} User={User} setVisibleDelete={setVisibleDelete} espaciado={true}/>
        </>
    )
}