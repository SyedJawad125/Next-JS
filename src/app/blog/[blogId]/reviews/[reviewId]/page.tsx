export default function Productdetailpage({ params }: { params : { blogId: string,
    reviewId: string
}}){
    return(
        <h1>Review {params.reviewId} for Blog {params.blogId}</h1>
    )
}