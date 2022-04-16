import { useAppDispatch, useAppSelector } from '../../store/store';
import { deposited, withdrawn, bankRupted } from './counter.slice';

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="flex items-center">
                count: <div className="text-2xl ml-2">{count}</div>
            </div>
            <button
                type="button"
                className="btnPrimary mt-3"
                onClick={() => {
                    dispatch(deposited(100));
                }}
            >
                Deposit
            </button>
            <button
                type="button"
                className="btnPrimary mt-3"
                onClick={() => {
                    dispatch(withdrawn());
                }}
            >
                Withdraw
            </button>
            <button
                type="button"
                className="btnPrimary mt-3"
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
