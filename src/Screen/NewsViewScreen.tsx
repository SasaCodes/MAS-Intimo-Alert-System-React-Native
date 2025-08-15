import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Movie = {
  ID: string;
  ServerDateTime: string;
  subject: string;
    message: string;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://10.0.2.2/Intimo/News_View.php');
      const json = await response.json();
      setData(json.datas);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ID}) => ID}
          renderItem={({item}) => (
            <Text>{item.ID}, {item.ServerDateTime},{item.subject}</Text>
            
            
          )}
        />
      )}
    </View>
  );
};

export default App;