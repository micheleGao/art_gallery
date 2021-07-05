import { useState, useEffect, useContext} from 'react';
import { Button } from 'react-bootstrap/';
import { Card } from 'react-bootstrap/';
import{DataContext} from '../../App';
export default function Gallery() {
    const [images, setImages]=useState([]);
    const galleryData = useContext(DataContext);
    console.log({galleryData})
    // console.log(galleryData.images[1].baseimageurl)

    return (
        <div className="gallery">
            <div>
            <div><Button className="button" onClick={galleryData.getImages}variant="success">Get Random Gallery Photos here</Button></div>
            </div>
            {/* <button onClick={galleryData.getImages}>Get Random Gallery Photos here </button> */}
            {galleryData.images.map((image, idx) => {
                return (
                    <>
                        <Card  className="gallery_col"style={{ width: '30rem' }} key={idx}>
                            <Card.Body>
                            <Card.Img variant="top" src={galleryData.images[idx].baseimageurl} alt='' width="200"/>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
        </div>
       

    )
}
