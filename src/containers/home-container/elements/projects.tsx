import { Carousel, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/card';
import { isMobile } from 'utils/helper';
import { AnimateBox } from 'components/animate-box';

const contentStyle: React.CSSProperties = {
  height: '400px',
  padding: '0 16px',
};

export function Projects() {
  const { t } = useTranslation();
  const mobile = isMobile();

  const projects: App.CardItem[] = [
    {
      title: 'ZMining Ecosystem',
      description: t('zmining_ecosystem_description'),
      tags: [t('electron'), 'ReactJS', 'TypeScript', 'Vite'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'diginexESG',
      description: t('diginex_esg_description'),
      tags: ['Vuejs', 'Webpack', 'Vite', 'Micro-services', 'SSO'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'diginexESG Materiality Module',
      description: t('diginex_esg_materiality_description'),
      tags: ['Vue 3', 'Typescript', 'Vite', 'Micro-services'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'diginexESG Library',
      description: t('diginex_esg_library_description'),
      tags: ['VueJS', 'Typescript', 'Webpack'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'diginexESG Climate',
      description: t('diginex_esg_climate_description'),
      tags: ['VueJS', 'Typescript', 'Webpack'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'The supply chains tracing project',
      description: t('the_supply_chains_tracing_project_description'),
      tags: ['VueJS', 'Typescript', 'Webpack'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'QNet reporting system - version 3',
      description: t('qnet_reporting_system_version_3_description'),
      tags: ['ReactJS', 'Typescript', 'Webpack'],
      role: 'Front-end Team Leader',
    },
    {
      title: 'Financial reporting system',
      description: t('financial_reporting_system_description'),
      tags: ['Angluar', 'Typescript', 'Webpack', 'C#', 'SQL Server'],
      role: 'Front-end Software Engineer',
    },
    {
      title: 'QNet reporting system - version 2',
      description: t('qnet_reporting_system_version_2_description'),
      tags: ['JQuery', 'Javascript', 'C#'],
      role: 'Front-end Software Engineer',
    },
  ];

  const renderProjects = () => {
    if (mobile) {
      return (
        <Carousel touchMove infinite arrows draggable swipeToSlide autoplay>
          {projects.map((project, index) => (
            <div>
              <div style={contentStyle}>
                <Row key={index} justify="center">
                  <Card card={project} border />
                </Row>
              </div>
            </div>
          ))}
        </Carousel>
      );
    }
    return (
      <>
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={8}>
            <AnimateBox duration={index * 0.1 + 0.1}>
              <Card card={project} border />
            </AnimateBox>
          </Col>
        ))}
      </>
    );
  };

  return (
    <div className="home-page__section">
      <div className="home-page__section-wrapper">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <AnimateBox>
              <h4 className="home-page__header-text home-page--center">
                {t('my_projects')}
              </h4>
            </AnimateBox>
          </Col>
          <Row gutter={[24, 24]}>{renderProjects()}</Row>
        </Row>
      </div>
    </div>
  );
}
