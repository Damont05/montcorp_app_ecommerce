
const handleHttp = (res, error, status) => {
    res.status(status).json({ok:false, error})
}

export {handleHttp}