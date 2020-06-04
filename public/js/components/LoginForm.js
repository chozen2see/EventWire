class LoginForm extends React.Component {
    render () {
        return (
          <div>
            <h2>Log In</h2>
    
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={this.props.handleInput} />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={this.props.handleInput} />
                <input type="checkbox" id="show-password"/><label htmlFor="show-password">Show password</label>
              </div>
              <input value='Submit' type='submit' onClick={this.props.handleLogin} />
            </form>
          </div>
        )
      }
}