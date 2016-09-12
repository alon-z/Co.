import React, {Component} from 'react';
import { View, Text, Image, ListView, Alert } from 'react-native';
import { Button, Card } from 'react-native-material-design';

import { removeWorker } from './functions';

/* Props:
*   name, stats
*/

export default class Worker_Mini_Card extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.person.stats),
            person: this.props.person,
        };
    }

    render() {
        const styles = require('./styles');

        fire = function(person, removedCallback) {
            Alert.alert(
                'Really?',
                'Are you sure want yo fire ' + person.id + '?',
                [
                    {text: 'No, sorry :)', style: 'destructive'},
                    {text: 'Yes, and do it fast!', onPress: () => {
                        console.log("Deleted!");
                        console.log(removeWorker);
                        removeWorker(person, removedCallback);
                    }},
                ]
            )
        }

        return (
            <View>
                <Card>
                    <Card.Body>
                        <View>
                            <Text>{this.props.person.name}</Text>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => <Text>{rowData.name} {rowData.rank}</Text>}
                            />
                        </View>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button text="FIRE" onPress={()=> fire(this.props.person, this.props.removedCallback)}/>
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}