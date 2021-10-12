import { useData } from "../hooks/useData";
import t from "../translation/translations"


export default function TableHead() {
    const [{ lang, region }] = useData();
    return (
        <thead>
            <tr>
                <th>{t[lang].region[region]}</th>
                <th>{t[lang].confirmed}</th>
                <th>{t[lang].deaths}</th>
                <th>{t[lang].recovered}</th>
                <th>{t[lang].existing}</th>
            </tr>
        </thead>
    )
}
