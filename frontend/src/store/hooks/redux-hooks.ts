import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AppDispatchType, RootStateType } from '../store';

const useTypedDispatch = () => useDispatch<AppDispatchType>();
const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export { useTypedDispatch, useTypedSelector };
