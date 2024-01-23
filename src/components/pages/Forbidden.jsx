import useSetPageTitle from "../../utils/useSetPageTitle";

const Forbidden = () => {
    useSetPageTitle("Error 403 | Forbidden");
    
    return (
        <>
            <div className="text-center mt-25vh">
                <h3>Error 403 | Forbidden</h3>
                You are not authorised to access this page

                <div className="mt-3">
                    <a href="javascript:history.go(-1)">
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back
                    </a>
                </div>
                
            </div>
        </>
    );
}
 
export default Forbidden;