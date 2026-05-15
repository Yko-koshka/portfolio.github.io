import { motion } from 'framer-motion';
import { SkillCategory } from '@/types/skill';

import {
  FaReact,
  FaAngular,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiAdobephotoshop,
} from 'react-icons/si';

export const skills: SkillCategory[] = [
  {
    category: '🚀 Core Technologies',
    items: [
      {
        name: 'React (Hooks, Context API)',
        icon: <FaReact className="text-primary" />,
      },
      {
        name: 'Angular (RxJS, Services, Directives)',
        icon: <FaAngular className="text-error" />,
      },
      { name: 'JavaScript (ES6+)', icon: <FaJs className="text-warning" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-info" /> },
      { name: 'Git & GitLab', icon: <FaGitAlt className="text-secondary" /> },
    ],
  },
  {
    category: '🎨 UI/UX Development',
    items: [
      { name: 'Figma', icon: <FaFigma className="text-accent" /> },
      {
        name: 'Adobe Photoshop',
        icon: <SiAdobephotoshop className="text-primary" />,
      },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-secondary" /> },
      {
        name: 'Tailwind CSS & DaisyUI',
        icon: <SiTailwindcss className="text-info" />,
      },
    ],
  },
  {
    category: '🔧 Additional Skills',
    items: [
      {
        name: 'WordPress & PHP',
        icon: <FaWordpress className="text-neutral" />,
      },
      { name: 'Scrum & Agile', icon: '📌' },
      { name: 'JQuery', icon: '📜' },
      { name: 'Twig (templating engine)', icon: '🧩' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="h-screen py-28 bg-emerald-50 text-emerald-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold mb-8">💡 My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border border-emerald-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{item.icon}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
