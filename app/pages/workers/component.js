import React, {Component} from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';

import stubData from './stub.json';

import Worker_Mini_Card from './worker_mini_card'

export default class Workers extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(stubData)
        };
    }

    render() {
        const styles = require('./styles');
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Worker_Mini_Card person={rowData}/>}
                    />
                </View>
            </ScrollView>
        );
    }
}