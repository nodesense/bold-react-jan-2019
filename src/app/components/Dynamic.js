import React, { Component } from 'react';

const Feature1 = (props) => (
    <div>
        <h2>Feature 1 {props.title} </h2></div>
)

const Feature2 = (props) => (
    <div><h2>Feature 2 {props.name}</h2></div>
)


const Table = (props) => (
    <div>
        <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Phone</td>
                <td>100</td>
            </tr>
            </tbody>
        </table>
    </div>
)

const List = (props) => (
    <div>
        <ul>
            <li>one</li>
            <li>two</li>
        </ul>
    </div>
)

class Dynamic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            featureName: 'all'
        }
    }

    feature1 = () => {
        this.setState({
            featureName: 'feature1'
        })
    }

    feature2 = () => {
        this.setState({
            featureName: 'feature2'
        })
    }


    all = () => {
        this.setState({
            featureName: 'all'
        })
    }

    build() {
        const list = [];

        const feature1Props = {title: 'Test All'}

        if (this.state.featureName == 'feature1') {
            list.push(React.createElement(Feature1, {...feature1Props} ));
            list.push(React.createElement(Table));
        } else if (this.state.featureName == 'feature2') {

            list.push(<Feature2  name='Limited Features'/>);
            list.push(<List />);

        } else {
            list.push(<Feature1 {...feature1Props} />);
            list.push(React.createElement(Table));
            list.push(React.createElement(Feature2, {name: 'All Features'}));
            list.push(React.createElement(List));
        }
        
        return list;
    }

    render() {
        const layouts = this.build();
        return (
            <div>
                <h2>Dynamic</h2>
                <button onClick={this.feature1}>Feature 1</button>
                <button onClick={this.feature2}>Feature 2</button>
                <button onClick={this.all}>All</button>

                {
                    layouts
                }
            </div>
        );
    }
}

export default Dynamic;