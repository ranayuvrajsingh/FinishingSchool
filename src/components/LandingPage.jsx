import "../App.css";

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">
          <img src="../../public/logo.png" alt="" width={90} height={30} />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button className="cta-btn">Enroll Now</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Become a Certified <span>Digital Marketing</span> Expert
        </h1>
        <p>
          Learn from industry experts and gain hands-on experience in SEO,
          social media marketing, PPC, and more.
        </p>
        <button className="cta-btn">Join & Get Your Free Toolkit</button>
      </section>

      {/* Course Modules */}
      <section className="course-modules">
        <h2>Master Every Aspect of Digital Marketing</h2>
        <p className="description">
          In today&apos;s fast-paced digital landscape, mastering digital
          marketing is essential for success. This comprehensive program is
          designed to equip you with the skills and knowledge needed to navigate
          the complexities of online marketing. From understanding the
          fundamentals of SEO to harnessing the power of social media, each
          module focuses on practical applications and strategies to help you
          achieve your marketing goals. Join us to unlock the potential of your
          brand in the digital world!
        </p>

        <ul className="modules-list">
          <li>
            Module 1: SEO Essentials : Dive into the world of Search Engine
            Optimization (SEO) and learn how to optimize your website to rank
            higher in search engine results.
          </li>
          <li>
            Module 2: Social Media Marketing: Explore the dynamics of social
            media platforms and how to effectively engage with your audience.
          </li>
          <li>
            Module 3: Pay-Per-Click Advertising (PPC): Understand the principles
            of PPC advertising, including how to create effective ad campaigns
            on platforms like Google Ads and Bing Ads.
          </li>
          <li>
            Module 4: Email Marketing: Master the art of email marketing by
            learning how to create compelling email campaigns that engage and
            convert your audience.
          </li>
          <li>
           Module 5: Content Marketing:
            Discover how to create and distribute valuable content that attracts
            and retains customers. 
          </li>
          <li>
            Module 6: Analytics and Data
            Learn how to measure the success of your digital marketing efforts
            through data analysis. 
          </li>
        </ul>
      </section>
      <section className="industry-experts">
        <h2>Learn from the Best of the Industry</h2>

        <div className="expert-cards">
          <div className="card">
            <div className="profile-image">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Expert 1"
              />
            </div>
            <h3>John Doe</h3>
            <p className="position">SEO Lead Developer</p>
            <p>
              <strong>Experience:</strong> 10 years in Full-Stack Development
            </p>
            <p>
              <strong>Fun Fact:</strong> John loves hiking and photography.
            </p>
          </div>

          <div className="card">
            <div className="profile-image">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Expert 2"
              />
            </div>
            <h3>Jane Smith</h3>
            <p className="position">Digital Marketing Strategist</p>
            <p>
              <strong>Experience:</strong> 8 years in UI/UX Design
            </p>
            <p>
              <strong>Fun Fact:</strong> Jane is a professional guitarist.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Pricing Plans</h2>
        <div className="price-card">
          <h3>Single Payment</h3>
          <p className="price">₹ 41,999</p>
          <ul className="features">
            <li>Lifetime Access</li>
            <li>Certification upon completion</li>
            <li>Free digital marketing toolkit</li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>

        <div className="price-card">
          <h3>Monthly Payment</h3>
          <p className="price">₹ 16,999/month</p>
          <ul className="features">
            <li>Full course access</li>
            <li>Monthly toolkit updates</li>
            <li>Certification upon completion</li>
          </ul>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <hr />
        <div className="testimonial">
          <p>
            &quot;This course is an absolute game-changer! I can now confidently
            manage social media campaigns and paid ads for my own clients.&quot;
            — Preeti M., Freelancer
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>What if I have no digital marketing experience?</li>
          <li>How long do I have access to the course?</li>
          <li>Do I get a certificate?</li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="logo">
            <img
              src="../../public/logo.png"
              alt="Logo"
              width="90"
              height="30"
            />
          </div>
          <div className="social-media">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p>© 2024 Finishing School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
