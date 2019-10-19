import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Soal extends Component {
    constructor(props) {
        super(props)

        // bind function
        this.setCounter = this.setCounter.bind(this);
        this.setCountQuestion = this.setCountQuestion.bind(this);
    }
    state = {
        counter: 0,
        trueAnswer:0,
        countQuestion:0,
        soals: [
            {
                id: 1,
                pertanyaan: 'Jumlah dari 1 + 1 adalah ?',
                a: 2,
                b: 1,
                c: 4,
                d: 3,
                jawaban: 'b',
            },
            {
                id: 2,
                pertanyaan: 'Hasil perkalian 1 x 2 adalah ?',
                a: 4,
                b: 1,
                c: 2,
                d: 3,
                jawaban: 2,
            },
            {
                id: 3,
                pertanyaan: 'Hasil pengurangan 4 - 2 adalah ?',
                a: 3,
                b: 1,
                c: 4,
                d: 2,
                jawaban: 2,
            },
        ]
    }

    setCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }

    setCountQuestion = () => {
        this.setState({countQuestion: this.state.soals.length})
    }

    componentWillMount(){
        this.setCountQuestion();
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.playGames}>
                        <Text style={styles.tombol}>
                            {this.state.soals[this.state.counter].pertanyaan}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.soalContainer}>
                    <TouchableOpacity 
                        style={styles.pilihan}
                        onPress = {this.setCounter}
                        >
                        <Text style={styles.tombol}>
                            a. {this.state.soals[this.state.counter].a}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.pilihan}
                        onPress = {this.setCounter}
                        >
                        <Text style={styles.tombol}>
                            b. {this.state.soals[this.state.counter].b}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.pilihan}
                        onPress = {this.setCounter}
                        >
                        <Text style={styles.tombol}>
                           c. {this.state.soals[this.state.counter].c}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.pilihan}
                        onPress = {this.setCounter}
                        >
                        <Text style={styles.tombol}>
                            d. {this.state.soals[this.state.counter].d}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    title: {
      margin: 30,
      marginTop: 0,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    },
    playGames: {
      borderStyle:'solid',
      borderColor: 'red', 
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#f0134d',
      padding: 20,
      marginTop: 5,
    },
    soalContainer: {
        padding: 5,
        width: 300,
        justifyContent: 'center',
        backgroundColor: 'silver',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    tombol: {
        fontSize: 25,
        color: '#ffffff',
    },
    pilihan: {
        borderStyle:'solid',
        borderColor: 'silver', 
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#f0134d',
        padding: 5,
      },
      tombol: {
          fontSize: 25,
          color: '#ffffff',
      }
  });
  