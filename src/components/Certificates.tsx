
import { Element } from 'react-scroll';
import { FileText } from './icons';
import CertificateSlider from './CertificateSlider';
import ProfessionalLayout from './ProfessionalLayout';
import { certificatesData } from '../data/certificates';

interface CertificatesProps {
  language: 'en' | 'bn';
}

const Certificates = ({ language }: CertificatesProps) => {
  return (
    <Element name="certificates">
      <ProfessionalLayout
        title={certificatesData.title[language]}
        icon={<FileText className="text-green-600" size={24} />}
      >
        <CertificateSlider
          certificates={certificatesData.certificates}
          language={language}
        />
      </ProfessionalLayout>
    </Element>
  );
};

export default Certificates;
