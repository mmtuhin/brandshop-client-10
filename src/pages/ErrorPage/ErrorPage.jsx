
import Header from "../../components/Header/Header";


const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-4xl mt-12">Error 404</h1>
            <h1 className="text-center text-3xl my-8">Opps! Looks Like you lost in the site.</h1>
            <p className="text-center">click Home</p>
        </div>
    );
};

export default ErrorPage;