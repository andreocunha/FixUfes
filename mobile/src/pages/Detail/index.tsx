import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView, Linking } from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';

interface Params {
    point_id: number;
}

interface Data {
    point:{
        image: string;
        image_url: string;
        name: string;
        description: string;
        email: string;
        whatsapp: string;
        city: string;
        uf: string;
    };
    items:{
        title: string;
    }[];
}

const Detail = () => {
    const [data, setData] = useState<Data>({} as Data);
    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params as Params;

    useEffect(() => {
        api.get(`points/${routeParams.point_id}`).then(response =>{
            setData(response.data);
        })
    }, []);

    function handleNavigateBack(){
        navigation.goBack();
    }

    function handleComposeMail(){
        MailComposer.composeAsync({
            subject: 'Problema resolvido!',
            recipients: [data.point.email]
        })
    }

    function handleWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Problema resolvido!`)
    }

    if(!data.point){
        return null;
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#686869' }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={28} color="#cf0202" />
                </TouchableOpacity>

                <Image style={styles.pointImage} source={{ uri: data.point.image_url}}/>
            
                <Text style={styles.pointName}>{data.point.name}</Text>
                <Text style={styles.pointDescription}>{data.point.description}</Text>


                <View style={{marginTop: 70}}>
                    <Text style={styles.problemaText}>Problemas:</Text>
                    <Text style={styles.pointItems}>
                        {data.items.map(item => item.title).join(', ')}
                    </Text>
                </View>
                

                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço</Text>
                    <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleWhatsapp}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF"/>
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>

                <RectButton style={styles.button} onPress={handleComposeMail}>
                    <Icon name="mail" size={20} color="#FFF"/>
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
        backgroundColor: '#686869',
    },
  
    pointImage: {
      width: '100%',
      height: 180,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#f1c202',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },

    pointDescription: {
        color: '#e0bd31',
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
        marginTop: 24,
      },
  
    pointItems: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#e0bd31',
    },

    problemaText: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 20,
        lineHeight: 24,
        marginTop: 8,
        color: '#f1c202',
      },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#f1c202',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: 'Roboto_400Regular',
      lineHeight: 24,
      marginTop: 8,
      color: '#e0bd31',
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#cf0202',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
    },
  });