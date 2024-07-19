import BlogCard from "../components/BlogCard";
import styles from "./styles.module.css";

async function getData(){
  
  const response = await fetch("https://dummyjson.com/post?limit=11");
  return response.json();
}


export default async function Home() {

  const { posts } = await getData();

  return (
    <div className={styles.blogContainer} >

      {
        posts.map(post => 
          <BlogCard key={post.id} {...post} />
        )
      }

    </div>
  );
}
