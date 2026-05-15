import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

type ContactLink = {
  icon: React.ReactElement;
  link: string;
};

const contactLinks: ContactLink[] = [
  { icon: <FaGithub />, link: 'https://github.com/Yko-koshka' },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/hanna-leheza-494961233/',
  },
  { icon: <FaEnvelope />, link: 'mailto:legezaanna7@gmail.com' },
];

const Contacts = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-emerald-50 text-emerald-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold mb-8">Contacts</h2>
        <div className="flex justify-center gap-6 mt-6">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-emerald-600 hover:text-emerald-800 transition"
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
