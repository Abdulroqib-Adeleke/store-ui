
function PageFooter(prop){

    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} {prop.footerText}</p>
        </footer>
    )

}
export default PageFooter