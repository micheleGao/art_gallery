import { useState, useEffect, useContext} from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import{DataContext} from '../../App';
export default function Gallery() {
    const [images, setImages]=useState([]);
    const galleryData = useContext(DataContext);
    console.log({galleryData})
    // console.log(galleryData.images)
    // console.log(galleryData.images[1].baseimageurl)
    return (
        <div className="gallery">
            <button onClick={galleryData.image}>Get Random Gallery Photos here </button>
            {images.map((image, idx) => {
                return (
                    <>
                        <Card style={{ width: '20rem' }} key={galleryData.images[idx]}>
                            <Card.Body>
                            <Card.Img variant="top" src={galleryData.images[idx].image.baseimageurl} alt='' width="100"/>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
        </div>
       

    )
}
