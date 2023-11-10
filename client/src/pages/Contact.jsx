import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'

function Contact() {
    return (
        <>
        < Navbar />
        < Header />
        <section class="section">
        <div class="card">
        <div class="card-content has-text-centered">
        <h1 class="title">Contact Us</h1>
        <p>Email: contact@kandycorp.com</p>
        <p>Phone: 210-421-4444</p>
</div>
</div>
</section>
< Footer />
        </>
    );
}


export default Contact;