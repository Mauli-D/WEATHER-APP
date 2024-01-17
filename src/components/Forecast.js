import React from "react";
function Forecast() {

	const hourly = [
		{
			"title": "10:30 PM",
			"temp": 21.88,
			"icon": "01n"
		},
		{
			"title": "11:30 PM",
			"temp": 21.5,
			"icon": "01n"
		},
		{
			"title": "12:30 AM",
			"temp": 20.91,
			"icon": "01n"
		},
		{
			"title": "01:30 AM",
			"temp": 20.18,
			"icon": "01n"
		},
		{
			"title": "02:30 AM",
			"temp": 19.32,
			"icon": "01n"
		}
	]

	const daily = [
		{
			"title": "Sat",
			"temp": 27.21,
			"icon": "01d"
		},
		{
			"title": "Sun",
			"temp": 25.32,
			"icon": "01d"
		},
		{
			"title": "Mon",
			"temp": 25.31,
			"icon": "01d"
		},
		{
			"title": "Tue",
			"temp": 24.91,
			"icon": "01d"
		},
		{
			"title": "Wed",
			"temp": 24.41,
			"icon": "03d"
		}
	]
	const iconUrlFromCode = (code) =>
		`http://openweathermap.org/img/wn/${code}@2x.png`;
  
	return (
		<div>
			<div className="flex items-center justify-start mt-6">
				<p className="font-medium text-white uppercase">hourly forecast</p>
			</div>
			<hr className="my-2" />

			<div className="flex flex-row items-center justify-between text-white">

				{hourly.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center"
					>
						<p className="text-sm font-light">{item.title}</p>
						<img
							src={iconUrlFromCode(item.icon)}
							className="w-12 my-1"
							alt=""
						/>
						<p className="font-medium">{`${item.temp.toFixed()}°`}</p>
					</div>
				))}
			</div>
			<div className="flex items-center justify-start mt-6">
				<p className="font-medium text-white uppercase">Daily forecast</p>
			</div>
			<hr className="my-2" />

			<div className="flex flex-row items-center justify-between text-white">

				{daily.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center"
					>
						<p className="text-sm font-light">{item.title}</p>
						<img
							src={iconUrlFromCode(item.icon)}
							className="w-12 my-1"
							alt=""
						/>
						<p className="font-medium">{`${item.temp.toFixed()}°`}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Forecast;
