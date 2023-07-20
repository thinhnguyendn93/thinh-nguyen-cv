import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/card';
import { AnimateBox } from 'components/animate-box';

export function Education() {
  const { t } = useTranslation();

  const awards: App.CardItem[] = [
    {
      title: t('management_information_systems'),
      description: t('education_place'),
    },
  ];

  const renderAwards = () => {
    return awards.map((service, index) => (
      <Col key={index} xs={24} sm={24} md={24} lg={24}>
        <Row justify="center">
          <AnimateBox duration={1.2}>
            <Card card={service} />
          </AnimateBox>
        </Row>
      </Col>
    ));
  };

  return (
    <div className="home-page__section" id="services">
      <div className="home-page__section-wrapper">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <AnimateBox duration={1}>
              <h6 className="home-page__header-text home-page--center">
                {t('education')}
              </h6>
            </AnimateBox>
          </Col>
          <Row gutter={[24, 24]}>{renderAwards()}</Row>
        </Row>
      </div>
    </div>
  );
}
