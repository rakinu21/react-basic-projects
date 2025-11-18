import React, { useEffect, useState } from 'react'
import { FaArrowLeft ,FaArrowRight} from "react-icons/fa";
import './style.css'

export const ImageSlider = ({url, limit= 5}) => {

    const [loading, setloading] = useState(false);
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [currentImage, setCurrentImage] = useState(0);

    const fetchData = async(getUrl) => {
        setloading(true);
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            setloading(false);
            setImages(data);
        } catch (error) {
            setErrorMessage(error.message);
            setloading(false);
        }
    };

    useEffect(() => {
        if (url !== '') {
            fetchData(url);
        }
    }, [url]);

    const handlePrevImage = () => {
        setCurrentImage(prev =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImage(prev =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    if (loading) {
        return <div>loading....</div>;
    }

    if (errorMessage) {
        return <div className="error">error occurred</div>;
    }

    return (
        <div className='imageSlider'>

            <div className="control-btn">
                <FaArrowLeft onClick={handlePrevImage} />
                <FaArrowRight onClick={handleNextImage} />
            </div>

            {images && images.length > 0 ? (
                <div className="image-container">
                    <img
                        src={images[currentImage].download_url}
                        alt="slide"
                         className={`slider-image show`}
                    />
                </div>
            ) : (
                <p>no item found</p>
            )}

            <div className="indicator-wrapper">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${currentImage === index ? "active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>

        </div>
    );
};
