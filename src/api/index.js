const Location = require('../classes/Location');
const { getFastestRoute } = require('./script');

const readFileAsString = (file) => new Promise((resolve, _) => {
    let fr = new FileReader(); 
    let res;
    
    fr.readAsText(file);
    fr.onload = function (e) { 
        res = e.target.result;
        resolve(res);
    }; 
})

const convertInput = (textArea) => {
    try {
        const lines = textArea.split('\n');
        const N = Number(lines[0]);
        const listOfLoc = [];
        const cost = Array.from(Array(N), () => new Array(N));
        const courierName = lines[N * 2 + 1];
        const courierSpeed = lines[N * 2 + 2];
        const time = lines[N * 2 + 3];
        const date = lines[N * 2 + 4];

        for (let index = 1; (index - 1) / 2 < N; index += 2) {
            const [x, y] = lines[index + 1].split(' ');

            listOfLoc.push(new Location(lines[index], x, y));
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                cost[j][i] = listOfLoc[i].getDistance(listOfLoc[j]);
            }
        }

        return { N, cost, listOfLoc, courierName, time, date, courierSpeed };
    } catch (err) {
        console.log(err);
        return;
    }
}

const solveTSP = (textArea) => {
    const { N, cost, listOfLoc, courierName, courierSpeed, time, date } = convertInput(textArea);
    const { minCost, path } = getFastestRoute(0, 0, N, {}, cost);
    const [day, month, year] = date.split('-');
    const [hour, minute] = time.split(':');
    const duration = minCost / courierSpeed;
    const currentTime = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), 0, 0);
    const estimatedTime = new Date(currentTime.getTime() + duration * 60 * 1000);

    return { cost, listOfLoc, minCost, path, courierName, courierSpeed, time, date, duration, estimatedTime };
}

export default solveTSP;
export { readFileAsString as getBase64 };