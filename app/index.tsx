import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Card } from "@/components/Card";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { useFetchQuery, useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { getPokemonId } from "@/functions/pokemon";

export default function Index() {
  const colors = useThemeColors()
  const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=21')
  const pokemons = data?.pages.flatMap(page => page.results) ?? []
  return (
    <SafeAreaView style = {[styles.container, {backgroundColor : colors.tint}]}>
      <View style = {styles.header}>
        <Image source = {require('@/assets/images/Pokeball.png')} width = {24} height = {24}/>
        <ThemedText variant = 'headline' color = "grayLight">Pokédex</ThemedText>
      </View>
      <Card style = {styles.body}>
        <FlatList
          data = {pokemons}
          numColumns={3}
          contentContainerStyle = {[styles.gridGab, styles.list]}
          columnWrapperStyle = {styles.gridGab}
          ListFooterComponent = {
            isFetching ? <ActivityIndicator color = {colors.tint}/> : null
          }
          onEndReached={() => fetchNextPage()}
          renderItem={({item}) => <PokemonCard id = {getPokemonId(item.url)} name = {item.name} style = {{flex : 1 / 3}}/>}
          keyExtractor={(item) => item.url}/>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex    : 1,
    padding : 4
  },
  header : {
    flexDirection : 'row'   ,
    alignItems    : 'center',
    gap           : 16      ,
    padding       : 12      ,
  },
  body : {
    flex : 1
  },
  gridGab : {
    gap : 8
  },
  list : {
    padding : 12,
  }
})