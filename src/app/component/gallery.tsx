import { sculptureList } from "@/data/article";
import { useState } from "react";

export default function Gallery() {
    // let index = 0;
    const [index,setIndex] = useState(0);

    function handleClick() {
        // index = index + 1;
        setIndex(index+1);
    }

    let sclupture = sculptureList[index];

    return(
        <>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
                    Artikel Selanjutnya
            </button>
            <h2><i>{sclupture.name}</i> oleh {sclupture.artist}</h2>
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sclupture.url} alt={sclupture.alt} />
            <p>
                {sclupture.description}
            </p>
        </>
    );
}