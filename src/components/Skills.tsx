import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  Award,
  Languages,
  Target,
  MessageSquare,
  PlusCircle,
  Star,
  ChevronRight,
} from 'lucide-react';
import ProfessionalLayout from './ProfessionalLayout';
import { skillsData } from '../data/skills';

interface SkillsProps {
  language: 'en' | 'bn';
}

const Skills = ({ language }: SkillsProps) => {
  const getSectionStyling = (sectionIndex: number) => {
    const styles = [
      {
        color: 'bg-green-100',
        hoverColor: 'hover:bg-green-200',
        iconColor: 'text-green-600',
      },
      {
        color: 'bg-blue-100', 
        hoverColor: 'hover:bg-blue-200',
        iconColor: 'text-blue-600',
      },
      {
        color: 'bg-purple-100',
        hoverColor: 'hover:bg-purple-200', 
        iconColor: 'text-purple-600',
      }
    ];
    return styles[sectionIndex] || styles[0];
  };

  const renderLanguageSkill = (skill: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 group-hover:text-gray-900 transition-colors flex items-center gap-1">
          <ChevronRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          {skill.name[language]}
        </span>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i <= skill.level
                  ? 'text-yellow-500 fill-current'
                  : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  const renderSkillCard = (skill: any, index: number, section: any) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`${section.color} ${section.hoverColor} p-3 rounded-lg hover:shadow-md transition-all duration-300 flex items-center gap-2`}
    >
      <ChevronRight size={14} className={`${section.iconColor} opacity-70`} />
      {skill[language]}
    </motion.div>
  );

  return (
    <Element name="skills">
      <ProfessionalLayout
        title={language === 'en' ? 'Skills & Competencies' : 'দক্ষতা ও সক্ষমতা'}
        icon={<Award className="text-emerald-600" size={24} />}
      >

        <div className="space-y-8">
          {/* Language Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-lg flex items-center gap-3 mb-4 text-gray-700">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Languages size={20} className="text-blue-600" />
              </div>
              {skillsData.categories.languages.title[language]}
            </h3>
            <div className="space-y-4 pl-2">
              {skillsData.categories.languages.skills.map(renderLanguageSkill)}
            </div>
          </motion.div>

          {/* Other Skills Sections */}
          {[
            skillsData.categories.professional,
            skillsData.categories.communication,
            skillsData.categories.additional,
          ].map((section, sectionIndex) => {
            const styling = getSectionStyling(sectionIndex);
            return (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-bold text-lg flex items-center gap-3 mb-4 text-gray-700">
                <div className={`p-2 ${styling.color} rounded-lg`}>
                  {sectionIndex === 0 ? (
                    <Target size={20} className={styling.iconColor} />
                  ) : sectionIndex === 1 ? (
                    <MessageSquare size={20} className={styling.iconColor} />
                  ) : (
                    <PlusCircle size={20} className={styling.iconColor} />
                  )}
                </div>
                {section.title[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.skills.map((skill, skillIndex) =>
                  renderSkillCard(skill, skillIndex, styling)
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </ProfessionalLayout>
    </Element>
  );
};

export default Skills;
