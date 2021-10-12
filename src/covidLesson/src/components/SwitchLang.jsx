import { useData } from '../hooks/useData';
import t from '../translation/translations';

export default function SwitchLang() {
  const [, dispatch] = useData();
  const langs = Object.keys(t);
  return (
    <div>
      {langs.map((lang) => (
        <button key={lang} onClick={() => dispatch({ type: 'CHANGE_LANG', payload: lang })}>
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
