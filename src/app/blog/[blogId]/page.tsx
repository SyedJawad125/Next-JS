export default function Productdetailpage({ params }: { params : { blogId: string}}){
    return(
        <h1>Blog Detail Page {params.blogId}</h1>
    )
}