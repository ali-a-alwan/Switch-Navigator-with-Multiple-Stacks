import React from 'react';
import { View, Text, Button } from 'react-native';

const HelpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Help Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Settings Screen"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HelpScreen;