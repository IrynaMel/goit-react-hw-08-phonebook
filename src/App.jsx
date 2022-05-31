import { Routes, Route} from 'react-router-dom';
import { RegisterView } from 'views/registerfView';
import { LogInView } from 'views/logInView';
import { ContactsView } from 'views/contactsView';
import Container from 'App.style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/Routes/PrivateRoute'
import PublicRoute from 'components/Routes/PublicRoute';
import AppBar from 'components/AppBar/AppBar';
import { HomeView } from 'views/homeView';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
       <Routes>
         <Route path='/' element = {<AppBar/>}>
           <Route index element = {<HomeView/>}/>
            <Route path='register' element ={ <PublicRoute>{<RegisterView/>}</PublicRoute>}/>
           <Route path='login' element ={<PublicRoute>{<LogInView/>}</PublicRoute>}/>
              <Route path ='contacts' element={<PrivateRoute>{<ContactsView/>}</PrivateRoute>}/>
         </Route>
         <Route path="*" element={<p>not found</p>} /> 
       </Routes>
    </Container>
  );
};
