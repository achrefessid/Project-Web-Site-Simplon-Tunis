import React from 'react';
import './style.css'
import SocialMedia from './../SocialMedia'

const Contact = () => {                               
    return (
<React.Fragment>
<div class="container">
<section class="contact-page-section">
<div class="auto-container">
<div class="row clearfix">
<div class="contact-column col-lg-4 col-md-12 col-sm-12 order-2">
<div class="inner-column">
<div class="sec-title">
<h2>Contact Info</h2>
</div>
<ul class="contact-info"><li><span class="icon fa fa-map-marker"></span>
<p><strong>Adresse</strong></p>
<p>Le15, 15 avenue De Carthage, Tunis 1001</p></li>
<li><span class="icon fa fa-phone"></span>
<p><strong>Téléphone</strong></p>
<p>+216 55 077 4063</p></li>
<li><span class="icon fa fa-envelope"></span>
<p><strong>Email</strong></p>
<p><a href="mailto:support@example.com">simplon@simplon.com</a></p></li>
</ul>
</div>
</div>
<div class="form-column col-lg-8 col-md-12 col-sm-12">
<div class="inner-column">
<div class="contact-form">
<div class="sec-title"><p>Pour nous contacter, remplissez ce formulaire</p></div>
<form method="post" action="" id="contact-form">
<div class="row clearfix">
<div class="col-lg-6 col-md-6 col-sm-12 form-group">
<input type="text" name="username" placeholder="Name" required="" /></div>
<div class="col-lg-6 col-md-6 col-sm-12 form-group">
<input type="text" name="phone" placeholder="Téléphone" required="" /></div>
<div class="col-lg-6 col-md-6 col-sm-12 form-group">
<input type="email" name="email" placeholder="Email" required="" /></div>
<div class="col-lg-6 col-md-6 col-sm-12 form-group">
<input type="text" name="subject" placeholder="Objet" required="" /></div>
<div class="col-lg-12 col-md-12 col-sm-12 form-group">
<textarea name="message" placeholder="Message"></textarea></div>
<div class="col-lg-12 col-md-12 col-sm-12 form-group">
<button type="submit" name="submit-form"><span class="btn-title">Envoyer</span></button></div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section id="contact" class="map">
<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.4444818082366!2d10.180640758260688!3d36.7972125449873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346d5860d47b%3A0x3d4cda51ba641560!2sLe15!5e0!3m2!1sen!2sus!4v1584901953267!5m2!1sen!2sus"></iframe>
<small/>
</section>
<SocialMedia/>
</React.Fragment>
)
}

export default Contact; 
