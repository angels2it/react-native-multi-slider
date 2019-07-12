import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, Platform, TouchableHighlight } from 'react-native';

const ViewPropTypes = require('react-native').ViewPropTypes || ViewPropTypes;

export default class DefaultLabel extends React.Component {
  static propTypes = {
    leftDiff: PropTypes.number,

    labelStyle: ViewPropTypes.style,
    labelTextStyle: ViewPropTypes.style,

    oneMarkerValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    twoMarkerValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),

    oneMarkerLeftPosition: PropTypes.number,
    twoMarkerLeftPosition: PropTypes.number,
    formatTooltip: PropTypes.func
  };

  static defaultProps = {
    leftDiff: 0,
    labelStyle: {},
    labelTextStyle: {},
    formatTooltip: function (value) {
      return value;
    }
  };

  render() {
    const { leftDiff, labelStyle, labelTextStyle, oneMarkerValue, twoMarkerValue, oneMarkerLeftPosition, twoMarkerLeftPosition, formatTooltip } = this.props;

    if (twoMarkerValue) {
      return (
        <View style={{ position: 'relative' }}>
          <View style={[styles.sliderLabel, { left: (oneMarkerLeftPosition - leftDiff) }, labelStyle]}>
            <Text style={[styles.sliderLabelText, labelTextStyle]}>{formatTooltip(oneMarkerValue)}</Text>
          </View>

          <View style={[styles.sliderLabel, { left: (twoMarkerLeftPosition - leftDiff) }, labelStyle]}>
            <Text style={[styles.sliderLabelText, labelTextStyle]}>{formatTooltip(twoMarkerValue)}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ position: 'relative' }}>
          <View style={[styles.sliderLabel, { left: (oneMarkerLeftPosition - leftDiff) }, labelStyle]}>
            <Text style={[styles.sliderLabelText, labelTextStyle]}>{formatTooltip(oneMarkerValue)}</Text>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  sliderLabel: {
    position: 'absolute',
    top: -24,
    minWidth: 51,
    padding: 8,
    backgroundColor: '#fff',
  },
  sliderLabelText: {
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 11,
    color: '#fff'
  },
});
