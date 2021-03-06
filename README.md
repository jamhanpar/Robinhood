# Robinhoot
Robinhoot is a full stack, single page rails project inspired by Robinhood. Robinhoot utilizes IEX Cloud API to render stock information such as historical charts, relevant news or corporate information. After logging in or signing up, users can manage their portfolio using real-time data, search for stocks, add stocks to their watchlist and simulate trades.

# Demo
Here is a working live demo: https://robinhoot.herokuapp.com/#/

# App Features
### Landing Page
Users can either create an account using the sign up links or log in to an existing account using the login link. Information on the splash page has been populated using information from the actual Robinhood website.

![alt text](https://github.com/jamhanpar/Robinhoot/blob/main/0.%20Planning/0.%20Features/landing_page.png)

### Frontend Auth
Users can sign up and will return errors if missing critical information necessary for registering a user. The login page will allow users to access existing accounts, but for the purpose of demonstration and having access to the app features, a demo account is available.

![alt text](https://github.com/jamhanpar/Robinhoot/blob/main/0.%20Planning/0.%20Features/frontend_auth.PNG?raw=true)
![alt text](https://github.com/jamhanpar/Robinhoot/blob/main/0.%20Planning/0.%20Features/frontend_auth_signup.PNG?raw=true)

### Dynamic Portfolio Dashboard
The dashboard displays a graphical representation of the users portfolio based on real-time price adjustments for the stocks the user owns. You can modify the display based on a selected timeframe. Users can increase their current buying power by adding more funds to their account. As for the watchlist on the right, you can view the users currently owned stocks, # of shares, daily price action, price fper share and the daily percent change per share.

![alt text](https://github.com/jamhanpar/Robinhoot/blob/main/0.%20Planning/0.%20Features/dyanmic_portfolio_dashboard.PNG?raw=true)

### Search Stock Symbols
Users can search by typing out a stock symbol or company name, and the search results will update in real-time based on user input.

![alt text](https://github.com/jamhanpar/Robinhoot/blob/main/0.%20Planning/0.%20Features/search_stock_symbols.PNG?raw=true)

### Stock Details Page
The stock details page will display a graphical representation of the stocks real-time price action based on a selected timeframe (default being 1D). Users can access company information as well as relevant news for the current stock.

<img width="1000px" src="https://github.com/jamhanpar/Robinhoot/blob/main/0.%20Planning/0.%20Features/stock_details_page.PNG?raw=true">

### Trade Simulation - Work in Progress
On the stocks details page, users can simulating buying shares in dollars or shares based on current stock price. If the user owns any shares, the user can simulate selling the stocks they own.

# Features in the Works
* Risk analysis based on % of funds allocated to each stock sectors
* Add funds
* Portfolio graph shows updates based on # of shares owned and stocks owned
* Buy and sell simulation of stocks
* Adds owned stocks to stocks list in portfolio

# Dependencies & Version
* Ruby 2.5.1
* Rails 5.2.4.4
* React.js 17.0.1
* Recharts 2.0.3
* Redux.js 4.0.5
* Redux Thunk 2.3.0
* Babel Loader 8.2.2
* PostgresSQL
* Webpack 4.44.2
* Node v10.13.0
* Heroku

# Languages / Libraries
* Ruby
* HTML
* CSS
* JavaScript
     * jQuery 
     * Ajax

# APIs and External Libraries
* IEX Cloud API - stock api
* Recharts 2.0.3 - graphing data
* FreeLogoDesign.org - logos and icons
* Unsplash.com - site images

# Database creation
- bundle exec rails db:reset
- bundle exec rails db:seed

# How to run the test suite
- bundle install
- npm install
- bundle exec rails db:migrate
- bundle exec rails db:seed
- bundle exec rails s
- npm run webpack
