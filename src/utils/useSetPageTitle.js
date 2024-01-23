const useSetPageTitle = (pageTitle) => {
    window.document.title = pageTitle || "";
}
 
export default useSetPageTitle;