import React, { Component } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./images.json";



class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends
    };

    removeImage = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const friends = this.state.friends.filter(friend => friend.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ friends });
    };

    // Map over this.state.friends and render a ImageCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Title>Residents Of Woodcrest</Title>
                {this.state.friends.map(image => (
                    <ImageCard
                        removeFriend={this.removeImage}
                        id={image.id}
                        key={image.id}
                        image={image.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
