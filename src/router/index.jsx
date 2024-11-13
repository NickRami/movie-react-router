import { createBrowserRouter} from 'react-router-dom';
import { Home } from '../pages/Home';
import NotFound from '../pages/NotFound';
import Blog, { loaderBlog } from '../pages/Blogpeliculas';
import LayoutPublic from '../layout/LayoutPublic';
import { LoaderMovie } from '../components/MediaCard';
import '../index.css'
import Page, { LoaderPage } from '../pages/Page';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import SignUp from '../pages/SignUp';



export const router = createBrowserRouter( [

    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children : [

            {   
                index: '/',
                element : <Home/>,
                loader: LoaderMovie,
            
            },{   
                path: '/page/:page',
                element : <Page/>,
                loader: LoaderPage,
            },
          
            {
                 path: '/movie/:id',
                 element: <Blog/>,
                 loader: loaderBlog,
                    
                 
           },
          
           
        ]
    },
    {
             path: '/SignIn',
             element: <SignIn/>
    },
    {
        path: '/SignUp',
        element: <SignUp/>
    }
])
