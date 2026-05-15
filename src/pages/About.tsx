import { motion } from 'framer-motion';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '15+', label: 'Projects Completed' },
  { number: '10+', label: 'Technologies' },
];

const timeline = [
  {
    year: '2022 - Present',
    title: 'Frontend Software Developer',
    company: 'SIO AG, Germany',
    description:
      'Developing CRM features and responsive interfaces using React, JavaScript, REST API, Twig, and SCSS.',
  },
  {
    year: '2021 - 2022',
    title: 'Frontend Developer',
    company: 'Silver Promotion, Ukraine',
    description:
      'Built a news portal with Angular, admin panel, authentication system, and REST API integration.',
  },
  {
    year: '2020',
    title: 'Freelance Frontend Developer',
    company: 'Freelance',
    description:
      'Created landing pages, WordPress websites, and responsive business websites.',
  },
];

const About = () => {
  return (
    <section className="py-20 bg-base-100 text-base-content py-28 bg-emerald-50 text-emerald-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-gray-500">
            Hi! I'm a Front-End Developer with experience building responsive
            and user-friendly web applications using React, Angular, JavaScript,
            and TypeScript. I have worked on CRM systems, news portals, landing
            pages, and corporate websites, focusing on clean UI implementation,
            responsive design, and modern frontend development practices. I
            enjoy creating intuitive interfaces and turning ideas into
            functional digital products. I’m continuously improving my skills
            and currently studying Next.js, advanced TypeScript, and Artificial
            Intelligence technologies, while practicing AI integration in modern
            web development.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="card bg-white p-6 rounded-xl shadow-md border border-emerald-300"
            >
              <div className="card-body items-center text-center">
                <h3 className="text-5xl font-bold text-primary">
                  {stat.number}
                </h3>

                <p className="text-lg font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">
            Experience Timeline
          </h3>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="card bg-white p-6 rounded-xl shadow-md border border-emerald-300"
              >
                <div className="card-body">
                  <span className="text-sm text-primary font-semibold">
                    {item.year}
                  </span>

                  <h4 className="text-2xl font-bold">{item.title}</h4>

                  <p className="text-secondary font-medium">{item.company}</p>

                  <p className="text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Hanna_Leheza_CV */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <motion.a
          href="/cv/Hanna_Leheza_CV.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-6 py-2 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
        >
          <motion.span
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.6 }}
          >
            <PiDownloadSimpleBold size={20} />
          </motion.span>
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
