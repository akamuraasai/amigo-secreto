import React, { Component } from 'react';
import { Grid, Header, Segment, Message, Form, Button } from 'semantic-ui-react';

class Login extends Component {
  constructor() {
    super();

    this.state = { email: '', pass: '' };
  }

  setText = field => evt => {
    this.setState({ [field]: evt.target.value });
  }

  render () {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h4' textAlign='center'>
              <Header as='h1' color='orange' style={{ marginBottom: 16 }}>Amigo Secreto</Header>
              &nbsp;Acesse sua conta
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail'
                  id='email'
                  onChange={this.setText('email')}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Senha'
                  type='password'
                  id='pass'
                  onChange={this.setText('pass')}
                />
                <Button color='orange' fluid size='large'>Entrar</Button>
              </Segment>
            </Form>
            <Message>
              Novo usuário? <a href='#'>Cadastre-se</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
