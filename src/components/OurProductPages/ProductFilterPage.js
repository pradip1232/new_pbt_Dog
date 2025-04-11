import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const ProductFilterPage = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch categories and products from backend
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost/pbt/get_categories.php");
                const text = await response.text();
                // console.log("Raw Response category:", text);
                const data = JSON.parse(text);
                setCategories(data);
            } catch (err) {
                console.error("Error parsing categories:", err.message);
                setError("Failed to fetch or parse categories.");
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost/pbt/get_products.php");
                const text = await response.text();
                // console.log("Raw Response products:", text);

                const data = JSON.parse(text);
                // console.log("Parsed Products:", data.data);
                setTotalProducts(data.total_products || 0);
                setProducts(data.data || []);
            } catch (err) {
                console.error("Error parsing products:", err.message);
                setError("Failed to fetch or parse products.");
            }
        };

        const fetchData = async () => {
            await fetchCategories();
            await fetchProducts();
            setLoading(false);
        };

        fetchData();
    }, []);

    // Filter products by category and search term
    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "All" || product.category_id === selectedCategory;
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Loading state
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    // Error state
    if (error) {
        return <div className="text-danger text-center">Error: {error}</div>;
    }


    // useEffect(() => {
    //     console.log("Updated totalProducts:", totalProducts); // Check if it updates
    // }, [totalProducts]);



    return (
        <div className="container mt-4 product-filter-page">
            {/* Category Buttons */}
            <h3 className="text-center">Choose a Category Below</h3>
            <div className="category-buttons mb-4 text-center">
                {/* <button
                    className={`btn btn-primary mx-2 ${selectedCategory === "All" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("All")}
                >
                    All
                </button> */}
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`btn btn-outline-primaryyy category-button mx-2 ${selectedCategory === category.id ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Row 2: Search Bar */}
            <Row className="search-row-heading">
                <Col xs={12} md={6} lg={6} className="">
                    <h4>Home - Products</h4>
                </Col>
                <Col xs={12} md={6} lg={6} className="">
                    <div className="search-bar d-flex justify-content-end ">
                        <div className="position-relative w-50">
                            <input
                                type="text"
                                className="form-control pe-5" // Right padding for icon
                                placeholder="Search for Products"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <i
                                className="fas fa-search position-absolute top-50 translate-middle-y"
                                style={{ right: "10px", cursor: "pointer", color: "#888" }}
                            ></i>
                        </div>

                        {/* Display total products */}
                        <p className="ms-3 mb-0 fw-bold">{totalProducts} Products</p>
                    </div>
                </Col>
            </Row>
            <hr />


            {/* Product Cards */}
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="col-xs-10 col-lg-4 col-sm-6 col-md-4 mb-4 custom-product-card-colmn">
                            <div className="card product-card">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                // onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.category_name}</p>
                                    {/* <p className="card-text">{product.description}</p> */}
                                    <a href="/product-details" className="btn btn-primaryy know-more-button">Know More</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No products found</div>
                )}
            </div>
        </div>
    );
};

export default ProductFilterPage;
