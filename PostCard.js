import * as React from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Component from 'react-native-paper/lib/typescript/src/components/Typography/Text';

export default class PostCard extends Component(){
    render(){
        return(        
                <View style={styles.cardContainer}>
                     <TouchableOpacity 
                     onPress={()=>this.props.navigation.navigate("PostScreen", post=this.props.post)}></TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.authorcontainer}>
                        <View style={styles.authorImageContainer}>
                             <Image source={require("../assets/profile_img.png")}
                                 style={styles.profileImage}
                             ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionContainer}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFvalue(30)} color={"white"}/>
                            <Text style={styles.likeTest}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}