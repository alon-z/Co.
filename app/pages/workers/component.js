import React, {Component} from 'react';
import { View, ListView, Text, ScrollView } from 'react-native';

import stubData from './stub.json';

import Worker_Mini_Card from './worker_mini_card'

export default class Workers extends Component {
    constructor(props) {
        super(props);

        var workersData = [];

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
        this.state = {
            dataSource: ds.cloneWithRows(workersData),
            ds: ds
        };
    }

    componentDidMount() {
        storage.load({
            key: 'Workers',
            autoSync: true,
            syncInBackground: true
        }).then(ret => {
            workersData = ret.workers;
            console.log("Found workers: " + workersData[0].name);
            this.setState({
                dataSource: this.state.ds.cloneWithRows(workersData)
            })
        }).catch(err => {
            console.error(err.message);
        })
    }

    render() {
        const styles = require('./styles');

        const removedCallback = function() {
            storage.load({
                key: 'Workers',
                autoSync: true,
                syncInBackground: true
            }).then(ret => {
                workersData = ret.workers;
                console.log("Found workers: " + workersData[0].name);
                this.setState({
                    dataSource: this.state.ds.cloneWithRows(workersData)
                });
            });
            console.log(this.state.dataSource);
        };

        return (
                <View style={styles.container}>
                    <ListView
                        dataSource={this.state.dataSource}
                        enableEmptySections={true}
                        renderRow={(rowData) => <Worker_Mini_Card person={rowData} removedCallback={removedCallback.bind(this)}/>}
                    />
                </View>
        );
    }
}