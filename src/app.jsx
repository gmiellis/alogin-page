import React from 'react';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Label,
  Radio,
  Divider,
  Icon,
} from 'semantic-ui-react';

const App = () => (
  <div className="login-form">
    <style> {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
      html, body {
        background: linear-gradient(to top, #fc4a1a, #f7b733);
        font-family: 'Roboto', sans-serif;
    `}
    </style>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header size="huge" inverted textAlign="center">
          <Icon name="paper plane" /> THE PROJECTS OFFICE
        </Header>
        <Header as="h5" inverted textAlign="center">
          Working Smarter > Faster > Greener
        </Header>
        <Form size="large">
          <Segment stacked raised>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="Email address" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Divider />
            <Radio />
            <Label basic color="orange" pointing="left">
              Remember Email
            </Label>
            <Divider />
            <Button color="orange" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Header as="h5" inverted textAlign="center">
          Don't have an Account? <a href="#"> Sign Up</a>
        </Header>
      </Grid.Column>
    </Grid>
  </div>
);

export default App;
