import styled from "styled-components";
import useUserHook from "../features/authentication/useUserHook";
import Spinner from '../ui/Spinner';






const FullPage = styled.div`
    height:100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items:center;
    justify-content: center;
`
function ProtectedRoute({children}) {


    //! load the authenticated user 

const {user,isLoading} = useUserHook();


    //2 while loading ,show spinner
        if(isLoading){
            return (
                <FullPage>
                    <Spinner/>
                </FullPage>
            )
        }

    //3 if there is no authentication user,redirect to the login 

    //4 if there is a user , render the app 


    return children
}

export default ProtectedRoute;