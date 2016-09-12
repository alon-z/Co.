import React, {Component} from 'react';
import { View, Text, Image, ListView, Alert } from 'react-native';
import { Button, Card } from 'react-native-material-design';

/* Props:
*   name, stats
*/

export default class Project_Mini_Card extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSourceSteps: ds.cloneWithRows(this.props.project.steps)
        };
    }

    render() {
        const styles = require('./styles');

        fire = function(id) {
            Alert.alert(
                'Really?',
                'Are you sure want yo fire ' + id + '?',
                [
                    {text: 'No, sorry :)', style: 'destructive'},
                    {text: 'Yes, and do it fast!', onPress: () => console.log(id + " is gone for good...")},
                ]
            )
        }

        return (
            <View>
                <Card>
                    <Card.Body>
                        <View>
                            <Text>{this.props.project.name}</Text>
                            <ListView
                                dataSource={this.state.dataSourceSteps}
                                renderRow={(rowData) => <View>
                                        <Text>{rowData.name}</Text>
                                        <ListView
                                            dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(rowData.goals)}
                                            renderRow={(rowData2) => <Text>{rowData2.name} {rowData2.amount} left</Text>}/>
                                        <Text></Text>
                                    </View>}
                            />
                        </View>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button text="STOP"/>
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}