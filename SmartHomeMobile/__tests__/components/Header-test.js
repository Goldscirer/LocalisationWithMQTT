/**
 * @format
 */

import 'react-native';
import React from 'react';
import App, {Header} from '../../src/Components/common/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders header', () => {
    const snap = renderer.create(
        <Header/>
    ).toJSON();
expect(snap).toMatchSnapshot();
});