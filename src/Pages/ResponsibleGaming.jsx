import React from 'react';
// import Gaming from '../Assets/Gaming.png';

const ResponsibleGaming = () => {
  return (
    <div style={styles.card}>
    
    <div style={styles.container}>
  {/* <img src={Gaming} alt="Terms and Conditions" style={styles.image} /> */}
  </div>
    <div style={styles.container}>
      <h1 style={styles.header}>Responsible Gaming at IPL11 Fantasy</h1>
      
      <h2 style={styles.subHeader}>Commitment to Responsible Gaming</h2>
      <p style={styles.section}>
        IPL11 Fantasy is committed to responsible gaming and, as part of its corporate social responsibility, advises its users to follow responsible gaming practices as mentioned in the IPL11 Fantasy Responsible Gaming guide.
      </p>
      <p style={styles.section}>
        At IPL11 Fantasy, we are dedicated to ensuring that our users have a fun, entertaining, safe, secure, and responsible gaming experience. Thus, we have implemented a strict Responsible Gaming Policy.
      </p>

      <h2 style={styles.subHeader}>Responsible Gaming Policy for Fantasy</h2>
      <p style={styles.section}>
        IPL11 Fantasy appreciates your love of gaming. As a result, we have implemented strict guidelines so that you can play your game and excel at it. Our player-focused project, Responsible Gaming for Fantasy Games, includes a list of carefully developed guidelines that you must follow in order to keep using our site.
      </p>
      <p style={styles.section}>
        We hope to make each day more fruitful and exciting for you through fantasy. The key components of our fantasy game responsible gaming policy are listed below:
      </p>
      <ul style={styles.list}>
        <li>Our fantasy gaming services are wholly skill-based activities.</li>
        <li>Even while they might be used for entertainment and have alluring reward systems, they cannot and must not be compared to a steady source of revenue.</li>
        <li>You should keep track of how much time and money you spend using our services. If you think it’s impacting you personally or financially, we advise you to quit right away.</li>
        <li>Play with a cheerful attitude and not to make up for previous “losses.”</li>
        <li>Please refrain from asking for money to play these games.</li>
        <li>Before moving ahead, be sure to consult your family and friends.</li>
        <li>Additionally, we forbid gamers under the age of 18 from using our services. Please note that you cannot allow any children to play through your IPL11 Fantasy profile if you are an adult.</li>
      </ul>
      <p style={styles.section}>
        From our end, we proactively monitor users and their activities for identifying vulnerable users and we reach out to them to ensure that they play responsibly. These measures include, but are not limited to, advising a user by email to exercise due caution if the user has lost more than Rs. 25,000 in a day, advising a user by calling to exercise due caution if the user has lost more than Rs. 75,000 in a week and offer them the option to either opt-out permanently or for a specific timeframe.
      </p>
      <p style={styles.section}>
        We advise you to set restrictions on how much time you can freely devote to participating in our online fantasy games.
      </p>
      <p style={styles.section}>
        We advise you to use only an amount that you could afford to lose in the worst-case situation and to think very carefully about bank management.
      </p>

      <h2 style={styles.subHeader}>Responsible Gaming Policy for Rummy</h2>
      <p style={styles.section}>
        As mentioned in our Terms and Conditions, only Indian residents aged 18 and above are eligible to register and play on MyTeamRummy. Our platform is not available to minors.
      </p>
      <p style={styles.section}>
        Our platform is available only for persons who are eligible to be a party to a contract as per the Indian Contract Act of 1872.
      </p>
      <p style={styles.section}>
        We require each user to register for an account and provide KYC Documents for proof of identity (such as passport, AADHAR card, and/or PAN Card).
      </p>
      <p style={styles.section}>
        We do not allow users from the Rummy-banned states to participate in the game of Rummy.
      </p>
      <p style={styles.section}>
        From our end, we proactively monitor users and their activities for identifying vulnerable users and we reach out to them to ensure that they play responsibly. These measures include, but are not limited to, advising a user by email to exercise due caution if the user has lost more than Rs. 25,000 in a day, advising a user by calling to exercise due caution if the user has lost more than Rs. 75,000 in a week and offer them the option to either opt-out permanently or for a specific timeframe.
      </p>

      <h2 style={styles.subHeader}>Responsible Play Guide</h2>
      <p style={styles.section}>
        Rummy may be addictive at times and since paid games involve time and money, please play responsibly at your own risk.
      </p>
      <p style={styles.section}>
        We would urge you to consider moderation while using our platform.
      </p>
      <ul style={styles.list}>
        <li>As a reasonable person, please refrain from chasing losses. You should not consider compensating previous losses in the new contests/events with an expectation of earning profit.</li>
        <li>We would recommend you do proper financial planning and set aside an entertainment budget that does not put any kind of constraints on you.</li>
        <li>For ensuring proper social, professional, personal, and family life, you are advised to keep track of the time you spend playing rummy and ensure that you do not compromise your daily routine, family time, time for employment or profession, or time for any other commitments.</li>
        <li>We would urge you to avoid playing Rummy under the influence of alcohol, other intoxicating substances, or heightened emotional stress. Using our platform under the influence of alcohol, drugs, intoxicating substances, or heightened emotional states (such as the death of a loved one, anger, depression, loneliness, etc.) may adversely impact your time and money.</li>
        <li>As a principle, please do not be coerced or influenced by other people or users and spend more money or time than you can afford to.</li>
      </ul>
      <p style={styles.section}>
        Responsible gaming requires cooperation between you and us. Thus, we ask you to kindly play responsibly and adhere to our guidelines.
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
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  }
};

export default ResponsibleGaming;
