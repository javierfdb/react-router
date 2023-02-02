import {Link} from 'react-router-dom'
import { Typography } from '@mui/material';

// DEPLOY --> https://react-router-jdb.netlify.app/
// REPSITORIO --> https://github.com/javierfdb/react-router

export default function NotFoundt() {
    return (
       <>
            <Typography  className="titulo-pagina" variant="h2" align='left' component="h1">Error</Typography>
            <Link className='btn btn-primary' to="/">Volver al Home</Link>
            <h4><a target="_blank" href="https://react-router-jdb.netlify.app/">VER DEPLOY</a></h4>
            <h4><a target="_blank" href="https://github.com/javierfdb/react-router">VER REPOSITORIO</a></h4>
            <div className="row">
                <div className="col-lg-12 my-3">
                    <figure>
                    <iframe src="https://giphy.com/embed/CwA8WKiwQGgOQ" width="100%" height="439" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </figure>
                </div>
            </div>
       </>
    )
}