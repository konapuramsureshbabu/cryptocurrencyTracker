import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptoCurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptoCurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = await data.map(eachCryptoCurrency => ({
      id: eachCryptoCurrency.id,
      currencyLogoUrl: eachCryptoCurrency.currency_logo,
      currencyName: eachCryptoCurrency.currency_name,
      usdValue: eachCryptoCurrency.usd_value,
      euroValue: eachCryptoCurrency.euro_value,
    }))

    this.setState({
      cryptoCurrenciesData: updatedData,
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state

    return <CryptoCurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptoCurrencyTracker
