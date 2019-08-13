import React, { Component } from 'react'
import GeoLocation from './GeoLocation'

/*
temp data
const data = [
    { name: '성신여대 CGV', lat: 37.592526, lon: 127.016974 },
    { name: '피자헛', lat: 37.592134, lon: 127.017755 },
    { name: '한성대입구역', lat: 37.588491, lon: 127.006194 },
    { name: '부산', lat: 35.145806, lon: 129.028514 },
    { name: '노트북', lat: 37.592483099999995, lon: 127.0078127 },
    { name: '삼성역', lat: 37.5101191, lon: 127.0660987},
    { name: '집', lat: 37.5341056, lon: 126.9661696}
]
*/

const store_coord = {
    latitude: 37.586396,
    longitude: 127.001514
}



class GeoWrapper extends Component {
    //reload page if fail to retrieve coordinates in two seconds.
    
    state = {
        timer: null,
        coords: null,
        key: new Date().getTime(),
        is_valid: true,
        dist: 0, 
    }

    componentDidMount = () => {
        this.setState({
            timer: window.setInterval(this.refreshPage, 2000),
        })
    }

    
    //get distance in km.
    getDistance = (coord1, coord2) => {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var lat1 = coord1.latitude;
        var lon1 = coord1.longitude;
        var lat2 = coord2.latitude;
        var lon2 = coord2.longitude;

        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;

        var distance = 12742 * Math.asin(Math.sqrt(a));
        return distance;

    }

    //set coordinates of the current device.
    handleSetCoords = (coords) => {
        this.setState({ coords })
        window.clearInterval(this.state.timer);

        //check for coords
        const dist = this.getDistance(coords, store_coord);
        if (dist > 0.5){
            this.setState({is_valid: false, dist});
        }

    }

    refreshPage = () => {
        if (!this.state.coords){
            //if coord in not loaded, reload the page.
            window.location.reload();
            this.setState({
                key: new Date().getTime(),
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.is_valid ? (
                    <GeoLocation setCoords={this.handleSetCoords} key={this.state.key} />
                ) : (
                        <div style={{marginTop: 16}}>
                            {`유효 범위 밖: ${this.state.dist * 1000}m`}
                        </div>
                    )}

            </div>
        )
    }
}

export default GeoWrapper