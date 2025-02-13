import React from "react";

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>About Us</h1>
            <p style={styles.paragraph}>
                Welcome to our about page! We are a couple deeply in love, passionate about creating special memories for every Valentine's Day. 
                Over the years, we've shared countless moments of joy, laughter, and adventure. Each year, we plan something new and exciting to celebrate 
                our love for each other and to make this day unforgettable. 
            </p>
            <p style={styles.paragraph}>
                Our journey together has been nothing short of magical. We met by chance but knew from the moment we crossed paths that we were destined to 
                create something beautiful together. Whether visiting temple and doing bhakti together or partying and enjoying, 
                we're all about cherishing every moment we share.
            </p>
            <p style={styles.paragraph}>
                This Valentine's Day, we want to bring our love story to life, sharing our passion for romance and fun with you. Whether you're celebrating 
                with a special someone or just enjoying the spirit of the day, we hope you find inspiration in our journey with our families blessigs.
                I love You Mukesh (mukya) 💖
            </p>
        </div>
    )
}

const styles = {
    container: {
     
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        color: "#fff",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', sans-serif",
    },
    header: {
        color: "#fff",
        fontSize: "3rem",
        marginBottom: "20px",
        textShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    },
    paragraph: {
        fontSize: "1.2rem",
        lineHeight: "1.6",
        color: "#fff",
        margin: "15px 0",
    }
}

export default About;
