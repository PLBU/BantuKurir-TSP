import React from 'react';
import Graph from "react-graph-vis";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MyCard from '../components/MyCard'
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

import '../styles/map.css'

export default (props) => {
    const colors = ["crimson", "turquoise", "darkgreen", "coral", "cadetblue", "burlywood"]
    const { ans } = props.location.state
    
    const history = useHistory()
    const [graph, setGraph] = React.useState(null)

    const options = {
        edges: {
            color: "#000000"
        },
        height: "512px",
        width: "1024px"
    };

    const setUpGraph = () => {
        let edges = []
        let nodes = []
        let prev = 0
        for (const [index, el] of ans.entries()) {
            if (index >= colors.length) colors.push("#" + ((1<<24)*Math.random() | 0).toString(16));
            for (let i = 0; i < el.cost.length; i++) {
                for (let j = 0; j < el.cost[0].length; j++) {
                    if (j < i) edges.push({
                        from: prev + i,
                        to: prev + j,
                        arrows: { to: false },
                        label: el.cost[i][j].toFixed(2).toString(),
                    })
                }
            }
            
            for (let i = 0; i < el.path.length - 1; i++) {
                const from = el.path[i] + prev;
                const to = el.path[i + 1] + prev;
    
                const idx = edges.findIndex((value) => ((value.from === from && value.to === to) || (value.from === to && value.to === from)))
    
                edges[idx] = {
                    ...edges[idx],
                    color: colors[index],
                    width: 4,
                }
            }

            let newNodesCount = 0
            for (const [i, val] of el.listOfLoc.entries()) {
                if (!nodes.some(elmt => (elmt.label === val.label && elmt.x === val.x && elmt.y === val.y))) {
                    nodes.push({
                        id: prev + i, 
                        label: val.name,
                        x: val.x * 200, 
                        y: val.y * 200, 
                        title: `Coordinate: (${val.x},${val.y})`,
                        color: (i === 0) ? colors[index] : "lightgray"
                    })

                    newNodesCount++
                }
            }

            prev += newNodesCount
        }


        setGraph({
            nodes,
            edges
        })
    }

    React.useEffect(() => {
        console.log(ans)
        setUpGraph()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center'}}>
            <Paper style={{ margin: 'auto', width: '1024px', padding: 24 }}>
                <Typography color="textSecondary" gutterBottom>
                    <code>
                        <strong>[Hint] </strong>
                        {`Move => Drag around your mouse; Zoom => Scroll; Coordinate => Hover the node`}
                    </code>
                </Typography>
                {graph && <Graph
                    graph={graph}
                    options={options} />}
            </Paper>
            <div className={"slide-container"}>
                {graph && ans.map((value, index) => 
                    <MyCard
                        style={{ flex: '0 0 auto', width: 500, margin: 24 }}
                        heading={`Shipped at ${value.date}, ${value.time}`}
                        title={value.courierName}
                        subtitle={`Estimation: ${moment(value.estimatedTime).format("DD-MM-YYYY, HH:mm:ss")} (${value.duration.toFixed(2)} mins)`}
                        content={
                            `<strong>Distance:</strong> ${value.minCost.toFixed(2)}m<br/><strong>Path:</strong> ${value.path.map((el, i) => (i < value.path.length - 1) ? `${value.listOfLoc[el].name} =>` : `${value.listOfLoc[el].name}`).join(' ')}<br/><strong>Courier Speed:</strong> ${value.courierSpeed}m/min<br/><strong>Color: <code style="color: ${colors[index]}">${colors[index]}</code></strong>`
                        } />)}
            </div>
            <Fab color="primary"
                style={{ position: "fixed", top: 48, left: 48}}
                onClick={() => history.push('/')}>
                <ArrowBackIcon size="large" />
            </Fab>
        </div>
    );
}