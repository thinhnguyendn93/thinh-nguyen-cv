import { Anchor } from 'antd';
import { useTranslation } from 'react-i18next';
import { Logo } from 'components/logo';

export function Header() {
  const { t } = useTranslation();

  const renderAnchor = () => {
    return (
      <Anchor
        rootClassName="header-anchor"
        direction="horizontal"
        items={[
          {
            key: 'my-tech-stacks',
            href: '#my-tech-stacks',
            title: t('my_tech_stacks'),
          },
          {
            key: 'my-projects',
            href: '#my-projects',
            title: t('my_projects'),
          },
        ]}
      />
    );
  };

  return (
    <div className="app-header">
      <div className="app-header__wrapper">
        <Logo />
        <div className="app-header__menu">{renderAnchor()}</div>
      </div>
    </div>
  );
}
