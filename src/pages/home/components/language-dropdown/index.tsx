import { LanguageDropdownItem } from '../language-dropdown-item';
import styles from './styles.module.scss';

interface LanguageDropdownProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange?: (lang: string) => void;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  languages,
  selectedLanguage,
  onLanguageChange = () => {},
}) => {
  const renderDropdownItem = (lang: string) => (
    <LanguageDropdownItem
      lang={lang}
      selected={lang === selectedLanguage}
      onClick={onLanguageChange}
    />
  );

  return (
    <div className={styles.container}>
      <button className={styles.button}>{selectedLanguage}</button>
      <div className={styles.dropdown}>{...languages.map(renderDropdownItem)}</div>
    </div>
  );
};
