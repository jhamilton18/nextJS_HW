import Head from "next/head";
import styles from "../styles/Store.module.css"; // Import the styles
import SearchBar from "../pages/components/Searchbar"; // Import the SearchBar component
import React, { useState, useEffect } from "react";

export default function Store() {
    const [products, setProductState] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return {
                        title: product.title,
                        image: product.image,
                        price: product.price
                    };
                });
                setProductState(newProductsState);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <>
            <Head>
                <title>Fake Store</title>
            </Head>
            
            <div className={styles.fakestore}>
                <h1>Fake Store</h1>
                <p>Welcome to the Fake Store!</p>
                <p>Here you will find a variety of products from the fakestore API</p>
                <p>Search for a product in the box below:</p>
                
                {/* Pass products to SearchBar */}
                <SearchBar products={products} />
            </div>
        </>
    );
}
