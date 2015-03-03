/** @jsx React.DOM */
'use strict';

var React = require('react');
var YTabs = require('./index.jsx!');

React.render((
    <div>
        <YTabs tabActive={3}>
            <YTabs.Tab name="faq">
                FAQ
            </YTabs.Tab>
            <YTabs.Tab name="materials">
                Materials
            </YTabs.Tab>
            <YTabs.Tab name="calendar">
                Calendar
            </YTabs.Tab>
            <YTabs.Tab name="requirements">
                Requirements
            </YTabs.Tab>
            <YTabs.Tab name="order">
                Order
            </YTabs.Tab>
        </YTabs>
    </div>
), document.getElementById('content'));
