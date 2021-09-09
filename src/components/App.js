import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../asyncActions/customers';
import {
    addCustomerAction,
    removeCustomerAction,
} from '../store/customerReducer';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    const addCash = (cash) => {
        /* dispatch передает action в reducer */
        dispatch({ type: 'ADD_CASH', payload: cash });
    };

    const getCash = (cash) => {
        /* dispatch передает action в reducer */
        dispatch({ type: 'GET_CASH', payload: cash });
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div>
            <div style={{ fontSize: '2rem', marginTop: 20, marginBottom: 20 }}>
                Баланс: {cash}
            </div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => addCash(Number(prompt()))}>
                    Пополнить счет
                </button>
                <button onClick={() => getCash(Number(prompt()))}>
                    Снять со счета
                </button>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <button onClick={() => dispatch(fetchCustomers())}>
                    Получит клиентов из базы
                </button>
            </div>
            {/* {customers.lenght > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <div onClick={() => removeCustomer(customer)}>
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div>Клиенты отсутствуют</div>
            )} */}

            {customers.map((customer) => (
                <div onClick={() => removeCustomer(customer)}>
                    {customer.name}
                </div>
            ))}
        </div>
    );
}

export default App;
