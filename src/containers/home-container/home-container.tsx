import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { MasterLayout } from 'components/layouts/master-layout';
import { RESOURCES } from 'config/constant';
import { Button } from 'components/form-ui/button';
import { FontIcon } from 'components/font-icon';
import { Footer } from 'components/footer';
import { AnimateBox } from 'components/animate-box';
import { RecognitionAwards } from './elements/recognition-awards';
import { Projects } from './elements/projects';
import { Education } from './elements/education';
import { TechnicalSkills } from './elements/technical-skills';

export function HomeContainer() {
  const { t } = useTranslation();

  return (
    <MasterLayout>
      <Col className="home-page">
        <div
          className="home-page__section home-page__banner"
          id="my-background"
        >
          <div className="home-page__section-wrapper">
            <div className="home-page__headline">
              <div className="home-page__headline-block">
                <AnimateBox>
                  <h4 className="home-page__sub-header">{t('hello')}</h4>
                </AnimateBox>
                <AnimateBox duration={0.7}>
                  <h6 className="home-page__sub-headline-text cv-name">
                    {t('name')}
                  </h6>
                </AnimateBox>
                <AnimateBox duration={1}>
                  <h1 className="home-page__headline-text">{t('job_title')}</h1>
                </AnimateBox>
                <AnimateBox duration={1.2}>
                  <p className="home-page__description">
                    {t('job_description')}
                  </p>
                </AnimateBox>
                <AnimateBox anmateName="slideInRight" duration={1.5}>
                  <Row gutter={[16, 16]}>
                    <Col>
                      <Row justify="center" align="middle">
                        <a
                          href="https://github.com/thinhnguyendn93"
                          target="_blank"
                        >
                          <FontIcon name="github" size={24} color="black" />
                        </a>
                      </Row>
                    </Col>
                    <Col>
                      <a href={RESOURCES.CV} target="_blank">
                        <Button
                          label={t('my_cv')}
                          type="primary"
                          size="large"
                          danger
                        />
                      </a>
                    </Col>
                  </Row>
                </AnimateBox>
              </div>
              <AnimateBox anmateName="slideInRight">
                <img
                  className="home-page__banner-image"
                  src={RESOURCES.AVATAR}
                />
              </AnimateBox>
            </div>
          </div>
        </div>
        <RecognitionAwards />
        <Education />
        <div
          className="home-page__section home-page__technologies"
          id="my-tech-stacks"
        >
          <Row justify="center" gutter={[64, 64]}>
            <Col span={24}>
              <AnimateBox anmateName="slideInRight">
                <h6 className="home-page__header-text home-page--center">
                  {t('my_tech_stacks')}
                </h6>
              </AnimateBox>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={[32, 32]}>
                {[
                  'REACT',
                  'VUE',
                  'ELECTRON',
                  'CSS',
                  'HTML',
                  'JAVASCRIPT',
                  'CSHARP',
                  'DOTNET',
                  'BOOSTRAP',
                ].map((tech, index) => (
                  <Col key={index}>
                    <img
                      className="home-page__branch-image"
                      src={RESOURCES[tech]}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        <TechnicalSkills />
        <Projects />
        <Footer />
      </Col>
    </MasterLayout>
  );
}
