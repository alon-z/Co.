import React, {Component} from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';

import stubData from './stub.json';

import Project_Mini_Card from './project_mini_card'

export default class Projects extends Component {
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
                        renderRow={(rowData) => <Project_Mini_Card project={rowData}/>}
                    />
                </View>
            </ScrollView>
        );
    }
}