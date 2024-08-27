'use client';
import BackButton from "@/components/general/BackButton";
import * as z from "zod";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from '@/data/posts';
import { Post } from "@/interfaces/Posts";

const formSchema = z.object({
    title: z.string().min(1,{message:'Title is required'}),
    body: z.string().min(1,{message:'Body is required'}),
    author: z.string().min(1,{message:'Author is required'}),
    date: z.string().min(1,{message:'Date is required'}),
});

interface PostEditPagePorps {
    params: {
        id:string
    };
}
const PostEditPage = ({params}:PostEditPagePorps) => {
    const {id} = params;
    const post = posts.find((post:Post) => post.id === id);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        }
    })

    return ( <>
    <BackButton text="Back to Posts" link="/posts"/>
    </> );
}
 
export default PostEditPage;