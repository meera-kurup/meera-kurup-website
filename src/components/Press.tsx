import { motion } from 'framer-motion'

const press = [
  {
    href: 'https://www.browndailyherald.com/article/2021/11/student-founded-empoweru-looks-to-provide-resources-to-prospective-first-generation-college-students',
    img: '/images/clients/bdh.png',
    alt: 'Brown Daily Herald',
  },
  {
    href: 'https://www.nashuatelegraph.com/news/local-news/2018/01/23/bishop-guertin-student-to-be-honored-in-d-c/',
    img: '/images/clients/telegraph.png',
    alt: 'Nashua Telegraph',
  },
  {
    href: 'https://www.nhbr.com/techwomen-to-honor-three-women-at-april-4th-luncheon/',
    img: '/images/clients/nh-br.jpeg',
    alt: 'NH Business Review',
  },
  {
    href: 'https://extension.unh.edu/blog/2018/03/coded-success',
    img: '/images/clients/unh.png',
    alt: 'UNH Extension',
  },
]

export default function Press() {
  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-gray-900 mb-10"
        >
          Media &amp; Press
        </motion.h3>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {press.map((item, i) => (
            <motion.a
              key={item.alt}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              title={item.alt}
            >
              <img src={item.img} alt={item.alt} className="h-10 max-w-[120px] object-contain" />
            </motion.a>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">Click any logo to read the article</p>
      </div>
    </section>
  )
}
