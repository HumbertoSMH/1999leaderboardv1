import logo from './logo.svg';
import './App.css';
import { UserItem } from './components/userItem';
import { useFetch } from './hooks/useFetchApi';

function App() {
  const { response, loading } = useFetch();

  return (
    <div>

      <table class='border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm'>
        <thead class='bg-slate-50 dark:bg-slate-700'>
          <tr>
          <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Clan rank
            </th>
            <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Nick
            </th>
            <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Pais
            </th>
            <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              ELO Actual
            </th>
            <th class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              ELO Maximo
            </th>
          </tr>

        </thead>
        <tbody>
          {
            loading ?
              <h1>Cargando Elementos</h1>
              :
              response.map((user, index) => {
                console.log(index)
                return <UserItem key={index} {...user} />
              })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
