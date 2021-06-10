import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import MyCard from '../components/MyCard'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";

import '../styles/home.css'

import solveTSP, { getBase64 as readFileAsString } from '../api'

const howToUseContent =
    `TSP or Travelling Salesman Problem is a problem to find the Hamilton Path (the lowest cost path) of a complete weighted graph. Using this site, it will determine the Hamilton Path and its cost by following the steps below:

1. Fill the Number of Inputs
2. Put your Input file in the Upload Button or type it in the Text Area
3. The Input format should be like this (see the example in the Text Area):
<code>
Number of Locations (including origin)
Origin Location Name
Origin Location Coordinate (x y)
Other Location Name (interspersed its coordinate)
Other Location Coordinate (x y)
Courier Name
Courier Speed (1meter/minute)
Time of Shipment (HH:MM)
Date of Shipment (DD-MM-YYYY)
</code>
4. Click the button Get Direction and Voila!
`

const contoh =
`4
ITB
0 0
Gelap Nyawang
1 0
Cisitu Baru
0 1
Crisbar
1 1
Kurirando Johndo
5
14:05
09-06-2021
`;

export default () => {
    const inputTextRef = React.useRef()
    const history = useHistory()

    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const [files, setFiles] = React.useState([])

    const handleClick = async () => {
        if (files.length !== 0) {
            const ans = []
            for (const file of files) {
                const data = await readFileAsString(file)
                ans.push(solveTSP(data))
            }

            history.push({
                pathname: '/map',
                state: {
                    ans
                }
            })
            return;
        } else if (inputTextRef.current) {
            if (inputTextRef.current.value) {
                const ans = [solveTSP(inputTextRef.current.value)]
                console.log(ans)

                history.push({
                    pathname: '/map',
                    state: {
                        ans
                    }
                })
                return;
            }
        }
        setOpenSnackbar(true)
    }

    const handleFileChange = (e) => {
        setFiles(e.target.files)
    }

    return (
        <div className="main-container">
            <MyCard
                style={{ width: 400, margin: 24 }}
                heading="Site of the day"
                title={"Bantu Kurir TSP"}
                subtitle={"a site"}
                content={`a website to get the fastest route given locations for a courier created by Renaldi Arlin`} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="intro-container">
                    <MyCard
                        style={{ width: 400, margin: 24 }}
                        heading="Sentence of the day"
                        title={"How to Use?"}
                        subtitle={"a sentence"}
                        content={howToUseContent} />
                </div>
                <div className="input-container">
                    <TextField
                        inputRef={inputTextRef}
                        defaultValue={contoh}
                        style={{ backgroundColor: 'white', margin: 24 }}
                        label="Put your input here!"
                        multiline
                        rows={22}
                        variant="outlined" />
                    <Paper style={{padding: 12, margin: 24 }}>
                        <span style={{fontSize: 14, color: 'gray', marginRight: 24}}>Or upload it here!</span>
                        <input
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            accept=".txt"
                            id="contained-button-file"
                            multiple
                            type="file" />
                        <label htmlFor="contained-button-file">
                            <Button label="contained-button-file" variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                    </Paper>
                </div>
            </div>
            <Fab variant="extended" color="primary"
                style={{ position: "fixed", bottom: 48, right: 48 }}
                onClick={handleClick}>
                <NavigationIcon style={{ marginRight: 8 }} size="large" />
                Get Direction
            </Fab>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}>
                <MuiAlert elevation={6} variant="filled" onClose={() => setOpenSnackbar(false)} severity={"error"}>Invalid Input!</MuiAlert>
            </Snackbar>
        </div>
    )
}