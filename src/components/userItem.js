export const UserItem = ({ nick, elo, max_elo, country, rank}) => {

    return(
        <tr>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{rank}</td>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{nick}</td>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{country}</td>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{elo}</td>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{max_elo}</td>
        </tr >
    )
}