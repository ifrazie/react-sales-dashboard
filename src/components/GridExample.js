import React, { Component } from 'react'
import { Grid, GridColumn } from '@progress/kendo-react-grid'

export default class GridExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { ArtworkName: "Bed Of Chrysanthemums", Estimate: 10000 },
                { ArtworkName: "Blue Olive", Estimate: 20000 }
            ],
            title: "Hello from Fimart"
        }
    }

    render() {
        return (
            <div>
                <h1 className="App-title">{this.state.title}</h1>
                <Grid data={this.state.data}>
                    <GridColumn field="ArtworkName" title="Product name" />
                    <GridColumn field="Estimate" />
                </Grid>
            </div>
        )
    }
}