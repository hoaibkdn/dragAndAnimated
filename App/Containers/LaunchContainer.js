import LaunchScreen from "./LaunchScreen"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators } from '../Redux/TagRedux'

const mapStateToProps = (state, props) => ({
  tags: state.tags.tags
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...Creators }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
