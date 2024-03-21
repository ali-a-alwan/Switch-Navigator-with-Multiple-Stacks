import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Settings Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Help Screen"
        onPress={() => navigation.navigate('Help')}
      />
    </View>
  );
};

export default SettingsScreen;