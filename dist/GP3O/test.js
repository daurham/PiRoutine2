import schedule from 'node-schedule';
import { LED } from "./GPIOModule.js";
import { scheduleRules } from '../dicts.js';

console.log('Test running');

// Blink every 10 seconds
const blinkTest = () => {
    const RedLED = new LED(17);
    RedLED.on();
	//RedLED.blink(10000);
};
const mod = new LED(17, 'out');
console.log(mod.gpio.readSync())
console.log(mod.on());
console.log(mod.gpio.readSync());
console.log(mod.off());
console.log(mod.gpio.readSync());
//blinkTest();
//schedule.scheduleJob(scheduleRules.Every10Seconds, () => {
//	console.log('scheduler running');
//	blinkTest();
//});
