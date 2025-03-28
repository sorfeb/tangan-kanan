import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Business Assistant App</h1>
                <p>Your holistic guide to setting up and managing your business.</p>
                <section>
                    <h2>Get Started</h2>
                    <p>Explore our resources on administration, legal, finance, marketing, accounting, and supply chain management.</p>
                </section>
            </main>
        </div>
    );
};

export default Home;