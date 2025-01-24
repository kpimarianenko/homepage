import { cn } from '@/helpers/styles';
import styles from './styles.module.scss';

interface LanguageDropdownItemProps {
  lang: string;
  selected: boolean;
  onClick: (lang: string) => void;
}

export const LanguageDropdownItem: React.FC<LanguageDropdownItemProps> = ({
  lang,
  selected,
  onClick,
}) => {
  const handleClick = () => onClick(lang);

  return (
    <p className={cn(styles.item, selected && styles.selected)} onClick={handleClick}>
      {lang}
    </p>
  );
};
