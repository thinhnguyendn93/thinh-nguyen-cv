import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { LanguageDropdown } from 'components/language-dropdown';
import { Logo } from 'components/logo';

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="home-page__section home-page__section-contact">
        <div className="home-page__section-wrapper">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Row align="middle">
                <Logo />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Row justify="end">
                <p className="home-page__description">
                  <p>
                    <span>{t('tel')}: </span>
                    <a>{t('my_tel')}</a>
                  </p>
                  <p>
                    <span>{t('email')}: </span>
                    <a>{t('my_email')}</a>
                  </p>
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="home-page__footer">
        <div className="home-page__footer-wrapper">
          <span className="home-page__copy-right"></span>
          <LanguageDropdown />
        </div>
      </div>
    </>
  );
}
