import React, { useState } from "react";
import styles from "../../styles/Store.module.css"; // Adjusted path

const SearchBar = ({ products }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClearClick = () => {
        setSearchValue("");
    };

    const shouldDisplayButton = searchValue.length > 0;

    // Filter products based on the search value
    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <div>
            <input
                className={styles["search-input"]} // Apply the local class here
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search for a product..."
            />
            {shouldDisplayButton && (
                <button onClick={handleClearClick}>Clear</button>
            )}
            
            <div className={styles["product-grid"]}> {/* Apply the grid layout class */}
                {filteredProducts.map((product, index) => (
                    <div key={index} className={styles["product-card"]}> {/* Apply the card class */}
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
