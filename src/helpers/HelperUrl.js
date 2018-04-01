import React from 'react';
import {
  Linking,
} from 'react-native';

export default function OpenAnUrl(url) {
	Linking.canOpenURL(url).then(supported => {
		if (!supported) {
			alert('Can\'t handle url: ' + url);
		} else {
			return Linking.openURL(url);
		}
		}).catch(err => {
			alert(err);
		}
	);
}
