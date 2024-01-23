import useSetPageTitle from "../../utils/useSetPageTitle";

const NotFound = () => {
    useSetPageTitle("Error 404 | Page Not Found");
    
    return (
        <>
            <div className="text-center mt-25vh">
                <h3>Error 404 | Page Not Found</h3>
                The page you have requested could not be found
            </div>
        </>
    );
}
 
export default NotFound;