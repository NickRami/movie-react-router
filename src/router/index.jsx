import { createBrowserRouter} from 'react-router-dom';
import { Home } from '../pages/Home';
import NotFound from '../pages/NotFound';
import Blog, { loaderBlog } from '../pages/Blogpeliculas';
import LayoutPublic from '../layout/LayoutPublic';
import { LoaderMovie } from '../components/MediaCard';
import '../index.css'
import MovieTrailer from '../components/MovieTrailer';
export const router = createBrowserRouter( [

    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children : [

            {   
                path: '/',
                element : <Home/>,
                loader: LoaderMovie,
            
            },
            {
                 path: '/movie/:id',
                 element: <Blog/>,
                 loader: loaderBlog,
                 
                    
                 
            },
            
            
            ]
    },
])