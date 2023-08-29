import { Anchor } from 'antd';
import { useTranslation } from 'react-i18next';
import { Logo } from 'components/logo';
import { LanguageDropdown } from 'components/language-dropdown';

export function Header() {
  const { t } = useTranslation();

  const onClick = (ev: any) => {
    ev;
  };

  const renderAnchor = () => {
    return (
      <Anchor
        rootClassName="header-anchor"
        direction="horizontal"
        onClick={onClick}
        targetOffset={50}
        items={[
          {
            key: 'my-information',
            href: '#my-information',
            title: t('my_information'),
          },
          {
            key: 'my-skills',
            href: '#my-skills',
            title: t('my_skills'),
          },
        ]}
      />
    );
  };

  return (
    <div className="app-header">
      <div className="app-header__wrapper">
        <Logo />
        <div className="app-header__menu">
          {renderAnchor()}
          <div>
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
