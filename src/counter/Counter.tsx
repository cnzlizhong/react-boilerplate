import { useAppDispatch, useAppSelector } from '../app/store';
import { deposited, withdrawn, bankRupted } from './counter.slice';

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <span>
                count: <span>{count}</span>
            </span>
            <button
                type="button"
                onClick={() => {
                    dispatch(deposited(100));
                }}
            >
                Deposit
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(withdrawn());
                }}
            >
                Withdraw
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(bankRupted());
                }}
            >
                Bankrupt
            </button>
        </div>
    );
};

export default Counter;
