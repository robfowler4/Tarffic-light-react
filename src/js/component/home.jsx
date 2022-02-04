import React, { useState } from "react";

//include images into your bundle

//create your first component
export const Home = () => {
	const [color, setColor] = useState(null);

	return (
		<div>
			<div className="traffic-top"></div>
			<div className="container">
				<div
					className={color == "red" ? "red shine" : "red"}
					onClick={() => setColor("red")}></div>
				<div
					className={color == "yellow" ? "yellow shine" : "yellow"}
					onClick={() => setColor("yellow")}></div>
				<div
					className={color == "green" ? "green shine" : "green"}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};
