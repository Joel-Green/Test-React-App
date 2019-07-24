import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity, Image, FlatList} from 'react-native'

export class dynamic extends Component {
    constructor(props){

        super(props);
        this.state = {
            dynamicdata:[{}],
        }
    }

    dataRefresh()
    {
        fetch("http://192.168.0.106:3000/user")
            .then(res => res.json())
            .then(res=>{
                this.setState({
                    dynamicdata:res
                })
                console.log(this.state.dynamicdata);
            }).catch(err=>alert(err));
    }

    componentDidMount()
    {
        this.dataRefresh();
        console.log(this.state.dynamicdata);
    }

    render() {
        return (
            <View>
             <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                            TestAPP
                        </Text>
                    </View>
                </View>
                <FlatList
                data={this.state.dynamicdata}
                renderItem={({item})=>
                    <Text style={styles.Tile}>{item.email}</Text>
                }
                keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listContainer:{
        // flex:1,
        backgroundColor:'blue',
        height:500,
    },
logo: {
        height: 40,
        width: 60,
        marginRight:-15,
    },    
Tile: {
    // height:400,
    color:'white',
    padding:20,
    width:'90%',
    backgroundColor:'black',
    alignSelf:'center',
    marginTop:'5%',
    borderRadius:20,
    backgroundColor:'#0d162e',
    elevation:15
  },
  
  TileImg: {
    height:'90%',
    width:'100%',
    resizeMode:'cover',
    borderRadius:20,
    
  },
  TileHead: {
    color:'white',
    fontFamily:'Montserrat-Bold',
    fontSize:20,
    textAlign:'center',
    position:'relative',
    top:'-2%'
  },
  TileText: {
    color:'white',
    fontFamily:'Montserrat-Regular',
    textAlign:'center',
    top:'-1%'
  },
    inner:{
        height:50,
    },
    img:{
        height:80,
    },
    container:{
        height:100,
        borderRadius:20,
        borderColor:"#fff",
        borderWidth:1,
    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor:"lightgrey",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
})
export default dynamic
