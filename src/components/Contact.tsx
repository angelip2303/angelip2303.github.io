import "./Contact.css";

export default function Contact(): JSX.Element {
  return (
    <section id="contact">
      <h4>What&apos;s next?</h4>
      <h3>Get In Touch</h3>
      <p>
        I&apos;m always free to hear from you! Whether you have a question or
        just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <a href="mailto:angel.iglesias.prestamo@gmail.com">
        Say <span className="greetings-text">hello</span>!
      </a>
    </section>
  );
}
