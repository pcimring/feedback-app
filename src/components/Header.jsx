import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header>
        <div id="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "FeedbackUI"
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header