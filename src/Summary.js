import React from "react";

class Summary extends React.Component{

    render() {
        const {summary, currentDate} = this.props;
        // new date : to have the date more user friendly
        return(
            <div className="row">
                <div className="NewConfirmed">
                    <h3>New Confirmed</h3>
                    <h1>{summary.NewConfirmed}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="TotalConfirmed">
                    <h4>Total Confirmed</h4>
                    <h1>{summary.TotalConfirmed}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="NewDeaths">
                    <h4>New Deaths</h4>
                    <h1>{summary.NewDeaths}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="TotalDeaths">
                    <h4>Total Deaths</h4>
                    <h1>{summary.TotalDeaths}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="TotalRecovered">
                    <h4>Total Recovered</h4>
                    <h1>{summary.TotalRecovered}</h1>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
            </div>
        )
    }
}

export default Summary;