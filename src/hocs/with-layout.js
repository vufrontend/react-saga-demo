import React, { Fragment } from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './with-layout.scss'

const withLayout = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <Header />
          <div className="app-body">
            <WrappedComponent {...this.props} />
          </div>
          <Footer />
        </Fragment>
      )
    }
  }
}
export default withLayout