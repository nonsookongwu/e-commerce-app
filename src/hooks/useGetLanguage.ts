import { useAppSelector } from '../redux/store';

const useGetLanguage = () => {
    return useAppSelector((state) => state.languageSlice.value);
    
}

export default useGetLanguage