import React, { useState } from "react";
import { View } from "react-native"
import Logo from "../components/logo";
import Input from "../components/form/input";
import Container from "../components/container";

const Home = () => {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    return (
        <Container>
            
            <Input
                onChaneText={(text) => setUrl(text)}
                value={url}
                placeholder='Digite aqui'
            />

            <Input
                onChaneText={(text) => setName(text)}
                value={name}
                placeholder='Digite novo nome para URL'
            />
        </Container>
    );
}

export default Home;