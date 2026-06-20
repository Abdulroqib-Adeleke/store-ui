
function PageHeader(prop){
    return(
        <header>
            {prop.storeName}
            <p>{prop.tagline}</p>
        </header>
    )
}
export default PageHeader