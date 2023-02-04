import React from "react";
import { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0)
	const [color, setColor] = useState('#0')
	const [loading, setLoading] = useState(true)
	const [zips, setZips] = useState([])

	const fetchData = () => {
		setLoading(true)
	fetch('https://assets.breatheco.de/apis/fake/sample/zips.php')
	.then(response => response.json())
	.then(data => setTimeout(() => setZips(data), 2000))
	.catch(err => console.error(err));
	}
	
	useEffect(() => {
		setColor('#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6))
		fetchData()
	},[count])

	

	useEffect(() => {
		setLoading(false)
		console.log('zips have changed')
	},[zips])

	return (
		<div  style={{backgroundColor: color}} className="text-center">
			<h1 className="text-center mt-5">{loading ? <h1>loading</h1>: <h1>ready</h1>}</h1>
			<p>
				<img onClick={() => setCount(count + 1)} src={rigoImage} />
			</p>
			{count}
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
