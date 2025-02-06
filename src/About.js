import React from "react";

export default function About(props) {
  // Dynamic style based on props.mode
  const mystyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              style={mystyle}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. TextUtils Project Features.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                🔹A TextUtils Project is typically a web-based or software
                application designed to perform various text-related operations,
                such as text formatting, case conversion, word counting, and
                more. This kind of project is useful for writers, developers,
                and content creators who frequently manipulate text.
              </strong>
              <br />
              <br />
              <h5>
                🔹 Key Features of a TextUtils Project Text Transformation
              </h5>
              <ul>
                <li>
                  Convert text to uppercase, lowercase, or capitalized case.
                </li>
                <li>Remove extra spaces.</li>
                <li>Count words, characters, sentences, and paragraphs.</li>
                <li>Find the reading time of a given text.</li>
                <li>Convert text into different formats (JSON, XML, etc.).</li>
                <li>Text Encryption & Decryption (Optional Feature)</li>
                <li>Remove extra line breaks and special characters.</li>
                <li>Encode and decode text using Base64 or ROT13.</li>
                <li>
                  Search for a word or phrase in the text and replace it with
                  another.
                </li>
              </ul>
              <h5>
                {" "}
                🔹 <code>Dark Mode Support</code>
              </h5>
              <li>
                Toggle between light and dark themes for a better user
                experience.
              </li>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              style={mystyle}
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {/* About CSE */}
              2. Comprehensive Guide to Computer Science and Engineering (CSE).
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                🔹 Computer Science and Engineering (CSE) is a field that
                combines the principles of computer science and electrical
                engineering to develop and design software systems, hardware,
                and the underlying architecture of computing devices. It offers
                a broad range of opportunities in both academic and professional
                domains.
              </strong>
              <br />
              <br />
              <h5>🔹 Core Subjects in CSE</h5>
              <ul>
                <li>
                  Mathematics for Computer Science (Discrete Mathematics,
                  Calculus, Probability, and Statistics)
                </li>
                <li>Programming Languages (C, C++, Java, Python)</li>
                <li>
                  Computer Architecture (Microprocessors, Operating Systems)
                </li>
                <li>Databases (SQL, NoSQL, Database Design)</li>
                <li>
                  Networks and Communications (OSI Model, TCP/IP, Network
                  Security)
                </li>
                <li>
                  Artificial Intelligence (Machine Learning, Natural Language
                  Processing, Computer Vision)
                </li>
                <li>
                  Software Development (Software Lifecycle, Agile, Web
                  Development)
                </li>
                <li>
                  Cybersecurity (Ethical Hacking, Cryptography, Intrusion
                  Detection)
                </li>
                <li>
                  Cloud Computing and Big Data (AWS, Google Cloud, Hadoop)
                </li>
                <li>
                  Emerging Technologies (Blockchain, Quantum Computing, IoT,
                  AR/VR)
                </li>
              </ul>
              <br />
              <h5>🔹 CSE Related Courses</h5>
              <ul>
                <li>
                  <strong>
                    B.Tech in Computer Science and Engineering (CSE)
                  </strong>{" "}
                  – Duration: 4 years, Focus on comprehensive foundation in
                  computer science and engineering.
                </li>
                <li>
                  <strong>BCA (Bachelor of Computer Applications)</strong> –
                  Duration: 3 years, Focus on software development, database
                  management, and web technologies.
                </li>
                <li>
                  <strong>Postgraduate Courses (M.Tech, MCA, M.Sc.)</strong> –
                  Specialized courses in AI, data science, software engineering,
                  and more.
                </li>
                <li>
                  <strong>Certifications and Short-Term Courses</strong> –
                  Includes certifications like Certified Ethical Hacker (CEH),
                  AWS Certified Solutions Architect, Full-Stack Web Development,
                  Data Science, and more.
                </li>
                <li>
                  <strong>Online Learning Platforms</strong> – Platforms like
                  Coursera, edX, and Udemy offer a wide range of specialized
                  courses in CSE topics.
                </li>
              </ul>
              <br />
              <h5>🔹 Job Opportunities After CSE</h5>
              <ul>
                <li>
                  <strong>Software Developer / Engineer</strong> – Design and
                  develop software applications (Skills: Java, Python, C++, Data
                  Structures, Algorithms).
                </li>
                <li>
                  <strong>Web Developer</strong> – Build and maintain websites
                  and web applications (Skills: HTML, CSS, JavaScript, React,
                  Node.js).
                </li>
                <li>
                  <strong>Data Scientist / Data Analyst</strong> – Analyze and
                  interpret complex data (Skills: Python, R, SQL, Machine
                  Learning, Data Visualization).
                </li>
                <li>
                  <strong>Machine Learning Engineer</strong> – Develop
                  algorithms and models (Skills: Python, TensorFlow, Neural
                  Networks).
                </li>
                <li>
                  <strong>Cybersecurity Analyst</strong> – Protect organizations
                  from cyberattacks (Skills: Cryptography, Ethical Hacking,
                  Network Security).
                </li>
                <li>
                  <strong>Cloud Engineer</strong> – Work with cloud computing
                  technologies like AWS, Google Cloud (Skills: Cloud platforms,
                  DevOps).
                </li>
                <li>
                  <strong>Blockchain Developer</strong> – Develop decentralized
                  applications using blockchain technology (Skills: Solidity,
                  Ethereum, Smart Contracts).
                </li>
                <li>
                  <strong>AI/Robotics Engineer</strong> – Build intelligent
                  systems using AI and robotics technologies (Skills: Robotics,
                  AI, Machine Learning, Computer Vision).
                </li>
                <li>
                  <strong>Game Developer</strong> – Create and design video
                  games for mobile, PC, or consoles (Skills: C++, Unity, Unreal
                  Engine).
                </li>
              </ul>
              <br />
              <h5>🔹 Future Trends in CSE</h5>
              <ul>
                <li>
                  <strong>Artificial Intelligence & Machine Learning</strong> –
                  AI and ML will drive innovation in various industries like
                  healthcare and finance.
                </li>
                <li>
                  <strong>Quantum Computing</strong> – Solving complex problems
                  faster than classical computers, revolutionizing industries.
                </li>
                <li>
                  <strong>Edge Computing</strong> – Enabling faster data
                  processing closer to the source, especially with IoT devices.
                </li>
                <li>
                  <strong>5G Technology</strong> – Improving network speed and
                  enabling innovations in IoT and autonomous vehicles.
                </li>
                <li>
                  <strong>Blockchain Technology</strong> – Beyond
                  cryptocurrency, with applications in healthcare, supply chain
                  management, and secure voting.
                </li>
              </ul>
              <br />
              <h5>🔹 Salary Expectations</h5>
              <ul>
                <li>
                  <strong>Software Developer:</strong> ₹6-15 LPA
                </li>
                <li>
                  <strong>Data Scientist:</strong> ₹8-20 LPA
                </li>
                <li>
                  <strong>Machine Learning Engineer:</strong> ₹10-25 LPA
                </li>
                <li>
                  <strong>Cybersecurity Analyst:</strong> ₹6-12 LPA
                </li>
                <li>
                  <strong>Cloud Engineer:</strong> ₹7-15 LPA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={{
                ...mystyle,
                color: props.mode === "dark" ? "white" : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {/* Cryptocurrency Basics */}
              3. Comprehensive Guide to Cryptocurrency
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                🔹 Cryptocurrency is a type of digital or virtual currency that
                uses cryptography for security. It is decentralized, typically
                built on blockchain technology, and operates independently of
                any central bank. Cryptocurrencies enable secure, peer-to-peer
                transactions without the need for intermediaries.
              </strong>
              <br />
              <br />
              <h5>🔹 Key Features of Cryptocurrency</h5>
              <ul>
                <li>
                  Decentralized system – Operates on a distributed ledger
                  (blockchain).
                </li>
                <li>
                  Security through cryptography – Transactions are secured by
                  encryption techniques.
                </li>
                <li>
                  Transparency – All transactions are publicly recorded on the
                  blockchain.
                </li>
                <li>
                  Immutability – Once recorded, transactions cannot be altered
                  or deleted.
                </li>
                <li>
                  Peer-to-peer transactions – Direct transactions between
                  parties without intermediaries like banks.
                </li>
                <li>
                  Borderless – Can be transferred across borders without any
                  central authority.
                </li>
                <li>
                  Privacy – While transactions are transparent, users can remain
                  pseudonymous.
                </li>
                <li>
                  Mining – Some cryptocurrencies (like Bitcoin) are mined by
                  solving complex mathematical problems.
                </li>
                <li>
                  Smart contracts – Self-executing contracts with predefined
                  conditions (e.g., Ethereum).
                </li>
              </ul>
              <br />
              <h5>🔹 Popular Cryptocurrencies</h5>
              <ul>
                <li>
                  <strong>Bitcoin (BTC)</strong> – The first and most well-known
                  cryptocurrency, created by an anonymous individual or group
                  named Satoshi Nakamoto.
                </li>
                <li>
                  <strong>Ethereum (ETH)</strong> – A decentralized platform
                  that enables developers to build and deploy smart contracts
                  and decentralized applications (dApps).
                </li>
                <li>
                  <strong>Ripple (XRP)</strong> – A cryptocurrency designed for
                  fast and low-cost international payments between financial
                  institutions.
                </li>
                <li>
                  <strong>Litecoin (LTC)</strong> – A peer-to-peer
                  cryptocurrency that is similar to Bitcoin but with a faster
                  block generation time.
                </li>
                <li>
                  <strong>Binance Coin (BNB)</strong> – A utility token used
                  within the Binance ecosystem, one of the world’s largest
                  cryptocurrency exchanges.
                </li>
                <li>
                  <strong>Cardano (ADA)</strong> – A blockchain platform that
                  aims to provide a secure and scalable way to implement smart
                  contracts and dApps.
                </li>
                <li>
                  <strong>Polkadot (DOT)</strong> – Aims to enable different
                  blockchains to interoperate and share information, improving
                  scalability and cross-chain functionality.
                </li>
              </ul>
              <br />
              <h5>🔹 How Cryptocurrencies Work</h5>
              <ul>
                <li>
                  <strong>Blockchain Technology</strong> – Cryptocurrencies are
                  built on a decentralized ledger called the blockchain, which
                  records all transactions across a network of computers.
                </li>
                <li>
                  <strong>Mining</strong> – Cryptocurrencies like Bitcoin use
                  mining to validate and secure transactions. Miners solve
                  complex algorithms to add new blocks to the blockchain.
                </li>
                <li>
                  <strong>Public and Private Keys</strong> – Every
                  cryptocurrency wallet uses public and private keys to send and
                  receive funds securely.
                </li>
                <li>
                  <strong>Wallets</strong> – Digital wallets store the public
                  and private keys necessary for transacting cryptocurrency.
                  They can be software-based, hardware-based, or paper wallets.
                </li>
                <li>
                  <strong>Exchanges</strong> – Cryptocurrency exchanges (like
                  Coinbase, Binance) allow users to buy, sell, and trade
                  cryptocurrencies.
                </li>
              </ul>
              <br />
              <h5>🔹 Benefits of Cryptocurrency</h5>
              <ul>
                <li>
                  <strong>Decentralization</strong> – No central authority
                  controls cryptocurrencies, making them less susceptible to
                  manipulation and censorship.
                </li>
                <li>
                  <strong>Security</strong> – Cryptography ensures that
                  transactions are secure and tamper-proof.
                </li>
                <li>
                  <strong>Lower Transaction Costs</strong> – Peer-to-peer
                  transactions usually have lower fees than traditional banking
                  or payment systems.
                </li>
                <li>
                  <strong>Accessibility</strong> – Anyone with internet access
                  can use cryptocurrencies, offering financial services to the
                  unbanked.
                </li>
                <li>
                  <strong>Privacy</strong> – Users can transact pseudonymously,
                  which provides greater privacy compared to traditional banking
                  systems.
                </li>
              </ul>
              <br />
              <h5>🔹 Challenges of Cryptocurrency</h5>
              <ul>
                <li>
                  <strong>Price Volatility</strong> – Cryptocurrencies,
                  particularly Bitcoin, experience significant price
                  fluctuations, which can be risky for investors and users.
                </li>
                <li>
                  <strong>Regulation</strong> – Governments worldwide are
                  working on regulating cryptocurrencies, which can impact their
                  value and usage.
                </li>
                <li>
                  <strong>Scalability</strong> – Some blockchain networks face
                  challenges with scaling, which can lead to slower transaction
                  speeds during high demand.
                </li>
                <li>
                  <strong>Security Risks</strong> – While blockchain technology
                  is secure, exchanges and wallets are still vulnerable to hacks
                  and theft.
                </li>
                <li>
                  <strong>Environmental Concerns</strong> – Mining
                  cryptocurrencies like Bitcoin requires significant
                  computational power, leading to concerns about energy
                  consumption and its environmental impact.
                </li>
              </ul>
              <br />
              <h5>🔹 Future of Cryptocurrency</h5>
              <ul>
                <li>
                  <strong>Increased Adoption</strong> – Cryptocurrencies are
                  becoming more widely accepted by businesses, governments, and
                  financial institutions.
                </li>
                <li>
                  <strong>Regulation and Compliance</strong> – As the crypto
                  market matures, more countries are developing regulatory
                  frameworks to ensure consumer protection and reduce risks.
                </li>
                <li>
                  <strong>DeFi (Decentralized Finance)</strong> – DeFi platforms
                  aim to recreate traditional financial systems using smart
                  contracts and blockchain, offering lending, borrowing, and
                  trading services without intermediaries.
                </li>
                <li>
                  <strong>Central Bank Digital Currencies (CBDCs)</strong> –
                  Some governments are exploring digital currencies backed by
                  central banks to provide the benefits of cryptocurrency
                  without the volatility.
                </li>
                <li>
                  <strong>Integration with Traditional Finance</strong> –
                  Cryptocurrencies are increasingly being integrated into
                  traditional financial services, including payment systems,
                  remittances, and investment products.
                </li>
              </ul>
              <br />
              <h5>🔹 Salary and Job Opportunities in Cryptocurrency</h5>
              <ul>
                <li>
                  <strong>Blockchain Developer:</strong> ₹8-25 LPA (depending on
                  experience and skillset).
                </li>
                <li>
                  <strong>Cryptocurrency Analyst:</strong> ₹6-15 LPA.
                </li>
                <li>
                  <strong>Smart Contract Developer:</strong> ₹10-20 LPA.
                </li>
                <li>
                  <strong>Crypto Trader/Investor:</strong> Earnings are highly
                  variable based on market trends and investment strategies.
                </li>
                <li>
                  <strong>Crypto Marketing Specialist:</strong> ₹7-18 LPA.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. About Me
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                🔹 Hello! I'm [Rupesh Kumar], a passionate Frontend Developer, Web
                Designer, and soon-to-be expert in Web Development. I love
                creating visually appealing and user-friendly websites and
                applications that provide excellent user experiences.
              </strong>
              <br />
              <br />
              <h5>🔹 Skills and Expertise</h5>
              <ul>
                <li>
                  <strong>Frontend Development:</strong> Skilled in HTML, CSS,
                  JavaScript, React, and Vue.js to create responsive, dynamic,
                  and interactive websites.
                </li>
                <li>
                  <strong>Web Design:</strong> Experienced in designing
                  intuitive user interfaces (UI) and user experiences (UX) with
                  a focus on modern design principles.
                </li>
                <li>
                  <strong>Web Development:</strong> Knowledge of backend
                  technologies like Node.js, Express, and MongoDB to develop
                  full-stack applications.
                </li>
                <li>
                  <strong>Version Control:</strong> Proficient in using Git and
                  GitHub for version control and collaborative development.
                </li>
                <li>
                  <strong>Problem Solving:</strong> Strong ability to
                  troubleshoot and solve problems, ensuring smooth functionality
                  in all aspects of development.
                </li>
                <li>
                  <strong>Continuous Learning:</strong> Passionate about staying
                  up-to-date with the latest trends in technology and
                  development tools.
                </li>
              </ul>
              <br />
              <h5>🔹 My Journey</h5>
              <p>
                I started my journey as a web designer and slowly moved into
                frontend development, combining my creative and technical
                skills. Over time, I have worked on several projects, both
                personal and collaborative, helping businesses and individuals
                bring their digital ideas to life. Currently, I'm working
                towards becoming a proficient full-stack web developer,
                expanding my skill set to cover the entire web development
                lifecycle.
              </p>
              <br />
              <h5>🔹 Career Goals</h5>
              <p>
                My goal is to contribute to the world of web development by
                building innovative, scalable, and user-centric applications.
                I'm looking forward to working on exciting projects that
                challenge me to learn and grow further in my field. Eventually,
                I aspire to take on roles that will allow me to mentor and lead
                development teams.
              </p>
              <br />
              <h5>🔹 Let's Connect</h5>
              <p>
                If you'd like to work together or have any questions, feel free
                to reach out! You can connect with me through my social media
                profiles or by email at [rupeshkumar02132@gmail.com].
              </p>
              <br />
              <h5>🔹 Thank You</h5>
              <p>
                Thank you for visiting my portfolio! I hope you find my work
                engaging and inspiring. Let's create something amazing together!
              </p>
              <br />
              <h5>🔹 Stay Connected</h5>
              <p>
                Don't forget to connect with me on social media to stay updated
                with my latest projects and news. You can find me on
               <a href="https://www.linkedin.com/in/rupesh321/"> LinkedIn,</a>|<a href="https://github.com/rupesh02132">GitHub,</a>  and Twitter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
