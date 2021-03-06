import React from 'react';
import { FaPlus, FaCheck } from "react-icons/fa";
import { addToWatchlist, removeFromWatchlist } from '../../../util/watchlist_api_util';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { status: 'buy', addToList: false, shareCount: "", estimatedCost: (0.00).toFixed(2), purchaseType: "Shares" }
        this.buySelected = 'highlight-selected'
        this.sellSelected = ''
        this.addToListIcon = <FaPlus className="add-to-list-icon" />;

        this.updateAddToList = this.updateAddToList.bind(this);
        this.updateShareCount = this.updateShareCount.bind(this);
    }

    componentDidMount() {
        this.props.fetchWatchlists()
        // this.props.iexFetchQuote(this.props.symbol, window.iexcloudAPIKey)
    }

    componentDidUpdate(prevProps, prevStates) {
        if (this.props.watchlists !== prevProps.watchlists) {
            this.updateAddToList();
        }
    }

    updateShareCount(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value === "" ? 0 : parseInt(e.currentTarget.value) }, () => this.updateEstimatedCost())
        }
    }

    updateEstimatedCost() {
        // const costPerShare = parseFloat(this.props.quotes[this.props.symbol].iexClose.toFixed(2))
        const costPerShare = parseFloat(this.props.quote.iexClose.toFixed(2))
        
        this.setState({ estimatedCost: (this.state.shareCount * costPerShare).toFixed(2) })
    }

    updateAddToList() {
        let watchlist = Object.values(this.props.watchlists)[0];
        let that = this

        if (watchlist === undefined) {
            this.setState({ addToList: false })
        } else {            
            const stockIncludedInWatchlist = watchlist.watched_stocks.some(watched_stock => {
                return watched_stock.stock_symbol === that.props.symbol
            })
            
            if(stockIncludedInWatchlist) this.setState({ addToList: true });
        }
    }

    addToList() {
        this.setState({ addToList: this.state.addToList === true ? false : true }, () => {
            if (this.state.addToList === true) {
                addToWatchlist({watchlist_id: Object.values(this.props.watchlists)[0].id, stock_symbol: this.props.symbol})
            } else {
                removeFromWatchlist({watchlist_id: Object.values(this.props.watchlists)[0].id, stock_symbol: this.props.symbol})
            }
        });
    }

    handleClick(field, option) {     
        this.setState({ [field]: option })        
    }

    render() {
        let costOrCredit = 'Cost'
        let buyingPowerOrOwnedShares = 'Buying Power Available';

        // if (Object.values(this.props.watchlists).length === 0 || this.props.quotes[this.props.symbol] === undefined) return null;
        if (this.props.quote === undefined) return null;
  
        switch(this.state.status) {
            case 'buy':
                costOrCredit = 'Cost';
                buyingPowerOrOwnedShares = 'Buying Power Available';
                this.buySelected = 'highlight-selected';
                this.sellSelected = '';
                break;
            case 'sell':
                costOrCredit = 'Credit';
                buyingPowerOrOwnedShares = 'Shares Available - Sell All';
                this.buySelected = '';
                this.sellSelected = 'highlight-selected';
                break;
            default:
                break;
        }

        this.addToListIcon = this.state.addToList === false ? <FaPlus className="add-to-list-icon" /> : <FaCheck className="add-to-list-icon" />;

        return (
            <div className="transaction-form-container">
                <div className="transaction-form">
                    <div className="buy-sell-options-container">
                        <div className={`${this.buySelected}`}>
                            <h1 className="buy-option" onClick={() => this.handleClick('status', 'buy')}>Buy {this.props.symbol}</h1>
                        </div>
                        <div className={`sell-option-container ${this.sellSelected}`}>
                            <h1 className="sell-option" onClick={() => this.handleClick('status', 'sell')}>Sell {this.props.symbol}</h1>
                        </div>
                    </div>
                    <div className="transaction-inputs-container">
                        <div className="form-elements investing-option-container">
                            <h1 className="transaction-title">Invest In</h1>
                            <input className="dollar-shares-input" type="text" placeholder="Shares" value={this.state.purchaseType} readOnly/>
                        </div>
                        <div className="form-elements desired-shares-container">
                            <h1 className="transaction-title">Shares</h1>
                            <input className="shares-input" type="text" placeholder="0" onChange={this.updateShareCount("shareCount")} value={this.state.shareCount}/>
                        </div>
                        <div className="form-elements market-price-container">
                            <div className="market-price-title-container">
                                <h1 className="transaction-title-green market-price">Market Price</h1>
                            </div>
                            <p className="transaction-title-bold">${this.props.quote.iexClose.toFixed(2)}</p>
                        </div>
                        <div className="form-elements estimated-cost-container">
                            <h1 className="transaction-title-bold estimated-cost">Estimated {costOrCredit}</h1>
                            <p className="transaction-title-bold">${this.state.estimatedCost}</p>
                        </div>
                        <div className="review-btn-container">
                            <button type="submit" className="transaction-btn transaction-submit-btn">Review Order</button>
                        </div>
                    </div>
                    <div className="buying-power-show-container">
                        <p className="transaction-title-green buying-power-available">$10000.00 {buyingPowerOrOwnedShares}</p>
                    </div>
                </div>
                <div className="stock-detail-button-container">
                    {/* <div className="trade-stock-options-button-container">
                        <button className="transaction-btn">Trade AAPL Options</button>
                    </div> */}
                    <div className="add-to-list-button-container">
                        <button className="transaction-btn" onClick={() => this.addToList()}>{this.addToListIcon} Add to Lists</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionForm;