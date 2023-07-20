import { Trans } from 'react-i18next';
import { DEFAULT_LANGUAGE, RESOURCES, VI_LANGUAGE } from 'config/constant';
import { Select } from 'components/form-ui/select';
import i18n from 'config/i18n';
import { getLanguage, setLanguage } from 'utils/cookie';

interface Props {
  label?: string;
}

export const LanguageDropdown = (props: Props) => {
  const { label } = props;

  const LANGUAGE_OPTIONS: App.SelectOption[] = [
    {
      value: DEFAULT_LANGUAGE,
      content: <Trans i18nKey="english" />,
      image: RESOURCES.FLAG_USA,
    },
    {
      value: VI_LANGUAGE,
      content: <Trans i18nKey="vietnamese" />,
      image: RESOURCES.FLAG_VIETNAM,
    },
  ];

  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <Select
      name="language"
      size="default"
      label={label}
      options={LANGUAGE_OPTIONS}
      defaultValue={getLanguage()}
      onChange={(value) => onChangeLanguage(value as string)}
    />
  );
};
