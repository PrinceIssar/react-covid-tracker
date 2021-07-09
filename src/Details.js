import React from "react";
import axios from "axios";
import Summary from "./Summary";
import Countries from "./Countries";


class Details extends React.Component {

    state = {
        // leave arrays empty as default
        countries : [],
        global : [],
        currentDate : null,
        loading: true //once
    }
    async componentDidMount() {
        // it takes time axios takes some time so we use async
        const response = await axios.get("https://api.covid19api.com/summary");
        console.log(response);
        // from array we received we get data of countries
        this.setState({countries: response.data.Countries});
        this.setState({global: response.data.Global});
        this.setState({currentDate: response.data.Date});
        this.setState({loading: false});
    }

    render(){
        if (this.state.loading){
            return <h1>Loading/.....</h1>
        }
        return(
            <div>
                <Summary summary = {this.state.global} currentDate = {this.state.currentDate}/>
                <table>
                    <thead>
                    <tr>
                        <th>Country</th>
                        <th>New Confirmed</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.countries.map(country => (
                       <Countries countries={country} key={country.Country}/>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Details;