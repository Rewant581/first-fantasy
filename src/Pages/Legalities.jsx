import React from 'react';
// import legalities from '../Assets/legalities.webp';

const Legalities = () => {
  return (
    <div style={styles.card}>
    <div style={styles.container}>
    <div style={styles.container}>
      {/* <img src={legalities} alt="Terms and Conditions" style={styles.image} /> */}
      </div>
      <h1 style={styles.header}>Legalities</h1>
      
      <h2 style={styles.subHeader}>Game of Skills</h2>
      <p style={styles.section}>
        IPL11 Fantasy is considered a “Game of Skill.” The game of skills can be defined as a game wherein the skills of the individuals participating in any online fantasy sports gaming play a dominant role rather than the mere luck of the individuals. The individuals in the game of skills use their knowledge, skills, training, and attention for participation and winning.
      </p>
      <p style={styles.section}>
        Online fantasy sports gaming is considered to be a legal practice around the world, with certain states being an exception. Online fantasy sports gaming is entirely based on the concept of Game of Skills, wherein the users form their own teams and are allocated points based on the on-field performance of their chosen players.
      </p>
      <p style={styles.section}>
        IPL11 Fantasy is completely legal as it offers services, Fun Features, Program(s), and Contest(s) related to fantasy cricket, fantasy football, fantasy kabaddi, fantasy volleyball, fantasy basketball, and fantasy hockey. The services, contest(s), and program(s) related to online fantasy sports gaming offered by IPL11 Fantasy enable its users to create their own team prior to the match beginning and then the teams are awarded points based on the real-life performance of the players chosen by the users in the team. The individual whose team scores the highest aggregate of points is announced as the winner. The formation of the team by the users of IPL11 Fantasy is entirely dependent on the skills, knowledge, and attention of the users, which makes online fantasy sports gaming offered at IPL11 Fantasy a game of skills and 100% legal.
      </p>

      <h2 style={styles.subHeader}>Alignment with Indian Laws</h2>
      <p style={styles.section}>
        The game of skills, such as online fantasy sports gaming, are considered to be legal all over India, except in certain states such as Sikkim, Assam, Odisha, Telangana, Nagaland, and Andhra Pradesh. The Public Gambling Act, 1867 (“PGA, 1867”) is recognized as the primary legislation driving the legality of gambling in India.
      </p>
      <p style={styles.section}>
        The PGA defines the act of “public gambling” and the keeping of a common gaming house as a criminal and punishable act in India. However, online fantasy sports gaming is considered to be an exception under the PGA, wherein the provisions and punishments of the PGA shall not be applicable to games played by the user using their skills and knowledge as primary tools.
      </p>

      <h2 style={styles.subHeader}>Restricted States</h2>
      <p style={styles.section}>
        There are various states in India wherein the laws related to the game of skills are unclear. In this regard, for the websites offering online fantasy sports gaming, it remains unclear whether to offer the services for free or not. The Indian states with no clearance regarding the offering of pay-to-play contests include Sikkim, Assam, Odisha, Telangana, Nagaland, and Andhra Pradesh.
      </p>
      <p style={styles.section}>
        In this context, IPL11 Fantasy does not permit the users identified as the residents of Sikkim, Odisha, Telangana, Assam, Nagaland, and Andhra Pradesh to participate in the pay-to-play contest(s) organized by IPL11 Fantasy.
      </p>

      <h2 style={styles.subHeader}>18+ Disclaimer</h2>
      <p style={styles.section}>
        This game involves an element of financial risk and may be addictive. Please play responsibly at your own work. Geographical Restrictions Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
      </p>
    </div>
  </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  card: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  image: {
    width: '75%',  // Adjust this to fit your layout
    height: '50%', // Maintain aspect ratio
    marginBottom: '20px', // Space between the image and text
  },
  header: {
    textAlign: 'center',
    color: '#004c91',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subHeader: {
    marginTop: '30px',
    marginBottom: '10px',
    color: '#004c91',
  }
};

export default Legalities;
