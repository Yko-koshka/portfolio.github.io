import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const allTags = ['All', ...new Set(projects.flatMap((p) => p.stack))];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects =
    activeTag === 'All'
      ? projects
      : projects.filter((project) => project.stack.includes(activeTag));

  return (
    <section className="py-28 bg-emerald-50 text-emerald-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        {/* Filter Controls */}
        <div className="mt-6">
          {/* Mobile: Dropdown */}
          <div className="block sm:hidden">
            <select
              value={activeTag}
              onChange={(e) => setActiveTag(e.target.value)}
              className="p-2 border border-emerald-300 rounded-md text-emerald-700 bg-white"
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Buttons */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-sm px-3 py-1 rounded-full border ${
                  activeTag === tag
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-emerald-600 border-emerald-300 hover:bg-emerald-100'
                } transition-all`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex justify-center flex-wrap gap-3 mt-10">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card bg-white p-6 mx-6 rounded-xl shadow-md border border-emerald-300 w-auto md:w-96">
                  <figure className="px-10 pt-10">
                    <img
                      src={project.imgSrc}
                      alt={`Preview of ${project.title}`}
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h3 className="card-title text-emerald-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-700">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4 justify-center">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-sm inline-flex items-center gap-1 text-emerald-600 hover:underline"
                      >
                        → View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
