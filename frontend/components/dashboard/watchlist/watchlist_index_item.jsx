import React from 'react';
import { Link } from 'react-router-dom';
import MiniStockChart from './mini_stock_chart';

export default class WatchlistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content", width: 100, height: 40, range: '5m', interval: "1" }}
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="stock-info-card">
                <div className="ticker-and-shares-owned">
                    <p className="stock-info-item stock-info-symbol">AAPL</p>
                    <p className="stock-info-item">2 Shares</p>
                </div>
                <div className="stock-graph">
                    {/* want to get stock symbol from stock-info-symbol */}
                    <MiniStockChart
                        symbol={'AAPL'}
                        data={this.props.data}    
                    />
                </div>
                <div className="stock-price-and-percent">
                    <p className="stock-info-item">$355.06</p>
                    <p className="stock-info-item stock-info-pct">+0.33%</p>
                </div>
            </div>
        )
    }
}