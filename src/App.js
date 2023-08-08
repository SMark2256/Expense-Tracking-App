import logo from "./logo.svg";
import "./App.css";
import ExcelimportComp from "./components/excel/excelimportComp";

function App() {
    return (
        <div className="App flex flex-col gap-4">
            <header className="h-40 bg-blue-950 flex flex-col justify-center">
                <img src={logo} className="App-logo h-20" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <ExcelimportComp />
        </div>
    );
}

export default App;
