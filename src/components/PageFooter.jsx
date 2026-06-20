
function PageFooter(prop){

    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} {prop.footer}</p>
        </footer>
    )

}
export default PageFooter