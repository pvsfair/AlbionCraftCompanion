import React from 'react';
import { Button, Text, View } from 'react-native';
import { TProps } from './home.types';

export const Home = ({ navigation }: TProps): React.ReactElement => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Home</Text>
      <Button
        title="go to splash"
        onPress={() => navigation.navigate('Splash')}
      />
    </View>
  );
};
