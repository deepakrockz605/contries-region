import React, { PureComponent } from "react";
import "./App.scss";
import axios from "axios";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.countries = React.createRef();
    this.state = { regionName: "", allRegions: [], isCountryActive: false };
  }

  componentDidMount = async () => {
    await axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState({ allRegions: res.data });
    });
  };

  handleRegion = async (e) => {
    window.scrollTo({
      top: this.countries.current.offsetTop - 100,
      behavior: "smooth",
    });
    await this.setState({
      regionName: e.target.value,
      countryDetails: "",
      isCountryActive: false,
    });
    let allRegions = this.state.allRegions;
    let currentRegion = this.state.regionName;
    for (let i = 0; i < allRegions.length; i++) {
      var countries = allRegions.filter(
        (country) => country.region === currentRegion
      );
    }
    await this.setState({ countries });
  };

  handleCountry = (e) => {
    let countryName = e;
    this.setState({ isCountryActive: countryName, countryName });
    let countryDetails = this.state.countries.find(
      (country) => country.name === countryName
    );
    this.setState({ countryDetails });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="main">
            <div className="relative region-wrapper">
              <div className="region-section">
                <h4>Select a Region</h4>
                <button
                  className={this.state.regionName === "Asia" ? "active" : ""}
                  value="Asia"
                  onClick={this.handleRegion}
                >
                  Asia
                </button>
                <button
                  className={this.state.regionName === "Europe" ? "active" : ""}
                  value="Europe"
                  onClick={this.handleRegion}
                >
                  Europe
                </button>
              </div>
            </div>

            <div className="relative" ref={this.countries}>
              {this.state.countries ? (
                <Countries
                  countries={this.state.countries}
                  activeCountry={this.state.isCountryActive}
                  handleCountry={this.handleCountry}
                />
              ) : null}
            </div>

            <div className="relative">
              {this.state.countryDetails ? (
                <CountryDetails
                  countryDetails={this.state.countryDetails}
                  regionName={this.state.regionName}
                  countryName={this.state.countryName}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
