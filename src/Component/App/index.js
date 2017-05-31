import React,{Component} from 'react';

import{
    Container,
    Header, 
    Body,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Icon,
    Text        
}from 'react-native';

class App extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name=''/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
                <Content>
                    // the content write/read in here
                </Content>
                <Footer>
                    <FooterTab>
                        <Button Full>
                            <Text>FooterTab</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default 