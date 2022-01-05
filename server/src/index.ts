
import express, { Express } from "express";
import { requestWeatherApi, requestLatLon } from "./request";

const PORT = process.env.PORT || 3001;

const app: Express = express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json({
  	type: ['application/json', 'text/plain']
}))


app.post("/weatherapi", async (req: any, res: any) => {
    const loc = req.body.location;
	const [lat, lon, city, label] = await requestLatLon(loc);
	console.log(lat, lon, city, label);
	
    const weather = await requestWeatherApi(lat, lon);
    res.json({...weather, city: city, label: label});
} )


app.listen(PORT, () => {
  	console.log(`Server listening on ${PORT}`);
});