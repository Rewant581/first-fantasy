import React from 'react';
// import Disclamier from '../Assets/Disclamier.webp';

const Disclaimer = () => {
  return (
    <div style={styles.card}>
    
        <div style={styles.container}>
      {/* <img src={Disclamier} alt="Terms and Conditions" style={styles.image} /> */}
      </div>
    <div style={styles.container}>
      <h1 style={styles.header}>Disclaimer for IPL11 Fantasy Platform</h1>
      
      <h2 style={styles.subHeader}>General Information Disclaimer</h2>
      <p style={styles.section}>
        The content and information provided on the IPL11 Fantasy Sports app are intended for general information purposes only. We strive to ensure that the information on our platform is accurate and up-to-date; however, we make no guarantees regarding its accuracy, completeness, or timeliness.
      </p>
      <p style={styles.section}>
        IPL11 Fantasy is not liable for any inaccuracies or omissions in the content provided, nor for any actions users may take based on the information available on our app. Users should not interpret any of the information on IPL11 Fantasy as legal, financial, or professional advice.
      </p>

      <h2 style={styles.subHeader}>Risks and Responsibilities</h2>
      <p style={styles.section}>
        Engaging in fantasy sports inherently involves risks. Users are encouraged to exercise caution and consider these risks when making decisions based on the information provided by our platform. We recommend that users conduct their own research and consult with qualified professionals before making any financial or legal decisions related to their participation in fantasy sports.
      </p>
      <p style={styles.section}>
        IPL11 Fantasy is designed for entertainment purposes only and does not advocate or support any form of gambling or illegal activities. Any references to real teams, players, or events are entirely coincidental and not intended to be taken as endorsements or promotions.
      </p>

      <h2 style={styles.subHeader}>Liability and User Conduct</h2>
      <p style={styles.section}>
        IPL11 Fantasy is not responsible for any losses or damages that may occur from using our app. Users are accountable for their own decisions and actions while engaging with fantasy sports games on our platform. It is imperative that users comply with all applicable local laws and regulations.
      </p>
      <p style={styles.section}>
        By using the IPL11 Fantasy Sports app, you agree to release IPL11 Fantasy and its affiliates from any claims, damages, or losses arising from your use of the app. You acknowledge that you understand and accept the terms of this disclaimer.
      </p>

      <h2 style={styles.subHeader}>Changes and Updates</h2>
      <p style={styles.section}>
        Please be aware that this disclaimer is subject to change without prior notice. We advise users to review this disclaimer regularly to stay informed of any updates or modifications.
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
  image: {
    width: '75%',  // Adjust this to fit your layout
    height: '50%', // Maintain aspect ratio
    marginBottom: '20px', // Space between the image and text
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

export default Disclaimer;
