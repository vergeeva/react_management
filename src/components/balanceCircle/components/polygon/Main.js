import React, { Component } from 'react'
import Polygon from './Polygon'

export default class CircleBalance extends Component {
    constructor (props) {
        super(props)

        this.state = {
            ratio: [],
            ratio2: [],
            duration: 2000
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                ratio: this.getRandomRatios()
            })
        }, this.state.duration)

        setInterval(() => {
            this.setState({
                ratio2: this.getRandomRatios()
            })
        }, this.state.duration / 3 * 2)
    }

    getRandomRatios () {
        return Array.apply(null, Array(this.props.n)).map(() =>
            Math.random() * 0.7 + 0.3
        )
    }

    renderPoint (point) {
        return (
            <circle cx={point[0]} cy={point[1]} r={3} />
        )
    }

    render () {
        return (
            <div className='main'>
                <section>
                    <div className='container'>
                        <Polygon n={this.props.n}
                                 size={150}
                                 className='my-polygon-2'
                                 fill='#f00'
                                 renderPoint={this.renderPoint}
                        />
                    </div>
                </section>
            </div>
        )
    }
}

CircleBalance.defaultProps = {
    n: 7
}