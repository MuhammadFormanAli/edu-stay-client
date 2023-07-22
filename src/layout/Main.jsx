import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            main layout
            <Outlet></Outlet>
        </>
    );
};

export default Main;