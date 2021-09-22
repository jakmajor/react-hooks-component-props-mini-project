import Article from "./Article.js";

function ArticleList({blogData}){

    console.log({blogData})

    return(
        <main>
            {blogData.map(blog => <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview}/>)}
        </main>
    )
}

export default ArticleList;