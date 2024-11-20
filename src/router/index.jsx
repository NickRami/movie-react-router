import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Home } from '../pages/Home';
import NotFound from '../pages/NotFound';
import LayoutPublic from '../layout/LayoutPublic';
import '../index.css'
// import Page, { LoaderPage } from '../pages/Page';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import PageSeries, { loaderSeriesPage } from '../pages/PageSeries
import SerieDetail, {loaderSerie as seriesLoader} from '../components/SerieDetails';
import Movie, {loaderSeriesPage as movieLoader} from '../components/MovieDetails';
import MovieDetails from '../components/MovieDetails';



export const router = createBrowserRouter( [

    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children : [

            {   
                index: '/',
                element : <Home/>,
            
            },
            {
                 path: '/movies/:id',
                 element: <MovieDetails/>,
                 loader: movieLoader
            },
            {
                path: 'series/:id',
                element: <SerieDetail/>,
                loader: seriesLoader
            },
            // {   
            //     path: '/page/:page',
            //     element : <Page/>,
            //     loader: LoaderPage,
            // },
          
           
           
          
           
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


const App = () => { 
    return (
        <RouterProvider router={router} />
    )
}

export default App;