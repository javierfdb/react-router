import { Typography } from '@mui/material';

// DEPLOY --> https://react-router-jdb.netlify.app/
// REPSITORIO --> https://github.com/javierfdb/react-router

export default function Contacto() {
    return (
        <>
        <Typography className="titulo-pagina" variant="h2" align='left' component="h1">Contacto</Typography>
        <div className="row">
            <div className="col-lg-6">
            <h4 className='mt-5 mb-3'>Escríbenos y realiza tu pedido</h4>
            <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="correo@ejemplo.com"/>
            </div>
            <div className="mb-3 mt-4">
                <label for="exampleFormControlTextarea1" className="form-label">Mensajito</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-5 btn-submit">Enviar</button>
            </div>
            <h4><a target="_blank" href="https://react-router-jdb.netlify.app/">VER DEPLOY</a></h4>
            <h4><a target="_blank" href="https://github.com/javierfdb/react-router">VER REPOSITORIO</a></h4>
        </div>
        </>
    )
};
