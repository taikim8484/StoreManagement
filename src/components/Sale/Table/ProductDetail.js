import React, {Component} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";

var {height, width} = Dimensions.get("window");

export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SL: this.props.SL
        };
    }
    IncreaeSL = () => {
        var newSL = this.state.SL;
        newSL = newSL + 1;
        this.setState({SL: newSL});
    }
    render() {

        return (
            <TouchableOpacity onPress={this.IncreaeSL}>
                <View
                    style={{
                    flexDirection: "row",
                    flex: 1
                }}>
                    <Image source={this.props.imglink} />
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.price}    </Text>
                    <Text>{this.state.SL}</Text>
                </View>
            </TouchableOpacity>

        );
    }

}

export default ProductDetails;
