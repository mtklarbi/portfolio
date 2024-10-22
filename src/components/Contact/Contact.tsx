import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <div className="contact-container">
          <br />
          <h1 className="contact-header">Get in touch</h1>
          <p className="contact-info"><FontAwesomeIcon icon={
            faLinkedin
          } /> email:  mtklarbi@gmail.com</p>  
          <p className="contact-info">Phone: 0671410435</p>
          <p className="contact-info"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/elmoutaouakil-alaraby-44578025/">Linkdin</a></p>
          <p className="contact-info"><FontAwesomeIcon icon={faGithub} /> Github: <a href="https://github.com/mtklarbi">github</a></p>
          
        </div>
    );
};

export default Contact;