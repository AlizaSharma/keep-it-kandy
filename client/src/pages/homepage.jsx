import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

function Homepage() {
  return (
    <div>

      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        
        <Container text>
          <Header
            as='h1'
            content='Welcome to My Candy Store!'
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
          />
        </Container>
      </Segment>
    </div>
  );
};

export default Homepage;
