/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {
  Container,
  Text,
  Button,
  Content,
  Header,
  Card,
  CardItem,
  Body,
  Icon,
  H1,
  Left,
  Title,
  Right,
  Subtitle,
} from 'native-base';
import styles_scene from './styles';
import styles from '../../themes/default_styles';
import {tales} from '../../data/tales';

import Tts from 'react-native-tts';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    // };
  }

  readme() {
    Tts.getInitStatus().then(
      () => {
        let text = tales


        if (text.length >= 3999) {
          function splitNChars(txt, num) {
            var result = [];
            for (var i = 0; i < txt.length; i += num) {
              result.push(txt.substr(i, num));
            }
            return result;
          }

          var splitMe = splitNChars(text, 3999);

          splitMe.forEach(function(value, key) {
            Tts.speak(value, {
              androidParams: {
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
              },
            });
          });
        } else {
          Tts.stop();
          Tts.speak(text, {
            androidParams: {
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
          });
        }
        //Tts.speak(text);
      },
      err => {
        console.log(err);
      },
    );
    //Tts.setDefaultLanguage('ua-UA');

    //Tts.voices().then(voices => console.log(voices));
  }

  stop() {
    Tts.stop();
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Українські народні казки</Title>
          </Body>
        </Header>
        <Content style={styles.container_wrapper}>
          <Button success onPress={() => this.readme()}>
            <Text>Read</Text>
          </Button>
          <Button danger onPress={() => this.stop()}>
            <Text>Stop</Text>
          </Button>

          <Card>
            <CardItem>
              <Text>Івасик Телесик</Text>
              <View>
                <Button iconLeft transparent primary>
                  <Icon name='beer' />
                  <Text>Pub</Text>
                </Button>
              </View>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../../images/sample.jpg')}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text note>Неймовірно красивий, живописний і теплий за своєю енергетикою український мультфільм "Івасик-Телесик" створили</Text>
                {/*<Button transparent textStyle={{color: '#87838B'}}>*/}
                {/*  <Icon name="logo-github" />*/}
                {/*  <Text>1,926 likes</Text>*/}
                {/*</Button>*/}
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../../images/sample.jpg')}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>Tale description will be here</Text>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 likes</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default App;
