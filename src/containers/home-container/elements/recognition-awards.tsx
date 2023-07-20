import { Carousel, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/card';
import { isMobile } from 'utils/helper';
import { AnimateBox } from 'components/animate-box';

const contentStyle: React.CSSProperties = {
  height: '400px',
};

export function RecognitionAwards() {
  const { t } = useTranslation();
  const mobile = isMobile();

  const awards: App.CardItem[] = [
    {
      title: t('award'),
      description: t('award_description'),
    },
  ];

  const renderAwards = () => {
    if (mobile) {
      return (
        <Carousel touchMove infinite arrows draggable swipeToSlide autoplay>
          {awards.map((service, index) => (
            <div>
              <div style={contentStyle}>
                <Row key={index} justify="center">
                  <Card card={service} border />
                </Row>
              </div>
            </div>
          ))}
        </Carousel>
      );
    }
    return (
      <>
        {awards.map((service, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24}>
            <Row justify="center">
              <AnimateBox duration={0.7}>
                <Card card={service} />
              </AnimateBox>
            </Row>
          </Col>
        ))}
      </>
    );
  };

  return (
    <div className="home-page__section" id="services">
      <div className="home-page__section-wrapper">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <AnimateBox>
              <h6 className="home-page__header-text home-page--center">
                {t('recognition_awards')}
              </h6>
            </AnimateBox>
          </Col>
          <Row gutter={[24, 24]}>{renderAwards()}</Row>
        </Row>
      </div>
    </div>
  );
}
