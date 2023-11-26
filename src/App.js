import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
function App() {
    const {onToggleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [])

  return (
    <div className="App">
        <h2>Форма ввода информации для холодильника</h2>
        <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
