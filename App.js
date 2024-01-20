import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      question: 'What is the capital of India?',
      options: ['Chandigarh', 'Goa', 'Delhi', 'Shimla'],
      answer: 'Delhi'
    },
    {
      question: 'What is the Capital of Lebanon',
      options: ['Beirut', 'Saida', 'Tyr', 'ShiBelArabe'],
      answer: 'Beirut'
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer === selectedAnswer) {
      setScore((prevScore)=> prevScore +1 );
    }
    const nextQuestion = currentQuestion+1;
    if (nextQuestion <quizData.length){
      setCurrentQuestion(nextQuestion);

    }else{
      setShowScore(true);
    }
  };
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <View style={styles.container}>
      {showScore ? <View>
          <Text style = {styles.optionStyles}>
            {score}
          </Text>
          <TouchableOpacity style = {styles.optionContainer} onPress={handleRestart}>
            <Text style = {styles.resetButton}> Reset </Text>
          </TouchableOpacity>
        </View>:
        
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {quizData[currentQuestion]?.question}
        </Text>
        {quizData[currentQuestion]?.options.map((item, index) => (
          <TouchableOpacity
            key={index} // Use index as key (consider using unique IDs if available)
            onPress={() => handleAnswer(item)}
            style={styles.optionContainer}
          >
            <Text style={styles.optionStyles}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionContainer: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  optionStyles: {
    color: 'green',
    padding: 5,
    alignSelf: 'center',
    fontSize: 18
  },
  optionContainer: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15
  },
  questionText: {
    fontSize: 24
  },
  resetButton:{
    fontSize: 18,
    paddingHorizontal:10,
  }
});
