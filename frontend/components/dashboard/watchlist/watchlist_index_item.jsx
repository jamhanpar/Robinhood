import React from 'react';
import { Link } from 'react-router-dom';
import MiniStockChart from './mini_stock_chart';

export default class WatchlistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { showToggle: "dropdown-content", range: '1D', interval: "5"}
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    componentDidMount() {
        this.props.iexFetchData(this.props.symbol, this.state.range, this.state.interval, window.iexcloudAPIKey)
    }

    render() {
        debugger
        return (
            <div className="stock-info-card">
                <div className="ticker-and-shares-owned">
                    <p className="stock-info-item stock-info-symbol">{this.props.symbol}</p>
                    {/* only show if stock is owned */}
                    <p className="stock-info-item">2 Shares</p>
                </div>
                <div className="stock-graph">
                    {/* want to get stock symbol from stock-info-symbol */}
                    <MiniStockChart
                        symbol={this.props.symbol}
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