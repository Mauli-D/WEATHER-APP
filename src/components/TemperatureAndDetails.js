import React from "react";
import {
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300">
				<p>clear</p>
			</div>

			<div className="flex flex-row items-center justify-between text-white py-3">
				<img src="" alt="" className="w-20" />
				<p className="text-5xl">22°</p>
				<div className="flex flex-col space-y-2">
					{/* todo: will add more details about wind, feels like etc */}
				</div>
			</div>

			<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun />
				<p className="font-light">
					Rise:{" "}
					<span className="font-medium ml-1">
						07:23 AM
					</span>
				</p>
				<p className="font-light">|</p>

				<UilSunset />
				<p className="font-light">
					Set:{" "}
					<span className="font-medium ml-1">
						06:11 PM
					</span>
				</p>
				<p className="font-light">|</p>

				<UilSun />
				<p className="font-light">
					High:{" "}
					<span className="font-medium ml-1">22°</span>
				</p>
				<p className="font-light">|</p>

				<UilSun />
				<p className="font-light">
					Low:{" "}
					<span className="font-medium ml-1">19°</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
