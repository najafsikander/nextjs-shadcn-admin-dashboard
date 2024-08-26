import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/general/BackButton";
import PostPagination from "@/components/posts/Pagination";
const PostsPage = () => {
    return <>
    <BackButton text="Go Back" link="/"/>
    <PostTable/>
    <PostPagination/>
    </>;
}
 
export default PostsPage;