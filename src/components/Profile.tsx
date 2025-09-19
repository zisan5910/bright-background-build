
import { motion } from 'framer-motion';
import { Download, Award, Search, PenTool } from 'lucide-react';
import { profileData } from '../data/profile';

interface ProfileProps {
  language: 'en' | 'bn';
  scrollToSection: (section: string) => void;
}

const Profile = ({ language, scrollToSection }: ProfileProps) => {
  const data = profileData.personal[language];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              >
                {data.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-medium"
              >
                {data.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base md:text-lg text-muted-foreground/90 mb-12 leading-relaxed max-w-2xl"
              >
                {data.statement}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="/Resume.pdf"
                  download="Ridoan_Zisan_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Download size={20} />
                  {data.downloadCV}
                </motion.a>

                <motion.button
                  onClick={() => scrollToSection('certificates')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg"
                >
                  <Award size={20} />
                  {language === 'en' ? 'Certifications' : 'সার্টিফিকেশন'}
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('research')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
                >
                  <Search size={20} />
                  {language === 'en' ? 'Research' : 'গবেষণা'}
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('blog')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-muted text-muted-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-muted/80 hover:shadow-lg border border-border"
                >
                  <PenTool size={20} />
                  {language === 'en' ? 'Blog' : 'ব্লগ'}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl transform rotate-6"></div>
                <motion.img
                  src="/profile.jpg"
                  alt={data.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-background"
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-primary/90 text-primary-foreground p-3 rounded-2xl shadow-lg"
                >
                  <Award size={24} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-4 -left-4 bg-accent/90 text-accent-foreground p-3 rounded-2xl shadow-lg"
                >
                  <Search size={24} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Profile;