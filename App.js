// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import {Button} from 'react-native-elements';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Function to handle score update
  const updateScore = (team, increment) => {
    if (team === 'A') {
      const newScore = teamAScore + increment; 
      if (newScore >= 0) {
        setTeamAScore(newScore);
        if (newScore === 10) {
          Alert.alert('Congratulations!', 'Team A wins!');
        }
      }
    } else if (team === 'B') {
      const newScore = teamBScore + increment;
      if (newScore >= 0) {
        setTeamBScore(newScore);
        if (newScore === 10) {
          Alert.alert('Congratulations!', 'Team B wins!');
        }
      }
    }
  };

  // Function to reset scores
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      {/* Team A Section */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{teamAScore}</Text>
        <View style={styles.buttonContainer}>
          <Button  title="+" onPress={() => updateScore('A', 1)} />
          <Button title="-" onPress={() => updateScore('A', -1)} />
        </View>
      </View>

      {/* Team B Section */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{teamBScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => updateScore('B', 1)} />
          <Button title="-" onPress={() => updateScore('B', -1)} />
        </View>
      </View>

      {/* Reset Button */}
      <View style={styles.resetContainer}>
        <Button style={styles.button}title="Reset" onPress={resetScores} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  teamContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 60,
    fontWeight: 'bold',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  
  button:{
    width:100,
    fontSize:20
  }
});

export default App;