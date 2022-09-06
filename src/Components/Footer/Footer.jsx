import "./footer.css"
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {

    return (
        <footer className="footer">
            <p>Micaela Iglesias ©</p>
            <section>
                <a href="https://www.instagram.com/micaelaiglesiasphoto/" target="_blank" rel="noreferrer"><FaInstagram className="social"/></a>
                <a href="mailto:micaiglelugon@gmail.com"target="_blank" rel="noreferrer"><FaEnvelope className="social"/></a>
            </section>
        </footer>
    )
}

export default Footer;