import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        dispatch({ type: 'ADD_CUSTOMER', payload: customer });
    };

    const removeCustomer = (customer) => {
        dispatch({ type: 'REMOVE_CUSTOMERS', payload: customer.id });
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
                <button onClick={() => getCash(Number(prompt()))}>
                    Удалить клиента
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
