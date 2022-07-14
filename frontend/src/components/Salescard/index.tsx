import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './style.css';

function Salescard() {

    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="dsmeta-showcolumn-higher-576px">Data</th>
                            <th className="dsmeta-showcolumn-higher-992px">ID</th>
                            <th>Vendedor</th>
                            <th className="dsmeta-showcolumn-higher-992px">Visitas</th>
                            <th className="dsmeta-showcolumn-higher-992px">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="dsmeta-showcolumn-higher-576px">08/07/2022</td>
                            <td className="dsmeta-showcolumn-higher-992px">#341</td>
                            <td>Anakin</td>
                            <td className="dsmeta-showcolumn-higher-992px">15</td>
                            <td className="dsmeta-showcolumn-higher-992px">11</td>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-showcolumn-higher-576px">08/07/2022</td>
                            <td className="dsmeta-showcolumn-higher-992px">#254</td>
                            <td>Eliezer</td>
                            <td className="dsmeta-showcolumn-higher-992px">12</td>
                            <td className="dsmeta-showcolumn-higher-992px">9</td>
                            <td>R$ 63.800,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">

                                    <NotificationButton />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-showcolumn-higher-576px">08/07/2022</td>
                            <td className="dsmeta-showcolumn-higher-992px">#003</td>
                            <td>Jessica</td>
                            <td className="dsmeta-showcolumn-higher-992px">21</td>
                            <td className="dsmeta-showcolumn-higher-992px">18</td>
                            <td>R$ 49.890,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">

                                    <NotificationButton />

                                </div>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Salescard;