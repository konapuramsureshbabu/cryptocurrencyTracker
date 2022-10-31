import {Component} from 'react'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrenciesList extends Component {
  render() {
    const {cryptoCurrenciesData} = this.props
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="cryptocurrencies-list-container">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list">
            {cryptoCurrenciesData.map(eachCryptoCurrency => (
              <CryptoCurrencyItem
                key={eachCryptoCurrency.id}
                cryptoCurrencyDetails={eachCryptoCurrency}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptoCurrenciesList
