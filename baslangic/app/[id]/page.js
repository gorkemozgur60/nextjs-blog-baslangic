import React from "react";
import {notFound} from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";

async function getData(id){

    try {
        const response = await fetch(`https://dummyjson.com/post/${id}`);
    return response.json();
        
    } catch (error) {
        throw new Error(error);
    }

    
}


export default async function Page(props){

    const {id , title , body} = await getData(props.params.id);

    if(id>11 || !title){
        return notFound();
    }


    return (
    <div className={styles.blogContainer}> 
    <div className={styles.cardImage}>
            <Image src={`https://picsum.photos/200/300?random=${id}`} alt="Blog Card Image" fill/>
        </div>
        <div className={styles.cardBody}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
     </div>)

}

