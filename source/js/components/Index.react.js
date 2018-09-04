var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./Menu.react');
var Content = require('./Content.react');

class Index extends React.Component {
    render(){
        return [
            <Menu key="menu" />,
            <Content key="content" />
        ];
    }
}

module.exports = Index;