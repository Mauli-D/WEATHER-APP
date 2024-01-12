import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

function App() {

	return (
		<div
			className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700`}
		>
			<TopButtons />
			<Inputs />

			<div>
				<TimeAndLocation />
				<TemperatureAndDetails />

				<Forecast />
			</div>

		</div>
	);
}

export default App;
