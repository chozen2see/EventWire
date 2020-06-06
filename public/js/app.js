const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

class App extends React.Component {
  state = {
    currentUser: {}
  }

  handleCurrentUser = (user) => {
    delete user.password;
    this.setState({
      currentUser: user
    })
  }

  isLoggedIn = () => {
    if (this.state.currentUser) {
      return true
    }
    return false
  }

  handleLogout = () => {
    this.setState({
      currentUser: {}
    })
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Feature />

        <Route path="/login" render={props => <LoginForm handleCurrentUser={this.handleCurrentUser} />} />
        <Route path="/destination" component={List} />
        <Route path="/event" component={List} />
        <Route path="/itinerary" />
        <Route path="/signup" render={props => <SignUpForm handleCurrentUser={this.handleCurrentUser} />} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/editprofile" render={props => <UserEditForm handleCurrentUser={this.handleCurrentUser} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>} />

        <Route path="/event_details" component={Event} />
        <Route path="/destination_details" />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.querySelector('.root')); 
