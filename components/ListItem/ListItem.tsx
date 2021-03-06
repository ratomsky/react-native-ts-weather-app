import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const unixConvertor = (date: number, type: string) => {
  const milliseconds = date * 1000
  const dateObject = new Date(milliseconds)
  if (type === 'day') return dateObject.toLocaleString("ru-RU", { day: "numeric" })
  if (type === 'weekDay') return dateObject.toLocaleString("ru-RU", { weekday: "long" })
  if (type === 'month') return dateObject.toLocaleString("ru-RU", { month: "long" })
}


type Props = {
  temp: number
  date: number
}

const ListItem: React.FC<Props> = ({ temp, date }) => {
  const [open, setOpen] = useState(false);

  return (
    <TouchableHighlight onPress={() => console.log('1')}>
      <View
        style={styles.containerClose}>
        <View>
          <Text style={styles.temp}>{unixConvertor(date, 'weekDay')}</Text>
          <Text style={styles.day}>{unixConvertor(date, 'day')} {unixConvertor(date, 'month')}</Text>
        </View>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
    </TouchableHighlight>
  )
}


export default ListItem

const styles = StyleSheet.create({
  containerClose: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temp: {
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  day: {
    fontFamily: 'Arial',
    color: '#515570',
    fontSize: 15,
  }
});