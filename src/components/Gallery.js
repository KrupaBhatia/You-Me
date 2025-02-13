import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0); // To track which image is shown
    const images = [
        "./pic1.jpeg", // Replace with your image path in the public folder
        "./pic2.jpeg", // Replace with your image path in the public folder
        "./pic3.jpeg", // Replace with your image path in the public folder
        "./pic4.jpeg",
        "./pic5.jpeg",
        "./pic7.jpeg",
        "./pic8.jpeg",
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length); // Loop through images
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Loop back to last image
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Gallery</h1>
            <p style={styles.paragraph}>
                Here's a glimpse into our cherished memories! 🌹 Enjoy the collection of our special moments together on this beautiful Valentine's Day. 💖
            </p>

            <motion.div
                style={styles.imageContainer}
                key={currentImage} // Key changes on each image swap for animation
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={images[currentImage]}
                    alt={`Memory ${currentImage + 1}`}
                    style={styles.image}
                />
            </motion.div>

            <div style={styles.buttonsContainer}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    style={styles.button}
                >
                    Previous
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    style={styles.button}
                >
                    Next
                </motion.button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginTop : '5%',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '20px auto',
        fontFamily: "'Segoe UI', sans-serif",
        color: '#333',
    },
    header: {
        color: '#fff',
        fontSize: '3rem',
        marginBottom: '20px',
        textShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#fff',
        margin: '15px 0',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        overflow: 'hidden',
        alignItems: 'center', // Centering the image vertically
    },
    image: {
        width: '40%',
        maxHeight: '500px', // Prevent image from getting too tall
        height: 'auto', // Maintain aspect ratio of the image
        objectFit: 'cover', // Ensures the image fills the space proportionally
        borderRadius: '8px',
        boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#ff6f61',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },
};


export default Gallery;
