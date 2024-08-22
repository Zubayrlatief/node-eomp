<template>
    <div class="contact-section container">
      <section class="contact-content">
        <div class="info-header text-center">
          <h2 class="main-title mt-4 mb-4">Get in Touch with Us</h2>
          <p class="intro-text">
            We're excited to hear from you! If you have any questions about our pet products or need assistance, feel free to reach out. We're here to help and ensure you and your pets are happy with our services.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="contact-details">
              <div class="contact-box">
                <div class="icon">
                  <a class="address-link" href="https://www.google.com/maps/place/123+Pet+Lane,+Pet+City,+PC1234/@-34.0408817,18.5196088,17z">
                    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="details">
                  <h3>Our Address</h3>
                  <p>314 Landsdowne,</p>
                  <p>Pet City,</p>
                  <p>3144</p>
                </div>
              </div>
  
              <div class="contact-box">
                <div class="icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="details">
                  <h3>Phone Number</h3>
                  <p>021 555 5820</p>
                </div>
              </div>
              <div class="contact-box">
                <div class="icon">
                  <a class="email-link" href="mailto:contact@petcare.com">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="details">
                  <h3>Email</h3>
                  <p>zmpetstore@gmail.com</p>
                </div>
              </div>
              <div class="contact-box">
                <div class="icon">
                  <a class="social-link" href="https://www.instagram.com/petcare">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-container">
              <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST" @submit.prevent="handleSubmit">
                <h2 class="form-title">Pop Us a Message</h2>
                <div class="form-group">
                  <input type="text" name="firstName" placeholder="First Name" required>
                </div>
                <div class="form-group">
                  <input type="text" name="lastName" placeholder="Last Name" required>
                </div>
                <div class="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" required>
                </div>
                <div class="form-group">
                  <input type="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                  <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="submit-button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleSubmit() {
        this.$refs.contactForm.submit();
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
    padding: 20px;
  }
  
  .info-header {
    padding: 20px;
  }
  
  .main-title {
    font-size: 2.5rem;
    color: #2c3e50;
  }
  
  .intro-text {
    font-size: 1.25rem;
    color: #34495e;
  }
  
  .contact-details {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }
  
  .contact-box {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  
  .icon {
    font-size: 30px;
    margin-right: 15px;
  }
  
  .details h3 {
    color: #512d59;
    font-weight: bold;
  }
  
  .details p {
    margin: 5px 0;
  }
  
  .address-link, .email-link, .social-link {
    color: #34495e;
    text-decoration: none;
  }
  
  .form-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-title {
    font-size: 2rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .contact-form textarea {
    resize: vertical;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #583a7a;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #3f3386;
  }
  </style>
  