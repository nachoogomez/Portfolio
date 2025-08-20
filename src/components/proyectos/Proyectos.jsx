import { ProyectosCard } from './ProyectosCard'
import { motion } from 'framer-motion'
import photo_microservice from '../../assets/photo_microservices.webp'
import my_notion from '../../assets/my_notion.webp'



const Proyectos = () => {

  const projects = [
     {
      title: "My Notion",
      description:
        "Plataforma de productividad, gestion y organizacion personal para mejorar la eficiencia y el enfoque.",
      image: my_notion,
      technologies: ["React", "Tailwind CSS", "Supabase", "Typescript"],
      githubUrl: "https://github.com/nachoogomez/my-notion",
      liveUrl: "my-notion-lime.vercel.app",
    },
    {
      title: "Nest Microservices",
      description:
        "Arquitectura de microservicios utilizando NestJS, con autenticación JWT y base de datos MongoDB, MySQL y PostgreSQL.",
      image: photo_microservice,
      technologies: ["NestJS", "TypeScript", "MongoDB", "MySQL", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/nachoogomez/its-microservice",
    },
  ]

  return (
     <div className="bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                viewport={{ once: true }}
                className='text-4xl font-bold text-white mb-4 '
              >
                Proyectos
            </motion.h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes en desarrollo full-stack, desde aplicaciones web hasta APIs y
            aplicaciones móviles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProyectosCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyectos