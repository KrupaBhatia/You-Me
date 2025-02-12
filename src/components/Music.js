import React from "react";

const Music = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Music Page 🎶</h1>
      <p style={styles.paragraph}>
        Welcome to our music page! 🎧 Listen to our favorite Hindi love songs
        and romantic melodies, and check out some of our favorite romantic movie
        recommendations. 💖
      </p>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>🎶 Romantic Hindi Songs</h2>
        <ul style={styles.songList}>
          <li style={styles.songItem}>
            <a
              href="https://www.youtube.com/watch?v=PaFca4tDLkE"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.songLink}
            >
              Tum Hi Ho - Aashiqui 2
            </a>
          </li>
          <li style={styles.songItem}>
            <a
              href="https://www.youtube.com/watch?v=8OWmQyHtJgI"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.songLink}
            >
              Tum Jo Aaye - Once Upon A Time in Mumbaai
            </a>
          </li>
          <li style={styles.songItem}>
            <a
              href="https://www.youtube.com/watch?v=-tsqSgXhnMk"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.songLink}
            >
              Raabta - Agent Vinod
            </a>
          </li>
          <li style={styles.songItem}>
            <a
              href="https://www.youtube.com/watch?v=LfX0Pm4aMyQ"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.songLink}
            >
              Tum Se Hi - Jab We Met
            </a>
          </li>
          <li style={styles.songItem}>
            <a
              href="https://www.youtube.com/watch?v=7cQjwYg5kx8"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.songLink}
            >
              Tum Mile - Tum Mile
            </a>
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>🎥 Romantic Hindi Movie Recommendations</h2>
        <ul style={styles.movieList}>
          <li style={styles.movieItem}>Dilwale Dulhania Le Jayenge (1995)</li>
          <li style={styles.movieItem}>Kabhi Khushi Kabhie Gham (2001)</li>
          <li style={styles.movieItem}>Tanu Weds Manu (2011)</li>
          <li style={styles.movieItem}>Ae Dil Hai Mushkil (2016)</li>
          <li style={styles.movieItem}>Jab We Met (2007)</li>
          <li style={styles.movieItem}>Tamasha (2015)</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "900px",
    margin: "20px auto",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#fff",
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
  },
  section: {
    marginTop: "30px",
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
  },
  subHeader: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: "15px",
  },
  songList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  songItem: {
    marginBottom: "10px",
  },
  songLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  movieList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  movieItem: {
    fontSize: "1.2rem",
    color: "#fff",
    marginBottom: "10px",
  },
};

export default Music;
