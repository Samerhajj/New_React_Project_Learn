export default function History({m})
{
    return (
        <div><p className="text-primary">Number of orders:{m.counter}
            </p>  <p className="text-white-bg-dark"> Client Name:{m.clientName}</p>
            <p className="text-blue-bsg-red"> Type of Coffee : {m.selectC}</p>
            </div>
    );
}