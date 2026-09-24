import { motion } from 'framer-motion';
import { journeyData } from '../../data/data';

const Journey = () => {
  return (
    <section id="journey" className="section-padding px-8 bg-white dark:bg-gray-950 overflow-hidden relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-1 bg-secondary rounded-full"></div>
            <span className="text-[11px] font-black text-secondary uppercase tracking-[0.4em]">Origin Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal dark:text-white mb-6 font-bold">The Narrative Arc</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            From the newsroom to the codebase—the evolution of a <span className="text-accent font-bold">communication-driven engineer</span>.
          </p>
        </motion.div>

        <div className="relative space-y-40">
          {/* Vibrant vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent/20 via-secondary/20 to-purple-500/20 md:left-1/2 md:-ml-[1.5px]"></div>

          {journeyData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Marker with Color */}
              <div className={`absolute left-0 top-12 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-${index % 2 === 0 ? 'accent' : 'secondary'} shadow-lg md:left-1/2 md:-ml-2 z-10 scale-125`}></div>

              <div className={`pl-12 md:pl-0 md:w-5/12 ${index % 2 === 0 ? 'md:pl-20 text-left' : 'md:pr-20 md:text-right'}`}>
                <div className={`inline-block mb-6 px-4 py-1.5 rounded-full bg-${index % 2 === 0 ? 'accent' : 'secondary'}/10 border border-${index % 2 === 0 ? 'accent' : 'secondary'}/20`}>
                  <span className={`text-[10px] font-black text-${index % 2 === 0 ? 'accent' : 'secondary'} tracking-[0.3em] uppercase`}>
                    CHAPTER {item.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-charcoal dark:text-white">{item.title}</h3>
                <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: item.description }} />
                
                {item.quote && (
                  <div className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border-l-4 border-accent italic text-gray-400 text-sm leading-relaxed overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10" />
                    "{item.quote}"
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
