import PageHeader from "./components/PageHeader"
import ProductCard from "./components/ProductCard"
import PageFooter from "./components/PageFooter"

function App() {
    
    return(
        <>
        <PageHeader storeName="ShopReact" tagline= "Your one-stop online store"/>

        <ProductCard name="HP Probook 850" price={450000} category="Electronics"/>
        <ProductCard name="Samsung S26 ultra" price={1450000} category="Electronics"/>
        <ProductCard name="Nivea" price={45000} category="Skincare"/>
        <ProductCard name="Fendi shorts" price={70000} category="Wears"/>

        <PageFooter footer="Made with React"/>        
        
        </>
    )
}

export default App
